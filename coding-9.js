// Ques-9:- 9	Write a function that takes in an array of strings and returns a new array with each string capitalized.
// Soln:-


      function capitalizedstring(arr){
        let new_arr=[];
        for(let i=0;i<arr.length;i++){
            let lower="abcdefghijklmnopqrstuvwxyz";
            let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let str=arr[i]
            let bag="";
           for(let k=0;k<str.length;k++){
            for(let j=0;j<26;j++){
                
             if(str[k]==lower[j]){
                bag= bag+upper[j];
             }
            }
            
        }
        new_arr.push(bag);
      }
      return new_arr;
    }
    