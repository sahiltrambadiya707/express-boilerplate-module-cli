const express = require("express");
const validate = require("@middleware/validate");
const auth = require("@middleware/auth");
const systemModules = require("@config/systemModules");
const checkPermission = require("@middleware/checkPermission");
const NamedController = require("@controllers/ModuleName.controller");
const NamedValidation = require("@validations/ModuleName.validation");

const router = express.Router();

/** Get */
router.get(
  "/",
  auth(),
  checkPermission([{ module: systemModules.module, permission: "can_read" }]),
  NamedController.getResources
);

/** Post */
router.post(
  "/",
  auth(),
  checkPermission([{ module: systemModules.module, permission: "can_add" }]),
  validate(NamedValidation.createResources),
  NamedController.createResources
);

/** Put */
router.put(
  "/:id",
  auth(),
  checkPermission([{ module: systemModules.module, permission: "can_update" }]),
  validate(NamedValidation.updateResources),
  NamedController.updateResources
);

/** Patch */
router.patch(
  "/:id",
  auth(),
  checkPermission([{ module: systemModules.module, permission: "can_update" }]),
  validate(NamedValidation.updateResources),
  NamedController.updateResources
);

/** Delete */
router.delete(
  "/:id",
  auth(),
  checkPermission([{ module: systemModules.module, permission: "can_delete" }]),
  validate(NamedValidation.deleteResources),
  NamedController.deleteResources
);

module.exports = router;
