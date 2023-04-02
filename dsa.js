// reverse string//
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  const originalStr = "Hello, world!";
  const reversedStr = reverseString(originalStr);
  console.log(reversedStr);
  

  // alphanumeric character//

  function hasAlphanumeric(str) {
    const regex = /[a-zA-Z0-9]/;
    return regex.test(str);
  }
  
  const testStr1 = "Hello, world!"; // contains alphanumeric characters
  const testStr2 = "#$%^&*()"; // does not contain alphanumeric characters
  
  console.log(hasAlphanumeric(testStr1)); // true
  console.log(hasAlphanumeric(testStr2)); // false

  // rearrange array//
  function rearrangeArray(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
    return [...evens, ...odds];
  }
  
  const arr = [2, 3, 4, 6, 5, 1, 8];
  const rearrangedArr = rearrangeArray(arr);
  console.log(rearrangedArr);
  