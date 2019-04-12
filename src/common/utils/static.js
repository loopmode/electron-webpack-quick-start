import path from 'path'
import * as url from 'url'
import { isDevelopment } from '../env'

// see https://github.com/electron-userland/electron-webpack/issues/99#issuecomment-459251702
export function getStatic(val) {
  if (isDevelopment) {
    return url.resolve(window.location.origin, val)
  }
  return path.resolve(__static, val)
}
