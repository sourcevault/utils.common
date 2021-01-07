// Generated by LiveScript 1.6.0
var vendor, z, l, flat, advanced_pad, jspc, deep_freeze, alpha_sort, R, esp, util, util_inspect_custom, j, zj, loopfault, x$, c, lit, rm_paths, create_stack, y$, common_symbols, print_fail;
vendor = require("./vendor");
z = console.log;
l = console.log;
flat = vendor.flat;
advanced_pad = vendor.pad;
jspc = vendor.stringify;
deep_freeze = vendor.deepFreeze;
alpha_sort = vendor.alpha_sort;
R = require("ramda");
esp = require("error-stack-parser");
if (typeof window === "undefined" && typeof module === "object") {
  util = require("util");
  util_inspect_custom = util.inspect.custom;
} else {
  util_inspect_custom = Symbol['for']("nodejs.util.inspect.custom");
}
j = function(x){
  return jspc(x, {
    maxLength: 30,
    margins: true
  });
};
zj = function(x, y){
  if (y) {
    return z(y, j(x));
  } else {
    return z(j(x));
  }
};
loopfault = function(){
  var loopError, apply, get;
  loopError = function(){};
  apply = function(){
    return new Proxy(loopError, {
      apply: apply,
      get: get
    });
  };
  get = function(){
    return new Proxy(loopError, {
      apply: apply,
      get: get
    });
  };
  return new Proxy(loopError, {
    apply: apply,
    get: get
  });
};
x$ = c = {};
x$.ok = function(txt){
  return "\x1B[38;5;2m" + txt + "\x1B[39m";
};
x$.er1 = function(txt){
  return "\x1B[38;5;3m" + txt + "\x1B[39m";
};
x$.er2 = function(txt){
  return "\x1B[38;5;13m" + txt + "\x1B[39m";
};
x$.er3 = function(txt){
  return "\x1B[38;5;1m" + txt + "\x1B[39m";
};
x$.warn = function(txt){
  return "\x1B[38;5;11m" + txt + "\x1B[39m";
};
x$.pink = function(txt){
  return "\x1B[38;5;17m" + txt + "\x1B[39m";
};
x$.grey = function(txt){
  return "\x1B[38;5;8m" + txt + "\x1B[39m";
};
x$.blue = function(txt){
  return "\x1B[38;5;12m" + txt + "\x1B[39m";
};
lit = R.pipe(R.zipWith(function(x, f){
  switch (R.type(f)) {
  case 'Function':
    return f(x);
  default:
    return x;
  }
}), R.join(""));
rm_paths = function(ignore){
  return R.unless(R.find(function(x){
    return x === 'node_modules' || in$(x, ignore);
  }), function(path){
    return in$(path[0] + "/" + path[1], ["internal/modules", "internal/main"]);
  });
};
create_stack = function(paths, init_txt){
  var EMP;
  EMP = rm_paths(paths);
  return function(){
    var E, i$, len$, I, lineNumber, fileName, functionName, columnNumber, path, results$ = [];
    E = esp.parse(new Error());
    if (init_txt) {
      l(init_txt);
    }
    for (i$ = 0, len$ = E.length; i$ < len$; ++i$) {
      I = E[i$];
      lineNumber = I.lineNumber, fileName = I.fileName, functionName = I.functionName, columnNumber = I.columnNumber;
      path = fileName.split("/");
      if (EMP(path)) {
        continue;
      }
      if (functionName === 'Object.<anonymous>') {
        functionName = "";
      }
      results$.push(l(lit(["  - ", R.last(path), ":", lineNumber, " ", functionName, "\n    ", fileName + ":", lineNumber, ":" + columnNumber + "\n"], [0, c.warn, 0, c.er, 0, 0, 0, c.black, c.er, c.black])));
    }
    return results$;
  };
};
y$ = common_symbols = {};
y$.valleydate = Symbol("valleydate");
print_fail = function(filename){
  return function(message){
    var txt;
    l("[TEST ERROR] " + filename + ":");
    txt = (function(){
      switch (typeof message) {
      case 'number':
        return "\n    failed at TEST NUMBER " + message + "\n";
      case 'string':
        return "\n    " + message + "\n";
      default:
        return "";
      }
    }());
    l(txt);
    process.exitCode = 1;
  };
};
module.exports = {
  z: z,
  j: j,
  l: l,
  R: R,
  c: c,
  zj: zj,
  esp: esp,
  lit: lit,
  flat: flat,
  pad: advanced_pad,
  loopError: loopfault,
  print_fail: print_fail,
  alpha_sort: alpha_sort,
  uic: util_inspect_custom,
  deep_freeze: deep_freeze,
  create_stack: create_stack,
  common_symbols: common_symbols
};
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}