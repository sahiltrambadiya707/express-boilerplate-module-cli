import * as fs from "fs";
const CURR_DIR = process.cwd();

const projectPath = {
  "controller.js": "/src/controllers",
  "route.js": "/src/routes/v1",
  "service.js": "/src/services",
  "validation.js": "/src/validations",
};

const oldControllerName = "NamedController";
const oldNamedValidation = "NamedValidation";
const oldNamedService = "NamedService";
const oldModuleName = "ModuleName";

const createModule = (templatePath, moduleName) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;
    let contents = fs.readFileSync(origFilePath, "utf8");

    const newControllerName = `${moduleName}Controller`;
    const newNamedValidation = `${moduleName}Validation`;
    const newNamedService = `${moduleName}Service`;

    contents = contents.replace(new RegExp(oldControllerName, "g"), newControllerName);
    contents = contents.replace(new RegExp(oldNamedValidation, "g"), newNamedValidation);
    contents = contents.replace(new RegExp(oldNamedService, "g"), newNamedService);
    contents = contents.replace(new RegExp(oldModuleName, "g"), moduleName);

    const writePath = `${CURR_DIR}${projectPath[file]}/${moduleName}.${file}`;
    fs.writeFileSync(writePath, contents, "utf8");
  });

  const appendData = `module.exports.${moduleName}Service = require("./${moduleName}.service");`;
  fs.appendFileSync(`${CURR_DIR}/src/services/index.js`, appendData);
};

export default createModule;
