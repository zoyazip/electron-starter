import { app, BrowserWindow} from 'electron'
import * as path from 'path'
import {isDev} from './utils.js'

const test: string = 'test'
console.log(test)

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'))
    mainWindow.webContents.openDevTools()
  }
})