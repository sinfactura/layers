
import { Stack, StackProps } from 'aws-cdk-lib';
import { Architecture, Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class SfLayersStack extends Stack {

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.createLambdaLayer('uuid');
    this.createLambdaLayer('crypto');
    this.createLambdaLayer('jsonwebtoken');
    this.createLambdaLayer('axios');

  }

  private createLambdaLayer(name: string) {
    new LayerVersion(this, name, {
      layerVersionName: name,
      code: Code.fromAsset(`layers/${name}`),
      compatibleArchitectures: [ Architecture.ARM_64 ],
      compatibleRuntimes: [ Runtime.NODEJS_16_X ]
    });
  }

}
