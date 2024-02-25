import { execSync } from 'child_process';
import chalk from 'chalk';
import * as emoji from 'node-emoji';

function getGitHubUsername() {
    try {
        const name = execSync('git config --global user.name', { encoding: 'utf8' }).trim();
        return name;
    } catch (error) {
        console.warn(chalk.yellow('Warning: Could not retrieve GitHub username.'));
        return null;
    }
}
const userName = getGitHubUsername();
const currentHour = new Date().getHours();
const salutation = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';
const coffee = emoji.get('coffee');
const welcomeMessage = chalk.yellowBright(`${salutation}! ${userName ?? 'friend'}! Ready to do some TDD?`);
export const greeting = `${coffee} ${welcomeMessage}`


