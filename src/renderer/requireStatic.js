import path from 'path'
import * as url from 'url'
import env from '@/env'

/**
 * Takes a file path and returns either a local filesystem path in production, or a localhost url in development.
 *
 * @see https://github.com/electron-userland/electron-webpack/issues/99#issuecomment-459251702
 * @param {string} resourcePath - filepath relative to `/static`
 * @return {string} - filepath that can be required
 */
export default function requireStatic(resourcePath) {
  if (env.isProduction) {
    return path.resolve(__static, resourcePath)
  }
  return url.resolve(window.location.origin, resourcePath)
}
