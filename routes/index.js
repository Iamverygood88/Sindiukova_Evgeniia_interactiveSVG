var express = require('express');
var router = express.Router();
var path = require('path');
const hbs = require('hbs');

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {

  let query = "SELECT * FROM care_info";


  sql.query(query, (err, rows) => {

    if (err) {
      return console.log(err.message);
    }
    console.log(rows);

0
    res.render('index', {data: rows});
  });



    // res.render('index'); // send that row back to the calling function
  
  
  console.log('sent back a static file');
  // res.sendFile((path.join(__dirname ,  "../views/index.html")));
  
});


router.get('/svgdata/:target', (req, res) => {
  //here is where we set up a query
  let query = `SELECT * FROM plants_info WHERE id="${req.params.target}"`;


  sql.query(query, (err, result) => {

    if (err) console.log(err); //something done broke!

    console.log(result); //this should be the database row

    res.json(result[0]); // send that row back to the calling function
  })
})


module.exports = router;