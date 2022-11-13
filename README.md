# pouchdb-aws-serverless

An AWS Serverless deployment of pouchdb-server, using AWS Lambda for compute and Amazon Elastic Filesystem (EFS) as the backing store.

# wait, what?

Think of it as an open-source alternative to IBM's Cloudant that you can deploy to your very own AWS Cloud account. AWS pricing can be significantly cheaper than Cloudant: at the low-end extreme, a 2GB database with a low amount of traffic costs only $0.60 per month to run on AWS, compared to $75 per month on Cloudant.

# does it work?

Yes! See the README in the project subfolder for more info.

# still confused?

- PouchDB is a highly compatible rewrite of CouchDB, focused on Javascript APIs.

- `pouchdb-server` is PouchDB wrapped with HTTP REST APIs which make it look more like CouchDB.

- `pouchdb-aws-serverless` is `pouchdb-server` packaged and configured to run on the AWS Cloud
