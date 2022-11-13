# pouchdb-aws-serverless

An AWS Serverless deployment of pouchdb-server, using AWS Lambda for compute and Amazon Elastic Filesystem (EFS) as the backing store.

# wait, what?

Think of it as an open-source alternative to IBM's Cloudant that you can deploy to your very own AWS Cloud account and free from Cloudant's minimum monthly charges ($75) or stingy free tier (1 GB).

Deploying on AWS only costs EFS charges ($0.30 per GB per month) and Lambda usage-based billing with $0 monthly fee ($0.0000166667 for every GB-second of function execution, plus $0.20 per million requests).

Pricing info as of Nov/2022.

# status

Currently this is in Proof Of Concept stage. It "almost works."
