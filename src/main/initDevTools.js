import { BrowserWindow } from 'electron'
import * as path from 'path'

const extensions = [
  path.join(__static, 'extensions/immutablejs-object-formatter/1.9.2_0')
]

export default function initDevTools(window) {
  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })
  window.webContents.on('did-frame-finish-load', () => {
    extensions.forEach(extensionPath => {
      BrowserWindow.addDevToolsExtension(extensionPath)
    })
    window.webContents.openDevTools()
  })
}
