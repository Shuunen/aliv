#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const Server = require('../lib');

new Server(argv).start();
