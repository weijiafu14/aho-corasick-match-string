var ahoCorasick = require('../aho-corasick-search.js')

var acSearch = new ahoCorasick();

acSearch.add('1234')
acSearch.add('23')
acSearch.build()
var res = acSearch.search('1234')
console.log(res)
