export const prompts = [
    {
        type: 'list',
        name: 'type',
        message: 'What are you creating?',
        choices: ['Component', 'Function'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'Name (PascalCase for components, camelCase for functions):',
    },
    {
        type: 'input',
        name: 'assertText',
        message: 'Assertion text for the test specification',
    },
    {
        type: 'input',
        name: 'path',
        message: 'The path where the files should be created, relative to the base source directory:',
        default: '.',
    }
]