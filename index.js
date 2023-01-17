function hasTargetSum(array, target) {
  // Write your algorithm here
const arrayLength = array.length

for (i=0; i < arrayLength; i++) {
  for (j=0; j < arrayLength; j++) {
    if (i!=j) {
      const sum = array[i] + array[j];
       console.log(i,j,sum)
       if (sum == target) {
        return true
      }
      // else {
      //   console.log("nope") 
      // }
    }
  
 // console.log(i,arrayLength,j)
 
//   }
//   if (yup == true) {
//     return true
//    } 
// }

  }
  
}
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. sum first number and all other array numbers, respectively
  2. if any of those sums equal target, return true. if not, go to step 3
  3. sum second number and all other array numbers, respectively
  4. repeat step 2
  5. if you've summed last number with all other array numbers with none equal to target,
    return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
