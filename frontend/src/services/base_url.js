const isProduction = process.env.NODE_ENV === 'production'

export const base_url = isProduction
    ? 'https://erphack.herokuapp.com/api'
    : 'http://localhost:3000/api'
