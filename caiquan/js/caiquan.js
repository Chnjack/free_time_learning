var shitou = document.getElementById("shitou");
var jiandao = document.getElementById("jiandao");
var bu = document.getElementById("bu");
var my_result = document.getElementById("my_result");
var computer_result = document.getElementById("computer_result");
var result = document.getElementById("result");
var span = document.getElementById("span");
var i = 0;

jiandao.onclick = function(){
	my_result.src="img/jiandao.jpg";
	var computerresult = Math.random();
	if(computerresult < 0.33){
		computer_result.src="img/shitou.jpg";
		result.innerHTML = "lose";
	}else if(computerresult < 0.67){
		computer_result.src="img/jiandao.jpg";
		result.innerHTML = "tie";
	}else{
		computer_result.src="img/bu.jpg";
		result.innerHTML = "win";
		span.innerHTML = parseInt(++i);
	}
}

shitou.onclick = function(){
	my_result.src="img/shitou.jpg";
	var computerresult = Math.random();
	if(computerresult < 0.33){
		computer_result.src="img/shitou.jpg";
		result.innerHTML = "tie";
	}else if(computerresult < 0.67){
		computer_result.src="img/jiandao.jpg";
		result.innerHTML = "win";
		span.innerHTML = parseInt(++i);
	}else{
		computer_result.src="img/bu.jpg";
		result.innerHTML = "lose";
	}
}

bu.onclick = function(){
	my_result.src="img/bu.jpg";
	var computerresult = Math.random();
	if(computerresult < 0.33){
		computer_result.src="img/shitou.jpg";
		result.innerHTML = "win";
		span.innerHTML = parseInt(++i);
	}else if(computerresult < 0.67){
		computer_result.src="img/jiandao.jpg";
		result.innerHTML = "lose";
	}else{
		computer_result.src="img/bu.jpg";
		result.innerHTML = "tie";
	}
}