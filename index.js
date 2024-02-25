#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import figlet from 'figlet';
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import * as emoji from 'node-emoji';
import { generateComponentContent, generateTestContent } from './utils/content.js';
import { getBaseSourcePath } from './utils/get-path.js';
import { prompts } from './utils/prompts.js'
import { greeting } from './utils/get-username.js'

console.log(chalk.greenBright(figlet.textSync('Create AAA Test!', {
  font: 'Speed',
  horizontalLayout: 'default',
  verticalLayout: 'default'
})));

console.log(greeting);

program
  .name('reactify-generator')
  .description('CLI tool for generating AAA unit tests and React components or functions')
  .version('1.0.0');

program
  .command('gen')
  .description('Generate a Unit test specification file and a React component or function')
  .action(async () => {
    try {
      const answers = await inquirer.prompt(prompts);

      const { assertText, type, name, path: userPath } = answers;
      const isComponent = type === 'Component';

      const outputPath = getBaseSourcePath(userPath);
      const fileExtension = isComponent ? '.tsx' : '.ts';
      const fileName = `${name.trim()}${fileExtension}`;

      const testFileName = `${name.trim()}.spec.ts`;
      const componentContent = generateComponentContent(name, isComponent);
      const testFileContent = generateTestContent(name, assertText, fileName, isComponent);

      await fs.ensureDir(path.join(process.cwd(), outputPath));
      await fs.outputFile(path.join(process.cwd(), outputPath, fileName), componentContent);
      await fs.outputFile(path.join(process.cwd(), outputPath, testFileName), testFileContent);

      const successMessage = `${emoji.get('sparkles')} ${type} and test file for ${name} generated successfully at ${path.join(outputPath)}`;
      const fancyText = chalkAnimation.rainbow(successMessage);

      setTimeout(() => fancyText.stop(), 3000);

    } catch (error) {
      console.error('Error during files generation:', error);
    }
  });

program.parse(process.argv);
