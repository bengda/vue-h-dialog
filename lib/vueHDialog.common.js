module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var sloppyArrayMethod = __webpack_require__("b301");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1bf2":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var ownKeys = __webpack_require__("56ef");

// `Reflect.ownKeys` method
// https://tc39.github.io/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("60ae");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("f8c2");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("f8c2");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("b629");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "3410":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toObject = __webpack_require__("7b0b");
var nativeGetPrototypeOf = __webpack_require__("e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f3a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var fails = __webpack_require__("d039");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var createNonEnumerableProperty = __webpack_require__("9112");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4795":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var userAgent = __webpack_require__("b39a");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("e070");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var fails = __webpack_require__("d039");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("f8c2");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator, next;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4ec9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $entries = __webpack_require__("6f53").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.5.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "60ae":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("b39a");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("f8c2");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6a3e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fb6a");

__webpack_require__("159b");

/**
 * polyfill replaceWith
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/ChildNode/replaceWith}
 */
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('replaceWith')) {
      return;
    }

    Object.defineProperty(item, 'replaceWith', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function replaceWith() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.replaceChild(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6dd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var propertyIsEnumerable = __webpack_require__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "6fe5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var trim = __webpack_require__("58a8").trim;
var whitespaces = __webpack_require__("5899");

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),

/***/ "7039":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var nativeGetOwnPropertyNames = __webpack_require__("057f").f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("c032");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7ed3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var fails = __webpack_require__("d039");
var definePropertyModule = __webpack_require__("9bf2");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var getPrototypeOf = __webpack_require__("e163");
var createPropertyDescriptor = __webpack_require__("5c6c");

// `Reflect.set` method
// https://tc39.github.io/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (has(ownDescriptor, 'value')) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    return true;
  }
  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var object = definePropertyModule.f({}, 'a', { configurable: true });
  // eslint-disable-next-line no-undef
  return Reflect.set(getPrototypeOf(object), 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ "7f78":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var anObject = __webpack_require__("825a");
var objectGetPrototypeOf = __webpack_require__("e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

// `Reflect.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8b9a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");
var objectSetPrototypeOf = __webpack_require__("d2bb");

// `Reflect.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("60ae");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e4a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var anObject = __webpack_require__("825a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var sloppyArrayMethod = __webpack_require__("b301");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("c032");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

if (!USE_SYMBOL_AS_UID) {
  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aa6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac16":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var anObject = __webpack_require__("825a");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;

// `Reflect.deleteProperty` method
// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("b629");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b629":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("b39a");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toInteger = __webpack_require__("a691");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("f8c2");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "c032":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c35a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var parseFloat = __webpack_require__("6fe5");

// `Number.parseFloat` method
// https://tc39.github.io/ecma262/#sec-number.parseFloat
$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c7cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("eae9");

// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var sloppyArrayMethod = __webpack_require__("b301");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var fails = __webpack_require__("d039");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].map.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e070":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("60ae");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "eae9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "eaee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8c2":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("4ec9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js








function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./src/package/src/polyfills.js
var polyfills = __webpack_require__("6a3e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("3410");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js








function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./src/utils/types.js








/**
 * 数据类型判断
 * @author huyk<bengda@outlook.com>
 * @version 0.0.1
 * @module Types
 */

/**
 * 获取数据类型
 * @param {any} arg
 */
function isType(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
}
/**
 * 判断是否是数组
 * @param {any} arg
 */

function isArray(arg) {
  return isType(arg) === 'array';
}
/**
 * 判断是否是null数据类型
 * @param {any} arg
 */

function isNull(arg) {
  return isType(arg) === 'null';
}
/**
 * 对象宽松的判断。 不包括null和数组，但是包括HTMLElement，Date等等其他对象
 * @param {any} arg
 */

function isLooseObject(arg) {
  return _typeof(arg) === 'object' && !isNull(arg) && !isArray(arg);
}
/**
 * 是否是对象，同isLooseObject
 * 很多时候我们只是使用对象这种类型来方便存储数据而已，这里我们在喜好上采用宽松判断
 * @param {any} arg
 */

function isObject(arg) {
  // return Object.prototype.toString.call(arg) === '[object Object]';
  return isLooseObject(arg);
}
/**
 * 严格的对象判断
 * @param {any} arg
 */

function isStrictObject(arg) {
  return isType(arg) === 'object';
}
function isString(arg) {
  return isType(arg) === 'string';
}
function isNumber(arg) {
  return isType(arg) === 'number';
}
function isBoolean(arg) {
  return isType(arg) === 'boolean';
}
function isFunction(arg) {
  return isType(arg) === 'function';
}
function isDate(arg) {
  return isType(arg) === 'date';
}
function types_isNaN(arg) {
  return isNumber(arg) && arg !== arg;
}
function isUndefined(arg) {
  return isType(arg) === 'undefined';
}
function isNullOrUndefined(arg) {
  return isNull(arg) || isUndefined(arg);
}
function isSymbol(arg) {
  return isType(arg) === 'symbol';
}
/**
 * 是否是原始值类型
 * null,undefined,number,string,boolean,symbol
 * @param {any} arg
 */

function isPrimitive(arg) {
  return isNullOrUndefined(arg) || isNumber(arg) || isString(arg) || isBoolean(arg) || isSymbol(arg);
}
/**
 * 是否是复杂数据类型
 * object,array,function
 * @param {any} arg
 */

function isComplex(arg) {
  return isLooseObject(arg) || isArray(arg) || isFunction(arg);
}
/**
 * 是否是Dom元素
 * window和document也判定为dom类型，因为它们可以做添加监听事件等其它行为
 * @param {any} arg
 */

function isDom(arg) {
  return arg === window || arg === document || arg instanceof HTMLElement;
}
/**
 * 是否继承自Object.prototype
 * @param {any} arg
 * @example
 *  var a = { a: 'a' } // true
 *  var b = Object.create(null) // false
 *  function Apple() {}
 *  var apple = new Apple(); // false
 */

function isPlainObject(arg) {
  return isObject(arg) && Object.getPrototypeOf(arg) === Object.prototype;
}
/**
 * 无可遍历属性视为空对象
 * @param {any} arg
 */

function isEmptyObject(arg) {
  return isObject(arg) && !Object.keys(arg).length;
}
/**
 * 是否是数字型数据。包含string类型
 * 注意诸如[1], ['1']等会隐式转为字符1,'1'
 * @param {any} arg
 */

function isNumeric(arg) {
  return !isArray(arg) && /^[+-]?[0-9]\d*$|^[+-]?[0-9]\d*\.\d+$/g.test(arg);
}
/**
* 是否是整数。包含string类型
*/

function isInteger(arg) {
  return isNumeric(arg) && Math.floor(arg) === Number(arg);
}
/**
* 是否是浮点数。包含string类型
* 基本行为与isNumeric一致
* @param {any} arg
* @param {boolean} [containInteger=false] - 是否包含整数。containInteger为false则当输入是整数时返回false
*/

function isFloatNumber(arg) {
  var containInteger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return isNumeric(arg) && (containInteger || /^[+-]?[0-9]\d*\.\d+$/g.test(arg));
}
/**
 * module export
 * @exports
 */

/* harmony default export */ var types = ({
  isType: isType,
  isArray: isArray,
  isNull: isNull,
  isLooseObject: isLooseObject,
  isObject: isObject,
  isStrictObject: isStrictObject,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isFunction: isFunction,
  isDate: isDate,
  isNaN: types_isNaN,
  isUndefined: isUndefined,
  isNullOrUndefined: isNullOrUndefined,
  isSymbol: isSymbol,
  isPrimitive: isPrimitive,
  isComplex: isComplex,
  isDom: isDom,
  isPlainObject: isPlainObject,
  isEmptyObject: isEmptyObject,
  isNumeric: isNumeric,
  isInteger: isInteger,
  isFloatNumber: isFloatNumber
});
// CONCATENATED MODULE: ./src/utils/def.js




/**
 * 一些常量定义
 * @author huyk<bengda@outlook.com>
 * @version 0.0.1
 * @module Def
 */

/**
 * 合并策略
 */
var MERGE_STRATEGY = {
  // 只合并一级，类似Object.assign
  shadow: Symbol('shadow'),
  // 递归合并每一级
  deep: Symbol('deep')
};
/**
 * url querys typedef
 */

var QUERY_MODE = {
  query: Symbol('query'),
  hash: Symbol('hash')
};
/**
 * 定义条件判断类型
 */

var CONDITION_MARK = {
  and: Symbol('and'),
  or: Symbol('or')
};
/**
 * 定义遍历键的范围
 */

var KEYS_RANGE = {
  // 不包含不可枚举属性，不包含symbol
  keys: Symbol('keys'),
  // 包含不可枚举属性，不包含symbol
  names: Symbol('names'),
  // 仅symbol属性，不包含不可枚举属性
  symbolKeys: Symbol('symbolKeys'),
  // 仅symbol属性，不管是否可枚举
  symbols: Symbol('symbols'),
  // 可枚举属性，包含symbol
  enumerable: Symbol('enumerable'),
  // 所有属性，不管是否可遍历
  all: Symbol('all')
};
/**
 * module export
 */

/* harmony default export */ var def = ({});
// CONCATENATED MODULE: ./src/utils/asserts.js












/**
 * 断言器
 * @author huyk<bengda@outlook.com>
 * @version 0.0.1
 * @module Asserts
 */


/**
 * @const
 * @type {map}
 */

var assertsMap = new Map([[isArray, 'Array'], [isObject, 'Object'], [isLooseObject, 'LooseObject'], [isStrictObject, 'StrictObject'], [isPlainObject, 'PlainObject'], [isEmptyObject, 'EmptyObject'], [isNull, 'Null'], [isUndefined, 'Undefined'], [isNullOrUndefined, 'Null or Undefined'], [types_isNaN, 'NaN'], [isString, 'String'], [isNumber, 'Number'], [isNumeric, 'Numeric-Value'], [isInteger, 'Integer Number'], [isFloatNumber, 'Float Number'], [isBoolean, 'Boolean'], [isFunction, 'Function'], [isDate, 'Date'], [isSymbol, 'Symbol'], [isDom, 'Element'], [isPrimitive, 'Primitive-Value'], [isComplex, 'Complex-Value(object|array|function)']]);
/**
 * 验证器工厂函数
 * @param {(any) => boolean} validator
 * @param {string} [type] 数据类型
 * @returns {(arg: any, msg?: string) => boolean}
 */

function assertFactory(validator, type) {
  return function (arg, msg) {
    if (!validator(arg)) {
      throw new TypeError(msg || "".concat(arg, " Expected ").concat(type || assertsMap.get(validator)));
    }

    return true;
  };
}
var assertArray = assertFactory(isArray);
var assertObject = assertFactory(isObject);
var assertLooseObject = assertFactory(isLooseObject);
var assertStrictObject = assertFactory(isStrictObject);
var assertPlainObject = assertFactory(isPlainObject);
var assertEmptyObject = assertFactory(isEmptyObject);
var assertNull = assertFactory(isNull);
var assertUndefined = assertFactory(isUndefined);
var assertNullOrUndefined = assertFactory(isNullOrUndefined);
var assertNaN = assertFactory(types_isNaN);
var assertString = assertFactory(isString);
var assertNumber = assertFactory(isNumber);
var assertNumeric = assertFactory(isNumeric);
var assertInteger = assertFactory(isInteger);
var assertFloatNumber = assertFactory(isFloatNumber);
var assertBoolean = assertFactory(isBoolean);
var assertFunction = assertFactory(isFunction);
var assertDate = assertFactory(isDate);
var assertSymbol = assertFactory(isSymbol);
var assertDom = assertFactory(isDom);
var assertPrimitive = assertFactory(isPrimitive);
var assertComplex = assertFactory(isComplex);
/**
 * 断言值是否在给定列表里
 * @param {any} arg - input
 * @param {any[]} enums - 枚举列表
 */

var assertEnum = function assertEnum(arg, enums) {
  assertArray(enums);

  if (!enums.includes(arg)) {
    throw new ReferenceError("".concat(arg, " should in the given list: [").concat(enums, "]"));
  }

  return true;
};
/**
 * 组合使用验证器断言
 * @param {any} arg
 * @param {function|function[]} validator - 接收单参数并返回boolean值的验证器
 * @param {symbol} [condition=CONDITION_MARK.or] - [CONDITION_MARK]
 * @param {string} [message] - message
 */

function composeAssert(arg, validator) {
  var _tipMap;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$condition = _ref.condition,
      condition = _ref$condition === void 0 ? CONDITION_MARK.or : _ref$condition,
      message = _ref.message;

  if (!isFunction(validator) && !isArray(validator)) {
    throw new TypeError("".concat(validator, " Expected Function or Function[]"));
  }

  assertEnum(condition, [CONDITION_MARK.and, CONDITION_MARK.or]);
  var validators = isFunction(validator) ? [validator] : validator;
  var handler = CONDITION_MARK.and === condition ? Array.prototype.every : Array.prototype.some;
  var tipMap = (_tipMap = {}, _defineProperty(_tipMap, CONDITION_MARK.and, 'and'), _defineProperty(_tipMap, CONDITION_MARK.or, 'or'), _tipMap);
  var text = message || "".concat(arg, " Expected ").concat(validators.map(function (item) {
    return assertsMap.get(item);
  }).join(" ".concat(tipMap[condition], " ")));

  if (!handler.call(validators, function (invoke) {
    return invoke(arg);
  })) {
    throw new TypeError(text);
  }

  return true;
}
/**
 * module export
 * @exports
 */

/* harmony default export */ var asserts = ({
  assertsMap: assertsMap,
  assertFactory: assertFactory,
  assertArray: assertArray,
  assertObject: assertObject,
  assertLooseObject: assertLooseObject,
  assertStrictObject: assertStrictObject,
  assertPlainObject: assertPlainObject,
  assertEmptyObject: assertEmptyObject,
  assertNull: assertNull,
  assertUndefined: assertUndefined,
  assertNullOrUndefined: assertNullOrUndefined,
  assertNaN: assertNaN,
  assertString: assertString,
  assertNumber: assertNumber,
  assertNumeric: assertNumeric,
  assertInteger: assertInteger,
  assertFloatNumber: assertFloatNumber,
  assertBoolean: assertBoolean,
  assertFunction: assertFunction,
  assertDate: assertDate,
  assertSymbol: assertSymbol,
  assertDom: assertDom,
  assertPrimitive: assertPrimitive,
  assertComplex: assertComplex,
  assertEnum: assertEnum,
  composeAssert: composeAssert
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3a8410af-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/package/src/main.vue?vue&type=template&id=7e12b885&
var mainvue_type_template_id_7e12b885_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"vue-h-dialog",style:({ zIndex: _vm.zIndex || _vm.$options.getZIndex() }),attrs:{"data-vhd-pid":_vm.pId || 0,"data-vhd-gid":_vm.gId,"data-vhd-cache":_vm.cache},on:{"mousemove":function($event){_vm.moveMouseMoveHandler($event);_vm.resizeMouseMoveHandler($event, _vm.currentResizeMoveSide)},"mouseup":function($event){_vm.moveMouseUpHandler($event);_vm.resizeMouseUpHandler($event, _vm.currentResizeMoveSide)}}},[_c('div',{staticClass:"vue-h-dialog__mask"}),_c('div',{ref:"main",staticClass:"vue-h-dialog__main",class:{
      'vue-h-dialog__main--ismax': _vm.dialogIsMax,
      'vue-h-dialog__main--ismoving': _vm.dialogIsMoving,
      'vue-h-dialog__main--isresizing': _vm.dialogIsResizing,
      'vue-h-dialog__main--shadowmove': _vm.shadowMove,
    },style:(_vm.computedMainStyles)},[(_vm.showHeader)?_c('div',{ref:"header",staticClass:"vue-h-dialog__header"},[_c('div',{staticClass:"vue-h-dialog__title",class:{ 'vue-h-dialog--moveable': _vm.computedMoveable && !_vm.dialogIsMax },style:(_vm.computedTitleStyle)},[_vm._t("title"),(!_vm.$slots.title)?_c('span',{attrs:{"title":_vm.i18n(_vm.title)}},[_vm._v(_vm._s(_vm.i18n(_vm.title)))]):_vm._e()],2),_c('div',{staticClass:"vue-h-dialog__controls"},[(_vm.showMax && _vm.dialogIsMax)?_c('span',{staticClass:"vue-h-dialog__control-btn",attrs:{"title":_vm.i18n('还原')},on:{"click":_vm.resetDialogMax}},[_c('svg',{staticStyle:{"width":"1.2em","height":"1.2em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5026"}},[_c('path',{attrs:{"d":"M394.666667 349.866667L185.6 147.2l-42.666667 42.666667 209.066667 206.933333H204.8v59.733333h249.6V209.066667h-59.733333zM145.066667 876.8v-189.866667H85.333333v249.6h247.466667v-59.733333H147.2zM691.2 87.466667v59.733333H878.933333v189.866667H938.666667V87.466667zM740.266667 697.6c-14.933333-17.066667-27.733333-27.733333-36.266667-36.266667h147.2v-59.733333H601.6v247.466667H661.333333V704c8.533333 8.533333 19.2 21.333333 36.266667 36.266667 34.133333 32 83.2 78.933333 147.2 142.933333l21.333333 21.333333 42.666667-42.666666-21.333333-21.333334c-66.133333-64-115.2-110.933333-147.2-142.933333z"}})])]):_vm._e(),(_vm.showMax && !_vm.dialogIsMax)?_c('span',{staticClass:"vue-h-dialog__control-btn",attrs:{"title":_vm.i18n('最大化')},on:{"click":_vm.setDialogMax}},[_c('svg',{staticStyle:{"width":"1.0009765625em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1025 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2598"}},[_c('path',{attrs:{"d":"M968.155805 0.699317c30.370341 0 55.046244 24.675902 55.046244 55.046244v424.685268c0 30.370341-24.675902 55.046244-55.046244 55.046244-30.370341 0-55.046244-24.675902-55.046244-55.046244V55.645659l55.046244 55.046243H536.377463c-30.370341 0-55.046244-24.675902-55.046243-55.046243S506.007122 0.599415 536.377463 0.599415h431.778342z m-913.108293 1019.604293c-30.370341 0-55.046244-24.675902-55.046244-55.046244V540.572098c0-30.370341 24.675902-55.046244 55.046244-55.046244s55.046244 24.675902 55.046244 55.046244v424.685268l-55.046244-55.046244H486.825854c30.370341 0 55.046244 24.675902 55.046244 55.046244 0 30.370341-24.675902 55.046244-55.046244 55.046244H55.047512z m0 0"}})])]):_vm._e(),(_vm.showClose)?_c('span',{staticClass:"vue-h-dialog__control-btn",attrs:{"title":_vm.i18n('关闭')},on:{"click":_vm.closeBtnClickHandler}},[_c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1939"}},[_c('path',{attrs:{"d":"M521.693867 449.297067L111.4112 39.0144a51.2 51.2 0 1 0-72.430933 72.362667l410.282666 410.3168-410.282666 410.3168a51.2 51.2 0 1 0 72.3968 72.3968l410.3168-410.282667 410.3168 410.282667a51.2 51.2 0 1 0 72.3968-72.362667l-410.282667-410.350933 410.282667-410.282667a51.2 51.2 0 1 0-72.3968-72.3968l-410.282667 410.282667z"}})])]):_vm._e()])]):_vm._e(),_c('div',{ref:"content",staticClass:"vue-h-dialog__content",style:(_vm.computedContentStyles)},[_c('el-scrollbar',{ref:"scrollbar",attrs:{"wrap-class":"vue-h-dialog__scrollbar-wrap","view-class":"vue-h-dialog__scrollbar-view"}},[_vm._t("default"),_c('div',{ref:"htmlBox",staticClass:"vue-h-dialog__htmlbox"}),_c('div',{ref:"componentsBox",staticClass:"vue-h-dialog__componentsbox"})],2),(_vm.loading)?_c('div',{staticClass:"vue-h-dialog__loading-mask"},[_c('div',{staticClass:"vue-h-dialog__loading-spinner"},[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]),(_vm.loadingText)?_c('div',{staticClass:"vue-h-dialog__loading-text"},[_vm._v(_vm._s(_vm.i18n(_vm.loadingText)))]):_vm._e()])]):_vm._e()],1),(_vm.showFooter)?_c('div',{ref:"footer",staticClass:"vue-h-dialog__footer"},[_vm._t("footer"),_vm._l((_vm.buttons),function(button,buttonIdx){return _c('button',{staticClass:"vue-h-dialog__button",class:_vm.getCustomizedButtonClass(button),style:(button.style),attrs:{"keys":buttonIdx,"disabled":_vm.loading || _vm.isOnDelayTicking},on:{"click":function($event){return _vm.callCustomizedButtonHandler(button.handler)}}},[_c('span',[_vm._v(_vm._s(_vm.i18n(button.text)))])])}),(!_vm.$slots.footer && !_vm.buttons.length)?[(_vm.showOkBtn)?_c('button',{staticClass:"vue-h-dialog__button vue-h-dialog__button--primary",class:{ 'is-disabled': _vm.loading || _vm.isOnDelayTicking },attrs:{"disabled":_vm.loading || _vm.isOnDelayTicking},on:{"click":_vm.okBtnClickHandler}},[_c('span',[_vm._v(_vm._s(_vm.i18n(_vm.okBtnText)))])]):_vm._e(),(_vm.showCancelBtn)?_c('button',{staticClass:"vue-h-dialog__button",class:{ 'is-disabled': _vm.isOnDelayTicking },attrs:{"disabled":_vm.isOnDelayTicking},on:{"click":_vm.cancelBtnClickHandler}},[_c('span',[_vm._v(_vm._s(_vm.i18n(_vm.cancelBtnText)))])]):_vm._e()]:_vm._e()],2):_vm._e(),_vm._t("cover"),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogIsMoving || _vm.dialogIsResizing),expression:"dialogIsMoving || dialogIsResizing"}],staticClass:"vue-h-dialog__main-disable-mask"}),(_vm.moveable && !_vm.dialogIsMax)?_c('div',{staticClass:"vue-h-dialog__drag-area",style:(_vm.dragArea),on:{"mousedown":_vm.moveMouseDownHandler}}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogIsMoving && _vm.shadowMove),expression:"dialogIsMoving && shadowMove"}],staticClass:"vue-h-dialog__shadow",style:(_vm.computedShadowStyles)}),(_vm.resize)?_vm._l((_vm.computedResizebarsToRender),function(side){return _c('div',{key:side,staticClass:"vue-h-dialog__resize-bar",class:[("vue-h-dialog__resize-bar--" + side)],on:{"mousedown":_vm.resizeMouseDownHandler,"mouseup":_vm.resizeMouseUpHandler,"mousemove":function($event){return _vm.resizeMouseMoveHandler($event, side)}}})}):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/package/src/main.vue?vue&type=template&id=7e12b885&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-float.js
var es_number_parse_float = __webpack_require__("c35a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("4795");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js









function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./src/package/src/style.less
var src_style = __webpack_require__("eaee");

// EXTERNAL MODULE: ./src/components/scrollbar/scrollbar.css
var scrollbar = __webpack_require__("aa6b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-names.js
var es_object_get_own_property_names = __webpack_require__("7039");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.define-property.js
var es_reflect_define_property = __webpack_require__("3f3a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.delete-property.js
var es_reflect_delete_property = __webpack_require__("ac16");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js
var es_reflect_get_own_property_descriptor = __webpack_require__("9e4a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.get-prototype-of.js
var es_reflect_get_prototype_of = __webpack_require__("7f78");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.own-keys.js
var es_reflect_own_keys = __webpack_require__("1bf2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.set.js
var es_reflect_set = __webpack_require__("7ed3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.set-prototype-of.js
var es_reflect_set_prototype_of = __webpack_require__("8b9a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.fixed.js
var es_string_fixed = __webpack_require__("c7cd");

// CONCATENATED MODULE: ./src/utils/helper.js












































function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 一些工具方法
 * @author huyk<bengda@outlook.com>
 * @version 0.0.2
 * @module Helper
 */



/**
 * @typedef {{ [propName: string]: any }|array|function} complexValue
 */

/**
 * @typedef {string|number|symbol} propertyKey
 */
// d.ts: type complexValue = { [propName: string]: any } | array | function;
// d.ts: type propertyKey = string | number | symbol;

/**
 * split url to hashUrl and queryUrl
 * NOTE 目前对于foo.com/?a=a&b=/#/view这种形式的地址，忽略 # 两边的 /，这个判定定义为 HASH_SPLIT_REG
 * 更加合法的写法应该是 foo.com?a=a&b=#/view，左边的 / 是不允许存在的
 */

var HASH_SPLIT_REG = /\/?#\/?/;
/**
 * get query name-value strings
 */

var QUERY_REG = /(?:\?(.+))/; // tips

var TIP_HAS_CIRCULAR_STRUCTURE = 'has circular structure';
/**
 * 创建一个对象
 * @param {{ [propName: string]: any }} [prototype=null]
 * @param {{ [propName: string]: any }} descriptors
 */

function objectCreate() {
  var prototype = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var descriptors = arguments.length > 1 ? arguments[1] : undefined;
  return Object.create(prototype, descriptors);
}
/**
 * 获取对象原型
 * @returns {complexValue|null}
 */

function getPrototype(o) {
  return Reflect.getPrototypeOf(o);
}
/**
 * 设置对象原型
 */

function setPrototype(o, proto) {
  return Reflect.setPrototypeOf(o, proto);
}
/**
 * 对象是否有非继承属性
 * @param {complexValue} obj
 * @param {propertyKey} prop
 * @returns {boolean}
*/

function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/**
 * 获取对象键名工厂函数
 */

function _getKeysFactory(getKeysNativeFunc) {
  /**
   * @param {{[propName: string]: any}} obj
   * @param {boolean} [containProto=false]
   */
  return function getKeysFactory(obj) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$containProto = _ref.containProto,
        containProto = _ref$containProto === void 0 ? false : _ref$containProto;

    try {
      assertComplex(obj);
    } catch (error) {
      return [];
    }

    var props = [];
    [].push.apply(props, getKeysNativeFunc(obj));

    if (containProto) {
      var proto = getPrototype(obj);

      if (proto) {
        // NOTE 将__proto__属性也包含进去，虽然这不是一个标准属性
        // 只遍历一级原型
        [].push.apply(props, ['__proto__'].concat(_toConsumableArray(getKeysFactory(proto, {
          containProto: false
        }))));
      }
    }

    return props;
  };
}
/**
 * 获取对象的key名
 * 不包含不可枚举属性
 * 不包含symbol
 * 注意此方法不会去查找原型的原型，也就是最多只查找原型链上的第一级
 * @param {complexValue} obj
 * @param {boolean} [containProto=false] - 包含原型上的property，如果包含原型，可能会得到同名property
 * @return {array}
 */


var getPropertyKeys = _getKeysFactory(Object.keys);
/**
 * 获取对象的key名，包含不可枚举属性，不包含symbol
 * 注意此方法不会去查找原型的原型，也就是最多只查找原型链上的第一级
 * @param {complexValue} obj
 * @param {boolean} [containProto=false] - 包含原型上的property，如果包含原型，可能会得到同名property
 * @return {array}
 */

var getPropertyNames = _getKeysFactory(Object.getOwnPropertyNames);
/**
 * 获取对象的symbol键名
 * 不包含不可枚举属性
 * 注意此方法不会去查找原型的原型，也就是最多只查找原型链上的第一级
 * @param {complexValue} obj
 * @param {boolean} [containProto=false] - 包含原型上的property，如果包含原型，可能会得到同名property
 * @return {array}
 */

var getSymbolKeys = _getKeysFactory(function (obj) {
  var alls = Object.getOwnPropertySymbols(obj);
  return alls.filter(function (k) {
    var descriptor = Reflect.getOwnPropertyDescriptor(obj, k);
    return descriptor.enumerable;
  });
});
/**
 * 获取对象的symbol键名
 * 包含不可枚举属性
 * 注意此方法不会去查找原型的原型，也就是最多只查找原型链上的第一级
 * @param {complexValue} obj
 * @param {boolean} [containProto=false] - 包含原型上的property，如果包含原型，可能会得到同名property
 * @return {array}
 */

var getSymbolNames = _getKeysFactory(Object.getOwnPropertySymbols);
/**
 * 获取所有键名
 * 包含symbol
 * 不包含不可枚举属性
 * 注意此方法不会去查找原型的原型，也就是最多只查找原型链上的第一级
 * @param {complexValue} obj
 * @param {boolean} [containProto=false] - 如果包含原型，可能会得到同名property
 * @returns {array}
*/

var getAllKeys = _getKeysFactory(function (obj) {
  var alls = Reflect.ownKeys(obj);
  return alls.filter(function (k) {
    var descriptor = Reflect.getOwnPropertyDescriptor(obj, k);
    return descriptor.enumerable;
  });
});
/**
 * 获取所有键名
 * 包含symbol
 * 包含不可枚举属性
 * 注意此方法不会去查找原型的原型，也就是最多只查找原型链上的第一级
 * 如果查找原型则返回会自动添加一个__proto__值
 * @param {complexValue} obj
 * @param {boolean} [containProto=false] - 如果包含原型，可能会得到同名property
 * @returns {array}
*/

var getAllNames = _getKeysFactory(Reflect.ownKeys);
/**
 * 映射遍历键的方法
 * @type {map}
 */

var KEYS_RANGE_HOOKS = new Map([[KEYS_RANGE.keys, getPropertyKeys], [KEYS_RANGE.names, getPropertyNames], [KEYS_RANGE.symbolKeys, getSymbolKeys], [KEYS_RANGE.symbols, getSymbolNames], [KEYS_RANGE.enumerable, getAllKeys], [KEYS_RANGE.all, getAllNames]]);
/**
 * 是否在对象内部引用了自身
 * @param {complexValue} arg
 * @param {complexValue} root - 某些时候需要指定顶级入口；如 o = { s: { s1: o } };_isReferencedInsideSelf(o.s.s1, o)
 * @param {set} [stack=new Set()] - 暂存池
 * @param {complexValue} rawArg - arg本身
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @param {boolean} [containProto=false] - 是否包含原型
 */

function _isReferencedInsideSelf(arg) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$root = _ref2.root,
      root = _ref2$root === void 0 ? null : _ref2$root,
      _ref2$keysRange = _ref2.keysRange,
      keysRange = _ref2$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref2$keysRange,
      _ref2$stack = _ref2.stack,
      stack = _ref2$stack === void 0 ? new Set() : _ref2$stack,
      _ref2$containProto = _ref2.containProto,
      containProto = _ref2$containProto === void 0 ? false : _ref2$containProto,
      rawArg = _ref2.rawArg;

  if (rawArg === arg) {
    return true;
  }

  if (stack.has(arg) && rawArg !== arg) {
    return false;
  }

  stack.add(arg);
  var optsSelf = {
    root: root,
    stack: stack,
    rawArg: rawArg || arg,
    containProto: false
  }; // 这里获取键名传了false是为了避免同名键名，所以后面需要再遍历一次

  var properties = KEYS_RANGE_HOOKS.get(keysRange)(arg, {
    containProto: false
  });
  var flag = properties.some(function (prop) {
    /**
     * 例如
     * o = { s1: { s2: { s3: o } } }
     * 如果不传root，那么o.s1，o.s1.s2都是循环引用的，这显然不符合预期
     */
    if (root && root === arg[prop]) {
      return false;
    }

    if (isComplex(arg[prop])) {
      return _isReferencedInsideSelf(arg[prop], optsSelf);
    }

    return false;
  });
  var proto = getPrototype(arg);

  if (containProto) {
    // 去遍历一级原型对象
    return flag || _isReferencedInsideSelf(proto, optsSelf);
  }

  return flag;
}
/**
 * 是否在对象内部引用了自身
 * @param {complexValue} arg
 * @param {complexValue} root - 某些时候需要指定顶级入口；如 o = { s: { s1: o } };_isReferencedInsideSelf(o.s.s1, o)
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式。enumerable：只遍历可枚举属性，symbol：只遍历symbol属性，enumerable+symbol：enumerable和symbol属性集合，all：所有属性
 * @param {boolean} [containProto=false] - 是否包含原型
 */


function isReferencedInsideSelf(arg) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      root = _ref3.root,
      _ref3$keysRange = _ref3.keysRange,
      keysRange = _ref3$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref3$keysRange,
      _ref3$containProto = _ref3.containProto,
      containProto = _ref3$containProto === void 0 ? false : _ref3$containProto;

  assertComplex(arg);
  composeAssert(root, [isComplex, isNull, isUndefined]);
  return _isReferencedInsideSelf(arg, {
    root: arg === root ? undefined : root,
    keysRange: keysRange,
    containProto: containProto
  });
}
/**
 * 是否有循环引用结构
 * @param {complexValue} arg
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @param {boolean} [containProto=false] - 是否检查原型，只包含arg的一级原型对象
*/

function hasCircularStructure(arg) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref4$keysRange = _ref4.keysRange,
      keysRange = _ref4$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref4$keysRange,
      _ref4$containProto = _ref4.containProto,
      containProto = _ref4$containProto === void 0 ? false : _ref4$containProto;

  assertComplex(arg);
  var optsSelf = {
    keysRange: keysRange,
    containProto: false
  }; // 这里获取键名传了false是为了避免同名键名，所以后面需要再遍历一次

  var keys = KEYS_RANGE_HOOKS.get(keysRange)(arg, {
    containProto: false
  });
  var flag = isReferencedInsideSelf(arg, optsSelf) || keys.some(function (k) {
    var v = arg[k]; // NOTE fn.prototype.constructor === fn

    if (isFunction(arg) && k === 'prototype' && isObject(v) && v.constructor === arg) {
      return false;
    }

    if (isComplex(v)) {
      return hasCircularStructure(v, optsSelf);
    }

    return false;
  });
  var proto = getPrototype(arg);

  if (containProto && proto) {
    // 去遍历一级原型对象
    return flag || hasCircularStructure(proto, optsSelf);
  }

  return flag;
}
/**
 * 获取循环引用结构
 * @param {complexValue} arg
 * @param {complexValue} rawArg
 * @param {string[]} [key] - 循环结构的key名
 * @param {[][]} [result] - 结果，[[[k], v]]
 * @param {boolean} [containProto=false] - 是否包含原型
 * @param {boolean} [checkReferContainProto=false] - 使用isReferencedInsideSelf判断时是否包含原型
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @returns {string[]any[]}
 * @private
*/

function _getCircularStructure(arg, _ref5) {
  var rawArg = _ref5.rawArg,
      key = _ref5.key,
      _ref5$result = _ref5.result,
      result = _ref5$result === void 0 ? [] : _ref5$result,
      _ref5$containProto = _ref5.containProto,
      containProto = _ref5$containProto === void 0 ? false : _ref5$containProto,
      _ref5$checkReferConta = _ref5.checkReferContainProto,
      checkReferContainProto = _ref5$checkReferConta === void 0 ? false : _ref5$checkReferConta,
      _ref5$keysRange = _ref5.keysRange,
      keysRange = _ref5$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref5$keysRange;
  var optsInside = {
    root: rawArg || arg,
    keysRange: keysRange,
    containProto: checkReferContainProto
  };
  var optsSelf = {
    rawArg: rawArg || arg,
    result: result,
    containProto: false,
    checkReferContainProto: checkReferContainProto,
    keysRange: keysRange
  };

  if (isReferencedInsideSelf(arg, optsInside)) {
    result.push([key || [], arg]);
  } // 这里获取键名传了false是为了避免同名键名，所以后面需要再遍历一次


  var properties = KEYS_RANGE_HOOKS.get(keysRange)(arg, {
    containProto: false
  });
  properties.forEach(function (prop) {
    if (isComplex(arg[prop])) {
      var keyPath = (key || []).concat(prop);

      if (isReferencedInsideSelf(arg[prop], optsInside)) {
        result.push([keyPath, arg[prop]]);
      } else {
        _getCircularStructure(arg[prop], _objectSpread({}, optsSelf, {
          key: keyPath
        }));
      }
    }
  });
  var proto = getPrototype(arg);

  if (containProto && proto) {
    // 去遍历一级原型对象
    return _getCircularStructure(proto, _objectSpread({}, optsSelf, {
      key: ['__proto__']
    }));
  }

  return result;
}
/**
 * 获取循环引用结构
 * @param {complexValue} arg
 * @param {complexValue} root - 根节点对象
 * @param {boolean} [containProto=false] - 是否包含原型
 * @param {boolean} [checkReferContainProto=false] - 使用isReferencedInsideSelf判断时是否包含原型
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 */


function getCircularStructure(arg) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      root = _ref6.root,
      _ref6$containProto = _ref6.containProto,
      containProto = _ref6$containProto === void 0 ? false : _ref6$containProto,
      _ref6$checkReferConta = _ref6.checkReferContainProto,
      checkReferContainProto = _ref6$checkReferConta === void 0 ? false : _ref6$checkReferConta,
      _ref6$keysRange = _ref6.keysRange,
      keysRange = _ref6$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref6$keysRange;

  assertComplex(arg);
  return _getCircularStructure(arg, {
    rawArg: root,
    key: undefined,
    result: [],
    containProto: containProto,
    checkReferContainProto: checkReferContainProto,
    keysRange: keysRange
  });
}
/**
 * 首字母大写, 其它的小写
 * @param {string} word
 */

function capitalize(word) {
  assertString(word);
  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}
/**
 * 第一个字母大写
 * @param {string} word
 */

function capitalizeFirstLetter(word) {
  assertString(word);
  return word.replace(/([a-zA-Z])/, function (letter) {
    return letter.toUpperCase();
  });
}
/**
 * 获取函数名称
 * @param {function} fn
 * @return {string}
 * @example
 * var result = getFunctionName(Object) // 'Object'
 * function A() {}
 * result = getFunctionName(A) // 'A'
 */

function getFunctionName(fn) {
  assertFunction(fn);
  return fn.name || fn.toString().match(/^function\s*?(\w+)\(/) || 'anonymous';
}
/**
 * 驼峰式命名
 * 将aa-bb-xx 转为aaBbXx
 * @param {string} str
 * @param {boolean} [ignoreHeadKebab=false] - 忽略首位-，如为true则-webkit-border-radius会转为webkitBorderRadius
 */

function camelCase(str) {
  var ignoreHeadKebab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  assertString(str);
  return str.replace(/([:\-_]+(.))/g, function (_, separator, letter, offset) {
    return offset >= Number(ignoreHeadKebab) ? letter.toUpperCase() : letter;
  });
}
/**
 * 帕斯卡命名
 * 将aa-bb-xx转为AaBbXx
 * @param {string} str - input
*/

function pascalCase(str) {
  assertString(str);
  return capitalizeFirstLetter(camelCase(str));
}
/**
 * 短折线命名
 * 将aaBbXx 转为 aa-bb-xx
 * @param {boolean} trimHeadKebab - AaBbXx => -aa-bb-xx;trimHeadKebab=true则舍弃首部-字符
*/

function kebabCase(str) {
  var trimHeadKebab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  assertString(str);
  var res = str.replace(/([A-Z])/g, function (letter) {
    return "-".concat(letter.toLowerCase());
  });
  return trimHeadKebab ? res.replace(/^-/, '') : res;
}
/**
 * 合并两个复杂数据类型
 * @param {complexValue} target
 * @param {complexValue} source
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @param {symbol} [mergeStrategy=MERGE_STRATEGY.shadow] - 合并策略
 */

function _merge(target, source, _ref7) {
  var _ref7$keysRange = _ref7.keysRange,
      keysRange = _ref7$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref7$keysRange,
      _ref7$mergeStrategy = _ref7.mergeStrategy,
      mergeStrategy = _ref7$mergeStrategy === void 0 ? MERGE_STRATEGY.shadow : _ref7$mergeStrategy;
  assertComplex(target);
  assertComplex(source);
  var opts = {
    keysRange: keysRange,
    mergeStrategy: mergeStrategy
  };
  var sourceKeys = KEYS_RANGE_HOOKS.get(keysRange)(source, {
    containProto: false
  });
  sourceKeys.forEach(function (prop) {
    var descriptors = Reflect.getOwnPropertyDescriptor(source, prop);

    switch (mergeStrategy) {
      case MERGE_STRATEGY.shadow:
        // 只合并一级属性，行为类似Object.assign
        // NOTE 这里采用定义属性而不是set操作
        Reflect.defineProperty(target, prop, descriptors);
        break;

      case MERGE_STRATEGY.deep:
        if (isComplex(target[prop]) && isComplex(source[prop])) {
          _merge(target[prop], source[prop], opts);
        } else {
          Reflect.defineProperty(target, prop, descriptors);
        }

        break;

      default:
        break;
    }
  });
  return target;
}
/**
 * 合并多个复杂类型数据
 * NOTE 这相当于浅拷贝，而且会影响第一个复杂类型数据。使用时建议第一个数据传空对象{}或空数组[]
 * @param {complexValue[]} toMergeArr - 复杂数据类型集合
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @param {symbol} [mergeStrategy=MERGE_STRATEGY.shadow] - 合并策略
 * @param {complextValue|null}
 */


function merge(toMergeArr) {
  var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref8$keysRange = _ref8.keysRange,
      keysRange = _ref8$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref8$keysRange,
      _ref8$mergeStrategy = _ref8.mergeStrategy,
      mergeStrategy = _ref8$mergeStrategy === void 0 ? MERGE_STRATEGY.shadow : _ref8$mergeStrategy;

  assertArray(toMergeArr);
  var opts = {
    keysRange: keysRange,
    mergeStrategy: mergeStrategy
  };
  var result = toMergeArr.reduce(function (acc, cur) {
    if (isComplex(acc) && isComplex(cur)) {
      return _merge(acc, cur, opts);
    }

    if (isComplex(acc)) {
      return acc;
    }

    return cur;
  });
  return isComplex(result) ? result : null;
}
/**
 * 数组填充默认数据
 * @param {array} arr - 要填充的数组
 * @param {any} fill - 填充值。如果是一个工厂函数则使用返回值
 * @returns {array}
 */

function arrayFill(arr, fill) {
  assertArray(arr);

  for (var i = 0; i < arr.length; i += 1) {
    arr[i] = isFunction(fill) ? fill(i) : fill;
  }

  return arr;
}
/**
 * 数组去重
 * 利用ES6的Set去重。引用地址相同的对象视为重复对象
 * @param {array} arr
 * @param {propertyKey} [key] - 如果数组的项是对象，key作为每一项的唯一标记
 * @returns {array} - 返回一个新数组
*/

function arrayUnique(arr, key) {
  assertArray(arr);

  if (key) {
    var hash = [];
    var keys = [];
    arr.forEach(function (item) {
      if (!keys.includes(item[key])) {
        keys.push(item[key]);
        hash.push(item);
      }
    });
    return hash;
  }

  return _toConsumableArray(new Set(arr));
}
/**
 * 对数组做并集
 * arr2的数据合并到arr1
 * NOTE 数据合并行为会对原始arr1造成影响
 * @param {array} arr1
 * @param {array} arr2
 * @param {propertyKey} [key] - 如果数组的项是对象，key作为每一项的唯一标记
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @param {symbol} [mergeStrategy=MERGE_STRATEGY.shadow] - [MERGE_STRATEGY] 合并策略
 * @returns {array}
*/

function arrayUnion(arr1, arr2) {
  var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      key = _ref9.key,
      _ref9$keysRange = _ref9.keysRange,
      keysRange = _ref9$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref9$keysRange,
      _ref9$mergeStrategy = _ref9.mergeStrategy,
      mergeStrategy = _ref9$mergeStrategy === void 0 ? MERGE_STRATEGY.shadow : _ref9$mergeStrategy;

  assertArray(arr1);
  assertArray(arr2);
  var hasKey = !!key;
  arr2.forEach(function (item) {
    var keyValue = hasKey ? item[key] : item;
    var tarIdx = arr1.findIndex(function (p) {
      return keyValue === (hasKey ? p[key] : p);
    });

    if (tarIdx > -1) {
      var tar = arr1[tarIdx]; // 合并数据

      if (isComplex(item) && isComplex(tar)) {
        merge([tar, item], {
          keysRange: keysRange,
          mergeStrategy: mergeStrategy
        });
      } else {
        arr1[tarIdx] = item;
      }
    } else {
      // 新元素
      arr1.push(item);
    }
  });
  return arr1;
}
/**
 * 对数组做差集
 * arr1 - arr2
 * @param {array} arr1
 * @param {array} arr2
 * @param {propertyKey} [key] - 如果数组的项是对象，key作为每一项的唯一标记
 * @returns {array} - 返回一个新的数组
*/

function arrayDiffer(arr1, arr2) {
  var _ref10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      key = _ref10.key;

  assertArray(arr1);
  assertArray(arr2);
  var hasKey = !!key;
  var arr1Keys = arr1.map(function (item) {
    return key ? item[key] : item;
  });
  var arr2Keys = arr2.map(function (item) {
    return key ? item[key] : item;
  });
  return arr1.concat(arr2).filter(function (v) {
    return arr1Keys.includes(hasKey ? v[key] : v) && !arr2Keys.includes(hasKey ? v[key] : v);
  });
}
/**
 * 对数组做交集
 * NOTE 会对原始arr1数据造成影响
 * @param {array} arr1
 * @param {array} arr2
 * @param {propertyKey} [key] - 如果数组的项是对象，key作为每一项的唯一标记
 * @param {symbol} [keysRange=KEYS_RANGE.enumerable] - 遍历键的方式
 * @param {symbol} [mergeStrategy=MERGE_STRATEGY.shadow] - [MERGE_STRATEGY] 合并策略
 * @returns {array} - 返回一个新的数组
*/

function arrayInter(arr1, arr2) {
  var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      key = _ref11.key,
      _ref11$keysRange = _ref11.keysRange,
      keysRange = _ref11$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref11$keysRange,
      _ref11$mergeStrategy = _ref11.mergeStrategy,
      mergeStrategy = _ref11$mergeStrategy === void 0 ? MERGE_STRATEGY.shadow : _ref11$mergeStrategy;

  assertArray(arr1);
  assertArray(arr2);
  var opts = {
    key: key,
    keysRange: keysRange,
    mergeStrategy: mergeStrategy
  };
  var hasKey = !!key;
  var arr1Keys = arr1.map(function (item) {
    return key ? item[key] : item;
  });
  var arr2Keys = arr2.map(function (item) {
    return key ? item[key] : item;
  });
  return arrayUnion(arr1, arr2, opts).filter(function (v) {
    return arr1Keys.includes(hasKey ? v[key] : v) && arr2Keys.includes(hasKey ? v[key] : v);
  });
}
/**
 * 获取目标属性节点引用
 * @param {complexValue} root - 目标对象
 * @param {string|propertyKey[]} scheme - 属性路径。建议使用数组形式，描述最精确。
 * @param {boolean} [containProto=false] - 是否包含一级原型对象，不包含子级属性的原型
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @returns {{result: complexValue|null, key: any}}
*/

function _getNamespaceReference(root, scheme) {
  var _ref12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref12$containProto = _ref12.containProto,
      containProto = _ref12$containProto === void 0 ? false : _ref12$containProto,
      _ref12$keysRange = _ref12.keysRange,
      keysRange = _ref12$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref12$keysRange;

  assertComplex(root);
  composeAssert(scheme, [isString, isArray]);
  var opts = {
    containProto: false,
    keysRange: keysRange
  };
  var props = isArray(scheme) ? scheme : scheme.split('.');
  var checkNativeKey = isString(scheme);
  var refer = {
    result: null,
    key: null
  };
  var tar = root;
  props.some(function (key, index) {
    var properties = KEYS_RANGE_HOOKS.get(keysRange)(tar, {
      containProto: false
    });

    if (checkNativeKey) {
      // 对诸如 a.b.c 属性名进行支持
      var nativeKey = props.slice(index).join('.');

      if (properties.includes(nativeKey)) {
        refer.result = tar;
        refer.key = nativeKey;
        return true;
      }
    }

    if (properties.includes(key)) {
      if (index === props.length - 1) {
        refer.result = tar;
        refer.key = key;
        return true;
      }

      tar = tar[key]; // 中断遍历

      if (!isComplex(tar)) {
        refer.result = null;
        refer.key = key;
        return true;
      }
    } else {
      refer.result = null;
      refer.key = key;
      return true;
    }

    return false;
  });
  var proto = getPrototype(root);

  if (containProto && proto && !refer.result) {
    return _getNamespaceReference(proto, scheme, opts);
  }

  return refer;
}
/**
 * 获取目标属性节点引用，属性路径不存在则返回null
 * @param {complexValue} root - 目标对象
 * @param {string|propertyKey[]} scheme - 属性路径。建议使用数组形式，描述最精确。
 * 如果使用字符串如: a.b.c，那么有可能表示的是a.b.c这个属性，或a下的b.c属性或a下的b属性下的c字段，或a.b下的c字段。
 * 使用数组我们可以将上述情况精确表示出来，['a.b.c'], ['a', 'b.c'], ['a', 'b', 'c'], ['a.b', 'c']
 * @param {boolean} [containProto=false] - 是否包含一级原型对象，不包含子级属性的原型
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @returns {complexValue|null}
 * @example
 * var o = { a: { b: 'b' }, 'b.c': 'hhhh', b: { 'c.d': 'sss' } }
 * getNamespaceReference(o, 'a') // 返回 o
 * getNamespaceReference(o, 'c') // 返回 null
 * getNamespaceReference(o, 'a.b') // 返回 o.a
 * getNamespaceReference(o, 'a.c') // 返回 null
 * getNamespaceReference(o, 'b.c') // 返回 o
 * getNamespaceReference(o, 'b.c.d') // 返回 o.b
 * getNamespaceReference(o, ['b', 'c.d']); // 返回o.b
*/


function getNamespaceReference(root, scheme) {
  var _ref13 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref13$containProto = _ref13.containProto,
      containProto = _ref13$containProto === void 0 ? false : _ref13$containProto,
      _ref13$keysRange = _ref13.keysRange,
      keysRange = _ref13$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref13$keysRange;

  var tar = _getNamespaceReference(root, scheme, {
    containProto: containProto,
    keysRange: keysRange
  });

  return tar.result;
}
/**
 * 某个复杂数据类型是否存在某个指定命名空间（属性路径）
 * @param {complexValue} root - 目标对象
 * @param {string|propertyKey[]} scheme - 属性路径。建议使用数组形式，描述最精确。
 * 如果使用字符串如: a.b.c，那么有可能表示的是a.b.c这个属性，或a下的b.c属性或a下的b属性下的c字段。
 * 使用数组我们可以将上述情况精确表示出来，['a.b.c'], ['a', 'b.c'], ['a', 'b', 'c']
 * @param {boolean} [containProto=false] - 是否包含一级原型对象，不包含子级属性的原型
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @returns {boolean}
 * @example
 * var o = { a: { b: 'b' }, 'b.c': 'hhhh', b: { 'c.d': 'sss' } }
 * hasNamespace(o, 'a') // true
 * hasNamespace(o, 'c') // false
 * hasNamespace(o, 'a.b') // true
 * hasNamespace(o, 'a.c') // false
 * hasNamespace(o, 'b.c') // true
 * hasNamespace(o, 'b.c.d') // true
 * hasNamespace(o, ['b', 'c.d']); // true
*/

function hasNamespace(root, scheme) {
  var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref14$containProto = _ref14.containProto,
      containProto = _ref14$containProto === void 0 ? false : _ref14$containProto,
      _ref14$keysRange = _ref14.keysRange,
      keysRange = _ref14$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref14$keysRange;

  return !!getNamespaceReference(root, scheme, {
    containProto: containProto,
    keysRange: keysRange
  });
}
/**
 * 获取某个指定命名空间（属性路径）的值，属性路径不存在则返回undefined
 * @param {complexValue} root - 目标对象
 * @param {string|propertyKey[]} scheme - 属性路径。建议使用数组形式，描述最精确。
 * 如果使用字符串如: a.b.c，那么有可能表示的是a.b.c这个属性，或a下的b.c属性或a下的b属性下的c字段。
 * 使用数组我们可以将上述情况精确表示出来，['a.b.c'], ['a', 'b.c'], ['a', 'b', 'c']
 * @param {boolean} [containProto=false] - 是否包含一级原型对象，不包含子级属性的原型
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @returns {any|undefined}
 * @example
 * var o = { a: { b: 'b' }, 'b.c': 'hhhh', b: { 'c.d': 'sss' } }
 * namespace(o, 'a') // { b: 'b' }
 * namespace(o, 'c') // undefined
 * namespace(o, 'a.b') // 'b'
 * namespace(o, 'a.c') // undefined
 * namespace(o, 'b.c') // 'hhhh'
 * namespace(o, 'b.c.d') // 'sss'
 * namespace(o, ['b', 'c.d']); // 'sss'
*/

function namespace(root, scheme) {
  var _ref15 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref15$containProto = _ref15.containProto,
      containProto = _ref15$containProto === void 0 ? false : _ref15$containProto,
      _ref15$keysRange = _ref15.keysRange,
      keysRange = _ref15$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref15$keysRange;

  var refer = _getNamespaceReference(root, scheme, {
    containProto: containProto,
    keysRange: keysRange
  });

  return !!refer.result ? refer.result[refer.key] : undefined;
}
/**
 * 对某个指定命名空间（属性路径）进行赋值，属性路径不存在则抛出ReferenceError
 * 使用前最好判断路径是否存在
 * @param {complexValue} root - 目标对象
 * @param {string|propertyKey[]} scheme - 属性路径。建议使用数组形式，描述最精确。
 * 如果使用字符串如: a.b.c，那么有可能表示的是a.b.c这个属性，或a下的b.c属性或a下的b属性下的c字段。
 * 使用数组我们可以将上述情况精确表示出来，['a.b.c'], ['a', 'b.c'], ['a', 'b', 'c']
 * @param {any} value - 要设置的值
 * @param {boolean} [containProto=false] - 是否包含一级原型对象，不包含子级属性的原型
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @returns {boolean}
 * @example
 * var o = { a: { b: 'b' }, 'b.c': 'hhhh', b: { 'c.d': 'sss' } }
 * setNamespaceValue(o, 'a', { b: 'b', b1: 'b1' }) // { a: { b: 'b', b1: 'b1' }, 'b.c': 'hhhh', b: { 'c.d': 'sss' } }
 * setNamespaceValue(o, 'c') // ReferenceError
 * setNamespaceValue(o, 'a.b', 'B') // { a: { b: 'B', b1: 'b1' }, 'b.c': 'hhhh', b: { 'c.d': 'sss' } }
 * setNamespaceValue(o, 'a.c') // ReferenceError
 * setNamespaceValue(o, 'b.c', 'hello word!') // { a: { b: 'B', b1: 'b1' }, 'b.c': 'hello word!', b: { 'c.d': 'sss' } }
 * setNamespaceValue(o, 'b.c.d', 'this is the way') // { a: { b: 'B', b1: 'b1' }, 'b.c': 'hello word!', b: { 'c.d': 'this is the way' } }
 * setNamespaceValue(o, ['b', 'c.d']); // { a: { b: 'B', b1: 'b1' }, 'b.c': 'hello word!', b: { 'c.d': 'i have spoken' } }
*/

function setNamespaceValue(root, scheme, value) {
  var _ref16 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref16$containProto = _ref16.containProto,
      containProto = _ref16$containProto === void 0 ? false : _ref16$containProto,
      _ref16$keysRange = _ref16.keysRange,
      keysRange = _ref16$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref16$keysRange;

  var refer = _getNamespaceReference(root, scheme, {
    containProto: containProto,
    keysRange: keysRange
  });

  if (!refer.result) {
    throw new ReferenceError("you can not set value on a not exist namespace ".concat(scheme));
  }

  return Reflect.set(refer.result, refer.key, value);
}
/**
 * 创建一个形如 { a : { a1: '' } } 对象
 * 属性名建议使用数组来描述
 * @param {[][]} descriptors - 每项都是一个数组，arr[0]表示key名，arr[1]表示key值
 * @example
 * descriptors = [ ['a', 'aaaa'], ['b.c', 'sssss'] ] // 请不要使用让人困惑的属性描述。例如 b..c 或 .b.c等
 * createNestedObject(descriptors) // 输出 { a: 'aaaa', b: { c: 'sssss' } }
*/

function createNestedObject(descriptors) {
  assertArray(descriptors);
  var hoster = {};
  descriptors.forEach(function (_ref17) {
    var _ref18 = _slicedToArray(_ref17, 2),
        k = _ref18[0],
        v = _ref18[1];

    var keys = isArray(k) ? k : k.split('.');

    if (keys.length > 1) {
      keys.reduce(function (o, k1, idx1) {
        o[k1] = isObject(o[k1]) || isArray(o[k1]) ? o[k1] : {};
        o[k1] = idx1 === keys.length - 1 ? v : o[k1];
        return o[k1];
      }, hoster);
    } else {
      hoster[keys[0]] = v;
    }
  });
  return hoster;
}
/**
 * 保留指定的键值
 * 属性名建议使用数组来描述
 * @param {{ [propName: string]: any }|array} data
 * @param {string[]} properties - 键名。如['a', 'b', 'c.d']
 * @returns {{ [propName: string]: any }|array}
 */

function reserveProperties(data, properties) {
  composeAssert(data, [isArray, isObject]);
  var result = isObject(data) ? {} : [];
  properties.forEach(function (prop) {
    var keys = isArray(prop) ? prop : prop.split('.');
    keys.reduce(function (acc, k1, idx1) {
      if (isObject(acc.new) || isArray(acc.new) && (isObject(acc.raw) || isArray(acc.raw))) {
        if (idx1 === keys.length - 1) {
          acc.new[k1] = acc.raw[k1];
        } else {
          var temp = acc.raw[k1];

          if (isArray(temp)) {
            acc.new[k1] = acc.new[k1] || [];
          } else if (isObject(temp)) {
            acc.new[k1] = acc.new[k1] || {};
          } else {
            acc.new[k1] = acc.raw[k1];
          }
        }

        return {
          new: acc.new[k1],
          raw: acc.raw[k1]
        };
      }

      return {
        new: null,
        raw: null
      };
    }, {
      new: result,
      raw: data
    });
  });
  return result;
}
/**
 * 变换对象的key名。key值支持namespace形式，如果目标key不可配置则无法替换
 * @param {complexValue} root - 目标对象
 * @param {[][]} model - 二维数组。每一项为[k, v]，k表示将要被替换的root中的key（支持使用数组描述），v表示将要替换成的key名
 * @param {boolean} [containProto=false] - 是否包含一级原型对象，不包含子级属性的原型
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @returns {boolean} 所有的键名替换都成功才返回true否则返回false
 * @example
* root = { a: 'a', b: 'b', c: { c1: 'c1' } } // 请不要使用让人困惑的属性描述。例如 b..c 或 .b.c等
* transformObjectKeys(root, [['a', 'A'], ['b', 'B'], ['c.c1', 'C1']]); // 返回：{ A: 'a', B: 'b', c: { C1: 'c1' } }
* // 注意先后顺序
* transformObjectKeys(root, [['a', 'A'], ['b', 'B'], ['c', 'C'], ['c.c1', 'C1']]); // 返回：{ A: 'a', B: 'b', C: { c1: 'c1' } }
* transformObjectKeys(root, [['a', 'A'], ['b', 'B'], ['c.c1', 'C1'], ['c', 'C']]); // 返回：{ A: 'a', B: 'b', C: { C1: 'c1' } }
*/

function transformObjectKeys(root, model) {
  var _ref19 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref19$containProto = _ref19.containProto,
      containProto = _ref19$containProto === void 0 ? false : _ref19$containProto,
      _ref19$keysRange = _ref19.keysRange,
      keysRange = _ref19$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref19$keysRange;

  assertComplex(root);
  assertArray(model);
  var opts = {
    containProto: containProto,
    keysRange: keysRange
  };
  var success = true;
  model.forEach(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
        k = _ref21[0],
        v = _ref21[1];

    var tar = _getNamespaceReference(root, k, opts);

    if (tar.result) {
      var descriptor = Reflect.getOwnPropertyDescriptor(tar.result, tar.key);

      if (Reflect.deleteProperty(tar.result, tar.key)) {
        success = Reflect.defineProperty(tar.result, v, descriptor) && success;
      } else {
        success = false;
      }
    } else {
      success = false;
    }
  });
  return success;
}
/**
 * 深度克隆，解除引用
 * 目标： 只对strictObject和数组解除引用
 * 注意：
 * 1.对于循环引用对象抛出错误
 * 2.原型的处理只会对自己本身的原型进行处理，不处理内部属性对象的原型
 * 3.数组的原型永远是Array.prototype，并且不论copyAll是否为true，数组总是会有length属性
 * 4.舍弃set和get方法。
 * 5.没有做尾递归优化，拷贝层级深的对象，可能会出现堆栈溢出情况
 * 对于vue等框架变量是响应式的，这里舍弃set和get方法，毕竟是只关心拷贝后的值，一般只做数据备份而已
 * @param {any} target - 要克隆的目标
 * @param {symbol} [keysRange = KEYS_RANGE.enumerable] - 遍历键范围
 * @param {boolean} [copyProto=true] - 是否复制原型（注意这不是说会对原型解除引用，只是复用了原来的原型），否则会使用Object.create(null)创建一个没有原型的对象;
 * @param {{ [propName: string]: any }} [theNewProto=null] - 当copyProto=false时，如果提供了此值则会作为新的原型
 * @returns {any}
*/

function deepClone(target) {
  var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref22$keysRange = _ref22.keysRange,
      keysRange = _ref22$keysRange === void 0 ? KEYS_RANGE.enumerable : _ref22$keysRange,
      _ref22$copyProto = _ref22.copyProto,
      copyProto = _ref22$copyProto === void 0 ? true : _ref22$copyProto,
      _ref22$theNewProto = _ref22.theNewProto,
      theNewProto = _ref22$theNewProto === void 0 ? null : _ref22$theNewProto;

  // 非array或isType !== 'object' 返回本身
  if (!isStrictObject(target) && !isArray(target)) {
    return target;
  } // check circular structure


  if (hasCircularStructure(target, {
    keysRange: keysRange,
    containProto: false
  })) {
    throw new Error(TIP_HAS_CIRCULAR_STRUCTURE);
  }

  var descriptors = {};
  var keys = KEYS_RANGE_HOOKS.get(keysRange)(target, {
    containProto: false
  });
  keys.forEach(function (prop) {
    return descriptors[prop] = Reflect.getOwnPropertyDescriptor(target, prop);
  });
  Object.entries(descriptors).forEach(function (_ref23) {
    var _ref24 = _slicedToArray(_ref23, 2),
        prop = _ref24[0],
        descriptor = _ref24[1];

    var value = hasOwn(descriptor, 'get') && isFunction(descriptor.get) ? descriptor.get() : descriptor.value; // 对内部属性值解除引用

    merge([descriptor, {
      value: deepClone(value, {
        keysRange: keysRange,
        copyProto: true,
        theNewProto: null
      })
    }]); // 舍弃get

    Reflect.deleteProperty(descriptor, 'get');

    if (hasOwn(descriptor, 'set')) {
      // 舍弃set
      Reflect.deleteProperty(descriptor, 'set'); // 设置可写属性

      merge([descriptor, {
        writable: true
      }]);
    }
  });

  if (isArray(target)) {
    // 对于数组单独设置不可遍历的属性length
    descriptors.length = descriptors.length || {
      value: target.length,
      enumerable: false,
      configurable: false,
      writable: true
    };
    return Array.from(Object.create(Array.prototype, descriptors));
  }

  var prototype = function () {
    if (copyProto) {
      return getPrototype(target);
    }

    return theNewProto || null;
  }();

  return Object.create(prototype, descriptors);
}
/**
 * 根据URL获取参数对象
 * NOTE 目前对于foo.com/?a=a&b=/#/view这种形式的地址，忽略 # 两边的 /，这个判定定义为 HASH_SPLIT_REG
 * 更加合法的写法应该是 foo.com?a=a&b=#/view，左边的 / 是不允许存在的
 * @param {string} url
 * @param {boolean} [decode=true] - 是否解码
 * @param {string} [mode=QUERY_MODE.query] - 模式。[query|hash]
 * query:普通的?后面的参数
 * hash:#后面字符串的参数
 * @returns {{ [propName: string]: string }}
*/

function getUrlQuery(url) {
  var _ref25 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref25$mode = _ref25.mode,
      mode = _ref25$mode === void 0 ? QUERY_MODE.query : _ref25$mode,
      _ref25$decode = _ref25.decode,
      decode = _ref25$decode === void 0 ? true : _ref25$decode;

  assertString(url);
  assertEnum(mode, [QUERY_MODE.query, QUERY_MODE.hash]);
  var urlSplits = url.split(HASH_SPLIT_REG);

  if (mode === QUERY_MODE.hash) {
    return getUrlQuery(urlSplits[1] || '', {
      mode: QUERY_MODE.query,
      decode: decode
    });
  }

  var theRequest = {};
  var urlPath = urlSplits[0] || '';
  var queryStrRes = QUERY_REG.exec(urlPath);
  var queryStrings = queryStrRes ? queryStrRes[1] : '';
  var strs = queryStrings ? queryStrings.split('&') : [];
  strs.forEach(function (unitStr) {
    var _ref26 = /^([^=]+)=(.*)$/.exec(unitStr) || [],
        name = _ref26[1],
        value = _ref26[2];

    if (name) {
      theRequest[name] = decode ? decodeURIComponent(value) : value;
    }
  });
  return theRequest;
}
/**
 * 解析query和hash参数
 * @param {string} url - 合理的url地址
 * @param {boolean} [decode=true]
 * @returns {{ url: string, query: { [propName: string]: string }, hash: { [propName: string]: string } }}
 */

function urlParser(url) {
  var decode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  assertString(url);
  return {
    url: url,
    query: getUrlQuery(url, {
      mode: QUERY_MODE.query,
      decode: decode
    }),
    hash: getUrlQuery(url, {
      mode: QUERY_MODE.hash,
      decode: decode
    })
  };
}
/**
 * 扩展url
 * @param {string} url
 * @param {{ [propName: string]: string }} [query] 往url中添加参数
 * @param {(string|RegExp)[]} [remove] 移除url中的参数，可以是正则表达式（必需为正则对象）
 * @param {boolean} [encode=true] 是否对键值编码 默认true
 * @param {string} [mode=QUERY_MODE.query] - 模式.[query|hash]
 * @return {string}
 */

function extendUrl(url) {
  var _ref27 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref27$query = _ref27.query,
      query = _ref27$query === void 0 ? {} : _ref27$query,
      _ref27$remove = _ref27.remove,
      remove = _ref27$remove === void 0 ? [] : _ref27$remove,
      _ref27$mode = _ref27.mode,
      mode = _ref27$mode === void 0 ? QUERY_MODE.query : _ref27$mode,
      _ref27$encode = _ref27.encode,
      encode = _ref27$encode === void 0 ? true : _ref27$encode;

  assertString(url);
  assertObject(query);
  assertArray(remove);
  assertEnum(mode, [QUERY_MODE.query, QUERY_MODE.hash]);
  var urlRawQuery = getUrlQuery(url, {
    mode: mode,
    decode: encode
  });
  var querys = [];

  var _url$split = url.split(HASH_SPLIT_REG),
      _url$split$ = _url$split[0],
      queryUrl = _url$split$ === void 0 ? '' : _url$split$,
      _url$split$2 = _url$split[1],
      hashUrl = _url$split$2 === void 0 ? '' : _url$split$2;

  var hashMatchRes = url.match(HASH_SPLIT_REG);
  var hashSplitChar = hashMatchRes ? hashMatchRes[0] : '';
  var queryRes = QUERY_REG.exec(queryUrl);
  var queryMark = "@query".concat(Date.now(), "@");
  var queryStr = queryRes ? queryRes[1] : '';
  var $queryUrl = queryUrl;

  if (queryStr) {
    $queryUrl = $queryUrl.replace(queryStr, queryMark);
  }

  merge([urlRawQuery, query]);
  Object.keys(urlRawQuery).forEach(function (key) {
    var flag = remove.some(function (item) {
      if (Object.prototype.toString.call(item) === '[object RegExp]') {
        return item.test(key);
      }

      return item === key;
    });

    if (!flag) {
      querys.push(["".concat(key, "=").concat(encode ? encodeURIComponent(urlRawQuery[key]) : urlRawQuery[key])]);
    }
  });
  var path = querys.join('&');

  switch (mode) {
    case QUERY_MODE.query:
      {
        queryStr = path;

        if ($queryUrl.indexOf(queryMark) < 0) {
          $queryUrl = queryUrl + queryMark;
        }

        if (path && !/\?$/.test($queryUrl.split(queryMark)[0])) {
          queryStr = "?".concat(queryStr);
        }

        return $queryUrl.replace(queryMark, queryStr) + hashSplitChar + hashUrl;
      }

    case QUERY_MODE.hash:
      {
        var hashUrlResult = extendUrl(hashUrl, {
          query: query,
          remove: remove,
          mode: QUERY_MODE.query,
          encode: encode
        });
        return queryUrl + (!!hashUrlResult ? hashSplitChar || '#' : hashSplitChar) + hashUrlResult;
      }
  }

  return url;
}
/**
 * 产生唯一标识 uuid
 * @param {number} len
 * @param {number} rad - 基数 2~62。只需要数字和大写字母使用36就可以了
 * @returns {string}
 */

function generateUuid(len, rad) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var radix = rad || chars.length;

  if (len) {
    var uuid = []; // Compact form

    for (var i = 0; i < len; i += 1) {
      // eslint-disable no-bitwise
      uuid[i] = chars[0 | Math.random() * radix];
    }

    return uuid.join('');
  }

  var format = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
  return format.replace(/X+/g, function (m) {
    return generateUuid(m.length, 62);
  });
}
/**
 * 产生唯一id
 * NOTE 使用此方法来生成作为HTMLElement元素的唯一id时会有一个trap，因为生成的id可能首位是数字，而id命名是不允许首位是数字的
 * @param {string} format - 使用大写X表示占位
 * @param {number} radix - 基数 2~62。只需要数字和大写字母使用36就可以了
 */

function guid() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 62;
  return format.replace(/X+/g, function (m) {
    return generateUuid(m.length, radix);
  });
}
/**
 * 转义正则表达式元字符
 * NOTE 使用RegExp构造函数来生成正则表达式时请务必使用此方法来转义元字符
 * @param {string} raw
 */

function transferMetaCharacters(raw) {
  return raw.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$&");
}
/**
 * 获取树形数据完整路径
 * @param {array} tree - 原始数据
 * @param {propertyKey} nodeId - 查找的节点id
 * @param {string} [id=id] - id映射键名
 * @param {string} [value=value] - 同id，优先使用id字段
 * @param {string} [children=children] - 子级键名映射
 * @returns {array}
 */

function getTreeFullPath(tree, nodeId) {
  var _ref28 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      id = _ref28.id,
      value = _ref28.value,
      children = _ref28.children;

  assertArray(tree);
  composeAssert(nodeId, [isString, isNumber]);

  if (!isString(id) && !isString(value)) {
    throw new Error('[getTreeFullPath] needs id or value field');
  }

  if (!isString(children)) {
    throw new Error('[getTreeFullPath] needs children field');
  }

  if (!tree || !tree.length) {
    return [];
  }

  var opts = {
    id: id,
    value: value,
    children: children
  };
  var idField = id || value;
  var result = [];
  var flag = tree.some(function (item) {
    if (item[idField] === nodeId) {
      result.push(item);
      return true;
    }

    var childrenTree = item[children];

    if (childrenTree && childrenTree.length) {
      var res = getTreeFullPath(childrenTree, nodeId, opts);

      if (res.length > 0) {
        var _push;

        (_push = [].push).call.apply(_push, [result, item].concat(_toConsumableArray(res)));
      }

      return res.length > 0;
    }

    return false;
  });
  return flag ? result : [];
}
/**
 * 根据唯一树节点id查找此节点的数据
 * @param {array} tree - 原始数据
 * @param {propertyKey} nodeId - 查找的节点id
 * @param {string} [id=id] - id映射键名
 * @param {string} [value=value] - 同id，优先使用id字段
 * @param {string} [children=children] - 子级键名映射
 * @returns {{ [propName: string]: any }|null}
 */

function getTreeNodeDataById(tree, nodeId) {
  var _ref29 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      id = _ref29.id,
      value = _ref29.value,
      children = _ref29.children;

  var treeFullPath = getTreeFullPath(tree, nodeId, {
    id: id,
    value: value,
    children: children
  });
  var _treeFullPath = treeFullPath[treeFullPath.length - 1],
      nodeData = _treeFullPath === void 0 ? null : _treeFullPath;
  return nodeData;
}
/**
 * 获取树高度
 * @param {array} tree
 * @param {string} childrenProp - 子级字段名
 * @returns {number}
*/

function _getTreeHeight(tree, childrenProp) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  assertArray(tree);
  assertString(childrenProp);

  if (tree.length) {
    level += 1;
    tree.forEach(function (item) {
      var children = item[childrenProp];

      if (children && children.length) {
        height = _getTreeHeight(children, childrenProp, level, height);
      }
    });
  }

  return Math.max(level, height);
}
/**
 * 获取树高度
 * @param {array} tree
 * @param {string} childrenProp - 子级字段名
 * @returns {number}
*/


function getTreeHeight(tree, childrenProp) {
  return _getTreeHeight(tree, childrenProp, 0, 0);
}
/**
 * 平铺树结构数据
 * @returns {array}
 */

function _flatTreeData(tree, childrenProp) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  assertArray(tree);
  assertString(childrenProp);
  tree.forEach(function (child) {
    result.push(child);
    var children = child[childrenProp];

    if (isArray(children)) {
      _flatTreeData(children, childrenProp, result);
    }
  });
  return result;
}
/**
 * 平铺树结构数据
 * @param {array} tree
 * @param {string} childrenProp - 子级字段名
 * @returns {array}
 */


function flatTreeData(tree, childrenProp) {
  return _flatTreeData(tree, childrenProp);
}
/**
 * @typedef {{ [propName: string]: (arg: any) => boolean }} SearchTreeInput
 */

/*
d.ts
interface SearchTreeInput {
  [prop: string]: (arg: any) => boolean,
}
 */

/**
 * 搜索树所有结果
 * @param {array} tree
 * @param {SearchTreeInput} input
 * @param {string} children - 子级字段名
 * @param {boolean} [onlyLeaf=true] - 是否只查找叶子节点数据
 * @param {symbol} [condition=CONDITION_MARK.or] - 结果的判断方式
 * @returns {array}
 */

function searchTree(tree, input) {
  var _ref30 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref30$condition = _ref30.condition,
      condition = _ref30$condition === void 0 ? CONDITION_MARK.or : _ref30$condition,
      _ref30$children = _ref30.children,
      children = _ref30$children === void 0 ? 'children' : _ref30$children,
      _ref30$onlyLeaf = _ref30.onlyLeaf,
      onlyLeaf = _ref30$onlyLeaf === void 0 ? true : _ref30$onlyLeaf;

  assertArray(tree);
  assertObject(input);
  assertString(children);
  assertBoolean(onlyLeaf);
  assertEnum(condition, [CONDITION_MARK.and, CONDITION_MARK.or]);
  var opts = {
    condition: condition,
    children: children,
    onlyLeaf: onlyLeaf
  };
  var results = [];
  var inputProps = getPropertyKeys(input);
  var conditionHandler = CONDITION_MARK.and === condition ? Array.prototype.every : Array.prototype.some;
  tree.forEach(function (item) {
    var isLeaf = !item[children] || !item[children].length;

    if (isLeaf && onlyLeaf || !onlyLeaf) {
      var isSatisfied = conditionHandler.call(inputProps, function (prop) {
        return input[prop](item[prop]);
      });

      if (isSatisfied) {
        results.push(item);
      }
    }

    [].push.apply(results, searchTree(item[children] || [], input, opts));
  });
  return results;
}
/**
 * 将整数分割为对应的进制加数因子
 * @param {number} n
 * @param {number} radix - 2 ~ 36
 * @returns {number[]}
 * @example
 * decomposeInteger(112, 2) // [16, 32, 64]
 * decomposeInteger(112, 3) // [1, 3, 27, 81]
 * decomposeInteger(112, 8) // [48, 64]
 * decomposeInteger(112, 10) // [2, 10, 100]
 * decomposeInteger(112, 16) // [112]
 * decomposeInteger(112, 32) // [96]
 * decomposeInteger(112, 36) // [4, 108]
*/

function decomposeInteger(n) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  assertInteger(n); // step1.将n转为rdix进制字符串,并转为数组，再将数组倒序

  var binaryCharArr = _toConsumableArray(n.toString(radix)).reverse(); // step2.计算每个字符对应的radix进制值


  var results = [];
  binaryCharArr.forEach(function (num, idx) {
    var res = num * Math.pow(radix, idx);

    if (res > 0) {
      results.push(res);
    }
  });
  return results;
}
/**
 * 延时函数
 * @param {number} t - 毫秒数
 * @param {function} callback
 * @returns {{ start: function, stop: function, untilEnd: () => promise }}
 */

function helper_delay(t, callback) {
  var tId = null;
  var timeEnded = true;
  var resolver = null;
  return {
    start: function start() {
      if (!tId) {
        timeEnded = false;
        tId = setTimeout(function () {
          timeEnded = true;

          if (isFunction(callback)) {
            callback();
          }

          if (resolver) {
            resolver();
          }
        }, t);
      }

      return this;
    },
    stop: function stop() {
      if (tId) {
        clearTimeout(tId);
        tId = null;
        timeEnded = true;
        resolver = null;
      }

      return this;
    },

    /**
     * @returns {promise}
     */
    untilEnd: function untilEnd() {
      return new Promise(function (resolve) {
        if (timeEnded) {
          resolve();
        }

        resolver = resolve;
      });
    }
  };
}
/**
 * 简单实现顺序预先填充参数，想要更加完善的功能请使用lodash或underscore
 * @param {function} func
 * @param  {...any} partials
 * @returns {function}
 */

function partial(func) {
  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    partials[_key - 1] = arguments[_key];
  }

  assertFunction(func);
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return func.call.apply(func, [this].concat(partials, args));
  };
}
/**
 * 简单实现预先填充右边参数，想要更加完善的功能请使用lodash或underscore
 * @param {function} func
 * @param  {...any} partials
 * @returns {function}
 */

function partialRight(func) {
  for (var _len3 = arguments.length, partials = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    partials[_key3 - 1] = arguments[_key3];
  }

  assertFunction(func);
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return func.call.apply(func, [this].concat(args, partials));
  };
}
/**
 * 顺序舍弃参数
 * @param {function} func
 * @param  {number} [len=1] - 要舍弃的参数个数
 * @returns {function}
 */

function dropParams(func) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  assertFunction(func);
  assertNumber(len);
  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return func.apply(this, args.slice(Math.max(len, 0)));
  };
}
/**
 * 舍弃右边参数
 * @param {function} func
 * @param  {number} [len=1] - 要舍弃的参数个数
 * @returns {function}
 */

function dropRightParams(func) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  assertFunction(func);
  assertNumber(len);
  return function () {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return func.apply(this, args.slice(0, -Math.max(len, 0) || args.length));
  };
}
/**
 * 保留指定参数位
 * @param {function} func
 * @param {number[]} [indexArr] - 要保留的参数索引列表
 * @returns {function}
 * @example
 * function A(a, b, c) {
 *  return [a, b, c];
 * }
 * const reserveA = reserveParams(A, [0, 2]); // 只保留传递的参数的0和2位置的参数
 * console.log(reserveA(1, 2, 3, 4, 5)); // [1, 3, undefined]
 */

function reserveParams(func, indexArr) {
  assertFunction(func);
  assertArray(indexArr);
  return function () {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return func.apply(this, args.filter(function (item, idx) {
      return indexArr.includes(idx);
    }));
  };
}
/**
 * 数字千分位展示，例如1234567.001 => 1,234,567.001
 * @param {string|number} num
 * @param {number} [fixed=2] - 小数保留位数
 */

function numberThousandthDisplay(num) {
  var _ref31 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref31$fixed = _ref31.fixed,
      fixed = _ref31$fixed === void 0 ? 2 : _ref31$fixed;

  assertNumeric(num);
  var $0 = "".concat(Number(num).toFixed(fixed)).split('.');
  var $1 = $0[0];
  var $2 = $0[1] || '';
  return _toConsumableArray(_toConsumableArray($1).reverse().join('').replace(/\d{3}/g, '$&,')).reverse().join('').replace(/^,|,$/g, '') + ($2 ? ".".concat($2) : '');
}
/**
 * module export
 */

/* harmony default export */ var helper = ('MODIFY_THIS_SCRIPT_CAREFULLY');
// CONCATENATED MODULE: ./src/utils/debounce.js



/**
 * 去抖
 * 来自lodash
 * @param {function} func 目标函数
 * @param {number} await 间隔毫秒数
 * @param {object} options
 * @param {boolean} options.leading 默认false 函数在每个等待时延的开始被调用
 * @param {boolean} options.trailing 默认true 函数在每个等待时延的结束被调用
 * @param {number} options.maxWait 最大的等待时间，因为如果debounce的函数调用时间不满足条件，可能永远都无法触发
 */

/* eslint-disable */


function debounce(func, wait, options) {
  var nativeMax = Math.max;
  var nativeMin = Math.min;

  function toNumber(arg) {
    return Number(arg);
  }

  function now() {
    return Date.now();
  }

  var lastArgs;
  var lastThis;
  var maxWait;
  var result;
  var timerId;
  var lastCallTime; // func 上一次执行的时间

  var lastInvokeTime = 0; // 函数在每个等待时延的开始被调用

  var leading = false;
  var maxing = false; // 函数在每个等待时延的结束被调用

  var trailing = true;
  assertFunction(func); // 对间隔时间的处理

  wait = toNumber(wait) || 0; // 对options中传入参数的处理

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  } // 执行要被触发的函数


  function invokeFunc(time) {
    var args = lastArgs;
    var thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  } // 在leading edge阶段执行函数


  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // 为 trailing edge 触发函数调用设定定时器

    timerId = setTimeout(timerExpired, wait); // leading = true 执行函数

    return leading ? invokeFunc(time) : result;
  } // 剩余时间


  function remainingWait(time) {
    // 距离上次debounced函数被调用的时间
    var timeSinceLastCall = time - lastCallTime; // 距离上次函数被执行的时间

    var timeSinceLastInvoke = time - lastInvokeTime; // 用 wait 减去 timeSinceLastCall 计算出下一次trailing的位置

    var result = wait - timeSinceLastCall; // 两种情况
    // 有maxing: 比较出下一次maxing和下一次trailing的最小值，作为下一次函数要执行的时间
    // 无maxing: 在下一次trailing时执行timerExpired

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  } // 根据时间判断 func 能否被执行


  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime; // 几种满足条件的情况
    // 首次执行

    return lastCallTime === undefined // 距离上次被调用已经超过 wait
    || timeSinceLastCall >= wait // 系统时间倒退
    || timeSinceLastCall < 0 //超过最大等待时间
    || maxing && timeSinceLastInvoke >= maxWait;
  } // 在 trailing edge 且时间符合条件时，调用 trailingEdge函数，否则重启定时器


  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // 重启定时器


    timerId = setTimeout(timerExpired, remainingWait(time));
  } // 在trailing edge阶段执行函数


  function trailingEdge(time) {
    timerId = undefined; // 有lastArgs才执行，
    // 意味着只有 func 已经被 debounced 过一次以后才会在 trailing edge 执行

    if (trailing && lastArgs) {
      return invokeFunc(time);
    } // 每次 trailingEdge 都会清除 lastArgs 和 lastThis，目的是避免最后一次函数被执行了两次
    // 举个例子：最后一次函数执行的时候，可能恰巧是前一次的 trailing edge，函数被调用，而这个函数又需要在自己时延的 trailing edge 触发，导致触发多次


    lastArgs = lastThis = undefined;
    return result;
  } // cancel方法


  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  } // flush方法--立即调用


  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(); //是否满足时间条件

    var isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time; //函数被调用的时间
    // 无timerId的情况有两种：
    // 1.首次调用
    // 2.trailingEdge执行过函数

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    } // 负责一种case：trailing 为 true 的情况下，在前一个 wait 的 trailingEdge 已经执行了函数；
    // 而这次函数被调用时 shouldInvoke 不满足条件，因此要设置定时器，在本次的 trailingEdge 保证函数被执行


    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// CONCATENATED MODULE: ./src/utils/element.js










/**
 * 对dom元素的相关操作方法
 * @author huyk<bengda@outlook.com>
 * @module Element
*/

/* eslint-disable */



/**
 * polyfill CustomEvent constructor for IE
 * @see {@link:https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent}
 */

(function () {
  try {
    // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
    // b : There is no window.CustomEvent object
    new window.CustomEvent('T');
  } catch (e) {
    var CustomEvent = function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
})();

var element_isDom = isDom;
/**
 * 创建dom元素
 * @param {string} tag - 合法的dom元素标签名
 * @param {{[propName: string]: any}} [attrs={}] - 元素属性。style支持传递对象
 * @param {...(string | HTMLElement)} [children] - 子级元素
 * @returns {HTMLElement}
 */

function createElement(tag) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  assertString(tag);
  var el = document.createElement(tag); // handle attrs

  Object.keys(attrs).forEach(function (attr) {
    if (attr === 'style' && isPlainObject(attrs.style)) {
      setStyle(el, attrs.style);
    } else {
      el.setAttribute(kebabCase(attr), attrs[attr]);
    }
  }); // handle children elements

  var childrenFrag = document.createDocumentFragment();

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children.forEach(function (child) {
    var childEle = child;

    if (isString(child)) {
      // textnode
      childEle = document.createTextNode(child);
    }

    if (element_isDom(childEle)) {
      childrenFrag.appendChild(childEle);
    }
  });
  el.appendChild(childrenFrag);
  return el;
}
/**
 * 移除dom元素
 * @param {HTMLElement|string} ele
 * @param {HTMLElement} [root=document] - 根节点
 * @param {boolean} [loop=false] - 是否移除所有的找到的dom节点
 */

function removeElement(ele) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  composeAssert(ele, [isString, element_isDom]);
  var eles = element_isDom(ele) ? [ele] : loop ? root.querySelectorAll(ele) : [root.querySelector(ele)];
  [].slice.call(eles).forEach(function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
function show(el) {
  el.style.display = '';
}
function hide(el) {
  el.style.display = 'none';
}
/**
 * addEventListener 是否支持passive
 */

function isListenerSurpportPassive() {
  // eslint-disable-next-line
  var supportsOption = false;

  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsOption = true;
      }
    }));
  } catch (e) {}

  return supportsOption;
}
/**
 * addEventListener 是否支持once，事件只执行一次
 */

function isListenerSurpportOnce() {
  // eslint-disable-next-line
  var supportsOption = false;

  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'once', {
      get: function get() {
        supportsOption = true;
      }
    }));
  } catch (e) {}

  return supportsOption;
}
/**
 * 将dom字符串转为dom元素
 * 如果参数html不是有效的dom结构则会生成文本节点，这时会返回一个div包裹的dom元素
 * @param {string|HTMLElement} htmlStr
 * @returns {HTMLElement}
 */

function transformToDom(htmlStr) {
  var wrap = document.createElement('div');
  var fragment = document.createDocumentFragment();
  wrap.innerHTML = htmlStr;
  fragment.appendChild(wrap);
  var firstEL = fragment.firstChild;
  return firstEL.firstChild.nodeType !== 1 ? firstEL : firstEL.firstChild;
}
/**
 * 事件
 * 这里备注一下额外的东西：使用console打印dom元素，很有可能看到currentTarget为null，但是取出来又有值，这是console的设计机制导致的。
 * https://stackoverflow.com/questions/26496176/when-logging-an-event-object-currenttarget-is-null-but-when-logging-event-curr
 */

var element_event = {
  /**
   * 监听事件
   * @method on
   * @param {HTMLElement} el - 需绑定元素
   * @param {string} event - 绑定事件名称
   * @param {function} handler - 事件执行函数
   * @param {{ capture: boolean, passive: boolean, once: boolean }|boolean} [option] - addEventListener的第三个option参数 { capture: false, passive: false, once: false }
   */
  on: function on(el, event, handler, option) {
    assertDom(el);
    assertString(event);
    assertFunction(handler);
    return el.addEventListener(event, handler, option);
  },

  /**
   * 取消监听事件
   * 注意如果捕获型事件和冒泡型事件分别注册了，需要分别移除，两者互不干扰
   * @method off
   * @param {HTMLElement} el - element元素
   * @param {stirng} event - 绑定事件名称
   * @param {function} handler - 回调函数
   * @param {boolean} [useCapture=false] 是否是捕获型
   */
  off: function off(el, event, handler) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    assertDom(el);
    assertString(event);
    assertFunction(handler);
    return el.removeEventListener(event, handler, useCapture);
  },

  /**
   * 只绑定一次监听事件
   * @method once
   * @param {HTMLElement} el - 需绑定元素
   * @param {string} event - 绑定事件名称
   * @param {function} handler - 事件执行函数
   * @param {{ capture: boolean, passive: boolean, once: boolean }|boolean} [option] - addEventListener的第三个option参数 { capture: false, passive: false, once: false }
   */
  once: function once(el, event, handler, option) {
    var that = this;

    var listener = function listener() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      handler.apply(this, args);
      that.off(el, event, listener, isPlainObject(option) ? option.capture : option);
    };

    that.on(el, event, listener, option);
  },

  /**
   * 创建一个自定义事件
   * @param {string} eventName - 事件名
   * @param {{ bubbles: false, cancelable: false, detail: undefined }} [option] - 事件携带的数据，可从监听事件的event.detail中取到
   * @returns {CustomEvent}
   */
  create: function create(eventName, option) {
    return new CustomEvent(eventName, option);
  },

  /**
   * 触发一个自定义事件
   * @param {HTMLElement} el
   * @param {CustomEvent} customEvent
   * @returns {boolean}
   */
  dispatch: function dispatch(el, customEvent) {
    if (el.dispatchEvent) {
      return el.dispatchEvent(customEvent);
    }

    return el.fireEvent(customEvent);
  }
};
/**
 * 判断元素是否有某个className
 * @method hasClass
 * @param {HTMLElement} el - 元素
 * @param {string} cls - 判断类名称
 * @return {boolean}
 */

function hasClass(el, cls) {
  assertDom(el);
  assertString(cls);

  if (cls.indexOf(' ') !== -1) {
    throw new Error('className do not contains whitespace');
  }

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
  }
}
/**
 * 给元素添加className，添加多个类使用空格隔开
 * @method addClass
 * @param {HTMLElement} el - 元素
 * @param {string|string[]} cls - 类名称
 */

function addClass(el, cls) {
  assertDom(el);
  composeAssert(cls, [isString, isArray]);
  var curClass = el.className;
  var classNames = isArray(cls) ? cls : cls.split(' ');
  classNames.forEach(function (clsName) {
    if (clsName && !hasClass(el, clsName)) {
      curClass += " ".concat(clsName);
    }
  });
  return el.className = curClass;
}
/**
 * 移除元素className
 * @method removeClass
 * @param {HTMLElement} el
 * @param {string|string[]} cls
 */

function removeClass(el, cls) {
  assertDom(el);
  composeAssert(cls, [isString, isArray]);
  var classeNames = cls.split(' ');
  var curClass = " ".concat(el.className, " ");
  classeNames.forEach(function (clsName) {
    if (clsName && hasClass(el, clsName)) {
      curClass = curClass.replace(" ".concat(clsName, " "), ' ');
    }
  });
  return el.className = curClass.trim();
}
/**
 * @method toggleClass
 * @param {HTMLElement} el
 * @param {string} cls
 * @param {boolean} force 跟标准保持一致，为true则添加，为false则移除
 */

function toggleClass(el, cls, force) {
  assertDom(el);
  assertString(cls);
  var actor;

  if (force === undefined) {
    actor = hasClass(el, cls) ? removeClass : addClass;
  } else {
    actor = force ? addClass : removeClass;
  }

  return actor(el, cls);
}
/**
 * 获取元素某个样式
 * 优先使用计算值，意味着如果使用document.createElement创建元素，但是没有append到页面中去是获取不到元素的宽高等信息的
 * @method getStyle
 * @param {HTMLElement} el
 * @param {string} styleName 样式名称
 * @return {string|number|null}
 */

function getStyle(el, styleName) {
  assertDom(el);
  assertString(styleName);

  try {
    var computed = document.defaultView.getComputedStyle(el, null);
    return computed.getPropertyValue(kebabCase(styleName, false));
  } catch (e) {
    return el.style[camelCase(styleName, false)];
  }
}
/**
 * 设置元素某个样式
 * @method setStyle
 * @param {HTMLElement} el
 * @param {string|{[propName: string]: string|number}} styleName - 样式名称。可使用对象.例如 { width: '100px' }，此时会忽略value参数
 * @param {string} value - 设置值
 */

function setStyle(el, styleName, value) {
  assertDom(el);
  composeAssert(styleName, [isString, isPlainObject]);

  if (isPlainObject(styleName)) {
    return Object.entries(styleName).every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      return setStyle(el, k, v);
    });
  }

  styleName = camelCase(styleName);
  return el.style[styleName] = value;
}
/**
 * 获取dom元素
 * @param {string|HTMLElement} arg
 * @param {HTMLElement} [root=document] - 根节点
 */

function getDom(arg) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (element_isDom(arg)) {
    return arg;
  } else if (isString(arg)) {
    var dom = root.querySelector(arg);

    if (!dom) {
      throw new Error("".concat(arg, " not exist in the given root node"));
    }

    return dom;
  }

  throw new TypeError('Expected HTMLElement or valid selector');
}
/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */

function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}
/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */

function containsDeep(parent, child) {
  assertDom(parent);
  assertDom(child);
  var node = child;

  while (node) {
    if (node === parent) return true;
    node = getParentNode(node);
  }

  return false;
}
/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */

function getParentNode(node) {
  assertDom(node);
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}
/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */

function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect(); // Older IE

  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }

  return rect;
}
/**
 * 获取ele1相对于ele2的距离
 * @param {string|HTMLElement} ele1
 * @param {string|HTMLElement} ele2
 * @returns {{ x: number, y: number }}
 */

function getOffset(ele1, ele2) {
  var $ele1 = getDom(ele1);
  var $ele2 = getDom(ele2);
  var bcr1 = getBoundingClientRect($ele1);
  var bcr2 = getBoundingClientRect($ele2);
  return {
    x: bcr1.left - bcr2.left,
    y: bcr1.top - bcr2.top
  };
}
/**
 * ele1当前视图区域是否处于ele2的盒子区域中
 * @param {string|HTMLElement} ele1
 * @param {string|HTMLElement} ele2
 * @returns {boolean}
 */

function checkBoxViewIsInside(ele1) {
  var ele2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  var $ele1 = getDom(ele1);
  var $ele2 = getDom(ele2);
  var bcr1 = getBoundingClientRect($ele1);
  var bcr2 = getBoundingClientRect($ele2);
  return bcr1.left >= bcr2.left && bcr1.right <= bcr2.right && bcr1.top >= bcr2.top && bcr1.bottom <= bcr2.bottom;
}
/**
 * ele1当前视图区域是否部分处于ele2的盒子区域中
 * @param {string|HTMLElement} ele1
 * @param {string|HTMLElement} ele2
 * @returns {boolean}
 */

function checkBoxViewIsPartInside(ele1) {
  var ele2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  var $ele1 = getDom(ele1);
  var $ele2 = getDom(ele2);
  var bcr1 = getBoundingClientRect($ele1);
  var bcr2 = getBoundingClientRect($ele2);
  return bcr1.left >= bcr2.left && bcr1.left < bcr2.right || bcr1.right <= bcr2.right && bcr1.right > bcr2.left || bcr1.top >= bcr2.top && bcr1.top < bcr2.bottom || bcr1.bottom <= bcr2.bottom && bcr1.bottom > bcr2.top;
}
/**
 * 获取上一个兄弟元素
 */

function getPreviousElementSibling(ele) {
  if (ele.previousElementSibling !== undefined) {
    // IE9+,Chrome,firefox..
    return ele.previousElementSibling;
  }

  var item = ele.previousSibling; // IE8-

  while (item && item.nodeType !== 1) {
    item = item.previousSibling;
  }

  return item;
}
/**
 * 获取下一个兄弟元素
 */

function getNextElementSibling(ele) {
  if (ele.nextElementSibling !== undefined) {
    // IE9+,Chrome,firefox..
    return ele.nextElementSibling;
  }

  var item = ele.nextSibling; // IE8-

  while (item && item.nodeType !== 1) {
    item = item.nextSibling;
  }

  return item;
}
/**
 * module exports
 */

/* harmony default export */ var utils_element = ('MODIFY_THIS_SCRIPT_CAREFULLY');
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("6dd8");

// CONCATENATED MODULE: ./src/utils/resize-event.js













/**
 * 代码来自element-ui
 * 对addResizeListener方法做了改进
 * 同一个fn只添加一次
 */

var isServer = typeof window === 'undefined';
/* istanbul ignore next */

var resizeHandler = function resizeHandler(entries) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;
      var listeners = entry.target.__resizeListeners__ || [];

      if (listeners.length) {
        listeners.forEach(function (fn) {
          fn();
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
/* istanbul ignore next */


var resize_event_addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;

  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver_es["a" /* default */](resizeHandler);

    element.__ro__.observe(element);
  }
  /**
   * @add hyk
   * 同一个fn只添加一次
   */


  if (!element.__resizeListeners__.includes(fn)) {
    element.__resizeListeners__.push(fn);
  }
};
/* istanbul ignore next */

var removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;

  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};
// CONCATENATED MODULE: ./src/utils/scrollbar-width.js

var scrollBarWidth;
/* harmony default export */ var scrollbar_width = (function () {
  if (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.height = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  outer.parentNode.removeChild(outer);
  return scrollBarWidth;
});
;
// CONCATENATED MODULE: ./src/components/scrollbar/src/util.js


/* eslint-disable */
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};
function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;
  var style = {};
  var translate = "translate".concat(bar.axis, "(").concat(move, "%)");
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  return style;
}
;

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}

;
function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
;
// CONCATENATED MODULE: ./src/components/scrollbar/src/bar.js

// code is from element-ui

/* eslint-disable */


var bar_on = element_event.on,
    bar_off = element_event.off;
/* istanbul ignore next */

/* harmony default export */ var src_bar = ({
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },
  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;
    return h("div", {
      "class": ['vue-h-dialog-scrollbar__bar', 'is-' + bar.key],
      "on": {
        "mousedown": this.clickTrackHandler
      }
    }, [h("div", {
      "ref": "thumb",
      "class": "vue-h-dialog-scrollbar__thumb",
      "on": {
        "mousedown": this.clickThumbHandler
      },
      "style": renderThumbStyle({
        size: size,
        move: move,
        bar: bar
      })
    })]);
  },
  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];
      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;
      bar_on(document, 'mousemove', this.mouseMoveDocumentHandler);
      bar_on(document, 'mouseup', this.mouseUpDocumentHandler);

      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];
      if (!prevPage) return;
      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];
      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      bar_off(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },
  destroyed: function destroyed() {
    bar_off(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./src/components/scrollbar/src/main.js

// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js
// code is from element-ui

/* eslint-disable */




/* istanbul ignore next */

/* harmony default export */ var main = ({
  name: 'VueHDialogScrollbar',
  components: {
    Bar: src_bar
  },
  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean,
    // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },
  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },
  render: function render(h) {
    var gutter = scrollbar_width();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = "-".concat(gutter, "px");
      var gutterStyle = "margin-bottom: ".concat(gutterWith, "; margin-right: ").concat(gutterWith, ";");

      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }

    var view = h(this.tag, {
      class: ['vue-h-dialog-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h("div", {
      "ref": "wrap",
      "style": style,
      "on": {
        "scroll": this.handleScroll
      },
      "class": [this.wrapClass, 'vue-h-dialog-scrollbar__wrap', gutter ? '' : 'vue-h-dialog-scrollbar__wrap--hidden-default']
    }, [[view]]);
    var nodes;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        "attrs": {
          "move": this.moveX,
          "size": this.sizeWidth
        }
      }), h(src_bar, {
        "attrs": {
          "vertical": true,
          "move": this.moveY,
          "size": this.sizeHeight
        }
      })];
    } else {
      nodes = [h("div", {
        "ref": "wrap",
        "class": [this.wrapClass, 'vue-h-dialog-scrollbar__wrap'],
        "style": style
      }, [[view]])];
    }

    return h('div', {
      class: 'vue-h-dialog-scrollbar'
    }, nodes);
  },
  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;
      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage, widthPercentage;
      var wrap = this.wrap;
      if (!wrap) return;
      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },
  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && resize_event_addResizeListener(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./src/components/scrollbar/index.js


/* istanbul ignore next */

main.install = function install(Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var components_scrollbar = (main);
// CONCATENATED MODULE: ./src/package/src/i18n.js
var dictionary = {
  'zh-cn': {},
  'en-us': {
    '未命名标题': 'Untitled',
    '取消': 'Cancel',
    '确定': 'Confirm',
    '还原': 'Restore',
    '最大化': 'Maximize',
    '关闭': 'Close',
    '加载中': 'Loading'
  }
};
function i18n_i18n(word) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zh-cn';
  var dic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return dic[word] || (dictionary[lang] || {})[word] || word;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/package/src/main.vue?vue&type=script&lang=js&

























function mainvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function mainvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mainvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mainvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @author huyk<bengda@outlook.com>
 * @events
 * on-open
 * on-close
 * on-cancel
 */












var scrollbarWidth = scrollbar_width();
var Z_INDEX = 504;
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'VueHDialog',
  componentName: 'VueHDialog',
  components: {
    ElScrollbar: components_scrollbar
  },
  // 本想用 getter/setter 发现会被vue去掉
  getZIndex: function getZIndex() {
    return Z_INDEX;
  },
  setZIndex: function setZIndex(val) {
    Z_INDEX = val;
  },
  // 多语言
  lang: 'zh-cn',
  i18n: {// '确定': 'Confirm',
  },
  // 已创建的弹窗集合
  // gId作为键名
  CREATED_COLLECTIONS: new Map(),
  props: {
    // visible
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '未命名标题'
    },
    // [left|center|right]
    titleAlign: {
      type: String,
      default: 'center'
    },
    // 显示加载动画
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: '600px'
    },
    minWidth: {
      type: [Number, String],
      default: '300px'
    },
    maxWidth: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String] // default: '400px',

    },
    minHeight: {
      type: [Number, String],
      default: '200px'
    },
    maxHeight: {
      type: [Number, String],
      default: '100%'
    },
    left: {
      type: [Number, String]
    },
    top: {
      type: [Number, String]
    },
    zIndex: {
      type: Number
    },
    // html字符串或dom元素
    html: {
      // type: [String, HTMLElement, Function],
      validator: function validator(value) {
        var v = isFunction(value) ? value() : value;
        return isString(v) || isDom(v);
      }
    },
    // 传入vue组件
    components: {
      type: Array,
      default: function _default() {
        return [
          /*
          {
            // 模板字符串，可选
            // 当指定了template时，传递props数据应该使用v-bind="propsData[index]"
            // 组键名没有指定时使用component-index作为组键名:<component-0 v-bind="propsData[0]"></component-0>
            template: '<el-button v-bind="propsData[0]"></el-button>',
            // 组件名，可选
            name: 'ElButton',
            // 组件对象，必需。可使用诸如import('xxx')返回一个promise对象
            component: Vue.component('ElButton'),
            // 传递给组件的props数据
            propsData: {},
            // 组件的监听事件
            listeners: {},
          },
           */
        ];
      }
    },
    // 是否允许拖动
    moveable: {
      type: Boolean,
      default: true
    },

    /**
     * 容器可拖曳区域
     */
    dragArea: {
      type: Object,
      default: function _default() {
        return {
          left: 0,
          top: 0,
          width: '100%',
          height: '50px'
        };
      }
    },
    // 鼠标移动时只移动一个空的容器，最后再将空容器的位置赋给主窗口
    shadowMove: {
      type: Boolean,
      default: false
    },
    // 是否允许弹窗超出屏幕
    overEdge: {
      type: Boolean,
      default: false
    },
    // 是否显示最大化按钮
    showMax: {
      type: Boolean,
      default: true
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    // 显示取消按钮
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    // 显示确认按钮
    showOkBtn: {
      type: Boolean,
      default: true
    },
    // 显示header
    showHeader: {
      type: Boolean,
      default: true
    },
    // 显示底部footer
    showFooter: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    okBtnText: {
      type: String,
      default: '确定'
    },
    // 自定义底部按钮
    buttons: {
      type: Array,
      default: function _default() {
        return [// {
          //   text: '确定',
          //   // default, primary, warning, danger, success, info
          //   type: 'primary',
          //   class: [],
          //   style: [],
          //   handler(ins, resolve, reject) {},
          // },
        ];
      }
    },
    // 初始显示为最大化窗口
    isMax: {
      type: Boolean,
      default: false
    },
    // 点击确认按钮执行的操作
    // 如果使用promise记得调用resolve
    // okHandler(this, resolve)
    okHandler: {
      type: Function
    },
    // 点击取消按钮执行的操作
    // cancelHandler(this, reject)
    cancelHandler: {
      type: Function
    },
    // 点击取消按钮执行的操作
    // closeHandler(this, reject)
    closeHandler: {
      type: Function
    },
    // content区域的滚动事件
    scrollHandler: {
      type: Function
    },
    disableBodyScroll: {
      type: Boolean,
      default: true
    },
    // 延时关闭窗口
    closeDelay: {
      type: Number,
      default: 0
    },
    // 缓存组件，只在函数式调用下有效
    pId: [String, Number],
    cache: Boolean,
    context: Object,
    // 默认会不缓存okHandler，cancelHandler，closeHandler，scrollHandler
    noCacheCompromise: {
      type: Boolean,
      default: true
    },
    // 是否可拖曳改变大小
    // [top, right, bottom, left, top-left, top-right, bottom-left, bottom-right]
    resize: {
      type: [Boolean, Array],
      default: true
    },
    // 语言，可选[zh-cn, en-us]
    lang: String
  },
  data: function data() {
    return {
      gId: "vhd_".concat(generateUuid(8, 62)),
      visible: false,
      dialogWidth: null,
      dialogMinWidth: null,
      dialogMaxWidth: null,
      dialogHeight: null,
      dialogMinHeight: null,
      dialogMaxHeight: null,
      dialogLeft: null,
      dialogTop: null,
      dialogBCRCopy: null,
      dialogIsMax: false,
      dialogBCR: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      },
      renderedDialogBCR: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      },
      dialogIsMoving: false,
      dialogMovingBCR: null,
      dialogMovingPos: {
        x: 0,
        y: 0
      },
      boxMoved: false,
      dialogIsResizing: false,
      dialogResizeBCR: null,
      dialogResizePos: {
        x: 0,
        y: 0
      },
      currentResizeMoveSide: null,
      boxResized: false,
      // 使用components参数，会使用new Vue()生成一个实例对象
      // 取compnents实例对象可以使用vueComponentIns.$children[索引]
      // 最好直接用this.getComponents()
      vueComponentIns: null,
      headerHeight: 0,
      footerHeight: 0,
      // 是否允许监听main块的大小变化
      enableListenMainBoxResize: true,
      firstResetMaxTriggered: false,
      closeTid: null,
      //
      isOnDelayTicking: false
    };
  },
  watch: {
    value: function value(v) {
      this.visible = v;
    },
    visible: function visible(v) {
      if (v) {
        if (this.isMax) {
          this.setDialogMax();
        } else {
          this.setBCR();
        }

        this.$emit('on-open', this);
        this.determineBodyScroll();
      } else {
        if (!this.cache) {
          // 关闭，重置数据
          this.resetData();
        }

        if (isNumeric(this.zIndex)) {
          Z_INDEX = this.zIndex < Z_INDEX ? Z_INDEX : this.zIndex + 1;
        } else {
          Z_INDEX += 1;
        }

        if (this._html && this._html._vhd_html_restore_points) {
          this._html._vhd_html_restore_points.pop().replaceWith(this._html);
        } // 还原挂载的html初始样式


        this._html.setAttribute('style', this._htmlStyleAttr);

        this.handleEnableBodyScroll();
        this.$emit('on-close', this);
      }
    },
    isMax: function isMax(v) {
      this.dialogIsMax = v;

      if (v) {
        this.setDialogMax();
      } else {
        this.resetDialogMax();
      }
    },
    dialogMovingBCR: {
      deep: true,
      handler: 'limitEdgeBCRValue'
    },
    dialogResizeBCR: {
      deep: true,
      handler: 'limitEdgeBCRValue'
    },
    dialogBCR: {
      deep: true,
      handler: debounce(function handler() {
        this.mainBoxResizeHandler(false);
      }, 300)
    },
    html: function html() {
      this.setHtmlContent();
    },
    disableBodyScroll: 'determineBodyScroll'
  },
  computed: {
    computedMoveable: function computedMoveable() {
      return this.moveable;
    },
    computedResizeable: function computedResizeable() {
      return !!this.resize;
    },
    computedMainStyles: function computedMainStyles() {
      var style = {};

      if (this.dialogBCR) {
        var bcr = mainvue_type_script_lang_js_objectSpread({}, this.dialogBCR);

        Object.entries(bcr).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          style[k] = isNumeric(v) ? "".concat(v, "px") : '';
        });

        if (!this.shadowMove && this.dialogMovingBCR) {
          style.left = "".concat(this.dialogMovingBCR.left, "px");
          style.top = "".concat(this.dialogMovingBCR.top, "px");
        }

        if (this.dialogResizeBCR) {
          style.width = "".concat(this.dialogResizeBCR.width, "px");
          style.height = "".concat(this.dialogResizeBCR.height, "px");
          style.left = "".concat(this.dialogResizeBCR.left, "px");
          style.top = "".concat(this.dialogResizeBCR.top, "px");
        }
      }

      return style;
    },
    computedContentStyles: function computedContentStyles() {
      var style = {};

      if (this.dialogBCR) {
        var _window = window,
            innerHeight = _window.innerHeight;
        var height = this.dialogBCR.height;
        var _this$dialogBCR = this.dialogBCR,
            minHeight = _this$dialogBCR.minHeight,
            maxHeight = _this$dialogBCR.maxHeight;

        if (this.dialogMinHeight) {
          minHeight = this.computePrimitiveValue(this.dialogMinHeight, innerHeight);
        }

        if (this.dialogMaxHeight) {
          maxHeight = this.computePrimitiveValue(this.dialogMaxHeight, innerHeight);
        }

        var headerHeight = this.headerHeight,
            footerHeight = this.footerHeight;
        var computedMinHeight = minHeight - headerHeight - footerHeight;
        var computedMaxHeight = (isNumeric(height) ? Math.min(maxHeight, height) : maxHeight) - headerHeight - footerHeight;
        Object.entries({
          minHeight: Math.max(0, computedMinHeight),
          maxHeight: Math.max(0, computedMaxHeight)
        }).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              k = _ref4[0],
              v = _ref4[1];

          style[k] = isNumeric(v) ? "".concat(v, "px") : '';
        });

        if (this.$refs.content) {
          this.$refs.content.querySelector('.vue-h-dialog__scrollbar-wrap').style.maxHeight = "".concat(Math.max(0, computedMaxHeight) + scrollbarWidth + 1, "px");
          this.$refs.scrollbar.update();
        }
      }

      return style;
    },
    computedTitleStyle: function computedTitleStyle() {
      var align = this.titleAlign || 'center';

      if (align !== 'center') {
        return {
          textAlign: align,
          padding: '0 15px'
        };
      }

      return {
        textAlign: 'center'
      };
    },
    computedShadowStyles: function computedShadowStyles() {
      var style = {};

      if (this.dialogMovingBCR && this.shadowMove) {
        var bcr = mainvue_type_script_lang_js_objectSpread({}, this.dialogMovingBCR, {
          width: getBoundingClientRect(this.$refs.main).width,
          height: getBoundingClientRect(this.$refs.main).height
        });

        Object.entries(bcr).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              k = _ref6[0],
              v = _ref6[1];

          style[k] = isNumeric(v) ? "".concat(v, "px") : '';
        });
      }

      return style;
    },
    computedResizebarsToRender: function computedResizebarsToRender() {
      var sides = this.resize === true ? ['top', 'right', 'bottom', 'left', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] : this.resize || [];
      return sides;
    }
  },
  created: function created() {
    // 添加到已创建集合中去
    this.$options.CREATED_COLLECTIONS.set(this.gId, this);
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    element_event.off(window, 'resize', this.resizeListener);
    element_event.off(window, 'mouseup', this.moveMouseUpHandler);
    element_event.off(window, 'mouseup', this.resizeMouseUpHandler);
    removeResizeListener(this.$refs.main, this.mainBoxResizeHandler);

    if (isFunction(this.scrollListener)) {
      element_event.off(this.$refs.content.querySelector('.vue-h-dialog__scrollbar-wrap'), 'scroll', this.scrollListener);
    } // 从CREATED_COLLECTIONS中移除


    this.$options.CREATED_COLLECTIONS.delete(this.gId);
  },
  methods: {
    i18n: function i18n(word) {
      return i18n_i18n(word, this.lang || this.$options.lang, this.$options.i18n);
    },
    init: function init() {
      var _this = this;

      ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'left', 'top'].forEach(function (item) {
        _this.$watch(item, function () {
          _this.boxMoved = false;
          _this.boxResized = false;

          _this.setBCR();
        });
      }); // this.setBCR();
      // if (this.isMax) {
      //   this.setDialogMax();
      // }

      this.mountComponents();
      this.setHtmlContent();
      this.visible = this.value;
      this.resizeListener = debounce(function () {
        // this.renderedDialogBCR = getBoundingClientRect(this.$refs.main);
        // const bcr = { ...this.dialogBCR };
        _this.boxMoved = false;
        _this.boxResized = false;

        _this.setBCR();
      }, 300);
      element_event.on(window, 'resize', this.resizeListener);
      element_event.on(window, 'mouseup', this.moveMouseUpHandler);
      element_event.on(window, 'mouseup', this.resizeMouseUpHandler);
      resize_event_addResizeListener(this.$refs.main, this.mainBoxResizeHandler);

      if (isFunction(this.scrollHandler)) {
        // eslint-disable-next-line
        this.scrollListener = function (event) {
          _this.scrollHandler(event, _this);
        };

        element_event.on(this.$refs.content.querySelector('.vue-h-dialog__scrollbar-wrap'), 'scroll', this.scrollListener);
      }
    },
    determineBodyScroll: function determineBodyScroll() {
      if (this.disableBodyScroll && this.visible) {
        this.handleDisableBodyScroll();
      } else {
        this.handleEnableBodyScroll();
      }
    },
    handleDisableBodyScroll: function handleDisableBodyScroll() {
      document.body.setAttributeNode(document.createAttribute('data-scroll-disable'));
    },
    handleEnableBodyScroll: function handleEnableBodyScroll() {
      document.body.removeAttribute('data-scroll-disable');
    },
    onTransitionend: function onTransitionend() {
      if (!this.visible) {
        if (!this.cache) {
          // 关闭，重置数据
          this.resetData();
        }
      } else {
        this.inited = true;
      }
    },
    resetData: function resetData() {
      var _this2 = this;

      var excludes = ['visible', // 一定不要重置gId
      'gId'];
      Object.entries(this.$options.data()).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            k = _ref8[0],
            v = _ref8[1];

        if (!excludes.includes(k)) {
          _this2[k] = v;
        }
      });
    },
    checkResizebarVisible: function checkResizebarVisible(side) {
      return this.resize === true || this.resize.includes(side);
    },
    mainBoxResizeHandler: function mainBoxResizeHandler() {
      var setFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.enableListenMainBoxResize && !this.dialogIsMoving && !this.dialogIsResizing) {
        this.headerHeight = this.$refs.header ? getBoundingClientRect(this.$refs.header).height : 0;
        this.footerHeight = this.$refs.footer ? getBoundingClientRect(this.$refs.footer).height : 0;
        this.renderedDialogBCR = getBoundingClientRect(this.$refs.main);

        if (setFlag) {
          this.setBCR({
            left: this.boxMoved || this.boxResized ? this.dialogBCR.left : null,
            top: this.boxMoved || this.boxResized ? this.dialogBCR.top : null,
            width: this.boxResized ? this.dialogBCR.width : null,
            height: this.boxResized ? this.dialogBCR.height : null
          });
        }
      }
    },
    mainBoxResizeListenerEnableHanlder: debounce(function mainBoxResizeListenerEnableHanlder() {
      this.enableListenMainBoxResize = true;
      this.mainBoxResizeHandler(false);
    }, 300),
    disableMainBoxResizeListenerMomentary: function disableMainBoxResizeListenerMomentary() {
      this.enableListenMainBoxResize = false;
      this.mainBoxResizeListenerEnableHanlder();
    },

    /**
     * 获取components参数注册的组件实例
     * @returns {array}
     */
    getComponents: function getComponents() {
      return this.vueComponentIns ? this.vueComponentIns.$children : [];
    },
    setHtmlContent: function setHtmlContent() {
      var html = isFunction(this.html) ? this.html() : this.html;

      if (isString(html)) {
        this.$refs.htmlBox.innerHTML = html;
      } else if (isDom(html)) {
        this._html = html;
        this._htmlStyleAttr = html.getAttribute('style'); // 设置还原点

        var restoreEle = document.createElement('b');
        restoreEle.id = "vhd_".concat(generateUuid(8, 62));
        restoreEle.style.display = 'none';
        restoreEle.style.visibility = 'hidden';

        if (!html._vhd_html_restore_points) {
          html._vhd_html_restore_points = [];
        }

        html._vhd_html_restore_points.push(restoreEle);

        html.replaceWith(restoreEle);
        this.$refs.htmlBox.appendChild(html);
        html.style.display = 'block';
      }
    },
    mountComponents: function mountComponents() {
      var mountNode = document.createElement('div');
      var templates = [];
      var components = {};
      var propsData = {};
      var listeners = {};
      this.components.forEach(function (item, index) {
        assertObject(item);
        composeAssert(item.component, [isObject, isFunction]);

        if (item.name) {
          assertString(item.name);
        }

        var componentName = item.name || "component-".concat(index);

        if (item.propsData) {
          assertObject(item.propsData);
        }

        if (item.listeners) {
          assertObject(item.listeners);
        }

        if (item.template) {
          assertString(item.template);
          templates.push(item.template);
        } else {
          templates.push("<".concat(componentName, " v-bind=\"propsData[").concat(index, "]\" v-on=\"listeners[").concat(index, "]\"></").concat(componentName, ">"));
        }

        components[componentName] = item.component;
        propsData[index] = mainvue_type_script_lang_js_objectSpread({}, item.propsData || {});
        listeners[index] = mainvue_type_script_lang_js_objectSpread({}, item.listeners || {});
      });
      var InsConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
        template: "<div>".concat(templates.join('\n'), "</div>"),
        components: components,
        router: this.$router,
        data: function data() {
          return {
            propsData: propsData,
            listeners: listeners
          };
        }
      });
      this.$refs.componentsBox.appendChild(mountNode);
      this.vueComponentIns = new InsConstructor({
        el: mountNode
      });
    },
    setBCR: function setBCR() {
      var bcr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _window2 = window,
          innerWidth = _window2.innerWidth,
          innerHeight = _window2.innerHeight;
      var width = this.computePrimitiveValue(this.dialogWidth || this.width, innerWidth);
      var height = this.computePrimitiveValue(this.dialogHeight || this.height, innerHeight);
      var minWidth = this.computePrimitiveValue(this.dialogMinWidth || this.minWidth, innerWidth);
      var maxWidth = this.computePrimitiveValue(this.dialogMaxWidth || this.maxWidth, innerWidth);
      var minHeight = this.computePrimitiveValue(this.dialogMinHeight || this.minHeight, innerHeight);
      var maxHeight = this.computePrimitiveValue(this.dialogMaxHeight || this.maxHeight, innerHeight);

      if (isNumeric(width)) {
        if (isNumeric(minWidth)) {
          width = Math.max(width, minWidth);
        }

        if (isNumeric(maxWidth)) {
          width = Math.min(width, maxWidth);
        }
      }

      if (isNumeric(height)) {
        if (isNumeric(minHeight)) {
          height = Math.max(height, minHeight);
        }

        if (isNumeric(maxHeight)) {
          height = Math.min(height, maxHeight);
        }
      }

      var $left = bcr.left || this.dialogLeft || this.left;
      var $top = bcr.top || this.dialogTop || this.top;
      var $width = isNumeric(width) ? width : this.renderedDialogBCR.width;
      var $height = isNumeric(height) ? height : this.renderedDialogBCR.height;
      var left = this.computePrimitiveValue(isNumeric($left) ? $left : $left || (innerWidth - $width) / 2, innerWidth);
      var top = this.computePrimitiveValue(isNumeric($top) ? $top : $top || (innerHeight - $height) / 2, innerHeight);
      var dialogBCR = {
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
        left: left,
        top: top
      };
      this.dialogBCR = this.limitEdgeBCRValue(dialogBCR, !Object.keys(bcr).length);
      return dialogBCR;
    },
    computePrimitiveValue: function computePrimitiveValue(value) {
      var referer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if ("".concat(value).includes('%')) {
        return Number.parseFloat(value) / 100 * referer;
      }

      return Number.parseFloat(value);
    },

    /**
     * 限制超出屏幕
     */
    limitEdgeBCRValue: function limitEdgeBCRValue(_bcr) {
      var _this3 = this;

      var bcr = _bcr;

      if (bcr && !this.overEdge) {
        var _window3 = window,
            innerWidth = _window3.innerWidth,
            innerHeight = _window3.innerHeight;
        Object.entries(bcr).forEach(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 1),
              prop = _ref10[0];

          switch (prop) {
            case 'width':
              bcr.width = Math.min(innerWidth, bcr.width);
              break;

            case 'minWidth':
              bcr.minWidth = Math.max(0, bcr.minWidth);
              break;

            case 'maxWidth':
              bcr.maxWidth = Math.min(innerWidth, bcr.maxWidth);
              break;

            case 'height':
              bcr.height = Math.min(innerHeight, bcr.height);
              break;

            case 'minheight':
              bcr.minHeight = Math.max(0, bcr.minHeight);
              break;

            case 'maxheight':
              bcr.maxHeight = Math.min(innerHeight, bcr.maxHeight);
              break;

            case 'left':
              {
                if (bcr.left < 0) {
                  bcr.left = 0;
                  break;
                }

                var width = isNumeric(bcr.width) ? bcr.width : _this3.renderedDialogBCR.width;
                bcr.left = Math.min(bcr.left, innerWidth - Math.min(innerWidth, width));
                break;
              }

            case 'top':
              {
                if (bcr.top < 0) {
                  bcr.top = 0;
                  break;
                }

                var height = isNumeric(bcr.height) ? bcr.height : _this3.renderedDialogBCR.height;
                bcr.top = Math.min(bcr.top, innerHeight - Math.min(innerHeight, height));
                break;
              }

            default:
              break;
          }
        });
        this.limitRectValue(bcr);
      }

      return bcr;
    },
    limitRectValue: function limitRectValue(_bcr) {
      var bcr = _bcr;

      if (bcr) {
        if (isNumeric(bcr.minHeight) && isNumeric(bcr.height)) {
          bcr.height = Math.max(bcr.height, bcr.minHeight);
        }

        if (isNumeric(bcr.maxHeight) && isNumeric(bcr.height)) {
          bcr.height = Math.min(bcr.height, bcr.maxHeight);
        }

        if (isNumeric(bcr.minWidth) && isNumeric(bcr.width)) {
          bcr.width = Math.max(bcr.width, bcr.minWidth);
        }

        if (isNumeric(bcr.maxWidth) && isNumeric(bcr.width)) {
          bcr.width = Math.min(bcr.width, bcr.maxWidth);
        }
      }

      return bcr;
    },

    /**
     * 设置弹窗最大化
     */
    setDialogMax: function setDialogMax() {
      this.dialogIsMax = true;
      this.dialogWidth = '100%';
      this.dialogHeight = '100%';
      this.dialogMinWidth = '0';
      this.dialogMaxWidth = '100%';
      this.dialogMinHeight = '0';
      this.dialogMaxHeight = '100%';
      this.dialogLeft = '0';
      this.dialogTop = '0';
      this.dialogBCRCopy = deepClone(this.dialogBCR);
      this.setBCR();
      this.disableMainBoxResizeListenerMomentary();
    },

    /**
     * 还原弹窗最大化
     */
    resetDialogMax: function resetDialogMax() {
      this.dialogIsMax = false;
      this.dialogWidth = null;
      this.dialogHeight = null;
      this.dialogMinWidth = null;
      this.dialogMaxWidth = null;
      this.dialogMinHeight = null;
      this.dialogMaxHeight = null;
      this.dialogLeft = null;
      this.dialogTop = null;

      if (this.dialogBCRCopy) {
        this.dialogBCR = deepClone(this.dialogBCRCopy);
        this.dialogBCRCopy = null;
      } else {
        this.setBCR();
      }

      if (this.isMax && !this.firstResetMaxTriggered) {// do nothing
      } else {
        this.disableMainBoxResizeListenerMomentary();
      }

      this.firstResetMaxTriggered = true;
    },
    delayClose: function delayClose(callback) {
      var _this4 = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.closeDelay;

      if (!this.isOnDelayTicking) {
        clearTimeout(this.closeTid);
        this.isOnDelayTicking = true;
        this.closeTid = setTimeout(function () {
          _this4.isOnDelayTicking = false;
          _this4.visible = false;

          _this4.$emit('input', false);

          if (isFunction(callback)) {
            callback.call(_this4);
          }
        }, isNumeric(delay) ? delay : 0);
      }
    },
    close: function close(delay) {
      this.delayClose(null, delay);
    },
    closeBtnClickHandler: function closeBtnClickHandler(delay) {
      if (isFunction(this.closeHandler)) {
        this.closeHandler(this, this.reject);
      } else {
        this.reject('close');
      }
    },
    showLoading: function showLoading(loadingText) {
      this.$props.loading = true;
      this.$props.loadingText = loadingText;
    },
    closeLoading: function closeLoading() {
      this.$props.loading = false;
    },
    cancelBtnClickHandler: function cancelBtnClickHandler() {
      this.$emit('on-cancel', this);

      if (isFunction(this.cancelHandler)) {
        this.cancelHandler(this, this.reject);
      } else {
        this.reject('cancel');
      }
    },
    okBtnClickHandler: function okBtnClickHandler() {
      if (isFunction(this.okHandler)) {
        this.okHandler(this, this.resolve);
      }
    },
    promise: function promise() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5._resolve = resolve;
        _this5._reject = reject;
      });
    },
    resolve: function resolve(res, delay) {
      var resolve = this._resolve || function () {};

      this.delayClose(function () {
        resolve(res);
      }, delay);
    },
    reject: function reject(err, delay) {
      var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (close) {
        var reject = this._reject || function () {};

        this.delayClose(function () {
          reject(err);
        }, delay);
      }
    },
    callCustomizedButtonHandler: function callCustomizedButtonHandler(handler) {
      if (isFunction(handler)) {
        handler(this, this.resolve, this.reject);
      }
    },
    getCustomizedButtonClass: function getCustomizedButtonClass(button) {
      var cls = ["vue-h-dialog__button--".concat(button.type || 'default'), {
        'is-disabled': this.loading || this.isOnDelayTicking
      }];

      if (isArray(button.class)) {
        cls.unshift.apply(cls, _toConsumableArray(button.class));
      } else {
        cls.unshift(button.class || '');
      }

      return cls;
    },
    moveMouseDownHandler: function moveMouseDownHandler(e) {
      e.currentTarget.focus();

      if (this.computedMoveable && !this.dialogIsMax) {
        this.dialogIsMoving = true;
        this.dialogMovingBCR = deepClone(this.dialogBCR);
        this.dialogMovingPos.x = e.clientX;
        this.dialogMovingPos.y = e.clientY;
      }
    },
    moveMouseUpHandler: function moveMouseUpHandler() {
      if (this.computedMoveable && !this.dialogIsMax && this.dialogIsMoving) {
        this.dialogIsMoving = false;

        if (this.dialogBCR.left !== this.dialogMovingBCR.left || this.dialogBCR.top !== this.dialogMovingBCR.top) {
          this.boxMoved = true;
        }

        this.dialogBCR = deepClone(this.dialogMovingBCR);
        this.dialogMovingBCR = null;
      }
    },
    moveMouseMoveHandler: function moveMouseMoveHandler(e) {
      if (this.computedMoveable && !this.dialogIsMax && this.dialogIsMoving) {
        this.dialogMovingBCR.left += e.clientX - this.dialogMovingPos.x;
        this.dialogMovingBCR.top += e.clientY - this.dialogMovingPos.y;
        this.dialogMovingPos.x = e.clientX;
        this.dialogMovingPos.y = e.clientY;
      }
    },
    resizeMouseDownHandler: function resizeMouseDownHandler(e) {
      e.currentTarget.focus();

      if (this.computedResizeable && !this.dialogIsMax) {
        this.dialogIsResizing = true; // NOTE 这里先直接设置类名，否则IE表现异常

        addClass(this.$refs.main, 'vue-h-dialog__main--isresizing');
        this.enableListenMainBoxResize = false;
        var _this$renderedDialogB = this.renderedDialogBCR,
            width = _this$renderedDialogB.width,
            height = _this$renderedDialogB.height,
            left = _this$renderedDialogB.left,
            top = _this$renderedDialogB.top;
        this.dialogResizeBCR = mainvue_type_script_lang_js_objectSpread({}, this.dialogBCR, {
          width: width,
          height: height,
          left: left,
          top: top
        });
        this.dialogBCR = deepClone(this.dialogResizeBCR);
        this.dialogResizePos.x = e.clientX;
        this.dialogResizePos.y = e.clientY;
      }
    },
    resizeMouseUpHandler: function resizeMouseUpHandler() {
      if (this.computedResizeable && !this.dialogIsMax && this.dialogIsResizing) {
        this.dialogIsResizing = false;
        this.mainBoxResizeListenerEnableHanlder();

        if (this.dialogBCR.left !== this.dialogResizeBCR.left || this.dialogBCR.top !== this.dialogResizeBCR.top) {
          this.boxResized = true;
        }

        this.dialogBCR = deepClone(this.dialogResizeBCR);
        this.dialogResizeBCR = null;
        this.currentResizeMoveSide = null;
      }
    },
    resizeMouseMoveHandler: function resizeMouseMoveHandler(e, side) {
      this.resizeBCRSetHandler(e, side);
    },
    resizeBCRSetHandler: function resizeBCRSetHandler(e, side) {
      this.currentResizeMoveSide = this.dialogIsResizing ? this.currentResizeMoveSide : side;

      if (this.computedResizeable && !this.dialogIsMax && this.dialogIsResizing) {
        var deltaX = e.clientX - this.dialogResizePos.x;
        var deltaY = e.clientY - this.dialogResizePos.y;

        switch (this.currentResizeMoveSide) {
          case 'left':
            {
              var limit = this.limitRectValue(mainvue_type_script_lang_js_objectSpread({}, this.dialogResizeBCR, {
                width: this.dialogResizeBCR.width - deltaX
              }));

              if (this.dialogResizeBCR.width !== limit.width) {
                this.dialogResizeBCR.left += deltaX;
              }

              this.dialogResizeBCR.width -= deltaX;
              break;
            }

          case 'right':
            {
              this.dialogResizeBCR.width += deltaX;
              break;
            }

          case 'top':
            {
              var _limit = this.limitRectValue(mainvue_type_script_lang_js_objectSpread({}, this.dialogResizeBCR, {
                height: this.dialogResizeBCR.height - deltaY
              }));

              if (this.dialogResizeBCR.height !== _limit.height) {
                this.dialogResizeBCR.top += deltaY;
              }

              this.dialogResizeBCR.height -= deltaY;
              break;
            }

          case 'bottom':
            {
              this.dialogResizeBCR.height += deltaY;
              break;
            }

          case 'top-left':
            {
              var _limit2 = this.limitRectValue(mainvue_type_script_lang_js_objectSpread({}, this.dialogResizeBCR, {
                width: this.dialogResizeBCR.width - deltaX,
                height: this.dialogResizeBCR.height - deltaY
              }));

              if (this.dialogResizeBCR.width !== _limit2.width) {
                this.dialogResizeBCR.left += deltaX;
              }

              if (this.dialogResizeBCR.height !== _limit2.height) {
                this.dialogResizeBCR.top += deltaY;
              }

              this.dialogResizeBCR.width -= deltaX;
              this.dialogResizeBCR.height -= deltaY;
              break;
            }

          case 'top-right':
            {
              var _limit3 = this.limitRectValue(mainvue_type_script_lang_js_objectSpread({}, this.dialogResizeBCR, {
                height: this.dialogResizeBCR.height - deltaY
              }));

              if (this.dialogResizeBCR.height !== _limit3.height) {
                this.dialogResizeBCR.top += deltaY;
              }

              this.dialogResizeBCR.width += deltaX;
              this.dialogResizeBCR.height -= deltaY;
              break;
            }

          case 'bottom-left':
            {
              var _limit4 = this.limitRectValue(mainvue_type_script_lang_js_objectSpread({}, this.dialogResizeBCR, {
                width: this.dialogResizeBCR.width - deltaX
              }));

              if (this.dialogResizeBCR.width !== _limit4.width) {
                this.dialogResizeBCR.left += deltaX;
              }

              this.dialogResizeBCR.width -= deltaX;
              this.dialogResizeBCR.height += deltaY;
              break;
            }

          case 'bottom-right':
            {
              this.dialogResizeBCR.width += deltaX;
              this.dialogResizeBCR.height += deltaY;
              break;
            }

          default:
            break;
        }

        this.dialogResizePos.x = e.clientX;
        this.dialogResizePos.y = e.clientY; //

        this.dialogBCR = deepClone(this.dialogResizeBCR); // this.directlySetStyles();
      }
    },
    directlySetStyles: function directlySetStyles() {
      setStyle(this.$refs.main, this.computedMainStyles);
      setStyle(this.$refs.content, this.computedContentStyles);
    }
  }
});
// CONCATENATED MODULE: ./src/package/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/package/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_7e12b885_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_main = (component.exports);
// CONCATENATED MODULE: ./src/package/index.js


















function package_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function package_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { package_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { package_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @author huyk<bengda@outlook.com>
 * NOTE 使用cache特性时需要传入context上下文对象
 * 为什么需要context，这是因为在单页面路由情况下，路由切换后再回到先前的路由，宿主上下文环境已经发生了变化
 * @example
 * dialog({
 *   pId: 1,
 *   // 小心使用缓存特性
 *   cache: true,
 *   context: this,
 *   noCacheCompromise: true,
 *   appendToBody: false,
 *   title: '未命名标题',
 *   titleAlign: 'left',
 *   loading: false,
 *   loadingText: '',
 *   showMax: true,
 *   isMax: false,
 *   moveable: true,
 *   resize: true,
 *   shadowMove: false,
 *   overEdge: false,
 *   left: '20%',
 *   top: '20%',
 *   width: '50%',
 *   height: '50%',
 *   minWidth: 0,
 *   maxWidth: '100%',
 *   minHeight: 0,
 *   maxHeight: '100%',
 *   html: document.createElement('div'),
 *   router: this.$router,
 *   components: [
 *     {
 *       component() { return import('./test.vue') },
 *       propsData: { msg: 'hello world' },
 *       listeners: {},
 *     },
 *   ],
 *   showOkBtn: true,
 *   okBtnText: '确定',
 *   showCancelBtn: true,
 *   cancelBtnText: '取消',
 *   showClose: true,
 *   closeDelay: 0,
 *   showFooter: true,,
 *   okHandler(ins, resolve) {
 *     // do sth here ...
 *     // 下面两个方法都可以关闭弹窗，数字为延时关闭
 *     resolve('建议使用此种方式，使用promise时必需调用此方法', 2000);
 *     // 注意close方法不能使promise链变为fulfilled状态
 *     ins.close(2000);
 *   },
 *   closeHandler: (ins, reject) => any,
 *   cancelHandler: (ins, reject) => any,
 *   scrollHandler: (event, ins) => any,
 *   disableBodyScroll: true,
 *   listeners: {
 *     ['on-open']() {},
 *     ['on-close']() {},
 *     ['on-cancel']() {},
 *   },
 *   slots: {
 *     // vnodes
 *     title: [this.$createElement('span', '这是title')],
 *     default: [this.$createElement('p', '主体内容')],
 *     footer: [this.$createElement('ElButton', {
 *       on: {
 *         click() { alert(); },
 *       },
 *     }, '点击弹出alert')],
 *   },
 *  }).promise().then(res => { console.log(res) }).catch(err => { console.log(err) })
 */





/**
 * cache vue-componentInstance
 * set a unique key as the instance ident
 * to use this feature,the config params should set cache field to true and pass through a unique id via pId field
 * ps. disabled when openInNewTag field setted
 */

var CACHE_MAP = new Map();

function beforeDestroyHook() {
  var m = beforeDestroyHook._m;
  var t = m.get(this);

  if (t) {
    t.forEach(function (pId) {
      var cacheIns = CACHE_MAP.get(pId); // destroy cache instance

      cacheIns.$el.parentNode.removeChild(cacheIns.$el);
      cacheIns.$destroy(); // remove cache

      CACHE_MAP.delete(pId);
    });
    m.delete(this);
  }
}

var package_vueHDialog = function vueHDialog() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  assertObject(props);
  var html = isFunction(props.html) ? props.html() : props.html; // cache feature needs pId and cache, context fields
  // 使用缓存特性必需要传递PId和context字段，pId为映射键名，context为调用上下文，大部分情况下传this就可以了
  // 为什么需要context，这是因为在单页面路由情况下，路由切换后再回到先前的路由，宿主上下文环境已经发生了变化
  // 如果不做其它操作的话，我们得到的依然是缓存的组件弹窗，这完全不符合我们的预期

  if (props.cache && (!props.pId || !props.context)) {
    throw new Error('[vue-h-dialog] to use cache feature,the config params should pass through a unique ident via pId field and the vue-component instance(pass through "this" refer in most cases) via context field');
  } else if (props.pId && !props.cache) {
    // remove
    CACHE_MAP.delete(props.pId);
  }

  if (props.cache && CACHE_MAP.has(props.pId)) {
    var cacheIns = CACHE_MAP.get(props.pId); // reset handlers
    // ANCHOR 纠结~如果重置了处理方法是不是与设计缓存这一特性的初衷不符。但是在处理不同条件变量下的操作时，不缓存内部变量又显得很有必要

    if (!props.noCacheCompromise) {
      cacheIns.$props.okHandler = props.okHandler;
      cacheIns.$props.cancelHandler = props.cancelHandler;
      cacheIns.$props.closeHandler = props.closeHandler;
      cacheIns.$props.scrollHandler = props.scrollHandler;
    } //


    cacheIns.visible = true;
    return cacheIns;
  }

  var mountNode = document.createElement('div');

  if (isDom(html) && !props.appendToBody && html.parentNode) {
    if (html._vhd_html_parentNode) {
      html._vhd_html_parentNode.appendChild(mountNode);
    } else {
      html._vhd_html_parentNode = html.parentNode;
      html.parentNode.appendChild(mountNode);
    }
  } else {
    document.body.appendChild(mountNode);
  } // if (props.components && !props.router) {
  //   throw new Error('[vue-h-dialog] when passed components property,the router property is required,otherwise the inside components may can not access the VueRouter instance');
  // }


  var InsStructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(src_main);
  var vcOpts = {
    el: mountNode,
    propsData: package_objectSpread({}, props)
  };

  if (props.router) {
    // 当使用了components参数时，建议传递vueRouter实例，否则内部组件取不到$router
    vcOpts.router = props.router;
  }

  var ins = new InsStructor(vcOpts);
  ins.$slots = props.slots || {}; // attach listeners

  for (var _i = 0, _Object$entries = Object.entries(props.listeners || {}); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        event = _Object$entries$_i[0],
        handler = _Object$entries$_i[1];

    ins.$on(event, handler);
  } // show the dialog


  ins.visible = true;
  ins.$watch('visible', function (v) {
    if (!v && !props.cache) {
      // 销毁
      ins.$el.parentNode.removeChild(ins.$el);
      ins.$destroy();
    }
  });

  if (props.cache) {
    CACHE_MAP.set(props.pId, ins); // SECTION inject beforeDestroy hook

    beforeDestroyHook._m = beforeDestroyHook._m || new Map();

    if (!beforeDestroyHook._m.has(props.context)) {
      beforeDestroyHook._m.set(props.context, [props.pId]);
    } else if (!beforeDestroyHook._m.get(props.context).includes(props.pId)) {
      beforeDestroyHook._m.get(props.context).push(props.pId);
    }

    if (props.context.$options.beforeDestroy && !props.context.$options.beforeDestroy.includes(beforeDestroyHook)) {
      props.context.$options.beforeDestroy.push(beforeDestroyHook);
    } else if (!props.context.$options.beforeDestroy) {
      props.context.$options.beforeDestroy = [beforeDestroyHook];
    } // !SECTION

  }

  return ins;
};
/**
 * 清除缓存组件
 * @namespace {clearCache~vueHDialog}
 * @static
 * @public
 * @param {any} pId
 */


package_vueHDialog.clearCache = function clearCache(pId) {
  return pId ? CACHE_MAP.delete(pId) : CACHE_MAP.clear();
};
/**
 * 关闭指定弹窗
 */


package_vueHDialog.close = function close() {
  for (var _len = arguments.length, gIds = new Array(_len), _key = 0; _key < _len; _key++) {
    gIds[_key] = arguments[_key];
  }

  gIds.forEach(function (gId) {
    var dialog = src_main.CREATED_COLLECTIONS.get(gId);

    if (dialog) {
      dialog.close();
    }
  });
};

package_vueHDialog.install = function install(Vue) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$componentName = _ref.componentName,
      componentName = _ref$componentName === void 0 ? 'VueDialog' : _ref$componentName,
      _ref$propertyName = _ref.propertyName,
      propertyName = _ref$propertyName === void 0 ? 'hDialog' : _ref$propertyName,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 504 : _ref$zIndex,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? 'zh-cn' : _ref$lang,
      _ref$i18n = _ref.i18n,
      i18n = _ref$i18n === void 0 ? {} : _ref$i18n;

  src_main.setZIndex(zIndex);
  src_main.i18n = i18n;
  src_main.lang = lang;
  Vue.prototype["$".concat(propertyName)] = package_vueHDialog;
  Vue.component(componentName || src_main.name, src_main);
};

package_vueHDialog.template = src_main;
/* harmony default export */ var src_package = (package_vueHDialog);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_package);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=vueHDialog.common.js.map