// Generated by LiveScript 1.6.0
var com, l, z, binapi, fail, main, getter, log, test, tsf;
com = require("../dist/main");
l = com.l, z = com.z, binapi = com.binapi;
fail = com.print_fail("test/test2.js");
main = function(){};
getter = function(state, key){
  return state.concat(key);
};
log = function(state){
  var chain;
  chain = state.join(' | ');
  return "( " + chain + " )";
};
test = binapi(main, getter, [], log);
tsf = test.sync.flip;