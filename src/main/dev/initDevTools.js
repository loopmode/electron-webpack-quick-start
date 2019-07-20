import { BrowserWindow } from 'electron'

import chromeExtensions from './chrome-extensions'

export default function initDevTools(window, useExtensions) {
  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => window.focus())
  })
  window.webContents.on('did-frame-finish-load', () => {
    window.webContents.openDevTools()
  })
  if (useExtensions) {
    installExtensions(chromeExtensions)
  }
}

export function installExtensions(extensions) {
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
