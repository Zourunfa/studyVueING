
//对象 字面量的ES5的写法
const obj = {
    name: 'liqing',
    age: 18,
    run: function(){
        console.log('running')
    }
}



// 属性的增强写法

const name= 'liqing'
const age=  18
const obj = {
    name,age,
}

// 函数的增强写法

const obj = {
    run(){
        console.log('it is running')
    }
}
