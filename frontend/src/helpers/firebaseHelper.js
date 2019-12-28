const FIREBASE_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.FIREBASE_URI;
export default FIREBASE_URI