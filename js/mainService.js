angular.module('myApp');
angular.module('myApp').service('mainService',function () {
       this.convertName = function(str){
           var x = /[aeiou]/;
           var arr = str.split("");
           if(x.test(arr[0])){
               return arr.join("") + "way";
           }else{
               while(!x.test(arr[0])){
                   arr.push(arr.shift());
               }
               return arr.join("") + "ay";
           }
       }
});
