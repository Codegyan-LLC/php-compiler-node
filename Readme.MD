# PHP Compiler Node

![npm version](https://img.shields.io/npm/v/php-compiler-node)
![npm downloads](https://img.shields.io/npm/dt/php-compiler-node)
![npm collaborators](https://img.shields.io/npm/collaborators/php-compiler-node)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/php-compiler-node)

PHP Compiler Node is a Node.js package for compiling PHP code using the Codegyan PHP compiler API.

## Installation

You can install PHP Compiler Node via npm or yarn:

```bash
# via npm
npm install php-compiler-node

# via yarn
yarn add php-compiler-node
```

## Usage
Before using the Pakage, you need to obtain an API key and client ID from Codegyan. Follow these steps to get your API credentials:

1. **Sign Up/Login**: If you don't have an account, sign up for a [Codegyan account](https://codegyan.in/account/signup.php). If you already have an account, log in to your dashboard.

2. **Get Credentials**: Once logged in, navigate to the [Developer Console](https://developer.codegyan.in/) or API settings in your account dashboard. Here, you will find your API key and client ID. Copy these credentials and use them when initializing the Pakage in your code.

Here's an example of how to initialize the npm pakage with your API key and client ID:

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
Replace <YOUR_API_KEY> and <YOUR_CLIENT_ID> with your actual API key and client ID provided by Codegyan. Pass the PHP code you want to compile to the compilePhpCode function.

## Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this pakage.

## License
This Codegyan SDK is open-sourced software licensed under the **[MIT license](https://opensource.org/licenses/MIT)**.

