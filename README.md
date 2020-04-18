# sqlite-browser
sqlite-browser is a cross platform application that can be used to practice SQL commands in a browser

## Installation
Node.js and npm must be installed for this application.
```
git clone https://github.com/Srinivasa314/sqlite-browser
npm install cors express multer sqlite3
```

## Using this application
Recommended browsers : Google Chrome,Firefox
On Windows use `sqlite-browser.bat` and on linux use `sqlite-browser.sh`.
On other platforms, open `sqlite-client.html` and run `sqlite-server.js` using node.

Type the SQL command in the textarea and click Run.To run multiple commands select the commands you want to run using your cursor and click run.If the command selects more than one row or there is an error it will be shown below.
