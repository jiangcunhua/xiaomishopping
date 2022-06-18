// 页面跳转
flag2 = 0;

function pageJump_collect() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_order/html/my_order.html');
    } else {
        alert("请先登录")
    }
}

function pageJump_order() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_collect/html/my_collect.html');
    } else {
        alert("请先登录")
    }
}

function pageJump_shopping() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/shopping_cart/html/shopping_cart.html');
    } else {
        alert("请先登录")
    }

}

function pageJump_allProduct() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/all_product/html/all_product.html');
    } else {
        alert("请先登录")
    }
}

// 
// 登录 组件
$('.login_buttom').click(function() {
        // 发送请求
        login_judge()


    })
    // 登录组件
function login_judge() {
    var userName = $('.usename input').val()
    var password = $('.password input').val()
    var form = new FormData();
    form.append("userName", userName);
    form.append("password", password);

    var settings = {
        "url": "http://120.78.172.212:7111/api/users/login",
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
    $.ajax(settings).done(function(response) {
        if (JSON.parse(response).code == '001') {
            alert("登录成功")
            console.log(response);
            // 点击叉叉
            $('.s-del').click()
                // 换头像
            profile_photo()
            return flag2 = 1;
        } else {
            alert("登录失败")

        }
    });


}
// 登录成功以后换头像
function profile_photo() {


    $('#top_li1').css({
        "display": "none",
    })
    $('#top_li2').css({
        "display": "none",
    })
    $('#top_li2_1').css({
        "display": "block"
    })
    $('#top_li3').css({
        "display": "none",
    })
}