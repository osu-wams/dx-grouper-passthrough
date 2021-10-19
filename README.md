# DX Grouper Passthrough
OSU's grouper API only allows access from on campus or VPN connections. To get around this some of our elastic IPs in AWS have been whitelisted so our servers can access the grouper API. The purpose of these lambda functions is to allow the dx-server to call the grouper API by passing data through these functions.

## Deployment
Configure AWS to allow serverless to deploy. Instructions can be found in [serverless documentation.](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

Deployment is using Serverless framework and provided .env.* files. Grab the files from Keeper and make sure they have the leading dot (.). \
.env.dev example:
```
ENV=development
GROUPER_HOST=
GROUPER_USERNAME=
GROUPER_PASSWORD=
SECURITY_GROUP_ID=sg-#####
SUBNET_ID_A=subnet-#####
SUBNET_ID_B=subnet-#####
SUBNET_ID_C=subnet-#####
```

You can then use commands to deploy to AWS
```
yarn install

// dev
yarn deploy

// production
yarn deploy:production
```
