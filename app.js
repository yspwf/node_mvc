const Koa = require('koa');
const app = new Koa();

// app.use(async ctx =>{
//     ctx.body = "eeeeeeeeeee";
// });

// const router = require('./router.js');
// app.use(router());

const index = require('./index.js');
var config = {
    host:'127.0.0.1',
    port:5000,
    defaultController:'/'
}

const db = require('./mysql.js');
const a =db('select 1+1 as sum');

//console.log(a.test('select 1+1 as sum'));

index(app,config);


app.listen(5000,()=>{
    console.log('server is satrting ........');
});
