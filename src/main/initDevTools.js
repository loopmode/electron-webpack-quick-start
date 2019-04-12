import { BrowserWindow } from 'electron'
import * as path from 'path'

// custom extensions to install
// use BrowserWindow.getDevToolsExtensions() to get name

const extensions = [
  {
    name: 'Immutable.js Object Formatter',
    dir: path.join(__static, 'extensions/immutablejs-object-formatter/1.9.2_0')
  }
]

export default function initDevTools(window) {
  const installedExtensions = Object.keys(BrowserWindow.getDevToolsExtensions())
  // console.debug('[main/initDevTools] installedExtensions', installedExtensions)
  extensions.forEach(({ name, dir }) => {
    if (!installedExtensions.includes(name)) {
      console.debug('[main/initDevTools] addDevToolsExtension', { name, dir })
      BrowserWindow.addDevToolsExtension(dir)
    }
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => window.focus())
  })
  window.webContents.on('did-frame-finish-load', () => {
    window.webContents.openDevTools()
  })
}
