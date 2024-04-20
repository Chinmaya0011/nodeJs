// const sum=(a,b)=>a+b;
// const mul=(a,b)=>a*b;
// const min=(a,b)=>a-b;
// const div=(a,b)=>a/b;

// const obj={
//     sum:sum,
//     mul:mul,
//     min:min,
//     div:div
// }
// module.exports=obj;

// In Node.js, you can export modules using various methods, each suited to different use cases. Here are the main types of exports:

// 1. **Named Exports**:
//    - Export individual functions, variables, or classes by name.
//    - These exports can be imported by their exact name in the importing file.
//    - Example:
//      ```javascript
//      // In module.js
//      export const myFunction = () => { /* function body */ };
//      export const myVariable = 42;
//      export class MyClass { /* class body */ }

//      // In importing file
//      import { myFunction, myVariable, MyClass } from './module.js';
//      ```

// 2. **Default Export**:
//    - Export a single value (function, variable, class, object literal) as the default export.
//    - This value can be imported using any name in the importing file.
//    - Example:
//      ```javascript
//      // In module.js
//      export default function myFunction() { /* function body */ }

//      // In importing file
//      import myFunction from './module.js';
//      ```

// 3. **Mixed Exports**:
//    - Combine named exports and default export in the same module.
//    - Example:
//      ```javascript
//      // In module.js
//      export const myFunction = () => { /* function body */ };
//      export default class MyClass { /* class body */ }

//      // In importing file
//      import { myFunction } from './module.js'; // Named export
//      import MyClass from './module.js'; // Default export
//      ```

// 4. **Module Exports**:
//    - Assign exports directly to the `module.exports` object.
//    - Common in CommonJS modules or when exporting a single value.
//    - Example:
//      ```javascript
//      // In module.js
//      module.exports = () => { /* function body */ };

//      // In importing file (CommonJS)
//      const myFunction = require('./module.js');
//      ```

// 5. **Exporting from package.json**:
//    - Export values from the package.json file of a module.
//    - This method is specific to ECMAScript modules (ESM).
//    - Example:
//      ```json
//      // In package.json
//      {
//        "exports": {
//          ".": "./main-module.js",
//          "./helper-module": "./helper-module.js"
//        }
//      }

//      // In importing file
//      import { myFunction } from 'my-package';
//      ```

// These are the main types of exports in Node.js, offering flexibility in organizing and exporting modules according to the needs of your application or library.

// To access a file from another folder in Node.js, you can use relative paths or absolute paths.

// 1. **Relative Paths**:
//    - Relative paths specify the location of a file relative to the current working directory or the current module file.
//    - Use `../` to move up one directory and specify the path from there.
//    - For example, if you have a file named `myfile.js` in a folder named `folder1`, and you want to access it from a file in the parent directory, you can use:
//      ```javascript
//      const myFile = require('../folder1/myfile.js');
//      ```

// 2. **Absolute Paths**:
//    - Absolute paths specify the full path to the file from the root of the file system.
//    - You can use the `path` module in Node.js to construct absolute paths.
//    - For example, if you want to access the same `myfile.js` file using an absolute path, you can do:
//      ```javascript
//      const path = require('path');
//      const myFilePath = path.join(__dirname, '../folder1/myfile.js');
//      const myFile = require(myFilePath);
//      ```

// Make sure to adjust the path according to the structure of your project. Using relative paths is often more flexible and easier to maintain, especially when the project structure changes. However, absolute paths can be useful in certain situations, such as when the location of the file is fixed or when you want to ensure a consistent path across different environments.

export const math=(a,b)=>a*b;