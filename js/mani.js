var numbers = [-2,-5,2,7,3,5];

function sum(){
  var newNum =0;
  for(var num of numbers){

    if(num > 0){
      newNum += num;
    }

  }

  return newNum;



}

console.log(sum());