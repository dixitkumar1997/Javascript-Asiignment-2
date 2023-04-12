// Ques-2:- Write a function that takes in a string and returns true if the string is empty, false otherwise.
// Soln:- 

function strlength(str){
    if(typeof str === "string" && str.length==0){
        return true;
     }
     else{
        return false;
     }
}