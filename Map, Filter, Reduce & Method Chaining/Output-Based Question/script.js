// Input: [1, 2, 3, 4, 5]

// Task: Double the even numbers and sum them.

// Expected Output: 12

arr = [1, 2, 3, 4, 5]
const result=arr.filter((ele) =>ele%2==0).map((ele)=>ele*2).reduce((i,m)=>i+m,0)
console.log(result)

// res = []
// for (i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         res.push(arr[i])
//     }
// }
// result = 0
// for (i = 0; i < res.length; i++){
//     result+=(res[i]*2)
// }
// console.log(result)