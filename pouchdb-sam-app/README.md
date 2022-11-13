# pouchdb-sam-app

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

- `src` - Code for the application's Lambda function.
- `template.yaml` - A template that defines the application's AWS resources.

# how to test locally (without AWS account)

- Download and install Docker
- Download and install AWS SAM CLI (ignore the part of the instructions which says to create AWS Account)
- Set dummy environment values for `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`
- Run `sam build`
- Run `sam local start-api -p 3001`

## Test Cases
- Create database: `curl -X PUT http://localhost:3001/db`
- Store data: `curl -X PUT http://localhost:3001/db/test -d "this is a test message body"`
- Retrieve data: `curl -X GET http://localhost:3001/db/test`

## Expected Output
- The result of executing the express route for each of the above should come back
