# pouchdb-aws-serverless

An AWS Serverless deployment of pouchdb-server, using AWS Lambda for compute and Amazon Elastic Filesystem (EFS) as the backing store.

# wait, what?

Think of it as an open-source alternative to IBM's Cloudant that you can deploy to your very own AWS Cloud account. AWS pricing can be significantly cheaper than Cloudant: for instance, a low-usage 2GB database costs $0.60 per month on AWS, compared to $75 per month on Cloudant.

# does it work?

Yes! See the README in the project subfolder for more info.

# I'm still confused

- PouchDB is a highly compatible rewrite of CouchDB, focused on Javascript APIs.

- `pouchdb-server` is PouchDB wrapped with HTTP REST APIs which make it look more like CouchDB.

- `pouchdb-aws-serverless` is `pouchdb-server` packaged and configured to run on the AWS Cloud
