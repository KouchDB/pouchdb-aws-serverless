# pouchdb-aws-serverless

An AWS Serverless deployment of pouchdb-server, using AWS Lambda for compute and Amazon Elastic Filesystem (EFS) as the backing store.

# wait, what?

Think of it as an open-source alternative to IBM's Cloudant that you can deploy to your very own AWS Cloud account. AWS pricing can be significantly cheaper than Cloudant: for instance, a low-usage 2GB database costs $0.60 per month on AWS, compared to $75 per month on Cloudant.

# does it work?

- `PUT` to create a database works fine
- `PUT` to store a json document works fine but client has to send explicit `-H "Content-Type: application/json"`
- `GET` to retrieve a stored document works fine

Other functionality like `/_changes` and `/_utils` is not working right now.

Incremental map-reduce hasn't been tested yet.

Security features have not been tested yet.

Replication has not been tested yet.