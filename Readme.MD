# PHP Compiler Node

PHP Compiler Node is a Node.js package for compiling PHP code using the CodeGyan PHP compiler API.

## Installation

You can install PHP Compiler Node via npm or yarn:

```bash
# via npm
npm install php-compiler-node

# via yarn
yarn add php-compiler-node
```

## Usage
```js
import compilePhpCode from 'php-compiler-node';

const API_KEY = "<YOUR_API_KEY>";
const CLIENT_ID = "<YOUR_CLIENT_ID>";

const code = '<?php echo "Hello World!"; ?>';

compilePhpCode(API_KEY, CLIENT_ID, code)
    .then((status) => {
        console.log(status.output);
    })
    .catch((error) => {
        console.error('Compilation Error:', error);
    });
```
Replace <YOUR_API_KEY> and <YOUR_CLIENT_ID> with your actual API key and client ID provided by CodeGyan. Pass the PHP code you want to compile to the compilePhpCode function.

## License

This package is licensed under the MIT License. See the LICENSE file for details.

