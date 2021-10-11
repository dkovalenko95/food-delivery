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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/browserslist/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/browserslist/browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")

function noop () { }

module.exports = {
  loadQueries: function loadQueries () {
    throw new BrowserslistError(
      'Sharable configs are not supported in client-side build of Browserslist')
  },

  getStat: function getStat (opts) {
    return opts.stats
  },

  loadConfig: function loadConfig (opts) {
    if (opts.config) {
      throw new BrowserslistError(
        'Browserslist config are not supported in client-side build')
    }
  },

  loadCountry: function loadCountry () {
    throw new BrowserslistError(
      'Country statistics are not supported ' +
      'in client-side build of Browserslist')
  },

  loadFeature: function loadFeature () {
    throw new BrowserslistError(
      'Supports queries are not available in client-side build of Browserslist')
  },

  currentNode: function currentNode (resolve, context) {
    return resolve(['maintained node versions'], context)[0]
  },

  parseConfig: noop,

  readConfig: noop,

  findConfig: noop,

  clearCaches: noop,

  oldDataWarning: noop
}


/***/ }),

/***/ "./node_modules/browserslist/error.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/error.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function BrowserslistError (message) {
  this.name = 'BrowserslistError'
  this.message = message
  this.browserslist = true
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, BrowserslistError)
  }
}

BrowserslistError.prototype = Error.prototype

module.exports = BrowserslistError


/***/ }),

/***/ "./node_modules/browserslist/index.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var jsReleases = __webpack_require__(/*! node-releases/data/processed/envs.json */ "./node_modules/node-releases/data/processed/envs.json")
var agents = __webpack_require__(/*! caniuse-lite/dist/unpacker/agents */ "./node_modules/caniuse-lite/dist/unpacker/agents.js").agents
var jsEOL = __webpack_require__(/*! node-releases/data/release-schedule/release-schedule.json */ "./node_modules/node-releases/data/release-schedule/release-schedule.json")
var path = __webpack_require__(/*! path */ 0)
var e2c = __webpack_require__(/*! electron-to-chromium/versions */ "./node_modules/electron-to-chromium/versions.js")

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")
var env = __webpack_require__(/*! ./node */ "./node_modules/browserslist/browser.js") // Will load browser.js in webpack

var YEAR = 365.259641 * 24 * 60 * 60 * 1000
var ANDROID_EVERGREEN_FIRST = 37

var QUERY_OR = 1
var QUERY_AND = 2

function isVersionsMatch (versionA, versionB) {
  return (versionA + '.').indexOf(versionB + '.') === 0
}

function isEolReleased (name) {
  var version = name.slice(1)
  return jsReleases.some(function (i) {
    return isVersionsMatch(i.version, version)
  })
}

function normalize (versions) {
  return versions.filter(function (version) {
    return typeof version === 'string'
  })
}

function normalizeElectron (version) {
  var versionToUse = version
  if (version.split('.').length === 3) {
    versionToUse = version
      .split('.')
      .slice(0, -1)
      .join('.')
  }
  return versionToUse
}

function nameMapper (name) {
  return function mapName (version) {
    return name + ' ' + version
  }
}

function getMajor (version) {
  return parseInt(version.split('.')[0])
}

function getMajorVersions (released, number) {
  if (released.length === 0) return []
  var majorVersions = uniq(released.map(getMajor))
  var minimum = majorVersions[majorVersions.length - number]
  if (!minimum) {
    return released
  }
  var selected = []
  for (var i = released.length - 1; i >= 0; i--) {
    if (minimum > getMajor(released[i])) break
    selected.unshift(released[i])
  }
  return selected
}

function uniq (array) {
  var filtered = []
  for (var i = 0; i < array.length; i++) {
    if (filtered.indexOf(array[i]) === -1) filtered.push(array[i])
  }
  return filtered
}

// Helpers

function fillUsage (result, name, data) {
  for (var i in data) {
    result[name + ' ' + i] = data[i]
  }
}

function generateFilter (sign, version) {
  version = parseFloat(version)
  if (sign === '>') {
    return function (v) {
      return parseFloat(v) > version
    }
  } else if (sign === '>=') {
    return function (v) {
      return parseFloat(v) >= version
    }
  } else if (sign === '<') {
    return function (v) {
      return parseFloat(v) < version
    }
  } else {
    return function (v) {
      return parseFloat(v) <= version
    }
  }
}

function generateSemverFilter (sign, version) {
  version = version.split('.').map(parseSimpleInt)
  version[1] = version[1] || 0
  version[2] = version[2] || 0
  if (sign === '>') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) > 0
    }
  } else if (sign === '>=') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) >= 0
    }
  } else if (sign === '<') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) > 0
    }
  } else {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) >= 0
    }
  }
}

function parseSimpleInt (x) {
  return parseInt(x)
}

function compare (a, b) {
  if (a < b) return -1
  if (a > b) return +1
  return 0
}

function compareSemver (a, b) {
  return (
    compare(parseInt(a[0]), parseInt(b[0])) ||
    compare(parseInt(a[1] || '0'), parseInt(b[1] || '0')) ||
    compare(parseInt(a[2] || '0'), parseInt(b[2] || '0'))
  )
}

// this follows the npm-like semver behavior
function semverFilterLoose (operator, range) {
  range = range.split('.').map(parseSimpleInt)
  if (typeof range[1] === 'undefined') {
    range[1] = 'x'
  }
  // ignore any patch version because we only return minor versions
  // range[2] = 'x'
  switch (operator) {
    case '<=':
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) <= 0
      }
    default:
    case '>=':
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) >= 0
      }
  }
}

// this follows the npm-like semver behavior
function compareSemverLoose (version, range) {
  if (version[0] !== range[0]) {
    return version[0] < range[0] ? -1 : +1
  }
  if (range[1] === 'x') {
    return 0
  }
  if (version[1] !== range[1]) {
    return version[1] < range[1] ? -1 : +1
  }
  return 0
}

function resolveVersion (data, version) {
  if (data.versions.indexOf(version) !== -1) {
    return version
  } else if (browserslist.versionAliases[data.name][version]) {
    return browserslist.versionAliases[data.name][version]
  } else {
    return false
  }
}

function normalizeVersion (data, version) {
  var resolved = resolveVersion(data, version)
  if (resolved) {
    return resolved
  } else if (data.versions.length === 1) {
    return data.versions[0]
  } else {
    return false
  }
}

function filterByYear (since, context) {
  since = since / 1000
  return Object.keys(agents).reduce(function (selected, name) {
    var data = byName(name, context)
    if (!data) return selected
    var versions = Object.keys(data.releaseDate).filter(function (v) {
      return data.releaseDate[v] >= since
    })
    return selected.concat(versions.map(nameMapper(data.name)))
  }, [])
}

function cloneData (data) {
  return {
    name: data.name,
    versions: data.versions,
    released: data.released,
    releaseDate: data.releaseDate
  }
}

function mapVersions (data, map) {
  data.versions = data.versions.map(function (i) {
    return map[i] || i
  })
  data.released = data.versions.map(function (i) {
    return map[i] || i
  })
  var fixedDate = { }
  for (var i in data.releaseDate) {
    fixedDate[map[i] || i] = data.releaseDate[i]
  }
  data.releaseDate = fixedDate
  return data
}

function byName (name, context) {
  name = name.toLowerCase()
  name = browserslist.aliases[name] || name
  if (context.mobileToDesktop && browserslist.desktopNames[name]) {
    var desktop = browserslist.data[browserslist.desktopNames[name]]
    if (name === 'android') {
      return normalizeAndroidData(cloneData(browserslist.data[name]), desktop)
    } else {
      var cloned = cloneData(desktop)
      cloned.name = name
      if (name === 'op_mob') {
        cloned = mapVersions(cloned, { '10.0-10.1': '10' })
      }
      return cloned
    }
  }
  return browserslist.data[name]
}

function normalizeAndroidVersions (androidVersions, chromeVersions) {
  var firstEvergreen = ANDROID_EVERGREEN_FIRST
  var last = chromeVersions[chromeVersions.length - 1]
  return androidVersions
    .filter(function (version) { return /^(?:[2-4]\.|[34]$)/.test(version) })
    .concat(chromeVersions.slice(firstEvergreen - last - 1))
}

function normalizeAndroidData (android, chrome) {
  android.released = normalizeAndroidVersions(android.released, chrome.released)
  android.versions = normalizeAndroidVersions(android.versions, chrome.versions)
  return android
}

function checkName (name, context) {
  var data = byName(name, context)
  if (!data) throw new BrowserslistError('Unknown browser ' + name)
  return data
}

function unknownQuery (query) {
  return new BrowserslistError(
    'Unknown browser query `' + query + '`. ' +
    'Maybe you are using old Browserslist or made typo in query.'
  )
}

function filterAndroid (list, versions, context) {
  if (context.mobileToDesktop) return list
  var released = browserslist.data.android.released
  var last = released[released.length - 1]
  var diff = last - ANDROID_EVERGREEN_FIRST - versions
  if (diff > 0) {
    return list.slice(-1)
  } else {
    return list.slice(diff - 1)
  }
}

/**
 * Resolves queries into a browser list.
 * @param {string|string[]} queries Queries to combine.
 * Either an array of queries or a long string of queries.
 * @param {object} [context] Optional arguments to
 * the select function in `queries`.
 * @returns {string[]} A list of browsers
 */
function resolve (queries, context) {
  if (Array.isArray(queries)) {
    queries = flatten(queries.map(parse))
  } else {
    queries = parse(queries)
  }

  return queries.reduce(function (result, query, index) {
    var selection = query.queryString

    var isExclude = selection.indexOf('not ') === 0
    if (isExclude) {
      if (index === 0) {
        throw new BrowserslistError(
          'Write any browsers query (for instance, `defaults`) ' +
          'before `' + selection + '`')
      }
      selection = selection.slice(4)
    }

    for (var i = 0; i < QUERIES.length; i++) {
      var type = QUERIES[i]
      var match = selection.match(type.regexp)
      if (match) {
        var args = [context].concat(match.slice(1))
        var array = type.select.apply(browserslist, args).map(function (j) {
          var parts = j.split(' ')
          if (parts[1] === '0') {
            return parts[0] + ' ' + byName(parts[0], context).versions[0]
          } else {
            return j
          }
        })

        switch (query.type) {
          case QUERY_AND:
            if (isExclude) {
              return result.filter(function (j) {
                return array.indexOf(j) === -1
              })
            } else {
              return result.filter(function (j) {
                return array.indexOf(j) !== -1
              })
            }
          case QUERY_OR:
          default:
            if (isExclude) {
              var filter = { }
              array.forEach(function (j) {
                filter[j] = true
              })
              return result.filter(function (j) {
                return !filter[j]
              })
            }
            return result.concat(array)
        }
      }
    }

    throw unknownQuery(selection)
  }, [])
}

var cache = { }

/**
 * Return array of browsers by selection queries.
 *
 * @param {(string|string[])} [queries=browserslist.defaults] Browser queries.
 * @param {object} [opts] Options.
 * @param {string} [opts.path="."] Path to processed file.
 *                                 It will be used to find config files.
 * @param {string} [opts.env="production"] Processing environment.
 *                                         It will be used to take right
 *                                         queries from config file.
 * @param {string} [opts.config] Path to config file with queries.
 * @param {object} [opts.stats] Custom browser usage statistics
 *                              for "> 1% in my stats" query.
 * @param {boolean} [opts.ignoreUnknownVersions=false] Do not throw on unknown
 *                                                     version in direct query.
 * @param {boolean} [opts.dangerousExtend] Disable security checks
 *                                         for extend query.
 * @param {boolean} [opts.mobileToDesktop] Alias mobile browsers to the desktop
 *                                         version when Can I Use doesn't have
 *                                         data about the specified version.
 * @returns {string[]} Array with browser names in Can I Use.
 *
 * @example
 * browserslist('IE >= 10, IE 8') //=> ['ie 11', 'ie 10', 'ie 8']
 */
function browserslist (queries, opts) {
  if (typeof opts === 'undefined') opts = { }

  if (typeof opts.path === 'undefined') {
    opts.path = path.resolve ? path.resolve('.') : '.'
  }

  if (typeof queries === 'undefined' || queries === null) {
    var config = browserslist.loadConfig(opts)
    if (config) {
      queries = config
    } else {
      queries = browserslist.defaults
    }
  }

  if (!(typeof queries === 'string' || Array.isArray(queries))) {
    throw new BrowserslistError(
      'Browser queries must be an array or string. Got ' + typeof queries + '.')
  }

  var context = {
    ignoreUnknownVersions: opts.ignoreUnknownVersions,
    dangerousExtend: opts.dangerousExtend,
    mobileToDesktop: opts.mobileToDesktop,
    path: opts.path,
    env: opts.env
  }

  env.oldDataWarning(browserslist.data)
  var stats = env.getStat(opts, browserslist.data)
  if (stats) {
    context.customUsage = { }
    for (var browser in stats) {
      fillUsage(context.customUsage, browser, stats[browser])
    }
  }

  var cacheKey = JSON.stringify([queries, context])
  if (cache[cacheKey]) return cache[cacheKey]

  var result = uniq(resolve(queries, context)).sort(function (name1, name2) {
    name1 = name1.split(' ')
    name2 = name2.split(' ')
    if (name1[0] === name2[0]) {
      // assumptions on caniuse data
      // 1) version ranges never overlaps
      // 2) if version is not a range, it never contains `-`
      var version1 = name1[1].split('-')[0]
      var version2 = name2[1].split('-')[0]
      return compareSemver(version2.split('.'), version1.split('.'))
    } else {
      return compare(name1[0], name2[0])
    }
  })
  if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
    cache[cacheKey] = result
  }
  return result
}

function parse (queries) {
  var qs = []
  do {
    queries = doMatch(queries, qs)
  } while (queries)
  return qs
}

function doMatch (string, qs) {
  var or = /^(?:,\s*|\s+or\s+)(.*)/i
  var and = /^\s+and\s+(.*)/i

  return find(string, function (parsed, n, max) {
    if (and.test(parsed)) {
      qs.unshift({ type: QUERY_AND, queryString: parsed.match(and)[1] })
      return true
    } else if (or.test(parsed)) {
      qs.unshift({ type: QUERY_OR, queryString: parsed.match(or)[1] })
      return true
    } else if (n === max) {
      qs.unshift({ type: QUERY_OR, queryString: parsed.trim() })
      return true
    }
    return false
  })
}

function find (string, predicate) {
  for (var n = 1, max = string.length; n <= max; n++) {
    var parsed = string.substr(-n, n)
    if (predicate(parsed, n, max)) {
      return string.slice(0, -n)
    }
  }
  return ''
}

function flatten (array) {
  if (!Array.isArray(array)) return [array]
  return array.reduce(function (a, b) {
    return a.concat(flatten(b))
  }, [])
}

// Will be filled by Can I Use data below
browserslist.cache = { }
browserslist.data = { }
browserslist.usage = {
  global: { },
  custom: null
}

// Default browsers query
browserslist.defaults = [
  '> 0.5%',
  'last 2 versions',
  'Firefox ESR',
  'not dead'
]

// Browser names aliases
browserslist.aliases = {
  fx: 'firefox',
  ff: 'firefox',
  ios: 'ios_saf',
  explorer: 'ie',
  blackberry: 'bb',
  explorermobile: 'ie_mob',
  operamini: 'op_mini',
  operamobile: 'op_mob',
  chromeandroid: 'and_chr',
  firefoxandroid: 'and_ff',
  ucandroid: 'and_uc',
  qqandroid: 'and_qq'
}

// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
browserslist.desktopNames = {
  and_chr: 'chrome',
  and_ff: 'firefox',
  ie_mob: 'ie',
  op_mob: 'opera',
  android: 'chrome' // has extra processing logic
}

// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = { }

browserslist.clearCaches = env.clearCaches
browserslist.parseConfig = env.parseConfig
browserslist.readConfig = env.readConfig
browserslist.findConfig = env.findConfig
browserslist.loadConfig = env.loadConfig

/**
 * Return browsers market coverage.
 *
 * @param {string[]} browsers Browsers names in Can I Use.
 * @param {string|object} [stats="global"] Which statistics should be used.
 *                                         Country code or custom statistics.
 *                                         Pass `"my stats"` to load statistics
 *                                         from Browserslist files.
 *
 * @return {number} Total market coverage for all selected browsers.
 *
 * @example
 * browserslist.coverage(browserslist('> 1% in US'), 'US') //=> 83.1
 */
browserslist.coverage = function (browsers, stats) {
  var data
  if (typeof stats === 'undefined') {
    data = browserslist.usage.global
  } else if (stats === 'my stats') {
    var opts = {}
    opts.path = path.resolve ? path.resolve('.') : '.'
    var customStats = env.getStat(opts)
    if (!customStats) {
      throw new BrowserslistError('Custom usage statistics was not provided')
    }
    data = {}
    for (var browser in customStats) {
      fillUsage(data, browser, customStats[browser])
    }
  } else if (typeof stats === 'string') {
    if (stats.length > 2) {
      stats = stats.toLowerCase()
    } else {
      stats = stats.toUpperCase()
    }
    env.loadCountry(browserslist.usage, stats, browserslist.data)
    data = browserslist.usage[stats]
  } else {
    if ('dataByBrowser' in stats) {
      stats = stats.dataByBrowser
    }
    data = { }
    for (var name in stats) {
      for (var version in stats[name]) {
        data[name + ' ' + version] = stats[name][version]
      }
    }
  }

  return browsers.reduce(function (all, i) {
    var usage = data[i]
    if (usage === undefined) {
      usage = data[i.replace(/ \S+$/, ' 0')]
    }
    return all + (usage || 0)
  }, 0)
}

function nodeQuery (context, version) {
  var nodeReleases = jsReleases.filter(function (i) {
    return i.name === 'nodejs'
  })
  var matched = nodeReleases.filter(function (i) {
    return isVersionsMatch(i.version, version)
  })
  if (matched.length === 0) {
    if (context.ignoreUnknownVersions) {
      return []
    } else {
      throw new BrowserslistError('Unknown version ' + version + ' of Node.js')
    }
  }
  return ['node ' + matched[matched.length - 1].version]
}

function sinceQuery (context, year, month, date) {
  year = parseInt(year)
  month = parseInt(month || '01') - 1
  date = parseInt(date || '01')
  return filterByYear(Date.UTC(year, month, date, 0, 0, 0), context)
}

function coverQuery (context, coverage, statMode) {
  coverage = parseFloat(coverage)
  var usage = browserslist.usage.global
  if (statMode) {
    if (statMode.match(/^my\s+stats$/)) {
      if (!context.customUsage) {
        throw new BrowserslistError(
          'Custom usage statistics was not provided'
        )
      }
      usage = context.customUsage
    } else {
      var place
      if (statMode.length === 2) {
        place = statMode.toUpperCase()
      } else {
        place = statMode.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      usage = browserslist.usage[place]
    }
  }
  var versions = Object.keys(usage).sort(function (a, b) {
    return usage[b] - usage[a]
  })
  var coveraged = 0
  var result = []
  var version
  for (var i = 0; i <= versions.length; i++) {
    version = versions[i]
    if (usage[version] === 0) break
    coveraged += usage[version]
    result.push(version)
    if (coveraged >= coverage) break
  }
  return result
}

var QUERIES = [
  {
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function (context, versions) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = getMajorVersions(data.released, versions)
        list = list.map(nameMapper(data.name))
        if (data.name === 'android') {
          list = filterAndroid(list, versions, context)
        }
        return selected.concat(list)
      }, [])
    }
  },
  {
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (context, versions) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.released.slice(-versions)
        list = list.map(nameMapper(data.name))
        if (data.name === 'android') {
          list = filterAndroid(list, versions, context)
        }
        return selected.concat(list)
      }, [])
    }
  },
  {
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function (context, versions) {
      var validVersions = getMajorVersions(Object.keys(e2c), versions)
      return validVersions.map(function (i) {
        return 'chrome ' + e2c[i]
      })
    }
  },
  {
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function (context, versions, name) {
      var data = checkName(name, context)
      var validVersions = getMajorVersions(data.released, versions)
      var list = validVersions.map(nameMapper(data.name))
      if (data.name === 'android') {
        list = filterAndroid(list, versions, context)
      }
      return list
    }
  },
  {
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function (context, versions) {
      return Object.keys(e2c)
        .slice(-versions)
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  {
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (context, versions, name) {
      var data = checkName(name, context)
      var list = data.released.slice(-versions).map(nameMapper(data.name))
      if (data.name === 'android') {
        list = filterAndroid(list, versions, context)
      }
      return list
    }
  },
  {
    regexp: /^unreleased\s+versions$/i,
    select: function (context) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.versions.filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        list = list.map(nameMapper(data.name))
        return selected.concat(list)
      }, [])
    }
  },
  {
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function () {
      return []
    }
  },
  {
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (context, name) {
      var data = checkName(name, context)
      return data.versions
        .filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        .map(nameMapper(data.name))
    }
  },
  {
    regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
    select: function (context, years) {
      return filterByYear(Date.now() - YEAR * years, context)
    }
  },
  {
    regexp: /^since (\d+)$/i,
    select: sinceQuery
  },
  {
    regexp: /^since (\d+)-(\d+)$/i,
    select: sinceQuery
  },
  {
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: sinceQuery
  },
  {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function (context, sign, popularity) {
      popularity = parseFloat(popularity)
      var usage = browserslist.usage.global
      return Object.keys(usage).reduce(function (result, version) {
        if (sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function (context, sign, popularity) {
      popularity = parseFloat(popularity)
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        if (sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function (context, sign, popularity, name) {
      popularity = parseFloat(popularity)
      var stats = env.loadStat(context, name, browserslist.data)
      if (stats) {
        context.customUsage = {}
        for (var browser in stats) {
          fillUsage(context.customUsage, browser, stats[browser])
        }
      }
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        if (sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  {
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (context, sign, popularity, place) {
      popularity = parseFloat(popularity)
      if (place.length === 2) {
        place = place.toUpperCase()
      } else {
        place = place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      var usage = browserslist.usage[place]
      return Object.keys(usage).reduce(function (result, version) {
        if (sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  {
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/,
    select: coverQuery
  },
  {
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/,
    select: coverQuery
  },
  {
    regexp: /^supports\s+([\w-]+)$/,
    select: function (context, feature) {
      env.loadFeature(browserslist.cache, feature)
      var features = browserslist.cache[feature]
      return Object.keys(features).reduce(function (result, version) {
        var flags = features[version]
        if (flags.indexOf('y') >= 0 || flags.indexOf('a') >= 0) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  {
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, from, to) {
      var fromToUse = normalizeElectron(from)
      var toToUse = normalizeElectron(to)
      if (!e2c[fromToUse]) {
        throw new BrowserslistError('Unknown version ' + from + ' of electron')
      }
      if (!e2c[toToUse]) {
        throw new BrowserslistError('Unknown version ' + to + ' of electron')
      }
      from = parseFloat(from)
      to = parseFloat(to)
      return Object.keys(e2c)
        .filter(function (i) {
          var parsed = parseFloat(i)
          return parsed >= from && parsed <= to
        })
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  {
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, from, to) {
      var nodeVersions = jsReleases
        .filter(function (i) {
          return i.name === 'nodejs'
        })
        .map(function (i) {
          return i.version
        })
      return nodeVersions
        .filter(semverFilterLoose('>=', from))
        .filter(semverFilterLoose('<=', to))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  {
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, name, from, to) {
      var data = checkName(name, context)
      from = parseFloat(normalizeVersion(data, from) || from)
      to = parseFloat(normalizeVersion(data, to) || to)
      function filter (v) {
        var parsed = parseFloat(v)
        return parsed >= from && parsed <= to
      }
      return data.released.filter(filter).map(nameMapper(data.name))
    }
  },
  {
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, sign, version) {
      var versionToUse = normalizeElectron(version)
      return Object.keys(e2c)
        .filter(generateFilter(sign, versionToUse))
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  {
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, sign, version) {
      var nodeVersions = jsReleases
        .filter(function (i) {
          return i.name === 'nodejs'
        })
        .map(function (i) {
          return i.version
        })
      return nodeVersions
        .filter(generateSemverFilter(sign, version))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  {
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function (context, name, sign, version) {
      var data = checkName(name, context)
      var alias = browserslist.versionAliases[data.name][version]
      if (alias) {
        version = alias
      }
      return data.released
        .filter(generateFilter(sign, version))
        .map(function (v) {
          return data.name + ' ' + v
        })
    }
  },
  {
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ['firefox 78', 'firefox 91']
    }
  },
  {
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ['op_mini all']
    }
  },
  {
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (context, version) {
      var versionToUse = normalizeElectron(version)
      var chrome = e2c[versionToUse]
      if (!chrome) {
        throw new BrowserslistError(
          'Unknown version ' + version + ' of electron'
        )
      }
      return ['chrome ' + chrome]
    }
  },
  {
    regexp: /^node\s+(\d+)$/i,
    select: nodeQuery
  },
  {
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: nodeQuery
  },
  {
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: nodeQuery
  },
  {
    regexp: /^current\s+node$/i,
    select: function (context) {
      return [env.currentNode(resolve, context)]
    }
  },
  {
    regexp: /^maintained\s+node\s+versions$/i,
    select: function (context) {
      var now = Date.now()
      var queries = Object.keys(jsEOL)
        .filter(function (key) {
          return (
            now < Date.parse(jsEOL[key].end) &&
            now > Date.parse(jsEOL[key].start) &&
            isEolReleased(key)
          )
        })
        .map(function (key) {
          return 'node ' + key.slice(1)
        })
      return resolve(queries, context)
    }
  },
  {
    regexp: /^phantomjs\s+1.9$/i,
    select: function () {
      return ['safari 5']
    }
  },
  {
    regexp: /^phantomjs\s+2.1$/i,
    select: function () {
      return ['safari 6']
    }
  },
  {
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (context, name, version) {
      if (/^tp$/i.test(version)) version = 'TP'
      var data = checkName(name, context)
      var alias = normalizeVersion(data, version)
      if (alias) {
        version = alias
      } else {
        if (version.indexOf('.') === -1) {
          alias = version + '.0'
        } else {
          alias = version.replace(/\.0$/, '')
        }
        alias = normalizeVersion(data, alias)
        if (alias) {
          version = alias
        } else if (context.ignoreUnknownVersions) {
          return []
        } else {
          throw new BrowserslistError(
            'Unknown version ' + version + ' of ' + name
          )
        }
      }
      return [data.name + ' ' + version]
    }
  },
  {
    regexp: /^browserslist config$/i,
    select: function (context) {
      return browserslist(undefined, context)
    }
  },
  {
    regexp: /^extends (.+)$/i,
    select: function (context, name) {
      return resolve(env.loadQueries(context, name), context)
    }
  },
  {
    regexp: /^defaults$/i,
    select: function (context) {
      return resolve(browserslist.defaults, context)
    }
  },
  {
    regexp: /^dead$/i,
    select: function (context) {
      var dead = [
        'ie <= 10',
        'ie_mob <= 11',
        'bb <= 10',
        'op_mob <= 12.1',
        'samsung 4'
      ]
      return resolve(dead, context)
    }
  },
  {
    regexp: /^(\w+)$/i,
    select: function (context, name) {
      if (byName(name, context)) {
        throw new BrowserslistError(
          'Specify versions in Browserslist query for browser ' + name
        )
      } else {
        throw unknownQuery(name)
      }
    }
  }
];

// Get and convert Can I Use data

(function () {
  for (var name in agents) {
    var browser = agents[name]
    browserslist.data[name] = {
      name: name,
      versions: normalize(agents[name].versions),
      released: normalize(agents[name].versions.slice(0, -3)),
      releaseDate: agents[name].release_date
    }
    fillUsage(browserslist.usage.global, name, browser.usage_global)

    browserslist.versionAliases[name] = { }
    for (var i = 0; i < browser.versions.length; i++) {
      var full = browser.versions[i]
      if (!full) continue

      if (full.indexOf('-') !== -1) {
        var interval = full.split('-')
        for (var j = 0; j < interval.length; j++) {
          browserslist.versionAliases[name][interval[j]] = full
        }
      }
    }
  }

  browserslist.versionAliases.op_mob['59'] = '58'
}())

module.exports = browserslist

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/caniuse-lite/data/agents.js":
/*!**************************************************!*\
  !*** ./node_modules/caniuse-lite/data/agents.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={A:{A:{J:0.0131217,D:0.00621152,E:0.020096,F:0.113877,A:0.0133974,B:0.763649,iB:0.009298},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","iB","J","D","E","F","A","B","","",""],E:"IE",F:{iB:962323200,J:998870400,D:1161129600,E:1237420800,F:1300060800,A:1346716800,B:1381968000}},B:{A:{C:0.008282,K:0.004267,L:0.004141,G:0.004141,M:0.008282,N:0.016564,O:0.078679,R:0,S:0.004298,T:0.00944,U:0.00415,V:0.008282,W:0.008282,X:0.008282,Y:0.008282,Z:0.008282,a:0.020705,P:0.024846,b:2.58398,H:0.712252},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","C","K","L","G","M","N","O","R","S","T","U","V","W","X","Y","Z","a","P","b","H","","",""],E:"Edge",F:{C:1438128000,K:1447286400,L:1470096000,G:1491868800,M:1508198400,N:1525046400,O:1542067200,R:1579046400,S:1581033600,T:1586736000,U:1590019200,V:1594857600,W:1598486400,X:1602201600,Y:1605830400,Z:1611360000,a:1614816000,P:1618358400,b:1622073600,H:1626912000},D:{C:"ms",K:"ms",L:"ms",G:"ms",M:"ms",N:"ms",O:"ms"}},C:{A:{"0":0.0047,"1":0.04141,"2":0.008282,"3":0.004141,"4":0.004525,"5":0.004141,"6":0.008282,"7":0.004538,"8":0.008282,"9":0.004141,jB:0.012813,aB:0.004271,I:0.020705,c:0.004879,J:0.020136,D:0.005725,E:0.004525,F:0.00533,A:0.004283,B:0.004141,C:0.004471,K:0.004486,L:0.00453,G:0.008542,M:0.004417,N:0.004425,O:0.008542,d:0.004443,e:0.004283,f:0.008542,g:0.013698,h:0.008542,i:0.008786,j:0.004141,k:0.004317,l:0.004393,m:0.004418,n:0.008834,o:0.008542,p:0.008928,q:0.004471,r:0.009284,s:0.004707,t:0.009076,u:0.004425,v:0.004783,w:0.004271,x:0.004783,y:0.00487,z:0.005029,AB:0.074538,BB:0.004335,CB:0.004141,DB:0.004141,EB:0.008282,FB:0.004425,GB:0.004141,bB:0.004141,HB:0.008282,cB:0.00472,IB:0.004425,JB:0.008282,Q:0.00415,KB:0.004267,LB:0.004141,MB:0.004267,NB:0.012423,OB:0.00415,PB:0.008282,QB:0.004425,RB:0.024846,SB:0.00415,TB:0.00415,UB:0.004141,VB:0.004298,WB:0.004141,XB:0.161499,R:0.008282,S:0.008282,T:0.008282,kB:0.016564,U:0.008282,V:0.016564,W:0.008282,X:0.012423,Y:0.016564,Z:0.057974,a:1.51146,P:0.919302,b:0.016564,H:0,dB:0,lB:0.008786,mB:0.00487},B:"moz",C:["jB","aB","lB","mB","I","c","J","D","E","F","A","B","C","K","L","G","M","N","O","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","bB","HB","cB","IB","JB","Q","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","R","S","T","kB","U","V","W","X","Y","Z","a","P","b","H","dB",""],E:"Firefox",F:{"0":1446508800,"1":1450137600,"2":1453852800,"3":1457395200,"4":1461628800,"5":1465257600,"6":1470096000,"7":1474329600,"8":1479168000,"9":1485216000,jB:1161648000,aB:1213660800,lB:1246320000,mB:1264032000,I:1300752000,c:1308614400,J:1313452800,D:1317081600,E:1317081600,F:1320710400,A:1324339200,B:1327968000,C:1331596800,K:1335225600,L:1338854400,G:1342483200,M:1346112000,N:1349740800,O:1353628800,d:1357603200,e:1361232000,f:1364860800,g:1368489600,h:1372118400,i:1375747200,j:1379376000,k:1386633600,l:1391472000,m:1395100800,n:1398729600,o:1402358400,p:1405987200,q:1409616000,r:1413244800,s:1417392000,t:1421107200,u:1424736000,v:1428278400,w:1431475200,x:1435881600,y:1439251200,z:1442880000,AB:1488844800,BB:1492560000,CB:1497312000,DB:1502150400,EB:1506556800,FB:1510617600,GB:1516665600,bB:1520985600,HB:1525824000,cB:1529971200,IB:1536105600,JB:1540252800,Q:1544486400,KB:1548720000,LB:1552953600,MB:1558396800,NB:1562630400,OB:1567468800,PB:1571788800,QB:1575331200,RB:1578355200,SB:1581379200,TB:1583798400,UB:1586304000,VB:1588636800,WB:1591056000,XB:1593475200,R:1595894400,S:1598313600,T:1600732800,kB:1603152000,U:1605571200,V:1607990400,W:1611619200,X:1614038400,Y:1616457600,Z:1618790400,a:1622505600,P:1626134400,b:1628553600,H:null,dB:null}},D:{A:{"0":0.004403,"1":0.008282,"2":0.004465,"3":0.004642,"4":0.004891,"5":0.012423,"6":0.020705,"7":0.182204,"8":0.004141,"9":0.004141,I:0.004706,c:0.004879,J:0.004879,D:0.005591,E:0.005591,F:0.005591,A:0.004534,B:0.004464,C:0.010424,K:0.0083,L:0.004706,G:0.015087,M:0.004393,N:0.004393,O:0.008652,d:0.008542,e:0.004393,f:0.004317,g:0.012423,h:0.008786,i:0.008282,j:0.004461,k:0.004141,l:0.004326,m:0.0047,n:0.004538,o:0.008542,p:0.008596,q:0.004566,r:0.004141,s:0.008282,t:0.008282,u:0.004335,v:0.004464,w:0.028987,x:0.004464,y:0.012423,z:0.0236,AB:0.004141,BB:0.020705,CB:0.008282,DB:0.012423,EB:0.045551,FB:0.008282,GB:0.008282,bB:0.008282,HB:0.012423,cB:0.074538,IB:0.008282,JB:0.016564,Q:0.020705,KB:0.020705,LB:0.020705,MB:0.020705,NB:0.012423,OB:0.066256,PB:0.053833,QB:0.028987,RB:0.04141,SB:0.016564,TB:0.111807,UB:0.08282,VB:0.053833,WB:0.024846,XB:0.049692,R:0.186345,S:0.08282,T:0.070397,U:0.091102,V:0.091102,W:0.236037,X:0.099384,Y:0.285729,Z:0.128371,a:0.227755,P:0.596304,b:17.9554,H:4.05818,dB:0.024846,nB:0.008282,oB:0},B:"webkit",C:["","","","","I","c","J","D","E","F","A","B","C","K","L","G","M","N","O","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","bB","HB","cB","IB","JB","Q","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","R","S","T","U","V","W","X","Y","Z","a","P","b","H","dB","nB","oB"],E:"Chrome",F:{"0":1429401600,"1":1432080000,"2":1437523200,"3":1441152000,"4":1444780800,"5":1449014400,"6":1453248000,"7":1456963200,"8":1460592000,"9":1464134400,I:1264377600,c:1274745600,J:1283385600,D:1287619200,E:1291248000,F:1296777600,A:1299542400,B:1303862400,C:1307404800,K:1312243200,L:1316131200,G:1316131200,M:1319500800,N:1323734400,O:1328659200,d:1332892800,e:1337040000,f:1340668800,g:1343692800,h:1348531200,i:1352246400,j:1357862400,k:1361404800,l:1364428800,m:1369094400,n:1374105600,o:1376956800,p:1384214400,q:1389657600,r:1392940800,s:1397001600,t:1400544000,u:1405468800,v:1409011200,w:1412640000,x:1416268800,y:1421798400,z:1425513600,AB:1469059200,BB:1472601600,CB:1476230400,DB:1480550400,EB:1485302400,FB:1489017600,GB:1492560000,bB:1496707200,HB:1500940800,cB:1504569600,IB:1508198400,JB:1512518400,Q:1516752000,KB:1520294400,LB:1523923200,MB:1527552000,NB:1532390400,OB:1536019200,PB:1539648000,QB:1543968000,RB:1548720000,SB:1552348800,TB:1555977600,UB:1559606400,VB:1564444800,WB:1568073600,XB:1571702400,R:1575936000,S:1580860800,T:1586304000,U:1589846400,V:1594684800,W:1598313600,X:1601942400,Y:1605571200,Z:1611014400,a:1614556800,P:1618272000,b:1621987200,H:1626739200,dB:null,nB:null,oB:null}},E:{A:{I:0,c:0.008542,J:0.004656,D:0.004465,E:0.004141,F:0.004891,A:0.004425,B:0.008282,C:0.012423,K:0.078679,L:0.654278,G:0.012423,pB:0,eB:0.008692,qB:0.020705,rB:0.00456,sB:0.004283,tB:0.016564,fB:0.020705,YB:0.053833,ZB:0.08282,uB:0.546612,vB:2.36037,wB:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pB","eB","I","c","qB","J","rB","D","sB","E","F","tB","A","fB","B","YB","C","ZB","K","uB","L","vB","G","wB",""],E:"Safari",F:{pB:1205798400,eB:1226534400,I:1244419200,c:1275868800,qB:1311120000,J:1343174400,rB:1382400000,D:1382400000,sB:1410998400,E:1413417600,F:1443657600,tB:1458518400,A:1474329600,fB:1490572800,B:1505779200,YB:1522281600,C:1537142400,ZB:1553472000,K:1568851200,uB:1585008000,L:1600214400,vB:1619395200,G:null,wB:null}},F:{A:{"0":0.004418,"1":0.008542,"2":0.004227,"3":0.004725,"4":0.008282,"5":0.008942,"6":0.004707,"7":0.004827,"8":0.004707,"9":0.004707,F:0.0082,B:0.016581,C:0.004317,G:0.00685,M:0.00685,N:0.00685,O:0.005014,d:0.006015,e:0.004879,f:0.006597,g:0.006597,h:0.013434,i:0.006702,j:0.006015,k:0.005595,l:0.004393,m:0.008652,n:0.004879,o:0.004879,p:0.004141,q:0.005152,r:0.005014,s:0.009758,t:0.004879,u:0.008282,v:0.004283,w:0.004367,x:0.004534,y:0.008282,z:0.004227,AB:0.004326,BB:0.008922,CB:0.014349,DB:0.004425,EB:0.00472,FB:0.004425,GB:0.004425,HB:0.00472,IB:0.004532,JB:0.004566,Q:0.02283,KB:0.00867,LB:0.004656,MB:0.004642,NB:0.004298,OB:0.00944,PB:0.00415,QB:0.004271,RB:0.004298,SB:0.096692,TB:0.004201,UB:0.004141,VB:0.190486,WB:0.687406,XB:0,xB:0.00685,yB:0,zB:0.008392,"0B":0.004706,YB:0.006229,gB:0.004879,"1B":0.008786,ZB:0.00472},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","F","xB","yB","zB","0B","B","YB","gB","1B","C","ZB","G","M","N","O","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","Q","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","","",""],E:"Opera",F:{"0":1481587200,"1":1486425600,"2":1490054400,"3":1494374400,"4":1498003200,"5":1502236800,"6":1506470400,"7":1510099200,"8":1515024000,"9":1517961600,F:1150761600,xB:1223424000,yB:1251763200,zB:1267488000,"0B":1277942400,B:1292457600,YB:1302566400,gB:1309219200,"1B":1323129600,C:1323129600,ZB:1352073600,G:1372723200,M:1377561600,N:1381104000,O:1386288000,d:1390867200,e:1393891200,f:1399334400,g:1401753600,h:1405987200,i:1409616000,j:1413331200,k:1417132800,l:1422316800,m:1425945600,n:1430179200,o:1433808000,p:1438646400,q:1442448000,r:1445904000,s:1449100800,t:1454371200,u:1457308800,v:1462320000,w:1465344000,x:1470096000,y:1474329600,z:1477267200,AB:1521676800,BB:1525910400,CB:1530144000,DB:1534982400,EB:1537833600,FB:1543363200,GB:1548201600,HB:1554768000,IB:1561593600,JB:1566259200,Q:1570406400,KB:1573689600,LB:1578441600,MB:1583971200,NB:1587513600,OB:1592956800,PB:1595894400,QB:1600128000,RB:1603238400,SB:1613520000,TB:1612224000,UB:1616544000,VB:1619568000,WB:1623715200,XB:1627948800},D:{F:"o",B:"o",C:"o",xB:"o",yB:"o",zB:"o","0B":"o",YB:"o",gB:"o","1B":"o",ZB:"o"}},G:{A:{E:0.00149029,eB:0,"2B":0,hB:0.00298058,"3B":0.00894175,"4B":0.0491796,"5B":0.0298058,"6B":0.0163932,"7B":0.0223544,"8B":0.140087,"9B":0.0372573,AC:0.143068,BC:0.0834563,CC:0.0640825,DC:0.071534,EC:0.199699,FC:0.0581214,GC:0.0268253,HC:0.149029,IC:0.490306,JC:2.41129,KC:10.2666},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","eB","2B","hB","3B","4B","5B","E","6B","7B","8B","9B","AC","BC","CC","DC","EC","FC","GC","HC","IC","JC","KC","","",""],E:"Safari on iOS",F:{eB:1270252800,"2B":1283904000,hB:1299628800,"3B":1331078400,"4B":1359331200,"5B":1394409600,E:1410912000,"6B":1413763200,"7B":1442361600,"8B":1458518400,"9B":1473724800,AC:1490572800,BC:1505779200,CC:1522281600,DC:1537142400,EC:1553472000,FC:1568851200,GC:1572220800,HC:1580169600,IC:1585008000,JC:1600214400,KC:1619395200}},H:{A:{LC:1.0761},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","LC","","",""],E:"Opera Mini",F:{LC:1426464000}},I:{A:{aB:0,I:0.0269428,H:0,MC:0,NC:0,OC:0,PC:0.0179619,hB:0.0628666,QC:0,RC:0.302359},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","MC","NC","OC","aB","I","PC","hB","QC","RC","H","","",""],E:"Android Browser",F:{MC:1256515200,NC:1274313600,OC:1291593600,aB:1298332800,I:1318896000,PC:1341792000,hB:1374624000,QC:1386547200,RC:1401667200,H:1626998400}},J:{A:{D:0,A:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","A","","",""],E:"Blackberry Browser",F:{D:1325376000,A:1359504000}},K:{A:{A:0,B:0,C:0,Q:0.0111391,YB:0,gB:0,ZB:0},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","YB","gB","C","ZB","Q","","",""],E:"Opera Mobile",F:{A:1287100800,B:1300752000,YB:1314835200,gB:1318291200,C:1330300800,ZB:1349740800,Q:1613433600},D:{Q:"webkit"}},L:{A:{H:40.2461},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","H","","",""],E:"Chrome for Android",F:{H:1626998400}},M:{A:{P:0.298809},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","P","","",""],E:"Firefox for Android",F:{P:1626652800}},N:{A:{A:0.0115934,B:0.022664},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","","",""],E:"IE Mobile",F:{A:1340150400,B:1353456000}},O:{A:{SC:1.20109},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","SC","","",""],E:"UC Browser for Android",F:{SC:1471392000},D:{SC:"webkit"}},P:{A:{I:0.291244,TC:0.0103543,UC:0.010304,VC:0.0832126,WC:0.0103584,XC:0.0520079,fB:0.0208032,YC:0.145622,ZC:0.0728111,aC:0.239236,bC:2.38196},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","I","TC","UC","VC","WC","XC","fB","YC","ZC","aC","bC","","",""],E:"Samsung Internet",F:{I:1461024000,TC:1481846400,UC:1509408000,VC:1528329600,WC:1546128000,XC:1554163200,fB:1567900800,YC:1582588800,ZC:1593475200,aC:1605657600,bC:1618531200}},Q:{A:{cC:0.181629},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","cC","","",""],E:"QQ Browser",F:{cC:1589846400}},R:{A:{dC:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dC","","",""],E:"Baidu Browser",F:{dC:1491004800}},S:{A:{eC:0.111321},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","eC","","",""],E:"KaiOS Browser",F:{eC:1527811200}}};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browserVersions.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browserVersions.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={"0":"42","1":"43","2":"44","3":"45","4":"46","5":"47","6":"48","7":"49","8":"50","9":"51",A:"10",B:"11",C:"12",D:"7",E:"8",F:"9",G:"15",H:"92",I:"4",J:"6",K:"13",L:"14",M:"16",N:"17",O:"18",P:"90",Q:"64",R:"79",S:"80",T:"81",U:"83",V:"84",W:"85",X:"86",Y:"87",Z:"88",a:"89",b:"91",c:"5",d:"19",e:"20",f:"21",g:"22",h:"23",i:"24",j:"25",k:"26",l:"27",m:"28",n:"29",o:"30",p:"31",q:"32",r:"33",s:"34",t:"35",u:"36",v:"37",w:"38",x:"39",y:"40",z:"41",AB:"52",BB:"53",CB:"54",DB:"55",EB:"56",FB:"57",GB:"58",HB:"60",IB:"62",JB:"63",KB:"65",LB:"66",MB:"67",NB:"68",OB:"69",PB:"70",QB:"71",RB:"72",SB:"73",TB:"74",UB:"75",VB:"76",WB:"77",XB:"78",YB:"11.1",ZB:"12.1",aB:"3",bB:"59",cB:"61",dB:"93",eB:"3.2",fB:"10.1",gB:"11.5",hB:"4.2-4.3",iB:"5.5",jB:"2",kB:"82",lB:"3.5",mB:"3.6",nB:"94",oB:"95",pB:"3.1",qB:"5.1",rB:"6.1",sB:"7.1",tB:"9.1",uB:"13.1",vB:"14.1",wB:"TP",xB:"9.5-9.6",yB:"10.0-10.1",zB:"10.5","0B":"10.6","1B":"11.6","2B":"4.0-4.1","3B":"5.0-5.1","4B":"6.0-6.1","5B":"7.0-7.1","6B":"8.1-8.4","7B":"9.0-9.2","8B":"9.3","9B":"10.0-10.2",AC:"10.3",BC:"11.0-11.2",CC:"11.3-11.4",DC:"12.0-12.1",EC:"12.2-12.4",FC:"13.0-13.1",GC:"13.2",HC:"13.3",IC:"13.4-13.7",JC:"14.0-14.4",KC:"14.5-14.7",LC:"all",MC:"2.1",NC:"2.2",OC:"2.3",PC:"4.1",QC:"4.4",RC:"4.4.3-4.4.4",SC:"12.12",TC:"5.0-5.4",UC:"6.2-6.4",VC:"7.2-7.4",WC:"8.2",XC:"9.2",YC:"11.1-11.2",ZC:"12.0",aC:"13.0",bC:"14.0",cC:"10.4",dC:"7.12",eC:"2.5"};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browsers.js":
/*!****************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browsers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={A:"ie",B:"edge",C:"firefox",D:"chrome",E:"safari",F:"opera",G:"ios_saf",H:"op_mini",I:"android",J:"bb",K:"op_mob",L:"and_chr",M:"and_ff",N:"ie_mob",O:"and_uc",P:"samsung",Q:"and_qq",R:"baidu",S:"kaios"};


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/agents.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/agents.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const browsers = __webpack_require__(/*! ./browsers */ "./node_modules/caniuse-lite/dist/unpacker/browsers.js").browsers
const versions = __webpack_require__(/*! ./browserVersions */ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js").browserVersions
const agentsData = __webpack_require__(/*! ../../data/agents */ "./node_modules/caniuse-lite/data/agents.js")

function unpackBrowserVersions(versionsData) {
  return Object.keys(versionsData).reduce((usage, version) => {
    usage[versions[version]] = versionsData[version]
    return usage
  }, {})
}

module.exports.agents = Object.keys(agentsData).reduce((map, key) => {
  let versionsData = agentsData[key]
  map[browsers[key]] = Object.keys(versionsData).reduce((data, entry) => {
    if (entry === 'A') {
      data.usage_global = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'C') {
      data.versions = versionsData[entry].reduce((list, version) => {
        if (version === '') {
          list.push(null)
        } else {
          list.push(versions[version])
        }
        return list
      }, [])
    } else if (entry === 'D') {
      data.prefix_exceptions = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'E') {
      data.browser = versionsData[entry]
    } else if (entry === 'F') {
      data.release_date = Object.keys(versionsData[entry]).reduce(
        (map2, key2) => {
          map2[versions[key2]] = versionsData[entry][key2]
          return map2
        },
        {}
      )
    } else {
      // entry is B
      data.prefix = versionsData[entry]
    }
    return data
  }, {})
  return map
}, {})


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browserVersions.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.browserVersions = __webpack_require__(/*! ../../data/browserVersions */ "./node_modules/caniuse-lite/data/browserVersions.js")


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browsers.js":
/*!*************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browsers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.browsers = __webpack_require__(/*! ../../data/browsers */ "./node_modules/caniuse-lite/data/browsers.js")


/***/ }),

/***/ "./node_modules/electron-to-chromium/versions.js":
/*!*******************************************************!*\
  !*** ./node_modules/electron-to-chromium/versions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"0.20": "39",
	"0.21": "41",
	"0.22": "41",
	"0.23": "41",
	"0.24": "41",
	"0.25": "42",
	"0.26": "42",
	"0.27": "43",
	"0.28": "43",
	"0.29": "43",
	"0.30": "44",
	"0.31": "45",
	"0.32": "45",
	"0.33": "45",
	"0.34": "45",
	"0.35": "45",
	"0.36": "47",
	"0.37": "49",
	"1.0": "49",
	"1.1": "50",
	"1.2": "51",
	"1.3": "52",
	"1.4": "53",
	"1.5": "54",
	"1.6": "56",
	"1.7": "58",
	"1.8": "59",
	"2.0": "61",
	"2.1": "61",
	"3.0": "66",
	"3.1": "66",
	"4.0": "69",
	"4.1": "69",
	"4.2": "69",
	"5.0": "73",
	"6.0": "76",
	"6.1": "76",
	"7.0": "78",
	"7.1": "78",
	"7.2": "78",
	"7.3": "78",
	"8.0": "80",
	"8.1": "80",
	"8.2": "80",
	"8.3": "80",
	"8.4": "80",
	"8.5": "80",
	"9.0": "83",
	"9.1": "83",
	"9.2": "83",
	"9.3": "83",
	"9.4": "83",
	"10.0": "85",
	"10.1": "85",
	"10.2": "85",
	"10.3": "85",
	"10.4": "85",
	"11.0": "87",
	"11.1": "87",
	"11.2": "87",
	"11.3": "87",
	"11.4": "87",
	"12.0": "89",
	"13.0": "91",
	"13.1": "91",
	"13.2": "91",
	"14.0": "93",
	"15.0": "94"
};

/***/ }),

/***/ "./node_modules/node-releases/data/processed/envs.json":
/*!*************************************************************!*\
  !*** ./node_modules/node-releases/data/processed/envs.json ***!
  \*************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"nodejs\",\"version\":\"0.2.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.3.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.4.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.5.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.6.0\",\"date\":\"2011-11-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.7.0\",\"date\":\"2012-01-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.8.0\",\"date\":\"2012-06-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.9.0\",\"date\":\"2012-07-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.10.0\",\"date\":\"2013-03-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.11.0\",\"date\":\"2013-03-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.12.0\",\"date\":\"2015-02-06\",\"lts\":false,\"security\":false},{\"name\":\"iojs\",\"version\":\"1.0.0\",\"date\":\"2015-01-14\"},{\"name\":\"iojs\",\"version\":\"1.1.0\",\"date\":\"2015-02-03\"},{\"name\":\"iojs\",\"version\":\"1.2.0\",\"date\":\"2015-02-11\"},{\"name\":\"iojs\",\"version\":\"1.3.0\",\"date\":\"2015-02-20\"},{\"name\":\"iojs\",\"version\":\"1.5.0\",\"date\":\"2015-03-06\"},{\"name\":\"iojs\",\"version\":\"1.6.0\",\"date\":\"2015-03-20\"},{\"name\":\"iojs\",\"version\":\"2.0.0\",\"date\":\"2015-05-04\"},{\"name\":\"iojs\",\"version\":\"2.1.0\",\"date\":\"2015-05-24\"},{\"name\":\"iojs\",\"version\":\"2.2.0\",\"date\":\"2015-06-01\"},{\"name\":\"iojs\",\"version\":\"2.3.0\",\"date\":\"2015-06-13\"},{\"name\":\"iojs\",\"version\":\"2.4.0\",\"date\":\"2015-07-17\"},{\"name\":\"iojs\",\"version\":\"2.5.0\",\"date\":\"2015-07-28\"},{\"name\":\"iojs\",\"version\":\"3.0.0\",\"date\":\"2015-08-04\"},{\"name\":\"iojs\",\"version\":\"3.1.0\",\"date\":\"2015-08-19\"},{\"name\":\"iojs\",\"version\":\"3.2.0\",\"date\":\"2015-08-25\"},{\"name\":\"iojs\",\"version\":\"3.3.0\",\"date\":\"2015-09-02\"},{\"name\":\"nodejs\",\"version\":\"4.0.0\",\"date\":\"2015-09-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.1.0\",\"date\":\"2015-09-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.2.0\",\"date\":\"2015-10-12\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.3.0\",\"date\":\"2016-02-09\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.4.0\",\"date\":\"2016-03-08\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.5.0\",\"date\":\"2016-08-16\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.6.0\",\"date\":\"2016-09-27\",\"lts\":\"Argon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"4.7.0\",\"date\":\"2016-12-06\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.8.0\",\"date\":\"2017-02-21\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.9.0\",\"date\":\"2018-03-28\",\"lts\":\"Argon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"5.0.0\",\"date\":\"2015-10-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.1.0\",\"date\":\"2015-11-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.2.0\",\"date\":\"2015-12-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.3.0\",\"date\":\"2015-12-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.4.0\",\"date\":\"2016-01-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.5.0\",\"date\":\"2016-01-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.6.0\",\"date\":\"2016-02-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.7.0\",\"date\":\"2016-02-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.8.0\",\"date\":\"2016-03-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.9.0\",\"date\":\"2016-03-16\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.10.0\",\"date\":\"2016-04-01\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.11.0\",\"date\":\"2016-04-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.12.0\",\"date\":\"2016-06-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.0.0\",\"date\":\"2016-04-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.1.0\",\"date\":\"2016-05-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.2.0\",\"date\":\"2016-05-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.3.0\",\"date\":\"2016-07-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.4.0\",\"date\":\"2016-08-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.5.0\",\"date\":\"2016-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.6.0\",\"date\":\"2016-09-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.7.0\",\"date\":\"2016-09-27\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"6.8.0\",\"date\":\"2016-10-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.9.0\",\"date\":\"2016-10-18\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.10.0\",\"date\":\"2017-02-21\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.11.0\",\"date\":\"2017-06-06\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.12.0\",\"date\":\"2017-11-06\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.13.0\",\"date\":\"2018-02-10\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.14.0\",\"date\":\"2018-03-28\",\"lts\":\"Boron\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"6.15.0\",\"date\":\"2018-11-27\",\"lts\":\"Boron\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"6.16.0\",\"date\":\"2018-12-26\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.17.0\",\"date\":\"2019-02-28\",\"lts\":\"Boron\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"7.0.0\",\"date\":\"2016-10-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.1.0\",\"date\":\"2016-11-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.2.0\",\"date\":\"2016-11-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.3.0\",\"date\":\"2016-12-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.4.0\",\"date\":\"2017-01-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.5.0\",\"date\":\"2017-01-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.6.0\",\"date\":\"2017-02-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.7.0\",\"date\":\"2017-02-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.8.0\",\"date\":\"2017-03-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.9.0\",\"date\":\"2017-04-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.10.0\",\"date\":\"2017-05-02\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.0.0\",\"date\":\"2017-05-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.1.0\",\"date\":\"2017-06-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.2.0\",\"date\":\"2017-07-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.3.0\",\"date\":\"2017-08-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.4.0\",\"date\":\"2017-08-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.5.0\",\"date\":\"2017-09-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.6.0\",\"date\":\"2017-09-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.7.0\",\"date\":\"2017-10-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.8.0\",\"date\":\"2017-10-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.9.0\",\"date\":\"2017-10-31\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.10.0\",\"date\":\"2018-03-06\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.11.0\",\"date\":\"2018-03-28\",\"lts\":\"Carbon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"8.12.0\",\"date\":\"2018-09-10\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.13.0\",\"date\":\"2018-11-20\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.14.0\",\"date\":\"2018-11-27\",\"lts\":\"Carbon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"8.15.0\",\"date\":\"2018-12-26\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.16.0\",\"date\":\"2019-04-16\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.17.0\",\"date\":\"2019-12-17\",\"lts\":\"Carbon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"9.0.0\",\"date\":\"2017-10-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.1.0\",\"date\":\"2017-11-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.2.0\",\"date\":\"2017-11-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.3.0\",\"date\":\"2017-12-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.4.0\",\"date\":\"2018-01-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.5.0\",\"date\":\"2018-01-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.6.0\",\"date\":\"2018-02-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.7.0\",\"date\":\"2018-03-01\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.8.0\",\"date\":\"2018-03-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.9.0\",\"date\":\"2018-03-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.10.0\",\"date\":\"2018-03-28\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"9.11.0\",\"date\":\"2018-04-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.0.0\",\"date\":\"2018-04-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.1.0\",\"date\":\"2018-05-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.2.0\",\"date\":\"2018-05-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.3.0\",\"date\":\"2018-05-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.4.0\",\"date\":\"2018-06-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.5.0\",\"date\":\"2018-06-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.6.0\",\"date\":\"2018-07-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.7.0\",\"date\":\"2018-07-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.8.0\",\"date\":\"2018-08-01\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.9.0\",\"date\":\"2018-08-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.10.0\",\"date\":\"2018-09-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.11.0\",\"date\":\"2018-09-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.12.0\",\"date\":\"2018-10-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.13.0\",\"date\":\"2018-10-30\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.14.0\",\"date\":\"2018-11-27\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.15.0\",\"date\":\"2018-12-26\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.16.0\",\"date\":\"2019-05-28\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.17.0\",\"date\":\"2019-10-22\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.18.0\",\"date\":\"2019-12-17\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.19.0\",\"date\":\"2020-02-05\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.20.0\",\"date\":\"2020-03-26\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.21.0\",\"date\":\"2020-06-02\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.22.0\",\"date\":\"2020-07-21\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.23.0\",\"date\":\"2020-10-27\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.24.0\",\"date\":\"2021-02-23\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"11.0.0\",\"date\":\"2018-10-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.1.0\",\"date\":\"2018-10-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.2.0\",\"date\":\"2018-11-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.3.0\",\"date\":\"2018-11-27\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"11.4.0\",\"date\":\"2018-12-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.5.0\",\"date\":\"2018-12-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.6.0\",\"date\":\"2018-12-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.7.0\",\"date\":\"2019-01-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.8.0\",\"date\":\"2019-01-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.9.0\",\"date\":\"2019-01-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.10.0\",\"date\":\"2019-02-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.11.0\",\"date\":\"2019-03-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.12.0\",\"date\":\"2019-03-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.13.0\",\"date\":\"2019-03-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.14.0\",\"date\":\"2019-04-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.15.0\",\"date\":\"2019-04-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.0.0\",\"date\":\"2019-04-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.1.0\",\"date\":\"2019-04-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.2.0\",\"date\":\"2019-05-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.3.0\",\"date\":\"2019-05-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.4.0\",\"date\":\"2019-06-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.5.0\",\"date\":\"2019-06-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.6.0\",\"date\":\"2019-07-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.7.0\",\"date\":\"2019-07-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.8.0\",\"date\":\"2019-08-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.9.0\",\"date\":\"2019-08-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.10.0\",\"date\":\"2019-09-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.11.0\",\"date\":\"2019-09-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.12.0\",\"date\":\"2019-10-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.13.0\",\"date\":\"2019-10-21\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.14.0\",\"date\":\"2019-12-17\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.15.0\",\"date\":\"2020-02-05\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.16.0\",\"date\":\"2020-02-11\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.17.0\",\"date\":\"2020-05-26\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.18.0\",\"date\":\"2020-06-02\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.19.0\",\"date\":\"2020-10-06\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.20.0\",\"date\":\"2020-11-24\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.21.0\",\"date\":\"2021-02-23\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.22.0\",\"date\":\"2021-03-30\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.0.0\",\"date\":\"2019-10-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.1.0\",\"date\":\"2019-11-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.2.0\",\"date\":\"2019-11-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.3.0\",\"date\":\"2019-12-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.4.0\",\"date\":\"2019-12-17\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"13.5.0\",\"date\":\"2019-12-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.6.0\",\"date\":\"2020-01-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.7.0\",\"date\":\"2020-01-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.8.0\",\"date\":\"2020-02-05\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"13.9.0\",\"date\":\"2020-02-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.10.0\",\"date\":\"2020-03-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.11.0\",\"date\":\"2020-03-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.12.0\",\"date\":\"2020-03-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.13.0\",\"date\":\"2020-04-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.14.0\",\"date\":\"2020-04-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.0.0\",\"date\":\"2020-04-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.1.0\",\"date\":\"2020-04-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.2.0\",\"date\":\"2020-05-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.3.0\",\"date\":\"2020-05-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.4.0\",\"date\":\"2020-06-02\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.5.0\",\"date\":\"2020-06-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.6.0\",\"date\":\"2020-07-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.7.0\",\"date\":\"2020-07-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.8.0\",\"date\":\"2020-08-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.9.0\",\"date\":\"2020-08-27\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.10.0\",\"date\":\"2020-09-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.11.0\",\"date\":\"2020-09-15\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.12.0\",\"date\":\"2020-09-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.13.0\",\"date\":\"2020-09-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.14.0\",\"date\":\"2020-10-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.15.0\",\"date\":\"2020-10-27\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.16.0\",\"date\":\"2021-02-23\",\"lts\":\"Fermium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.17.0\",\"date\":\"2021-05-11\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.0.0\",\"date\":\"2020-10-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.1.0\",\"date\":\"2020-11-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.2.0\",\"date\":\"2020-11-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.3.0\",\"date\":\"2020-11-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.4.0\",\"date\":\"2020-12-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.5.0\",\"date\":\"2020-12-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.6.0\",\"date\":\"2021-01-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.7.0\",\"date\":\"2021-01-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.8.0\",\"date\":\"2021-02-02\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.9.0\",\"date\":\"2021-02-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.10.0\",\"date\":\"2021-02-23\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"15.11.0\",\"date\":\"2021-03-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.12.0\",\"date\":\"2021-03-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.13.0\",\"date\":\"2021-03-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.14.0\",\"date\":\"2021-04-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.0.0\",\"date\":\"2021-04-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.1.0\",\"date\":\"2021-05-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.2.0\",\"date\":\"2021-05-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.3.0\",\"date\":\"2021-06-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.4.0\",\"date\":\"2021-06-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.5.0\",\"date\":\"2021-07-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.6.0\",\"date\":\"2021-07-29\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"16.7.0\",\"date\":\"2021-08-18\",\"lts\":false,\"security\":false}]");

/***/ }),

/***/ "./node_modules/node-releases/data/release-schedule/release-schedule.json":
/*!********************************************************************************!*\
  !*** ./node_modules/node-releases/data/release-schedule/release-schedule.json ***!
  \********************************************************************************/
/*! exports provided: v0.8, v0.10, v0.12, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v0.8\":{\"start\":\"2012-06-25\",\"end\":\"2014-07-31\"},\"v0.10\":{\"start\":\"2013-03-11\",\"end\":\"2016-10-31\"},\"v0.12\":{\"start\":\"2015-02-06\",\"end\":\"2016-12-31\"},\"v4\":{\"start\":\"2015-09-08\",\"lts\":\"2015-10-12\",\"maintenance\":\"2017-04-01\",\"end\":\"2018-04-30\",\"codename\":\"Argon\"},\"v5\":{\"start\":\"2015-10-29\",\"maintenance\":\"2016-04-30\",\"end\":\"2016-06-30\"},\"v6\":{\"start\":\"2016-04-26\",\"lts\":\"2016-10-18\",\"maintenance\":\"2018-04-30\",\"end\":\"2019-04-30\",\"codename\":\"Boron\"},\"v7\":{\"start\":\"2016-10-25\",\"maintenance\":\"2017-04-30\",\"end\":\"2017-06-30\"},\"v8\":{\"start\":\"2017-05-30\",\"lts\":\"2017-10-31\",\"maintenance\":\"2019-01-01\",\"end\":\"2019-12-31\",\"codename\":\"Carbon\"},\"v9\":{\"start\":\"2017-10-01\",\"maintenance\":\"2018-04-01\",\"end\":\"2018-06-30\"},\"v10\":{\"start\":\"2018-04-24\",\"lts\":\"2018-10-30\",\"maintenance\":\"2020-05-19\",\"end\":\"2021-04-30\",\"codename\":\"Dubnium\"},\"v11\":{\"start\":\"2018-10-23\",\"maintenance\":\"2019-04-22\",\"end\":\"2019-06-01\"},\"v12\":{\"start\":\"2019-04-23\",\"lts\":\"2019-10-21\",\"maintenance\":\"2020-11-30\",\"end\":\"2022-04-30\",\"codename\":\"Erbium\"},\"v13\":{\"start\":\"2019-10-22\",\"maintenance\":\"2020-04-01\",\"end\":\"2020-06-01\"},\"v14\":{\"start\":\"2020-04-21\",\"lts\":\"2020-10-27\",\"maintenance\":\"2021-10-19\",\"end\":\"2023-04-30\",\"codename\":\"Fermium\"},\"v15\":{\"start\":\"2020-10-20\",\"maintenance\":\"2021-04-01\",\"end\":\"2021-06-01\"},\"v16\":{\"start\":\"2021-04-20\",\"lts\":\"2021-10-26\",\"maintenance\":\"2022-10-18\",\"end\":\"2024-04-30\",\"codename\":\"\"},\"v17\":{\"start\":\"2021-10-19\",\"maintenance\":\"2022-04-01\",\"end\":\"2022-06-01\"},\"v18\":{\"start\":\"2022-04-19\",\"lts\":\"2022-10-25\",\"maintenance\":\"2023-10-18\",\"end\":\"2025-04-30\",\"codename\":\"\"}}");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  data
} = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js");

window.addEventListener('DOMContentLoaded', () => {
  // TABS
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabsContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabsContent();
  showTabsContent(0);
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  }); // TIMER

  const deadline = '2021, 09, 15';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),

    /* разница в миллисекундах */
    days = Math.floor(t / (1000 * 60 * 60 * 24)),

    /* Math.floor - округление числа */
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,

      /* 'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds */

      /* - старый синтаксис, до 2015 - ES5 */
      days,
      hours,
      minutes,
      seconds
      /* - новый синтаксис, ES6 стандарт*/

    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    /* запуск функции что бы предотвратить мигание на странице */

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }

      if (t.total < 0) {
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }
  }

  setClock('.timer', deadline); // MODAL

  const modalBtn = document.querySelectorAll('[data-modal]'),
        modalWindow = document.querySelector('.modal');

  function openModal() {
    modalWindow.classList.add('show', 'fade');
    modalWindow.classList.remove('hide'); // Либо вариант с toggle - но тогда назначить класс в верстке

    document.body.style.overflow = 'hidden';
    /* фиксация страницы, что бы не было прокрутки во время открытого модального окна */

    clearInterval(modalTimerId);
    window.removeEventListener('scroll', showModalScroll);
    /* если мы во время просмотра сайта нажали кнопку вызова модального окна, то после этого события или после события setTimeout(), при прокрутке до конца сайта, модальное окно больше не вызывалось. Таким образом, модальное окно до конца прокрутки сайта, не вызовется, если было событие по таймеру или по клику. */
  }

  modalBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show'); // Либо вариант с toggle - но тогда назначить класс в верстке

    document.body.style.overflow = '';
    /* браузер ставит значение по дефолту */
  } // используем делегирование событий для закрытия окна благодарности


  modalWindow.addEventListener('click', event => {
    if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModal();
    }
  });
  const modalTimerId = setTimeout(openModal, 50000);

  function showModalScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalScroll);
    }
  }
  /* function showModalScroll () {
      if (window.pageYOffset >= 3800) {
          openModal();
          window.removeEventListener('scroll', showModalScroll);
      }
  } */


  window.addEventListener('scroll', showModalScroll); // 'CLASS' USAGE FOR CARDS

  class MenuCard {
    constructor(src, alt, title, descr, price, perentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      /* 'Classes' is array */

      this.parent = document.querySelector(perentSelector);
      this.transfer = 27;
      this.changeToUAH();
    } // currency conversion


    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
        /* processing of potential additional classes apllied by REST operator */
      }

      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }

  }
  /* const div = new MenuCard();
  div.render(); */


  const getResource = async url => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status} `);
    }

    return await result.json();
  }; // 2 WAYS TO CREATE 'MENU-CARD' BY 'GET' REQUEST
  // 1)


  getResource('http://localhost:3000/menu').then(data => {
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  }); // 2)
  // getResource('http://localhost:3000/menu') 
  //     .then(data => createCard(data));
  //     function createCard(data) {
  //         data.forEach(({img, altimg, title, descr, price}) => {
  //             const element = document.createElement('div');
  //             element.classList.add('menu__item');
  //             element.innerHTML = `
  //                 <img src=${img} alt=${altimg}>
  //                 <h3 class="menu__item-subtitle">${title}</h3>
  //                 <div class="menu__item-descr">${descr}</div>
  //                 <div class="menu__item-divider"></div>
  //                 <div class="menu__item-price">
  //                     <div class="menu__item-cost">Цена:</div>
  //                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //                 </div>
  //             `;
  //             document.querySelector('.menu .content').append(element);
  //         });
  //     }
  // AXIOS USAGE (3 way to create menu-card by 'get' req)
  // axios.get('http://localhost:3000/menu')
  //     .then(data => {
  //         data.data.forEach(({img, altimg, title, descr, price}) => {
  //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //         });
  //     });
  // FORMS (POST, GET)

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так. Попробуйте позже...'
  };
  forms.forEach(item => {
    bindPostData(item);
  }); // postData - отвечает за постинг данных, их отправку на сервер 
  // здесь асинхронный код - async/await позволяет правильно работать с асинхронными запросами/функциями

  const postData = async (url, data) => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await result.json();
  }; // bindPostData - отвечает за привязку постинга


  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage); // метод размещения элементов в верстке

      const formData = new FormData(form); //в html тэгах, что собирают инф.(input, textarea, option) ВСЕГДА необходим атрибут "name"
      // Приобразование formData в json
      // entries - метод, возвращает массив сообственных перечисляемых свойств указаного объекта
      // fromEntries - метод, обратный к entries. Возвращает объект

      const json = JSON.stringify(Object.fromEntries(formData.entries())); // старый вариант
      // const object = {};
      // formData.forEach(function(value, key) {
      //     object[key] = value;
      // });

      postData('http://localhost:3000/requests', json) // .then(data => data.text())
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  } // SHOW THANKS MODAL


  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  } // HOW FETCH WORKS
  // fetch('http://localhost:3000/menu')
  //     .then(data => data.json())
  //     .then(result => console.log(result));
  // fetch('https://jsonplaceholder.typicode.com/posts/', {
  //     method: "POST",
  //     body: JSON.stringify({name: 'Alex'}),
  //     headers: {
  //         'Content-type': 'application/json'
  //     }
  // })
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // SLIDER


  const slides = document.querySelectorAll('.offer__slide'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width,
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');
  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });
  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });
});

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=script.js.map