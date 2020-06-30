const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const urlLocation = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './index.html')}`;
  mainWindow.loadURL(urlLocation);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
