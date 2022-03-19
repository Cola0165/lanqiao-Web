// TODO：请补充代码
$(function () {
    $(".option").on('click', function () {
        $(this).siblings().removeClass('active').find('div').hide();
        $(this).addClass('active');
    });
});