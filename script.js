function calculate(parameter){
	calc=[];
	for (var i = 1; i <= parameter; i++) {
		if (i%2==0 && i%3==0  && i%5==0)
		calc.push("yu-gi-oh");
		else if (i%2==0 && i%3==0) 
			calc.push("yu-gi");
		else if (i%2==0 && i%5==0) 
			calc.push("yu-oh");
		else if (i%3==0 && i%5==0) 
			calc.push("gi-oh");
		else if(i % 2==0)
			calc.push("yu");
		else if (i % 3==0) 
			calc.push("gi");
		else if(i % 5 ==0 )
			calc.push("oh");
		else
			calc.push(i);


	}
	console.log(calc);
}

calculate(100);
calculate(50);

