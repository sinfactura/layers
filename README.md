# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

## Layer Installation

- yarn install in each /layers

## How to use ?

```

const arnUuid = 'arn:aws:lambda:aws-region:aws-account:layer:uuid:1'
const arnCrypto = 'arn:aws:lambda:aws-region:aws-account:layer:crypto:1'

LambdaFunction.addLayers(
	LayerVersion.fromLayerVersionArn(construct, 'myId', arnUuid),
	LayerVersion.fromLayerVersionArn(construct, 'myId', arnCrypto),
);

```
