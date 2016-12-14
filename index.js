const mongoose = require('mongoose'),
      User = require('./user'),
      Product = require('./product')
      Post = require('./post');


// Connect to DB
mongoose.connect('mongodb://boxuser:boxpass@ds133358.mlab.com:33358/boxdb', (err) => {
  if (err) {
    throw err;
  }

  const email = 'tes@gmail.com';
  const password = 'cool';

  /////// Create Post ///////
  // const post = new Post({
  //   author: 'Pancho Cespedez',
  //   content: 'track 2',
  //   title: 'La vida loca',
  //   date: '09.22.1995'
  // });
  //
  // post.save((err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   process.exit();
  // })

  ////////// Search by Post////////
  const query = {
    author: /Mario/
  };

  Post.findOne(query, (err, post) => {
    if (err) {
      throw err;
    }
    console.log(post);
    process.exit();
  });


  /////// Create Users ///////
  // const user = new User({
  //   firstName: 'Randy',
  //   lastName: 'Ferrer',
  //   userName: 'randy00',
  //   email: 'randy00@gmail.com',
  //   password: 'cool'
  // });
  //
  // user.validate((err) => {
  //   if (!err) {
  //     save(user);
  //     return;
  //   }
  //   for (const path in err.errors) {
  //     if(err.errors.hasOwnProperty(path)) {
  //       const error = err.errors[path];
  //       console.log('Error: ', error.message)
  //     }
  //   }
  //
  //   process.exit();
  // })
  //
  // function save(user) {
  //   user.save((err) => {
  //     if (err) { throw err;}
  //     console.log(user);
  //     process.exit();
  //   })
  // }

  // Check if user exists
  // User.findByEmail(email, (err, user) => {
  //   if(err) { throw err;}
  //
  //   if (user) {
  //     console.log('That user exists !!!');
  //     process.exit();
  //   }
  // });

  /////// When user attempt login ///////
  // User.attemptLogin(email, password, (err, user) => {
  //   if (user) {
  //     console.log('You logged in as', user.fullName);
  //   } else {
  //     console.log('Invalid username or password');
  //   }
  //   process.exit();
  // });


// /////// Search by email and Compare Password //////
// User.findByEmail(email, (err, user) => {
//   if (err) { throw err; }
//
//
//
//   user.comparePassword(password, (err, isMatch) => {
//     if (err) { throw err; }
//
//     if (isMatch) {
//       console.log('You are logged in');
//     } else {
//       console.log('login failed !!!')
//     }
//     process.exit();
//   });
// });

  /////// Create Users ///////
  // const me = new User({
  //   firstName: 'Shakira',
  //   lastName: 'Lopez',
  //   userName: 'shaki',
  //   email: 'shaki@gmail.com',
  //   password: 'cool'
  // });
  //
  // me.save((err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   process.exit();
  // })

  ////// Create Products //////
  // const carr = new Product({
  //   model: 'Mercedez',
  //   color: 'Black',
  //   windows: 2,
  //   engine: 'MV-8',
  //   plate: 'JJ901234'
  // });
  // // Save the document
  // carr.save((err) => {
  //   if (err) {
  //     throw err;
  //   }

    ///// Search all ///////
    // Product.find((err, product) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(product);
    //   process.exit();
    // });

    /////// Search by collections ////////
    // Product.find({'color': 'White',},  (err, carrs) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(carrs);
    //   process.exit();
    // });

    ////////// Search by Regular Expression ////////
    // const query = {
    //   email: /harris/
    // };
    //
    // User.findOne(query, (err, user) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(user.fullName);
    //   process.exit();
    // });


  // });
});
console.log('Operations Successfull !!');
