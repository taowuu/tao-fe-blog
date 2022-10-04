const deepColne = obj => {
    // 你的代码
    // 
    // 递归拷贝
    // 终止条件
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }
    // 初始化结果
    let res
    if(obj instanceof Array) {
        res = []
    } else {
        res = {}
    }
    // 遍历保存属性值
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            res[key] = deepColne(obj[key])
        }
    }
    // 返回结果
    return res
}

const tao1 = {
    name: 'tao1',
    age: 20,
    addr: {
        city: 'sz'
    },
    skill: ['js', 'vue', 'node'],
}

const tao2 = deepColne(tao1)

tao2.name = 'tao2'
tao2.age = 30
tao2.addr.city = 'jp'
tao2.skill = ['cn', 'eng', 'jp']

console.log('tao1: ', tao1)
console.log('tao2: ', tao2)
