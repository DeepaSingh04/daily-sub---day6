

const logger = (req, res, next) => {
    
    if (process.env.NODE_ENV === 'production') {
      return next();
    }
  
    const start = Date.now(); 
  
    res.on('finish', () => {
      const duration = Date.now() - start; 
      console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
    });
  
    next(); 
  };
  
  module.exports = logger;
  