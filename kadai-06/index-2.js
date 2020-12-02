const str1 = "abc"
const obj1 = JSON.parse(str1)
console.log(str1)

const str2 = "'abc'"
const obj2 = JSON.parse(str2)
console.log(str2)

const str3 = '"abc"'
const obj3 = JSON.parse(str3)
console.log(str3)

const str4 = '{"a": undefined}'
const obj4 = JSON.parse(str4)
console.log(str4)

const str5 = '{"a": 123}'
const obj5 = JSON.parse(str5)
console.log(str5)

const str6 = '{a:123}'
const obj6 = JSON.parse(str6)
console.log(str6)

const str7 = '{"func":() => console.log("Hi!")}'
const obj7 = JSON.parse(str7)
console.log(str7)