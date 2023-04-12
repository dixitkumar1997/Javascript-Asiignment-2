// Ques-5:- 5	Write a function that takes in an array of numbers and returns the sum of the numbers.
// Soln:- 


      function sumofarray(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        return sum;
      }