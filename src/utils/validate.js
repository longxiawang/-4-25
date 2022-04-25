/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

// 校验手机号
export function validPhone(str) {
  // 定义一个正则
  const reg = /^1[3-9]\d{9}$/
  // 拿正则去匹配传进来的参数，然后return返回 一个布尔值
  return reg.test(str)
}
