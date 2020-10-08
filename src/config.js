const path = require('path');
const mime = require('mime-types');

const ROOT_FOLDER_ID_ALIAS = 'root';

class Config {
  constructor(credential, file, option = {
    folderId: ROOT_FOLDER_ID_ALIAS,
    mimeType: '',
    metaName: '',
  }) {
    this.credential    = credential;
    this.targetFile    = file;
    this.driveFolderId = option.driveFolderId;
    this.mimeType      = option.mimeType;
    this.metaName      = option.metaName;

    if (!this.metaName) {
      this.metaName = path.basename(this.targetFile);
    }
    if (!this.mimeType) {
      this.mimeType = mime.lookup(this.targetFile);
      if (!this.mimeType) {
        this.mimeType = Config.defaultMimeType;
      }
    }
  }

  validate() {
    return (this.credential && this.targetFile);
  }
}

Config.defaultMimeType = 'text/plain';

module.exports = {
 Config,
};
