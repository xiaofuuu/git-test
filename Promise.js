// 宏任务执行完之后之行为任务，在之行宏任务在之行微任务。。。

console.log(1)

const p1 = new Promise((resolve) => {
    resolve(7)
})

p1.then(res => {
    console.log(res)
})

setTimeout(() => {
    console.log(2)
    const p = new Promise((resolve) => {
        console.log(3)
        resolve(4)
    })
    p.then(res => {
        console.log(res)
    })
})

setTimeout(() => {
    const p = new Promise((resolve) => {
        console.log(5)
        resolve(6)
    })
    p.then(res => {
        console.log(res)
    })
})

// 1, 7, 2, 3, 4, 5, 6

