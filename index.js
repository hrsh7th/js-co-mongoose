var thunkify = require('thunkify');

var mongoose = module.exports = require('mongoose');

// patch mongoose.
var registerHooks = mongoose.Document.prototype.$__registerHooks;
mongoose.Document.prototype.$__registerHooks = function() {
  registerHooks.apply(this, arguments);
  this.save = thunkify(this.save);
  this.update = thunkify(this.update);
  this.remove = thunkify(this.remove);
};

