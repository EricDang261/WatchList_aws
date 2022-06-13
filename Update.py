import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
# create a table object
table = dynamodb.Table('movieList')


def updateMovie(title, year, vote):
    try:
        response = table.update_item(
            Key={
                'title': title,
                'year': year

            },
            UpdateExpression="SET up_votes= :up_votes",
            ExpressionAttributeValues={
                ':up_votes': vote,
            },
            ReturnValues="UPDATED_NEW"
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response
