const mysql = require('mysql');

const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'123456',
    database:'test'
});


function getConnect(sql){
    return new Promise((resolve, reject)=>{
        pool.getConnection(function(err, connection){
            if(err){
                reject(err);
            }else{
               connection.query(sql,values, (err, result)=>{
                   if(err){
                       reject(err);
                   }else{
                        resolve(result);
                   }
               });
            }
        });
    });
}

async function test(sql){
    let result = await getConnect(sql);
    return result;
}
test('select 1+1 as sum');
// module.exports = function(ctx, next){
//     return async (ctx, next)=>{
//         await test(sql);
//         await next();
//     }
// }

// module.exports = test;