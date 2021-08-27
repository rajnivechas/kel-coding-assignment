/* Q2: Anagram Tester
Write a function that checks if two words are anagrams.
is_anagram('cellar', 'recall')  # returns True
is_anagram('arm', 'elbow')      # returns False */

//Function that checks if two words are anagrams.
function is_anagram(firstStr, secStr) {

   let len1 = firstStr.length, len2 = secStr.length;
   if(len1 !== len2){      
      return 'False';  //If length of both strings is not same, then they cannot be anagram so return False
   }
   
   //convert the string into lowercase, with the help of split convert into array, sort that array,then join that array to create string again.
   let str1 = firstStr.toLowerCase().split('').sort().join(''),
   		 str2 = secStr.toLowerCase().split('').sort().join('');
   
  
   if(str1 === str2)     
       return 'True'; //if both strings are exactly same then return True otherwise return False
     
     return 'False';
   
}


//Execution
let test1 = is_anagram('Cellar', 'Recall') ;

let test2 =  is_anagram('arm', 'elbow')      ;

console.log(`Is case one anagram: ${test1}`);
console.log(`Is case two anagram: ${test2}`);



/* 
	Q3: TempTracker
	Write a class TempTracker with these methods:
   insert() - records a new temperature
   get_max() - returns the highest temp we've seen so far
   get_min() - returns the lowest temp we've seen so far
   get_mean() - returns the mean of all temps we've seen so far
   get_mode() - returns a mode of all temps we've seen so far
   
   Favour speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode() over speeding up the insert() method.
get_mean() should return a float, but the rest of the getter methods can return integers. Temperatures will all be inserted as integers and we can assume they will be in the range 0 ℃ to 150 ℃.
If there is more than one mode, return any of the modes.


 */


/* By tracking  max, min, mean, and mode at the time of insert, so that each getter method can returns a property.
To calculate mean at each insert, we need track to the numberOfReadings and the totalSum of numbers inserted so far.
To calculate the mode at each insert, we need to track the total occurrences of each number, as well as the maxOccurrences we've seen so far.
*/

class TempTracker {
  constructor() {

    // For mode
    this.occurrences = new Array(150).fill(0); // Array of 0s at indices 0..150
    this.maxOccurrences = 0;
    this.mode = null;

    // For mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    // For min and max
    this.minTemp = null;
    this.maxTemp = null;
  }

  insert(temperature) {
  
   //at the time of insert, we can update for min,max temp.
  //similarly mean can can be calculating by tracking 

    // For mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
      this.mode = temperature;
      this.maxOccurrences = this.occurrences[temperature];
    }

    // For mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;

    // For min and max
    if (this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    }
  }

  get_max() {
    return this.maxTemp;
  }

  get_min() {
    return this.minTemp;
  }

  get_mean() {
    return this.mean;
  }

  get_mode() {
    return this.mode;
  }
}
//Execution
var temp = new TempTracker();

temp.insert(10);
temp.insert(25);
temp.insert(22);
temp.insert(80);

console.log(temp.get_min());
console.log(temp.get_max());
console.log(temp.get_mean());
