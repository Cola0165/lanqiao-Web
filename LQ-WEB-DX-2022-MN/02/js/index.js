/**
 * 封装函数，函数名 getRandomNum(min,max,countNum)
 * 生成 min~max 范围的 countNum 个不重复的随机数，存入数组并返回
 */
//生成指定数目和范围的随机数
const getRandomNum = function (min, max, countNum) {
  var arr = [];
  // 在此处补全代码
  var temp = [];
  for(var i=min;i<=max;i++){
    temp.push(i);
  }
  temp.sort(function(){return 0.5-Math.random();});
  for(var i=0;i<countNum;i++)
  {
    arr.push(temp[i]);
  }
  return arr;
};
module.exports = getRandomNum; //请勿删除
