// import Redis from 'ioredis';
// import JSONCache from 'redis-json';

// const redis = new Redis();

// const jsonCache = new JSONCache(redis)

// const user = {
//   name: "test",
//   age: 21,
//   gender: "male"
// }
// await jsonCache.set('123', user)




const redis = require("redis");
var client = redis.createClient();//creates a new client   
 
client.on("error", function(error) {
  console.error(error);
});
 
client.on('connect', function() {
    console.log('connected');
});

// client.set('framework', '{"colour":"blue", "make":"saab", "model":93, "features" :[ "powerlocks", "moonroof" ]}', function(err, reply) {
//   console.log(reply);
// });

client.get('framework', function(err, reply) {
  console.log(reply);
});



// // client.hmset(
// //   'frameworks', ['javascript','js'], 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

// // client.hgetall('frameworks', function(err, object) {
// //     console.log(object);
// // });
// // client.set("key", "sabonchi", redis.print);
// // client.get("key", redis.print);