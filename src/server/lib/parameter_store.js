const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });
const ssm = new AWS.SSM();

const createParamPair = (param) => ({ [param.Name]: param.Value });

const getParameter = (param) =>
    ssm
        .getParameter(param)
        .promise()
        .then((data) => data.Parameter.Value);

const getParameters = (params) =>
    ssm
        .getParameters(params)
        .promise()
        .then((data) => data.Parameters.map(createParamPair))
        .then((pairs) => Object.assign({}, ...pairs));

module.exports.getParameter = getParameter;
module.exports.getParameters = getParameters;
