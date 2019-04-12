import { BrowserWindow } from 'electron'
import * as path from 'path'

const customExtensions = [
  {
    name: 'Immutable.js Object Formatter',
    dir: path.join(__static, 'extensions/immutablejs-object-formatter/1.9.2_0')
  },
  {
    name: 'React Developer Tools',
    dir: path.join(__static, 'extensions/react-developer-tools/3.6.0_0')
  }
]

export default function initDevTools(window, withExtensions) {
  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => window.focus())
  })
  window.webContents.on('did-frame-finish-load', () => {
    window.webContents.openDevTools()
  })
  if (withExtensions) {
    installExtensions()
  }
}

export function installExtensions(extensions = customExtensions) {
  const installedExtensions = Object.keys(BrowserWindow.getDevToolsExtensions())
  extensions.forEach(({ name, dir }) => {
    if (!installedExtensions.includes(name)) {
      BrowserWindow.addDevToolsExtension(dir)
    }
  })
}

export function uninstallExtensions() {
  const installedExtensions = Object.keys(BrowserWindow.getDevToolsExtensions())
  // console.debug('[main/initDevTools] uninstallExtensions', { installedExtensions })
  installedExtensions.forEach(name =>
    BrowserWindow.removeDevToolsExtension(name)
  )
}
