/**
 * Bud for mocha test.
 * @function mochaTestJsBud
 * @param {object} config - Mocha testcase configuration.
 * @param {string|string[]} config.src - Source file name pattern.
 * @param {string} [config.dest] - Destination directory path.
 * @returns {object} - Bud for mocha testcase.
 */

'use strict'

const path = require('path')
const assert = require('assert')
const aglob = require('aglob')
const _tmpl = require('./_tmpl')

/** @lends mochaTestJsBud */
function mochaTestJsBud (config) {
  const src = config.src
  const dest = config.dest || process.cwd()
  assert.ok(!!src, 'config.src is required.')
  return aglob.sync(src)
    .filter((src) =>
      path.basename(src) !== 'index.js'
    )
    .filter((src) =>
      !/^[\._\-]/.test(path.basename(src))
    )
    .filter((src) => {
      try {
        return !!require.resolve(src)
      } catch (e) {
        return false
      }
    })
    .map((src) => {
      let basename = path.basename(src, path.extname(src))
      return {
        force: false,
        mode: '644',
        mkdirp: false,
        tmpl: _tmpl('hbs/mocha_test.js.hbs'),
        path: path.resolve(dest, basename + '_test.js'),
        data: {
          name: basename,
          relative: path.relative(dest, src)
        }
      }
    })
}

module.exports = mochaTestJsBud
