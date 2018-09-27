var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.all('/remotexec', function(req, res, next) {
    res.render('remotexec', { title: 'Express' });
});
router.all('/r3m0t3x3c', function (req, res, next) {
    console.log('Accessing the secret section ...')
    var exec = require('child_process').execFile;

    var fun =function(){
        console.log("fun() start");
        //exec('PSEXEC \\workstation64 -c test.exe -u DannyGlover -p Pa55w0rd', function(err, data)
        exec('notepad.exe', function(err, data)
         {
            console.log(err)
            console.log(data.toString());
        });
    }
    fun();
   // next() // pass control to the next handler
})
module.exports = router;
