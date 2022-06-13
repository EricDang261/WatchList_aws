import decimal

import boto3
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
# create a table object
table = dynamodb.Table('movieList')


def addMovie(title, year, plot, showtype, vote, director):
    try:
        response = table.put_item(
            Item={
                'title': title,
                'year': year,
                'director': director,
                'plot': plot,
                'type' : showtype,
                'up_votes': vote
            },
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response
