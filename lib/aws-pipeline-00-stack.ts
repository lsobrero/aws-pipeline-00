import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway'

export class AwsPipeline00Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'hello', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    });

    new apigw.LambdaRestApi(this,'EndPoint',{
      handler: hello
    });
  }
}
