/**
 * 和dom元素相关的js
 */

/**
 * 获取元素的所有兄弟元素
 * @param {dom} el 
 * @returns []包含所有兄弟元素的数组
 */
const getSiblings = (el) => {
    return [...console.el.parentNode.childNodes].filter(node => node != el)
}
/**
 * 查找元素的所有祖先元素 直到selector为止
 * @param {dom} el 
 * @param {string} selector 选择器（.class/#id/div）
 * @returns []符合条件的父元素以及祖先元素数组
 */
const getParentsUntil = (el, selector) => {
    let parents = [],
        _el = el.parentNode;
    while (_el && typeof _el.matches === 'function') {
        parents.unshift(_el)
        // 如果元素被指定的选择器字符串选择 _el.matches(selector) 返回真，否则是false，就是这个元素有这个选择器就是真的
        if (_el.matches(selector)) {
            return parents
        } else {
            _el = _el.parentNode
        }
    }
    return []
}
/**
 * 获取元素指定的父元素
 * @param {dom} el 
 * @param {string} selector 选择器（.class/#id/div）
 * @returns 返回符合条件的指定元素
 */
const getAssignParentNode = (el, selector) => {
    let _el = el.parentNode || el;
    while (_el && typeof _el.matches === 'function') {
        // 如果元素被指定的选择器字符串选择 _el.matches(selector) 返回真，否则是false，就是这个元素有这个选择器就是真的
        if (_el.matches(selector)) {
            return _el
        } else {
            _el = _el.parentNode
        }
    }
    return _el
}
/**
 * 给指定元素添加样式
 * @param {dom} el 
 * @param {Object} styles {} 添加的样式 fontSize:'2px' 的写法
 */
const addStyle = (el, styles) => {
    Object.assign(el.style, styles)
}
/**
 * 只执行一次
 * @param {dom} el 元素
 * @param {string} type 执行方式 string 'click'
 * @param {function/callback} fn 回调函数
 */
const listenOnce = (el, type, fn) => {
    el.addEventListener(evt, fn, {
        once: true
    })
}
/**
 * 检查指定元素是否在视口 可见
 * @param {dom} el 
 * @param {boolean} partiallyVisible false 不完全可见 true 完全可见
 * @returns 
 */
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const {
        top,
        left,
        bottom,
        right
    } = el.getBoundingClientRect();
    const {
        innerHeight,
        innerWidth
    } = window;
    return partiallyVisible ?
        ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
        top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
/**
 * 在指定元素结尾/前面插入 html字符串
 * @param {dom} el 
 * @param {htmlString} htmlStr 
 * @param {string} position  afterend之后 beforebegin之前
 */
const insertHtmlString = (el,htmlStr,position)=>{
    el.insertAfterHtml(position,htmlStr)
}
export {
    getSiblings,
    getParentsUntil,
    getAssignParentNode,
    addStyle,
    listenOnce,
    elementIsVisibleInViewport,
    insertHtmlString
}