// var mongoose = require('mongoose');
// var User = requier('../models/user');

// exports.authUser() = function(req,res){
//     User.findOne({email: req.body.email}, function(err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         if (!user) {
//             return res.status(401).json({
//                 title: 'Login failed',
//                 error: {message: 'Invalid login credentials'}
//             });
//         }
//         if (!bcrypt.compareSync(req.body.password, user.password)) {
//             return res.status(401).json({
//                 title: 'Login failed',
//                 error: {message: 'Invalid login credentials'}
//             });
//         }
//         var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
//         res.status(200).json({
//             message: 'Successfully logged in',
//             token: token,
//             userId: user._id
//         });
//     });
// }