/**
 * 获取url的数据
 * @param {string|null} url 当前页面的url string | number
 * @returns 返回一个解析过后的url对象
 */
const getURLParameters = (url) => {
    url = url || window.location.href
    // match 返回的是一个匹配的数组 匹配([^?=&]+) 以?=& 开头 （+）是匹配一次或者多次的意思
    // 并且(=([^&]*)) 并且有=字符且不包含[^&]的后续字符
    const urlArr = url.match(/([^?=&]+)(=([^&]*))/g) || []
    const urlObj = urlArr.reduce((arr, cur) => {
        arr[cur.slice(0, cur.indexOf('='))] = cur.slice(cur.indexOf('=') + 1)
        return arr
    }, {})
    return urlObj
}
/**
 * 不重新加载页面 修改url 
 * @param {string} url 你要替换的url字符串（最好是完整的网址）
 * @param {string} title 网页title
 * @param {object} state {} 附加信息，随便你填
 * 备注：因为href、assign、replace 都会导致页面重新加载
 *      pushState 会添加一条新的历史记录 replaceState 是替换当前的历史记录
 */
const notRefreshUrl = (url, title, state) => {
    window.history.pushState(state, title, url);
}
// 导出多个用对象
export {
    getURLParameters,
    notRefreshUrl
}