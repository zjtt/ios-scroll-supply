'use strict';
/**
 * @file npm文件
 * @author sriztt
 * @time 2018.02.21
 */
(function (definition) {
    'use strict';
    // CommonJS
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = definition();
    // RequireJS
    }
    else if (typeof define === 'function' && define.amd) {
        define(definition);
    // <script>
    }
    else if (typeof window !== 'undefined' || typeof self !== 'undefined') {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== 'undefined' ? window : self;

        // initialize iosScrollSupply as a global.
        global.iosScrollSupply = definition();
    }
    else {
        throw new Error('This environment was not anticipated by iosScrollSupply,Please file a bug.');
    }
})(function () {
    function iosTouchFn(el) {
        // el需要滑动的元素
        el.addEventListener('touchmove', function (e) {
            if (el.offsetHeight < el.scrollHeight) {// 如果区域可以滚动
                e.isSCROLL = true;
            }
        });
        document.body.addEventListener('touchmove', function (e) {
            if (!e.isSCROLL) {
                e.preventDefault(); // 阻止默认事件(上下滑动)
            }
            else {
                // 需要滑动的区域
                var top = el.scrollTop;
                // 对象最顶端和窗口最顶端之间的距离
                var scrollH = el.scrollHeight;
                // 含滚动内容的元素大小
                var offsetH = el.offsetHeight; // 元素网页可见区域高
                var cScroll = top + offsetH; // 当前滚动的距离
                // 被滑动到最上方和最下方的时候
                if (top === 0) {// 滑动到了顶部
                    top = 1; // 0～1之间的小数会被当成0
                }
                else if (cScroll === scrollH) {
                    // 滑动到了底部
                    el.scrollTop = top - 1;
                }
            }
        }, {
            passive: false
        }); // passive防止阻止默认事件不生效
    }
    function iosScrollSupply(className) {
        window.onload = function () {
            var ios = navigator.userAgent.indexOf('iPhone');
            // 判断是否为ios
            if (ios !== -1) {
                 // ios下运行
                var divEl = document.getElementsByClassName(className); // 类为scroll
                 // 你需要滑动的dom元素
                for (var i = 0; i < divEl.length; i++) {
                    iosTouchFn(divEl[i]);
                }
            }
        };
    }
    return iosScrollSupply;
});
