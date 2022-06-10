let codeStatus = {
  200: "Done",
  201: "Created",
  400: "Invalid format",
  404: "Not Found",
  500: "Internal error",
};

exports.success = (req, res, message, status) => {
  let statusCode = status;
  let statusMessage = message;
  if (!status) {
    statusCode = 200;
  }
  if (!message) {
    statusMessage = codeStatus[status];
  }
  res.status(statusCode).send({ error: "", body: statusMessage });
};

exports.error = (req, res, message, status, details) => {
  let statusCode = status;
  let statusMessage = message;
  if (!status) {
    statusCode = 500;
  }
  if (!message) {
    statusMessage = codeStatus[status];
  }
  res.status(statusCode).send({ error: statusMessage, body: "" });
};
