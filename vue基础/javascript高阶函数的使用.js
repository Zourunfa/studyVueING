const nums = [1,2,3,4,5,6,7]


// filter 中的回调函数要求必须返回一个布尔值
// 返回true时 函数内部会自动将这次的回调n加入到新数组中
// 返回false 过滤到n
let sum=0
let newNums = nums.filter((n)=>{
    return n>5
})

console.log(newNums);



let newNums1 = nums.map((n)=>{
    return n*20
})

console.log(newNums1);


// reduce对数组中所有的内容汇总
let newNum2 = nums.reduce((pre,n)=>{
    return pre+n
},0)

console.log(newNum2);



let  total = nums.filter(function(n){
    return n<5
}).map(function(n){
    return n*2
}).reduce(function(pre,n){
    return pre+n
},0)

console.log(total);
