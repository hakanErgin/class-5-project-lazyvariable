const HEROKU_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : process.env.HEROKU_URI;
export default HEROKU_URI