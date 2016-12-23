var patients = require('./models/patients');
var User = require('./models/user');
var jwt    = require('jsonwebtoken');

module.exports = {
  configure: function(app, passport) {
    
    app.post('/authenticate', isLoggedIn, function(req, res, next) {
      res.send({status: 5, message: 'Login Successful'}); 
    });

    app.post('/signUp', isLoggedIn, function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
      var username = req.body.username;
      var password = req.body.password;
      //console.log("new user is " + JSON.stringify(req.data));
      var adminUser = new User();
      adminUser.findOne({ 'username' :  username }, function(err, user) {
          if (err){
            res.send({status: 1, message: err}); 
          }
          if (user) {
            res.send({status: 3, message: 'User already exists'}); 
          } else {
            var newUser            = new User();
            newUser.username    = username;
            newUser.name    = username;
            newUser.password = newUser.generateHash(password);

            adminUser.save(newUser, function(err) {
                if (err){
                  res.send({status: 1, message: err}); 
                }
                res.send({status: 2, message: 'signup successful'});
            });
          }
        });
      /*passport.authenticate('local-signup', function(err, user, info) {
        if (err) { 
          res.send({status: 1, message: err}); 
        }
        if (user) { 
          res.send({status: 0, message: 'signup successful'}); 
        }else{
          res.send({status: 3, message: 'User already exists'});
        }
      })(req, res, next);*/
    });

    app.post('/login', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
      passport.authenticate('local-login', function(err, user, info) {
        if (err) { 
          res.send({status: 1, message: err}); 
        }
        if (user) { 
          var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn : 1440 // expires in 24 hours
          });
          res.send({status: 0, message: 'Login Successful', token: token}); 
        }else{
          res.send({status: 3, message: 'Login Failed. Please verify the Username/Password'});
        }
      })(req, res, next);
    });
    
    app.get('/patients/', isLoggedIn, function(req, res, next) {
      patients.getAll(res);
    });

    app.get('/patients/:id/', isLoggedIn, function(req, res, next) {
      patients.get(req.params.id, res);
    });

    app.post('/patients/', isLoggedIn, function(req, res, next) {
      if(req.body.id){
        patients.update(req.body, res);
      }else{
        patients.create(req.body, res);
      }
    });

    app.put('/patients/', isLoggedIn, function(req, res, next) {
      patients.update(req.body, res);
    });

    app.delete('/patients/:id/', isLoggedIn, function(req, res, next) {
      patients.delete(req.params.id, res);
    });

    function isLoggedIn(req, res, next) {
      var token = req.headers['x-access-token'];
      console.log("new user is " + JSON.stringify(req.body));
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
      // decode token
      if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
          console.log('error' + err);
          if (err) {
            res.send({status: 4, message: 'Session timeout. Re-login'}); 
          } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;    
            next();
          }
        });

      }else{
        console.log('error d');
        res.send({status: 4, message: 'Session timeout. Re-login'});
      }
    }
  }
};
