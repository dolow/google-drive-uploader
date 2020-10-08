#!/usr/bin/env node

const process = require('process');
const fs = require('fs');

const { authorize } = require('../src/google_auth');
const { createFile } = require('../src/create_file');
const { Config } = require('../src/config');

function initConfig() {
  const content = fs.readFileSync(process.env['CREDENTIAL'] || '');
  const credential = JSON.parse(content);

  return new Config(
    credential,
    process.env['TARGET_FILE'] || '',
    {
      driveFolderId: process.env['DRIVE_FOLDER_ID'] || '',
      mimeType:      process.env['MIME_TYPE'] || '',
      metaName:      process.env['META_NAME'] || '',
    }
  );
}

function main() {
  const config = initConfig();

  if (!config.validate()) {
    console.log('required params are missing. (CREDENTIAL, TARGET_FILE)');
    return;
  }

  authorize(config.credential, auth => createFile(auth, config));
}

main();
