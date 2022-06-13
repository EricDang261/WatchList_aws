import boto3
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
table = dynamodb.Table('movieList')


def getMovie(title, year):
    try:
        response = table.get_item(
            Key={
                'title': title,
                'year': year

            },
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['Item']


def getAllMovie():
    try:
        response = table.scan()
        data = response['Items']
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStarKey=response['LastEvaluatedKey'])
            data.extend(response['Item'])
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['Items']

