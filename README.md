# aho-corasick-search

Aho-Corasick for search string

## Example

```js
var ahoCorasick = require('aho-corasick-search')

var acSearch = new ahoCorasick();

acSearch.add('1234')
acSearch.add('23')
acSearch.build()
var res = acSearch.search('1234')
console.log(res)
```

#### output

```
[ '23', '1234' ]
```

## Install

```
npm install aho-corasick-search
```

## Constructor

```js
var acSearch = new ahoCorasick();
```

## Method

#### acSearch.add(keyword)

put the keyword to the trie

#### acSearch.build()

build the aho-corasick automaton on the trie

#### acSearch.search(str)

search all keywords appearing in the str

**Return** an array containing all appeared keywords

