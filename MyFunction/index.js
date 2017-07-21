const zlib = require('zlib');
const https = require('https');
const util = require('util');

function processEvent(context, event) {
    context.log("Event: ", JSON.stringify(event, null, 2));
    context.res = {
        res: 200,
	body: "hello world"
    };
}

module.exports = function (context, req) {
    processEvent(context, req.body);
};
