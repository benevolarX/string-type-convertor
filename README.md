# string-type-convertor
string-type-convertor is a js library for transform string to typed value (number, boolean, float, null, undefined, ...)
It is useful when creating a router to retrieve the typed parameters of the url.

## Installation

Download [nodejs](https://nodejs.org/) first.
Use [npm](https://www.npmjs.com/package/npm) to install string-type-convertor.

```bash
npm i string-type-convertor
```

## Usage

```js
import { typeConvertor } from 'string-type-convertor';

typeConvertor("undefined"); // return undefined
typeConvertor("null"); // return null
typeConvertor("true"); // return true
typeConvertor("false"); // return false
typeConvertor("37n"); // return 37n
typeConvertor("3.14"); // return 3.14
typeConvertor("150"); // return 150
typeConvertor("hello"); // return 'hello'

```

## Contributing
I try to publish a small js helper.
README generate by Google Translate (sorry for bad english)

## License
[MIT](https://github.com/benevolarX/string-type-convertor/blob/main/LICENSE)
