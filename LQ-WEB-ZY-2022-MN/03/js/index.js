// TODO：请修复 BUG
function generate() {
  subject = document.getElementById("subject");
  event1 = document.getElementById("event1");
  event2 = document.getElementById("event2");
  if (subject.length == 0 || event1.length == 0 || event2.length == 0) {
    return;
  }
  result = "欢迎用户"+subject.value+"在"+event2.value+"学习"+event1.value+"课程！";
  document.getElementById("result").value = result;
}
