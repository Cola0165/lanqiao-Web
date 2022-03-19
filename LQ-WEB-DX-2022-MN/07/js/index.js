const climbStairs = (n) => {
  // TODO：请补充代码
  if(n==1 || n==2) {
    return n;
}
else {
    return climbStairs(n-2) + climbStairs(n-1)
}
};
module.exports = climbStairs;
