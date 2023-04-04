var express = require('express');
var router = express.Router();

/* GET uptime listing. */
router.get('/', function(req, res, next) {

  console.log(JSON.stringify(res, getCircularReplacer()) + "<res");
  console.log(JSON.stringify(req, getCircularReplacer()) + "<req");
  res.send('respond with a uptime');
});

/* POST uptime listing. */
router.post('/', function(req, res, next) {

  //console.log(JSON.stringify(res, getCircularReplacer()) + "<res");
  //console.log(JSON.stringify(req, getCircularReplacer()) + "<req");
  console.log(JSON.stringify(new Date().toTimeString()) + ":" + JSON.stringify(req?.body, null, 2))
  res.send('POST respond with a uptime');
});

module.exports = router;


const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};