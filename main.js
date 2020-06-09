const { app, BrowserWindow } = require("electron")

app.on('ready', () => {
  let main = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })
  main.loadFile("./index.html");
});