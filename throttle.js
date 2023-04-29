
// 时间戳版
function throttle(fun, wait = 500) {
    let previous = 0;
    return function () {
        let date = new Date()
        if (date - previous > wait) {
            fun.apply(null, arguments);
            previous = date
        }
    }
}

// 计时器版

function throttle(fun, wait = 500) {
    let timer = null;
    return function () {
        if (!timer) {
            fun.apply(null, arguments);
            timer = setTimeout(function () {
                timer = null;
            }, await)

        }
    }
}