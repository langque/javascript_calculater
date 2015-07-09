// Sample Calculator:

// This code supper very sample operation like "+", "-", "*", "/"
// It doesn't support float number calculation, but the result can show float number.
// As test case 2/3 = 0.66666666666666.
// Since there is no parenthesis method, there for this calculator doesn’t support “*” || “/” with “+” “-”.
// Stack is the main datastruct been used in this calculator,  if there is more time, 
// stack can be used to implement methods to support parenthesis.

// In the test set, there are basic functionality test for every digits, 
// every operations, and big number calculating. 
// Thank you for reading, have a nice day.





'use strict';

function CalculatorService() {
	var new_number = 0;
	var tmp = 0,n,str;
	var stack = [];
	var digits={
		'zero': 0,
		'one':  1,
		'two':  2,
		'three':3,
		'four': 4,
		'five': 5,
		'six':  6,
		'seven':7,
		'eight':8,
		'nine': 9
	};
	var operation=['+','-','*','/'];

	// digit is string, e.g. 'one'
	this.enterDigit=function(digit){
		if (new_number){
			tmp = stack.pop();
			tmp = tmp*10+digits[digit];
			stack.push(tmp);
		}else{
			stack.push(digits[digit]);
			new_number = digits[digit];
		}
	}
	// operation is one character, e.g. '+'
 	this.enterOperation=function(operation){
 		new_number = 0;
 		if(operation.indexOf(operation) !==-1){
 			stack.push(operation);
 		}else{
 			return "Invaled operation"; 
 		}
 	}
 	
 	this.enterEquals=function(){
 		var i = stack.length-1;
 		for (i; i >= 0; i--) {
 			var num = stack.pop();
 			var oper = stack.pop();
 			if (oper == "+"){
 				num += stack.pop();
 			}
 			if (oper == "-"){
 				num = stack.pop() - num;
 			}
 			if (oper == "*"){
 				num *= stack.pop();
 			}
  			if (oper == "/"){
 				num = stack.pop() / num;
 			}
 			i-=1;
 			stack.push(num);
 		};
 	}
 	
 	// full clear
 	this.enterClear=function(){
 		stack = [];
 	} 
	
	// returns current display as a string
    this.getDisplay = function() {
    	if(stack.length == 0){
    		return "0"
    	}else{
    		n = stack[stack.length-1];
    		if(operation.indexOf(n)!==-1){
    			n = stack[stack.length-2];
    		}
    	 	str = n.toString();
    	 	return  str; 
    	}	
    };

}

