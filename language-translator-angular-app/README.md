# LanguageTranslatorAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Project Setup to Run on a server
This project was built with npm version as specified  b elow:
```bash
pm version
{
  'language-translator-angular-app': '0.0.0',
  npm: '10.8.1',
  node: '20.16.0',
  acorn: '8.11.3',
  ada: '2.8.0',
  ares: '1.31.0',
  base64: '0.5.2',
  brotli: '1.1.0',
  cjs_module_lexer: '1.2.2',
  cldr: '45.0',
  icu: '75.1',
  llhttp: '8.1.2',
  modules: '115',
  napi: '9',
  nghttp2: '1.61.0',
  nghttp3: '0.7.0',
  ngtcp2: '1.1.0',
  openssl: '3.0.13+quic',
  simdutf: '5.2.8',
  tz: '2024a',
  undici: '6.19.2',
  unicode: '15.1',
  uv: '1.46.0',
  uvwasi: '0.0.21',
  v8: '11.3.244.8-node.23',
  zlib: '1.3.0.1-motley-209717d'
}
```
and with the aangular CLI as shown below:
```bash
>ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 19.0.0
Node: 20.16.0
Package Manager: npm 10.8.1
OS: win32 x64

Angular: 19.0.0
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, platform-server
... router, ssr

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1900.0
@angular-devkit/build-angular   19.0.0
@angular-devkit/core            19.0.0
@angular-devkit/schematics      19.0.0
@schematics/angular             19.0.0
rxjs                            7.8.1
typescript                      5.6.3
zone.js                         0.15.0

```
## Code Installation

Install the code by pulling the code base from git or another repo per your oragnisation's rules or your personal taste.

```bash
git clone git@gitlab.com:jn-algorithms/multilanguage-demo.git
// or
git clone https://gitlab.com/jn-algorithms/multilanguage-demo.git

```
Once the code has downloaded, you need to reconstitute the node_modules.
Navidgate to the place where you have cloned the project and do:

```bash
npm install
```
After making certain that works, you are set up in development mode.
Open the project in VsCode or IDE you prefer.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

```
ng build
```
if you want to serve the code from a different location  it is advised to do

```bash
ng build --configuration production

```
Then copy the dist folder over to where you want to run
```bash
node server.js
```
Note: the server.js code is maintained in a separate repo:
```bash
<tbd>
```

## Development server
To build, run:


To start a local development server, run:

```bash
ng serve // --port=<portnumber>
```

Once the server is running, open your browser and navigate to `http://localhost:4200/` (or a different port should the need arise). The application will automatically reload whenever you modify any of the source files.


## Code scaffolding



Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```


## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
