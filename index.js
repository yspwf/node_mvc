
const router = require('./router.js');

module.exports = (app, config)=>{
    //app.use(db());
    app.use(router());
}