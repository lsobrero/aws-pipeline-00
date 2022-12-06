#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsPipeline00Stack } from '../lib/aws-pipeline-00-stack';

const app = new cdk.App();
new AwsPipeline00Stack(app, 'AwsPipeline00Stack');
