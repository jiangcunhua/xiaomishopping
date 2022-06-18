// 登录 首页
$('#top_li1').click(function() {
    // 点击按钮的时候显示弹窗
    $('.login_showdom').css("display", 'block')
})


// 点遮罩层返回
$('.login_showdom').click(function() {
        $(this).css('display', 'none')
    })
    // 阻止冒泡
$('.login').click(function(e) {
    e.stopPropagation()
});

// input  hint

var usename = $('.usename input')
var password = $('.password input')
var usename_hint = $('.usename_hint')
var password_hint = $('.password_hint')
var usename_stand = $('.usename_stand')
var password_stand = $('.password_stand')
$('.login_buttom').click(function() {

    // null判断
    if (usename.val() == "") {
        usename_hint.css("display", "block")
        usename.css("border", "1px solid #F56C6C");
    }

    if (password.val() == "") {
        password_hint.css("display", "block")
        password.css("border", "1px solid #F56C6C");
    }
    // stand判断
    // 字母开头,长度5-16之间,允许字母数字下划线   字母开头,长度6-18之间,允许字母数字和下划线
    // console.log(usename.val().length);

    if (password.val().length < 5 || password.val().length > 16) {
        password_stand.css({
            "display": "block"
        })
        password.css("border", "1px solid #F56C6C");
    }

    if (usename.val().length < 5 || usename.val().length > 16) {
        usename_stand.css({
            "display": "block"
        })
        usename.css("border", "1px solid #F56C6C");
    }
})

// 选中input清除css
usename.mouseup(function() {
    // css样式清除
    usename_stand.css({
        "display": "none"
    })
    usename.css("border", "1px solid #DCDFE6");
    // console.log("css样式清除");
})
password.mouseup(function() {
        // css样式清除
        password_stand.css({
            "display": "none"
        })
        password.css("border", "1px solid #DCDFE6");
        // console.log("css样式清除");
    })
    // del

$('.s-del').click(function() {
    $(".login_showdom").css("display", "none")
})



// 阻止hover冒泡
// $('.center_banner1_right_button li').stopPropagation
// $('.center_banner1_right_top li').stopPropagation
// $('.center_banner1_right_top').stopPropagation
// $('.center_banner1_right_button').stopPropagation

// 提示
$('#banner_a3').click(function() {
    alert("别点了这部分是空白的")
})

// 获取banner 部分的input  
var input_value = $('.banner_top_input input')
$('.input_img2').click(function() {
    alert(`获取到值${input_value.val()},但是后端没写无法交互`);
    input_value.val('')
})