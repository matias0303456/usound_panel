const { app, BrowserWindow } = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")

require("@electron/remote/main").initialize()

if (isDev) {
  require('electron-reload')
}

const createWindow = () => {
  const win = new BrowserWindow({
    show: false,
    title: 'uSound Panel',
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      devTools: isDev ? true : false
    }
  })
  if (!isDev) {
    win.removeMenu()
  }
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