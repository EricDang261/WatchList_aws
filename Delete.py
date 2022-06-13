import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
table = dynamodb.Table('movieList')


# delete one movie
def deleteMovie(title, year):
    try:
        response = table.delete_item(
            Key={
                'title': title,
                'year': year
            },
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response

