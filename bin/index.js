#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));
const Server = require('../lib');

new Server(args).start();
