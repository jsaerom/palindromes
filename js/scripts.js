// Back end Logic
var input = "";

function isPalindrome(input){
  // input = input.split("");
  // var reverse = input.slice().reverse();
  // input = input.join("");
  // reverse = reverse.join("");
  // console.log(input);
  // console.log(reverse);
  // if(input === reverse){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  for(var i = 0; i < input.length; i++){
    if (input[i] != input[(input.length - 1) - i]){
      return false;
    }
    return true;
  }
}

function generateOutput(input){
  var output = "\"" + input + "\" is ";
  if (!isPalindrome(input)){
    output += "not ";
  }
  output += "a palindrome!";
  return output;
}

// Front end Logic
$("form").submit(function(event){
  event.preventDefault();
  input = $("#input").val();
  $("#output").text(generateOutput(input));
});
