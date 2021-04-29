function alphabeticalOrder(arr) {
 
    return arr.sort(function(a, b) { return a === b ? 0 : a > b ? 1 : -1;    });
     
    }
    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
    ///////////////////////////////////////////////////////////////////////////////////////
    var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  
 return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}
nonMutatingSort(globalArray);
////////////////////////////////////////////////////////////////////////////////////////////
function splitify(str) {

  return str.split(/\W/)
  
  }
  splitify("Hello World,I-am code");
  //////////////////////////////////////////////////////////////////////////////////////////
  function sentensify(str) {
    // Only change code below this line
  let disectedResult=str.split(/\W/);
  console.log(disectedResult);
  let joinedResult=disectedResult.join(" ");
  console.log(joinedResult);
  return joinedResult;
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");
  ///////////////////////////////////////////////////////////////////////////////////////////
  
function urlSlug(title) {
    let titleDividedIntoLowerCaseWords=title.slice().toLowerCase().split(" ");
    let filteredWords=titleDividedIntoLowerCaseWords.filter(function(word){
      if (word !=""){
        return word;
      }
    })
  return filteredWords.join("-")
  
  }
/////////////////////////////////////////////////////////////////////////////////////////////////
function checkPositive(arr) {
    // Only change code below this line
  return arr.every(value => {return value > 0; });
  
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  function checkPositive(arr) {
    // Only change code below this line
  return arr.some(function(value){
    return value > 0;
  })
  
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  function add(x) {
    // Only change code below this line
  
  return y => z => {return x + y + z};
    // Only change code above this line
  }
  add(10)(20)(30);
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  