// Ques-8:- 8	Write a function that takes in an array of numbers and returns a new array with each number multiplied by 2.
// Soln:-


      function multipliedby2(arr){
        let new_arr=[];
        for(let i=0;i<arr.length;i++){
            new_arr.push(arr[i]*2);
        }
        return new_arr;
      }