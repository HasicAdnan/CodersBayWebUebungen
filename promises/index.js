import fs from 'fs';
import chalk from 'chalk';
import moment from 'moment';
import readline from 'readline';
import readFile from 'node:fs/promises';

/*
const fs = require('fs/promises');

readFile('./package.json', 'utf8')
.then((data) => {
console.log('File read', data);
})
.catch((err) => {
console.error('Error reading file', err);
})
.finally(() => {
console.log('After read or error');
});
console.log('Before file was loaded');
*/