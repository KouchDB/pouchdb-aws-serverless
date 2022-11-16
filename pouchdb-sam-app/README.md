# pouchdb-sam-app

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI). It includes the following files and folders:

- `src` - Code for the application's Lambda function.
- `template.yaml` - A template that defines the application's AWS resources.

# Local Testing (without AWS account)

- Download and install Docker
- Download and install AWS SAM CLI (ignore the part of the instructions which says to create AWS Account)
- Set dummy environment values for `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`
- Run `sam build`
- Run `sam local start-api -p 3001`
- There is a known issue with `sam local` only providing a read-only filesystem. See instructions here https://github.com/dacgray/sam-local-start-api-container-image-volume-mount or just move on to Deployment.

# Deployment

Step 1. Create AWS account.

Step 2. Download, install, and configure AWS SAM on the machine which is going to manage the deployment, e.g. your laptop.

Step 3. Execute `sam deploy --guided`

That's it.

# Verifying successful deployment

The following examples assume  `bash`.

The following examples assume you have set `BASEURL` to the base URL of your deployment (from Deployment step).

Create a new database named "db":
> - `curl -X PUT http://$BASEURL/db`


Store a document whose ID is "id1":
> - `curl -X PUT http://$BASEURL/db/id1 -d '{"hello":"world"}'` `-H "Content-Type: application/json"`

Retrieve the document stored in the above step:
> - `curl -X GET http://$BASEURL/db/id1`

# Additional Documentation

- The most relevant documentation is the CouchDB API docs: https://docs.couchdb.org/en/3.2.2-docs/api/index.html

- The PouchDB project does not have good documentation for `pouchdb-server`, so refer to CouchDB documentation instead.
