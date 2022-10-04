Function.prototype.myBind = function() {
    // 你的代码
    // 
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    // 取出要绑定的 this
    const _this = args.shift()
    // 取出原 this
    const self = this
    // 返回一个函数
    return function() {
        self.apply(_this, args)
    }
}

const tao1 = {
    name: 'tao1',
}
const tao2 = {
    name: 'tao2',
}

const f1 = function(a, b, c) {
    console.log('this: ', this)
    console.log(a, b, c)
}
const f2 = f1.myBind(tao2, 4, 5, 6)

f1(1, 2, 3) 
// this: global
// 1 2 3
f2() 
// this:  { name: 'tao2' }
// 4 5 6
