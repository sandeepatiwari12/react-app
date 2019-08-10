const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// alternate for create a new user
// User.create({
//         username: req.body.name, // the property is "username" in model
//     }, function (err, user) {
//         if (err) {
//             console.log("Error creating User: ", err);
//             res
//                 .status(400)
//                 .json(err)
//         } else {
//             console.log("User Created: ", user);
//             res
//             .status(201)
//             .json(user)
//         }
//     })
// });

module.exports = router;
