(function() {
  'use strict';
  this.mintp = function(sel, args, opt_regex) {
    args = args || {};
    return (function doit(text) {
      var did = false;
      text = text.replace(opt_regex || /\{\{((.(?!\{\{))*?)\}\}/g, function(_, exp) {
        did = true;
        return Function.apply(null, Object.keys(args).concat('return eval(this.x);'))
        .apply({x: 'try {' + exp + '} catch(e) {}'},
               Object.keys(args).map(function(k) { return args[k]; }));
      });
      return did ? doit(text) : text;
    })(document.querySelector(sel).innerHTML);
  };
}).call(this);
