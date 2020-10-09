/**
 * 时间格式化
 * @param {function=} fmt
 * @param {date=} date
 * @return {date=} fmt
 */
export function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}

/**
 * 字符串去空格
 * @param {string=} str
 * @return {string=} str
 */
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 身份证验证
 * @param {string=} card
 * @return {boolean=} boolean
 */
export function validateIdCard(card) {
  let idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  if (!idcardReg.test(card)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 姓名验证
 * @param {string=} name
 * @return {boolean=} boolean
 */
export function validateName(name) {
  let reg1 = /^·|(·{2})|·$/;
  let reg2 = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,15}$/;
  if (reg1.test(name) || !reg2.test(name)) {
    return true;
  } else {
    return false;
  }
}
