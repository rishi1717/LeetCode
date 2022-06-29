var romanToInt = function (s) {
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var sum = 0;
   for(i=0;i<s.length;i++){
         if(i+1<s.length && roman[s[i]]<roman[s[i+1]]){
              sum-=roman[s[i]]
         }else{
              sum+=roman[s[i]]
         }
   }
    return sum;
}

console.log(romanToInt("IV"))
