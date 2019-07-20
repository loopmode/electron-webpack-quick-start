require('dotenv').config()

export default {
  // ...process.env,
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV !== 'production'
}
