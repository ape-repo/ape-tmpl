ape-tmpl
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/ape-repo/ape-tmpl
[bd_travis_url]: http://travis-ci.org/ape-repo/ape-tmpl
[bd_travis_shield_url]: http://img.shields.io/travis/ape-repo/ape-tmpl.svg?style=flat
[bd_license_url]: https://github.com/ape-repo/ape-tmpl/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/ape-repo/ape-tmpl
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/ape-repo/ape-tmpl.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/ape-repo/ape-tmpl.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/ape-repo/ape-tmpl
[bd_gemnasium_shield_url]: https://gemnasium.com/ape-repo/ape-tmpl.svg
[bd_npm_url]: http://www.npmjs.org/package/ape-tmpl
[bd_npm_shield_url]: http://img.shields.io/npm/v/ape-tmpl.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/ape-tmpl.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Templates for ape framework.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
------------

```bash
$ npm install ape-tmpl --save-dev
```
<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
-----

### Generating README.md

**.README.md.bud**

```javascript
/**
 * Bud file for README.md
 */

"use strict";

var apeTmpl = require('ape-tmpl'),
    pkg = require('./package.json');

module.exports = apeTmpl.readmeMdBud({
    pkg: pkg,
    repo: 'okunishinishi/node-coz',
    sections: 'docs/readme/*.md.hbs', // Each readme section files.
    badges: {
        travis: true,
        codeclimate: true,
        codeclimateCoverage: true,
        gemnasium: true,
        npm: true
    }
});

if (!module.parent) {
    // This will generate "README.md"
    require('coz').render(__filename);
}
```

Then,

```bash
$ node .README.md.bud
```
<!-- Section from "docs/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/ape-repo/ape-tmpl/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ape-repo](https://github.com/ape-repo)
+ [coz](http://okunishinishi.github.io/node-coz/homepage)

<!-- Links End -->
