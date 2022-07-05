#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { SfLayersStack } from '../lib/sf-layers-stack';

const app = new App();

const account = '699414768557';
const region = 'us-east-1';

new SfLayersStack(app, 'SfLayersStack', {
	stackName: 'sf-layers-stack',
	description: 'lambda layers',
	env: {
		account,
		region
	},
	terminationProtection: true
});