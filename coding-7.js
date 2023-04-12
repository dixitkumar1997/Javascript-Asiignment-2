// Ques-7:- Write a function that takes in an array of objects and returns the number of objects that have a specific property.
// Soln:-


       function countproperties(arr , propname){
        let count=0;
        for(let i=0;i<arr.length;i++){
          for(let key in arr[i]){
            if(key===propname){
                count++;
            }
          }
        }
        return count;
       }