// Generated by LiveScript 1.6.0
var com, l, z, binapi, fail, get, lopo, F6, compute, out, E;
com = require("../dist/main");
l = com.l, z = com.z, binapi = com.binapi;
fail = com.print_fail("test/test1.js");
get = function(arg$, key){
  var old, num;
  old = arg$[0], num = arg$[1];
  return [key, num];
};
lopo = function(state){
  return binapi(F6, get, state);
};
F6 = function(arg$, args){
  var key, x, y;
  key = arg$[0], x = arg$[1];
  y = args[0];
  switch (key) {
  case null:
    return lopo(["init", y]);
  case "add":
    return lopo(["chain", x + y]);
  case "multiply":
    return lopo(["chain", x * y]);
  case "ret":
    return x;
  default:
    return fail(6);
  }
};
try {
  compute = lopo([null]);
  out = compute(5).add(5).multiply(10).ret();
  if (!(out === 100)) {
    fail(6);
  }
} catch (e$) {
  E = e$;
  l(E);
  fail(6);
}