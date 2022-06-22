function hasTargetSum(array, target) {

//create for loop to iterate through array
  for(n = 0; n< array.length; n++){



    newArray= [...array]


  //assign a variable to number that's being checked
    let checkedNumber = newArray[n]

  // create a new array with checkedNumber missing
    newArray.splice(n, 1)


  //create another for loop to iterate through newArray
    for (let number of newArray){
      //assign a variable called sum that adds worked-on element of newArray to initial checkedNumber
      let sum = checkedNumber + number


      //use conditional statement to return true if sum is equal to target
      if(sum === target) return true

  
    };
    
  };
  return false


}

/* 
  Write the Big O time complexity of your function here
  O(n + 3)(n+2)
  0(nsquared + 5n + 6)

  removing the constants
  0(nsquared + 5n)

*/

/* 
  Add your pseudocode here

  - create for loop to iterate through array
  - assign a variable to number that's being checked
  - create a new array with checkedNumber missing
  - create another for loop to iterate through newArray
  - assign a variable called sum that adds worked-on element of newArray to initial checkedNumber
  - use conditional statement to return true if sum is equal to target
*/

/*
  Add written explanation of your solution here

  - I decided that the way I would check if a sum within my array was equal to my target would be to create a variable called sum to check against it for each iteration

  - The problem with that idea was that I couldn't figure out a way of creating a sum of each variable in the array without also adding the variable I was checking to itself and giving a false positive

  - An example of this problem would be if my array contained 5 and my target was 10, I could see my function adding the number it was checking to itself and returning a false positive

  - With this in mind, I decided to make a newArray with each iteration, using the splice method to remove the number I was checking from the array

  - I then used another for loop (this time a for of loop) to repeat the process for each element of the array, with a nested iteration (this was the part of the problem I actually found the hardest)

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum ([4, 7 , 2, 1, 12, 20], 11))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 6, 20, 2, 7, 9], 3))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

}

module.exports = hasTargetSum;
