#!/usr/bin/env node
const yargs = require('yargs');
const { exec } = require('child_process');

const options = yargs
	.usage('Usage: -db <database> -c <collection> -f <file.json>')
	.option('d', {
		alias: 'database',
		describe: 'Database name',
		type: 'string',
		demandOption: true
	})
	.option('c', {
		alias: 'collection',
		describe: 'Collection name',
		type: 'string',
		demandOption: true
	})
	.option('f', {
		alias: 'file',
		describe: 'File name',
		type: 'string',
		demandOption: true
	}).argv;

exec(
	`mongoimport -d ${options.d} -c ${options.c} --jsonArray ${options.f}`,
	(error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
		console.log('Imported! ...hopefully :) ');
	}
);
