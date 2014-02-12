var qs = require('qs');

/**
 * Returns whether `obj` is a valid querystring
 *
 * @return {Boolean}
 */

module.exports = function(obj){
  try {
    qs.stringify(obj);
    return true;
  } catch (err) {
    return false;
  }
};