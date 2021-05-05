var express = require('express');
var router = express.Router();

const db = require('../data/db');
const redis = require('redis');

/* GET home page. */
router.get('/', async function(req, res, next) {

  /* Task 3 */

  let client = redis.createClient(6379, '127.0.0.1', {});

//   client.ttl('facts', async function(err, ttl){
//     if (ttl < 0){ 
//       if (ttl == -2){
//         client.lpush('facts', JSON.stringify((await db.votes()).slice(0,100)));
//       }
//       client.expire('facts', 10);
//     }
//     client.lrange('facts', 0, -1, async function(err, cached_facts) {
//         let best_facts = JSON.parse(cached_facts[0]) || (await db.votes()).slice(0,100);
//         res.render('index', 
//           { recentFlag: getFlag('ON'), 
//             title: 'meow.io', 
//             recentUploads: await db.recentCats(5),
//             bestFacts: best_facts
//           });
//     });
//   });
// });

  /* Task 4 */
  client.ttl("facts", async function(err, value){
    console.log(value)
    if (value < 0){
      client.lpush("facts", JSON.stringify((await db.votes()).slice(0,100)));
      client.EXPIRE("facts", 10);
    }

    client.LRANGE("facts", 0, 99, async function(err, value){
      client.lrange("cat", 0, 4, function(err, img){
        res.render('index', { title: 'meow.io', recentUploads: img, bestFacts: JSON.parse(value[0]) })

      })
    })

  });


});


//   res.render('index', 
//     { recentFlag: getFlag('ON'), 
//       title: 'meow.io', 
//       recentUploads: await db.recentCats(5), 
//       bestFacts: (await db.votes()).slice(0,100) 
//     });
//   // client.quit();
// });

function getFlag(value)
{
  // force undefined flags to be OFF.
  if( value == undefined)
    return false;
  if( value == 'ON' )
    return true;
  if( value == 'OFF')
    return false;
  // any other value is automatically off.
  return false;
}

module.exports = router;
