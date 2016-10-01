module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost:27017/yatra',
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here'
};
