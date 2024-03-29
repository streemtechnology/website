/**
 * Helper for resolving environment specific configuration files.
 *
 * It resolves .env files that are supported by the `dotenv` library.
 *
 * Please read the application configuration docs for more info.
 */

import appRootDir from "app-root-dir";
import colors from "colors/safe";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import ifElse from "../../shared/utils/logic/ifElse";
import removeNil from "../../shared/utils/arrays/removeNil";

// PRIVATES

function registerEnvFile() {
  const DEPLOYMENT = process.env.DEPLOYMENT;
  const envFile = ".env";

  const envFileResolutionOrder = removeNil([
    path.resolve(appRootDir.get(), envFile),
    ifElse(DEPLOYMENT)(
      path.resolve(appRootDir.get(), `${envFile}.${DEPLOYMENT}`)
    )
  ]);

  const envFilePath = envFileResolutionOrder.find(filePath =>
    fs.existsSync(filePath)
  );

  // If we found an env file match the register it.
  if (envFilePath) {
    // eslint-disable-next-line no-console
    console.log(
      colors.bgBlue.white(
        `==> Registering environment variables from: ${envFilePath}`
      )
    );
    dotenv.config({ path: envFilePath });
  }
}

// Ensure that we first register any environment variables from an existing
// env file.
registerEnvFile();

// EXPORTED HELPERS

/**
 * Gets a string environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {String} defaultVal - The default value to use.
 *
 * @return {String} The value.
 */
export function string(name, defaultVal) {
  return process.env[name] || defaultVal;
}

/**
 * Gets a number environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {number} defaultVal - The default value to use.
 *
 * @return {number} The value.
 */
export function number(name, defaultVal) {
  return process.env[name] ? parseInt(process.env[name], 10) : defaultVal;
}

export function bool(name, defaultVal) {
  return process.env[name]
    ? process.env[name] === "true" || process.env[name] === "1"
    : defaultVal;
}
