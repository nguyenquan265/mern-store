import 'dotenv/config'

export const env = {
  PORT: process.env.PORT || 8080,
  BUILD_MODE: process.env.BUILD_MODE,
  DB: {
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD || null,
    DIALECT: process.env.DB_DIALECT
  },
  jwt: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
    COOKIE_EXPIRES_IN: process.env.COOKIE_EXPIRES_IN
  }
}
