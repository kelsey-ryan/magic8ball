$(document).ready(function(){
var magic8ball = {};
magic8ball.listofanswers = ["yes", "no", "maybe", "without a doubt", "dream on", "outlook hazy", "ask again later", "indubitably", "not likely", "don't count on it", "of course"];

$("#answer").hide();

magic8ball.askquestion = function(question)
{
  $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	var length = this.listofanswers.length;
	var random = Math.floor(Math.random()*length);
	var answer = this.listofanswers[random];
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
};

var onClick = function()

{
	$("#answer").hide();
  $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(function(){
	var question = prompt("Ask a yes/no question!");
	$("#8ball").effect("shake");
	magic8ball.askquestion(question);
	},500);
};

$("#questionButton").click(onClick);

});
