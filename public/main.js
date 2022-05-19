const { app, BrowserWindow } = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")

require("@electron/remote/main").initialize()
require('electron-reload')

const createWindow = () => {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      enableRemoteModule: true
    }
  })
  win.maximize()
  win.show()

  win.loadURL(
    isDev ?
      'http://localhost:3000' :
      `file://${path.join(__dirname, '../build/index.html')}`
  )
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})