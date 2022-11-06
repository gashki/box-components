const { readFileSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');
const { parse } = require('sass-variable-parser');
const { camelCase } = require('lodash');

const inputFile = 'src/styles/constants/_colors.scss';
const outputFile = 'src/styles/constants/colors.ts';

const colorsFile = readFileSync(inputFile, { encoding: 'utf8' });
const colorsDict = parse(colorsFile, { camelCase: false });

const fileHeader = `/**
 * This is an auto-generated file and should not be edited manually.
 *
 * Run \`yarn build:colors\` to regenerate this file.
 */

`;
const fileContents = Object.entries(colorsDict)
    .map(([color, value]) => `export const ${camelCase(color)} = ${JSON.stringify(value)}; // ${color}`)
    .join('\n');

writeFileSync(outputFile, `${fileHeader}${fileContents}`);
execSync(`yarn prettier --write ${outputFile}`);
