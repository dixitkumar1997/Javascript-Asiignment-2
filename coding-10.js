// Ques-10:- 10	Write a function that takes in an array of objects and returns a new array with only the objects that have a specific property.
// Soln:-


function countproperties(arr , propname){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
      for(let key in arr[i]){
        if(key===propname){
            new_arr.push(arr[i])
        }
      }
    }
    return new_arr;
   }