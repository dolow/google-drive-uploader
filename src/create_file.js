const fs = require('fs');
const { google } = require('googleapis');

// https://developers.google.com/drive/api/v3/manage-uploads
function createFile(auth, config) {
  const drive = google.drive({ version: 'v3', auth });

  drive.files.create({
    resource: {
      name: config.metaName,
      parents: [config.driveFolderId]
    },
    media: {
      mimeType: config.mimeType,
      body: fs.createReadStream(config.targetFile)
    },
    fields: 'id'
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('ID: ' + result.data.id);
    }
  });

}

module.exports = {
  createFile
};
