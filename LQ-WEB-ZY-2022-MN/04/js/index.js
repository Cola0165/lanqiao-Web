// 实现选项卡功能
function init() {
  // TODO 待补充代码
  var tabs = document.getElementsByClassName("tabs")[0].children
  var card = document.getElementById("content").children
  for (let index = 0; index < tabs.length; index++) {
      tabs[index].onclick = function() {
        for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove("active")
          card[j].classList.remove("active")
        }
        tabs[index].classList.add("active")
        card[index].classList.add("active")
    }
  }
}
init();
