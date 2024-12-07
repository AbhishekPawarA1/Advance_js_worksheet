const nums = [10, 20, 30];
const result = nums.map((n) => n / 0).filter((n) => n > 0); // Bug: Improper math operation
console.log(
  result.reduce((res, cha) => {
    return res + cha;
  }, 0)
);
