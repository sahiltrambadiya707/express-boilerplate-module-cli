#!/usr/bin/env node

import inquirer from "inquirer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import createModule from "./createModule.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const QUESTIONS = [
  {
    name: "module-name",
    type: "input",
    message: "Module name:",
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else return "Module name may only include letters, numbers, underscores and hashes.";
    },
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  const moduleName = answers["module-name"];
  const modulePath = `${__dirname}/modules`;

  createModule(modulePath, moduleName);
});
