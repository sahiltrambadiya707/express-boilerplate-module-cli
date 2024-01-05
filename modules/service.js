const httpStatus = require("http-status");
const ApiError = require("@utils/ApiError");

const service = async ({ user, body, query, params }) => {
  try {
    
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "");
  }
};

module.exports = {
  service,
};
