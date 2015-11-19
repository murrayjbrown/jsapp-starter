# JavaScript technologies

This repository contains a sample project skeleton along with documentation of my findings and conclusions drawn from researching recommended tools and practices for developing JavaScript applications.

After many years of dismissing and avoiding JavaScript, I've had to delve into and what I found profoundly changed my views on the language.

Please see [resources.md](./resources.md) for a list of references and resources.


## Goals

- enable use of expressive language features
- deploy applications across wide range of platforms
- compatibility with existing third-party libraries
- cross-platform development and build tools
- automation of build workflow


## Language features

JavaScript is a very powerful but often misunderstood language, devised with an unconventional prototypal object-oriented programming paradigm well-suited to functional programming. Sadly, it also has more than its fair share of poorly designed features and gotchas to avoid. The wise programmer will learn how to make the best use of the good parts and avoid the bad.

The latest version of JavaScript, formally ECMAScript 2015 (aka ES6), has many good modern language features but it also includes some arguably ill-advised features to appease those who insist upon a class-based approach to object-oriented JavaScript programming. For some time, JavaScript has been coerced for use in conventional class-based applications, and now ES6 has some syntactic sugar for that. However, a better option for such an approach may be to use *TypeScript*, which is a superset that provides strong static typing and can be transpiled into plain JavaScript for execution.

Through the use of transpilers (e.g., *babel*, *traceur*), and even shims or polyfills, we need not be constrained by the limitations of underlying platform capabilities in order to use JavaScripts newer expressive language features of ES6 today.


## Modules

In the beginning, there were only scripts. JavaScript was loaded into a browser using the HTML *SCRIPT* tag. Any code referring to another script had to ensure that the referenced script was loaded when needed, either by relying upon some contrived static loading sequence or deferring execution until it was loaded.

Conventions were established for defining modules and dependencies, with various defacto standards for what variables are imported and exported. The CommonJS project addressed the needs of non-browser runtime environments, notably NodeJS, while for browser projects the *Asynchronous Module Definition (AMD)* format was developed. Each of these has its own dynamic module loader(s).

Eventually, to ensure maximum compatibility across various runtime environments the *Universal Module Definition (UMD)* format was devised, which is compatible with most module loaders. Happily, both *babel* and *typescript* can emit UMD (and various other module formats).


### Bundles

A key motivation for bundles was reducing startup latency and improving bandwidth utilization, since each time a script is loaded entails communication protocol overhead. Although, with the emergence of concurrent loading in HTTP/2 these reasons may become somewhat moot, yet scripts are also bundled together to simplify dependency management.

Modern packaging tools, such as *Webpack*, provide for bundling modules (and even other assets, such as stylesheets and image files), with advanced features for defining chunks that can be loaded asynchronously and identifying common modules that need to persist longer than others within the runtime environment.


## Build tools

As JavaScript has evolved and been embraced for both browser and server applications so have the development and build tools matured. Notably, the Node ecosystem tools have been re-oriented towards a 'universal' model for the development of software independent of its runtime environment


- Atom
  https://atom.io/

  Atom is a text editor that's modern, approachable, yet hackable to the core — a tool you can customize to do anything but also use productively without ever touching a config file.

  Atom has some nice plugins for JavaScript development, such as for linting and transpiling.


- npm
  https://www.npmjs.com/

  *npm* is a JavaScript package manager for *Node*, which can also be used as a simple task-runner for build scripts.


- babel
  https://babeljs.io/

  *babel* is a JavaScript transpiler that compiles modern JavaScript to (older) JavaScript, allowing advanced language features to be exploited for their expressiveness while relieving dependency upon advanced capabilities in the underlying runtime platform.

  *babel* and *traceur* are both JavaScript-to-JavaScript transpilers. Many tools support Google's *traceur* by default, but *babel* seems to have more mindshare and produces more readable code.


- TypeScript
  http://www.typescriptlang.org/

  *tsc* is a transpiler that compiles TypesScript, a superset of JavaScript with static typing and classical OOP semantics, to plain JavaScript.


- Webpack
  https://webpack.github.io/docs/

  *Webpack* is a JavaScript application package builder; it is not a loader. It will resolve module dependencies to produce a package of modules that can be loaded together in a runtime environment. It can be configured to split a code base into multiple bundles, and use external dependencies, and has several configuration options optimizing load time and cache utilization.

  Note: *Webpack* is a build-time packaging tool, it does not include a runtime module loader; it's unfortunately confusing that the term 'loader' has been used to refer to its build-time helper functions for importing assets into a bundle.

- NetBeans
  https://netbeans.org/

  NetBeans is a free open-source IDE that offers a range of tools for HTML5/JavaScript, in particular for Node.js, KnockoutJS, and AngularJS.
