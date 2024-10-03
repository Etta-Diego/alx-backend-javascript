ES6 Basics - README
This project focuses on the new features introduced in ES6 (ECMAScript 6), which is a major update to JavaScript. The aim is to understand and implement various concepts like block-scoped variables, arrow functions, rest and spread operators, template literals, and more.

Learning Objectives
By the end of this project, you should be able to explain the following without using Google:

What ES6 is and its new features.
Differences between constants (const) and variables (let).
The concept of block-scoped variables.
Arrow functions and function parameters.
Rest and spread function parameters.
String templating in ES6.
Object creation and properties in ES6.
Iterators and for-of loops.

Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
Add the files below to your project directory

package.json
Click here to show/hide file contents

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

babel.config.js
Click here to show/hide file contents

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

.eslintrc.js
Click here to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

Finally…
Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.


0-constants.js
Purpose
This file demonstrates the difference between using const and let to declare variables in JavaScript. The taskFirst function uses const for immutable variables, while taskNext uses let for variables that might change.


export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += ' is okay';
  return combination;
}
Execution Example:

$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);
$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
1-block-scoped.js
Purpose
This file highlights how let and const maintain block scoping, preventing variables from being overwritten inside conditional blocks.


export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
Execution Example

$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
2-arrow.js
Purpose
This file demonstrates the use of ES6 arrow functions. The addNeighborhood function has been converted from a standard function to an arrow function.


export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
Execution Example

$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
$ npm run dev 2-main.js
[ 'SOMA', 'Union Square', 'Noe Valley' ]
3-default-parameter.js
Purpose
This file demonstrates the use of default parameters in ES6. The function getSumOfHoods has default values for its parameters if they are not provided.


export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
$ npm run dev 3-main.js
142
56
41
4-rest-parameter.js
Purpose
This file demonstrates the use of rest parameters in ES6, which allows functions to accept an indefinite number of arguments.


export default function returnHowManyArguments(...args) {
  return args.length;
}

$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
$ npm run dev 4-main.js
1
4
5-spread-operator.js
Purpose
This file demonstrates how to use the spread syntax to concatenate arrays and strings.


export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
Execution Example

$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
$ npm run dev 5-main.js
[ 'a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o' ]
6-string-interpolation.js
Purpose
This file demonstrates the use of template literals for string interpolation, making code more readable and maintainable.


export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
Execution Example:

$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());
$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.

7-getBudgetObject.js
Purpose:
This file demonstrates the use of object property shorthand when the key names match the variable names.


export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}
Execution Example:

$ node 7-main.js
{ income: 400, gdp: 700, capita: 900 }
8-getBudgetCurrentYear.js
Purpose:
This file demonstrates the use of computed property names in ES6.


export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
Execution Example:

$ node 8-main.js
{ 'income-2024': 2100, 'gdp-2024': 5200, 'capita-2024': 1090 }
9-getFullBudget.js
Purpose:
This file adds ES6 method properties to an object.


import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
Execution Example:

$ node 9-main.js
$20
20 euros
10-appendToEachArrayValue.js
Purpose:
This file uses a for...of loop to append a string to each value in an array.


export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    array[array.indexOf(value)] = appendString + value;
  }
  return array;
}
Execution Example:

$ node 10-main.js
[ 'appended-a', 'appended-b', 'appended-c' ]

main.js
Purpose:
The main.js file serves as the execution point for running each task’s function. It imports and runs functions from other files, demonstrating how the individual functions work.