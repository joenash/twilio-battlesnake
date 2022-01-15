exports.handler = function (context, event, callback) {
  console.log("event", event);
  const response = new Twilio.Response();
  // Set the status code to 204 Not Content
  response.setStatusCode(200);
  callback(null, response);
};
