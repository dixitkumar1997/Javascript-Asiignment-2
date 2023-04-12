// Ques-6:- 6	Write a function that takes in an array of strings and returns the length of the longest string.
// Soln:-

       function longeststring(arr){
        let max=0;
          for(let i=0;i<arr.length;i++){
            if(arr[i].length>max){
                max=arr[i].length;
            }
          }
          return max;
       }