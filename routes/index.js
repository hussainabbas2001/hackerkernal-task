var express = require('express');
var router = express.Router();
var userdb= require('./users')
var taskdb= require('./task');

/* GET home page. */
router.get('/', function(req, res, next) {
  taskdb.find().then(tval=>{
      userdb.find().then(uval=>{
        res.render('index',{users:uval, tasks:tval});
      })
  })
});
router.post('/createuser', function(req,res){
  userdb.create({
    name:req.body.uname,
    email:req.body.uemail,
    mobile:req.body.umobile
  })
  .then(val=>{
    res.redirect('/')
  })
});
router.post('/createtask', function(req,res){
  taskdb.create({
    user:req.body.tuser,
    taskname:req.body.tname,
    tasktype:req.body.ttype
  })
  .then(val=>{
    res.redirect('/');
  })
});
router.get('/showusers',function(req, res){
  userdb.find().then(val=>{
    res.send(val);
  })
})
router.get('/showtasks',function(req, res){
  taskdb.find().then(val=>{
    res.send(val);
  })
})

// router.get('/delete',(req, res)=>{
//   userdb.deleteMany().then(val=>{
//     res.redirect('/')
//   })
// }

router.get("/delete", function(req, res){
  userdb.deleteMany().then(val=>{
    res.redirect("/")
  })
} )

router.get("/delete/task", function(req, res){
  taskdb.deleteMany().then(val=>{
    res.redirect("/")
  })
} )




module.exports = router;
