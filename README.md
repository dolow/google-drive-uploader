# What is this ?

File uploader for Google Drive using node.js.

It receives parameters as environment variable.

# Usage

## Run

```
$ CREDENTIAL=credentials.json TARGET_FILE=./my_uploading_file.txt DRIVE_FOLDER_ID=xxxxxxxxxx npm run upload
```

## Authentication

If this is the first time, you may be asked to visit the link to authenticate Google Drive access scope like below;

```
Authorize this app by visiting this url: https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&response_type=code&client_id=xxxxxxxx.apps.googleusercontent.com&redirect_uri=xxxxxxxx
Enter the code from that page here: 
```

Follow the instruction and enter the code that is shown in authentication procedure.

## Change Account

When you use this module in the same directory with multiple account, you need to remove stored access token.

Token is stored as token.json.

```
$ rm ./token.json
```

Then proceed authentication step again.

# Parameters

| name | descriotion |
| --- | --- |
| CREDENTIAL | Credential info stored as file. To get credential info, please visit [google's instruction](https://developers.google.com/drive/api/v3/quickstart/nodejs) |
| TARGET_FILE | File to upload |
| DRIVE_FOLDER_ID | (optional) Id of destination folder. Default root. |
| MIME_TYPE | (optional) User defined mime type. Default is defined by file extension. |
| META_NAME | (optional) Uploaded file name. Default is original name. |

# License

MIT
