// 登录 注册
$('#top_li3').click(function() {
    // 点击按钮的时候显示弹窗
    $('.register_showdom').css("display", 'block')
})


// 点遮罩层返回
$('.register_showdom').click(function() {
        $(this).css('display', 'none')
    })
    // 阻止冒泡
$('.register').click(function(e) {
    e.stopPropagation()
});

var r_usename = $('.r-usename input')
var r_password = $('.r-password input')
var r_password_twe = $('.r-password_twe input')

var r_usename_hint = $('.r-usename_hint')
var r_password_hint = $('.r-password_hint')
var r_password_twe_hint = $('.r-password_twe_hint')

var r_usename_stand = $('.r-usename_stand')
var r_password_stand = $('.r-password_stand')
var r_password_twe_stand = $('.r-password_twe_stand')
    // 标志




$('.register_buttom').click(function() {
    // 注册请求模板
    var useName = $('.r-usename input').val()
    var password = $('.r-password input').val()
    var form = new FormData();
    form.append("userName", useName);
    form.append("password", password);
    console.log(useName);
    var settings = {
        "url": "http://120.78.172.212:7111/api/users/register",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "User-Agent": "apifox/1.0.0 (https://www.apifox.cn)"
        },
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };
    // 判断是否符合输入要求
    judge();
    $.ajax(settings).done(function(response) {
        // 判断校验码 返回提示
        if (JSON.parse(response).code != '001') {
            console.log(response);
            alert('注册失败')
        } else {
            alert("注册成功")
            $('.r-del').click()
        }
    });

})

// r-del
$('.r-del').click(function() {
        $('.register_showdom').css("display", "none")
    })
    // 判断输入内容是否符合要求
function judge() {
    // 选中input清除css
    r_usename.mouseup(function() {
        // css样式清除
        r_usename_hint.css("display", "none")
        r_usename_stand.css("display", "none")
        r_usename.css("border", "1px solid #DCDFE6");
        // console.log("css样式清除");
    })
    r_password.mouseup(function() {
        r_password_hint.css("display", "none")
        r_password_stand.css("display", "none")
        r_password.css("border", "1px solid #DCDFE6");
    })
    r_password_twe.mouseup(function() {
            // css样式清除
            r_password_twe_stand.css({
                "display": "none"
            })
            r_password_twe.css("border", "1px solid #DCDFE6");
            // console.log("css样式清除");
            r_password_twe_hint.css("display", "none")

        })
        // null判断
    if (r_usename.val() == "") {
        r_usename_hint.css("display", "block")
        r_usename.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_password.val() == "") {
        r_password_hint.css("display", "block")
        r_password.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_password_twe.val() == "") {
        r_password_twe_hint.css("display", "block")
        r_password_twe.css("border", "1px solid #F56C6C");
        flag = 0;
    }


    // stand判断
    // 字母开头,长度5-16之间,允许字母数字下划线   字母开头,长度6-18之间,允许字母数字和下划线
    // console.log(usename.val().length);
    else if (r_password.val() != r_password_twe.val()) {
        // console.log(password.val() + password_twe.val());
        r_password_twe_stand.css("display", "block")
        r_password_twe.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_password.val().length < 5 || r_password.val().length > 16) {
        r_password_stand.css({
            "display": "block"
        })
        r_password.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_usename.val().length < 5 || r_usename.val().length > 16) {
        r_usename_stand.css({
            "display": "block"
        })
        r_usename.css("border", "1px solid #F56C6C");
        flag = 0;
    }

}