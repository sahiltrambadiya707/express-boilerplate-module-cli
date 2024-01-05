const httpStatus = require("http-status");
const catchAsync = require("@utils/catchAsync");
const { NamedService } = require("@services/index");
const { createResponseObject } = require("@utils/utils");

const functionName = catchAsync(async (req, res) => {
  const NamedServiceDoc = await NamedService.functionName({
    user: req.user,
    params: req.params,
    query: req.query,
    body: req.body,
  });

  const data4responseObject = {
    req: req,
    code: httpStatus.OK,
    message: "",
    payload: {
      result: {
        status: httpStatus["200_NAME"],
      },
      data: NamedServiceDoc,
    },
  };

  res.status(httpStatus.OK).send(createResponseObject(data4responseObject));
});

module.exports = {
  functionName,
};
