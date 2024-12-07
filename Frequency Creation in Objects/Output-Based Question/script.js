// Input: [1, 2, 3, 4, 5]
// Expected Output: { odd: 3, even: 2 }
arr=[1,2,3,4,5]
const frequ = arr.reduce((i, m) => {
    if (m % 2 == 0) {
        i.even++
    }
    else if (m % 2 != 0) {
        i.odd++
    }
    return i
}, { odd: 0, even: 0 })

console.log(frequ)