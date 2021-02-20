# JsDateFormat

JsDateFormat is a Javascript micro library that allows you to format dates easily

## Installation

```bash
npm install jsdateformat --save
```

## Usage

```python
const {formatDate} = require('jsdateformat')
import {formatDate} from 'jsdateformat';

formatDate({format : "dd/mm/yyyy"})
# Ex: Returns "01/02/2021"
formatDate({format : "dd/mm/yy"})
# Ex: Returns "11/12/21"
formatDate({format : "yyyy/mm/dd"})
# Ex : Returns "2021/02/20"
formatDate({format : "yy/mm/dd"})
# Ex : Returns "21/02/20"
formatDate({format : "dd/mm/yyyy/:mm:ss"})
# Ex : Returns the current date and current time


formatDate({})
# Without any arguments returns the current date formatted "dd/mm/yyyy"
# Ex: "01/01/2021"

const {getDay , getMonth , getYear} = require('jsdateformat');
import {getDay  , getMonth , getYear} from 'jsdateformat';

getDay()
# Returns the current day

getMonth()
# Returns the current month

getYear()
# Returns the current year


```

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
