const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;
let User;

// Schema
const UserSchema = new mongoose.Schema({
  firstName: {type: String, require: true },
  lastName: {type: String },
  userName: {type: String },
  email: {
    type: String,
    require: true,
    index: { unique: true}
   },
  password: {type: String, require: true }
});


// Validation
UserSchema.path('email').validate((email) => {
  return /.?@.?\.?/.test(email);
}, 'Invalid email address');

// Filters
UserSchema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified or is new
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

  // hash the password using the salt
  bcrypt.hash(user.password, salt, function(err, hash) {
    if (err) return next(err);

    user.password = hash;
     next();
   });
  });
});

// Static Methods
UserSchema.static('attemptLogin', (email, password, cb) => {
  User.findByEmail(email, (err, user) => {
    if (err) { return cb(err); }
    if (!user) { return cb(); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return cb(err)}
      if (isMatch) {
        return cb(null, user);
      } else { return cb();}
    });
  });
});

///// Methods for compare password
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { throw err;}
    cb(null, isMatch);
  })
};


// Virtual fields
 UserSchema.virtual('fullName').get(function() {
   return `${this.firstName} ${this.lastName}`
 });

// Search by email
 UserSchema.static('findByEmail', (email, cb) => {
   User.findOne({ email: email}, cb);
 });


// Set Model
User = mongoose.model('user', UserSchema);
 // Model Exporting
module.exports = User;
