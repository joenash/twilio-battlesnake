exports.handler = function (context, event, callback) {
  console.log("event", event);
  const response = {
    apiversion: "1",
    author: "",
    color: "#ff0000",
    head: "default",
    tail: "default",
  };
  callback(null, response);
};
