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
    SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN
  }
}
