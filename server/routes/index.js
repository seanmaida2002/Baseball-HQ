import mlbRoutes from './mlb.js';

const constructorMethod = (app) => {
    app.use('/mlb', mlbRoutes);
    
    app.use("*", (req, res) => {
        return res.status(404).json({error: 'Not found'});
    });
  };
  
  export default constructorMethod;