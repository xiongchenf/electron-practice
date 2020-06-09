const { app, BrowserWindow, ipcMain } = require("electron")

app.on('ready', () => {
  require("devtron").install();
  let main = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  })
  main.loadFile("./index.html");

  main.webContents.openDevTools();

  ipcMain.on("message", (event, msg) => {
    console.log(event);
    console.log(msg);
    event.reply("reply", "reveived your message");
  })
});