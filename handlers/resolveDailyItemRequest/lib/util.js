'use strict';
const util = {};
module.exports = util;

/*
関数isEmpty
:連想配列の空判定を行う
@param {object} obj
@return {boolean}
*/
util.isEmpty = (obj) => {
  return !Object.keys(obj).length;
};

/*
関数currenTime
:現在時刻を文字列で返す
@return {String}
 */
util.getCurrentTime = () => {
  let time = new Date();
  return time.toLocaleString();
}