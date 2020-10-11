/*
 * 두 개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를 순서대로 return하는 함수를 작성하세요. (공백, 중복 제외)
 * 예시 : commonCharacters('acexivou', 'aegihobu')
 * 결과 : 'aeiou'
 *
 * Advanced : 두 개 이상의 문자열을 받을 수 있도록 기능을 확장하세요.
 */

const commonCharacters = function (string1, string2) {
  let str1arr = string1.split('');
  let str2arr = string2.split('');
  let result = '';
  for (let i = 0; i < str1arr.length; i++) {
    for (let j = 0; j < str2arr.length; j++) {
      if (str1arr[i] === str2arr[j])
        result += str1arr[i]
    }
  }
  return result;
};
