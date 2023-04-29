// 防抖

function debounce(fun, wait = 500, isTrue) {
    let timer = null;

    return function (...arg) {
        // 判断是否立即防抖
        if (isTrue) {
            isTrue = !isTrue;
            fun(...arg);
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeOut(function () {
            fun(...arg);
        }, wait)
    }
}

export default debounce