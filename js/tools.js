/**
 * 一些工具函数
 */
/**
 * js检测键盘是否启用了Caps Lock（大写锁定）
 * @param {dom} el 需要监听的元素
 * @param {function} fn 需要执行的回调 ...要不要弄个this指向 我这里已经用了箭头函数了
 */
const domCapsLock = (el,fn)=>{
    el.addEventListener('keyup',e=>{
        e.getModifierState('CapsLock') && fn()
    })
}
/**
 * 生成一个uuid，我现在也不知道有什么用。但是见过
 * @returns string
 */
const UUIDGeneratorBrowser = ()=>{
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
}
/**
 * 平滑的滚动到页面顶部
 * requestAnimationFrame 你希望执行一个动画 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
 */
const scrollToTop = ()=>{
    const h = document.documentElement.scrollTop || document.body.scrollTop;
    if(c>0){
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
/**
 * 平滑滚动到指定位置
 * @param {string} selector 选择器 (.class/#id/div）
 */
const smoothScroll = (selector) =>{
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
    })
}
/**
 * 添加类名
 * @param {dom} el 选取的元素
 * @param {string} className 添加的类名 ('class')
 */
const addClass = (el,className)=>{
    el.classList.add(className)
}
/**
 * 移除类名
 * @param {dom} el 
 * @param {string} className 
 */
const removeClass = (el,className) =>{
    el.classList.remove(className)
}
/**
 * 打开或关闭全屏
 * @param {boolean} mode true打开 false关闭
 * @param {string} selector  需要全屏的元素
 */
const fullscreen = (mode = true,selector='body')=>{
    mode
    ? document.querySelector(selector).requestFullscreen()
    : document.exitFullscreen();
}
export {
    domCapsLock,
    UUIDGeneratorBrowser,
    scrollToTop,
    smoothScroll,
    addClass,
    removeClass,
    fullscreen
}