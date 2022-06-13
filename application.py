"""
This is the api server. It will call the add, query, or delete methods
"""

import boto3
from flask import Flask, render_template, request, redirect, jsonify
import Add
import Delete
import DeleteAllItems
import Query
import requests
import json
from flask_cors import CORS

import Update

name = ''
dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
table = dynamodb.Table('movieList')

application = Flask(__name__)
CORS(application)


# default page for health check
@application.route('/')
def healthCheckResponse():
    return jsonify({"message": "Nothing here, used for health check. Please insert /index in the url"})


@application.route('/index')
def defaultPage():
    return "Hello World"


@application.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    Add.addMovie(data['title'], data['year'], data['plot'], data['type'], data['up_votes'], data['director'])
    return 'Add Succeed', 200


@application.route('/delete', methods=['DELETE'])
def delete():
    data = request.get_json()
    Delete.deleteMovie(data['title'], data['year'])
    return 'Database is cleared', 200


@application.route('/deleteAllItems', methods=['DELETE'])
def deleteAll():
    DeleteAllItems.deleteAllItems()
    return 'database is cleared', 200


@application.route('/query/movies', methods=['GET'])
def queries():
    title = request.args.get("title")
    year = request.args.get("year")

    if title is None and year is None:
        queryData = Query.getAllMovie()
    else:
        queryData = Query.getMovie(title, year)

    return jsonify(queryData), 200


@application.route("/update", methods=['PUT'])
def update():
    data = request.get_json()
    updateData = Update.updateMovie(data['title'], data['year'], data['up_votes'])
    return "update succeed", 200


@application.route('/api/anime/animeSearch', methods=['GET'])
# /api/anime/animeSearch?title=
def anime():
    # string = "cowboy bebop"
    data = []
    animeTitle = request.args.get("title")
    response = requests.get("https://kitsu.io/api/edge/anime?filter[text]=" + animeTitle)
    item = response.json()
    f = open('aniwatchlist.txt', 'w')
    i = 0
    filed = ''
    try:
        for anime in item:
            test = item['data'][i]
            animeapi = {'Name': test['attributes']['slug'], 'StartDate': test['attributes']['startDate'],
                        'Status': test['attributes']['status'], 'Plot': test['attributes']['synopsis'],
                        'Type': test['type']}
            filed = filed + (str(animeapi)) + '\n'
            data.append(animeapi)
            i = i + 1
    except IndexError:
        filed = ''
    f.write(filed)
    f.close()
    return jsonify(data)


@application.route('/api/movies/movieSearch', methods=['GET'])
# /api/movies/movieSearch?title=
def movie():
    # dictionary to hold movies in
    data = []
    movieTitle = request.args.get("title")
    response = requests.get("http://www.omdbapi.com/?apikey=55eb42c1&s={}".format(movieTitle))
    response_dict = json.loads(response.text)
    if response_dict["Response"] == "False":
        return jsonify([])
    for item in response_dict["Search"]:
        additionalInfo = requests.get("http://www.omdbapi.com/?apikey=55eb42c1&i={}".format(item["imdbID"]))
        additional_dict = json.loads(additionalInfo.text)
        values = {"Name": item["Title"], "Year": item["Year"], "Plot": additional_dict["Plot"],
                  "Director": additional_dict["Director"],
                  "Actors": additional_dict["Actors"], "imdbRating": additional_dict["imdbRating"], "Type:": "Movie"}
        data.append(values)
    # json object is returned
    return jsonify(data)


if __name__ == '__main__':
    application.run(debug=True)
