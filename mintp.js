(function() {
  'use strict';
  var cache = {};
  this.mintp = function(sel, args, opt_sep) {
    return (cache[sel] ? cache[sel] : cache[sel] =
        document.querySelector(sel).innerHTML.split(opt_sep || /[\{\}]{2}/))
      .map(function(exp, i) {
        return i % 2 === 0 ? exp : Function.apply(null,
            Object.keys(args).concat('return eval(this.x);'))
          .apply({x: exp}, Object.keys(args).map(function(k) {
            return args[k];
          }));
      }).join('');
  };
}).call(this);
