'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------


const LastWord = (str) => {
    let g=0
    let out =[]
    let out2
    out=str.split(" ")
    out2=out[out.length-1]
    
    
    
    
    
    return out2
    
    
}

// 2) ---------------------
// c
// ------------------------

const LastWord_2 = (str) => {
    let g=0
    let out =[]
    let out2
    out=str.split(" ")
    out2=out[out.length-1]
    
    
    
    
    
    return out2
    
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    
let out=[]
let out2={}
    
    out=str.split(" ")
    out[0]="We"
    if(out[1]=="was"){
        out[1]="were"
    }
    if(out[1]=="am"){
        out[1]="are"
    }
    out2=out.join(" ")
    return out2


    }
    
    


// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    var out=[]
    var out2=[]
    var out3=[]
    out=arr.slice(0,5)
    // console.log(arr[5])
    if(arr[5]!=null){
      for(let i=5;i<=arr.length-1;i++){
          out3=arr[i]
          out2=`${out.join(" ")}, ${out3}`
      }
        
    
        
    }else{
        out2=`${arr.join(" ")},`
    }
    
    console.log(out2)
return out2
    
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
   
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };