const fs = require('fs');
const KoaRouter = require('koa-router');
const router = new KoaRouter();

// router.get('/', async (ctx, next) => {
//     ctx.body = "3245345345";
// });

function addController(router, objController){
    //console.log(objController);
    for(var i in objController){
        //console.log(objController[i]);
        if(i.startsWith('GET ')){
            router.get(i.substr(4), objController[i])
        }if(i.startsWith('POST ')){
            router.post(i.substr(4), objController[i]);
        }
    }
}


module.exports = ()=>{
    let files = fs.readdirSync(__dirname+'/controller');
    files.filter((files)=>{
        return files.endsWith('.js');
    });
    files.forEach((file)=>{
        let objController = require(__dirname+'/controller/'+file);
        addController(router,objController);
    });
    return router.routes();
}