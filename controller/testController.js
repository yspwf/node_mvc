
var test = (ctx, next) => {
 
    ctx.body = "23423423";
}

async function hello(ctx, next){
    ctx.body = "ddddddddddd";
}


async function user(ctx, next){
    
    ctx.body = 'user name is  '+ctx.params.name;
}

module.exports = {
    'GET /': test,
    'GET /hello': hello,
    'GET /user/:name': user
}

