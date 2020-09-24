/*
 * 임의의 string이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 return하는 함수를 작성하세요.
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = function (string) {
  let stringarr = string.split('');
  for (let i = 0; i < stringarr.length; i++) {
    let count = 0;
    for (let j = 0; j < stringarr.length; j++) {

      if (stringarr[i] === stringarr[j]) {
        count++
      }
    }
    if (count === 1) {
      return stringarr[i];
    }
  }
};
