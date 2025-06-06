const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('read-users', async () => {
  const data = fs.readFileSync('user.json', 'utf-8');
  return JSON.parse(data);
});

ipcMain.handle('save-users', async (event, data) => {
  fs.writeFileSync('user.json', JSON.stringify(data, null, 2));
  return true;
});