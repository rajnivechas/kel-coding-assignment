import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnagramService {

  constructor() { }

  checkAnagram(firstStr: any, secStr: any){  
      
       let len1 = firstStr.length, len2 = secStr.length;
       if(len1 !== len2){      
          return false;  //If length of both strings is not same, then they cannot be anagram so return False
       }
       
       //convert the string into lowercase, with the help of split convert into array, sort that array,then join that array to create string again.
       let str1 = firstStr.toLowerCase().split('').sort().join(''),
            str2 = secStr.toLowerCase().split('').sort().join('');
       
        //if both strings are exactly same then return True otherwise return False      
       if(str1 === str2) {
          return true;  
       }else{                  
         return false;
       }
           
   
  }
}
