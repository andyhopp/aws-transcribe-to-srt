'use strict'

const fs = require('fs')
const async = require('async');

const SrtConvert = require('./lib/srtConvert');
const srtConvert = new SrtConvert();

let sourcePath;
let destinationPath = 'output.srt';

if (process.argv[2] && fs.existsSync(process.argv[2]))
{
    sourcePath = process.argv[2];
    if (process.argv[3])
    {
        destinationPath = process.argv[3];
    }
} else {
    const express = require('express');
    const app = express();
    const prompt = require('prompt-sync')();
    app.use(express.static('output'))
    var path = prompt('Please provide the location of the Transcribe output: ');
}

fs.readFile(sourcePath, 'utf8', (err, file) => {
    if (err) {
        console.log(err);
        return err
    }

    const convertedOutput = srtConvert.convertFile(file);
    fs.writeFile(destinationPath, convertedOutput, (err) => {
        if (err) throw err;
        console.log(`SRT file written to '${destinationPath}'.`);
        process.exit();
    });
})
