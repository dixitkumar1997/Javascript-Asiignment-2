// Ques-4:- 4	Write a function that takes in an object and returns true if the object is empty, false otherwise.
// // Soln:- 

           function objprop(obj){
            let count=0;
            for(let key in obj){
                count++;
            }
            if(count==0){
                return true;
            }
            else{
                return false;
            }
           }