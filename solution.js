Solution = (function() {
  return {
    isRotation: function(str1, str2) {
      if (str1.length == 0) return false;
      if (str1.length != str2.length) return false;
      return (str1 + str1).indexOf(str2) >= 0;
    }

  }
}());
