// register babel to transpile before running the tests.
require('babel-register')();

// disable webpack features which mocha doesn't understand.
require.extensions['.css'] = function() {};
