//
// IP Validation
//
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//
// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
  if (str !== str.trim()) {
    return false;
  }
  str = str.trim();
  str = str.split('.');
  if (str.length != 4) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].trim()) {
      return false;
    }
    if (str[i][0] === '0' && str[i].length > 1) {
      return false;
    }
    else {
      let tempLength = str[i].length;
      let temp = parseInt(str[i]);
      if (temp.toString().length != tempLength) {
        return false;
      }
      if (Number.isNaN(temp)) {
        return false;
      }
      if (temp < 0 || temp > 255) {
        return false;
      }
    }
  }
  return true;
}
