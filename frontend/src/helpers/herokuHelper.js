const BACKEND_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : process.env.BACKEND_URI;
export default BACKEND_URI