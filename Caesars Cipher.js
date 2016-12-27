
function rot13(str) { // LBH QVQ VG!
  str = str.split([""]);
  for (i=0;i<str.length;i++) {
    if (/[A-Z]/.test(str[i])) {
      str[i] = str[i].charCodeAt(0);
      if (str[i] >= 78) {
        str[i] -= 13;
        str[i] = String.fromCharCode(str[i]);
      } else {
        str[i] += 13;
        str[i] = String.fromCharCode(str[i]);
      }
      
    }
  }
  return str.join("");
}

// Change the inputs below to test
rot13("FNGLNZ");
