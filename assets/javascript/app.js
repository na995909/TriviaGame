function start() {
	$("#button").toggle("fast");
	$('#questions').toggle("slow");
	document.getElementById("timer").innerHTML = time + " s ";
	time --;
	timer = setInterval(function(){
		if(time < 0){
			clearInterval(timer);
			end();
			return;
		}

		document.getElementById("timer").innerHTML = time + " s ";
		time --;
		
	},1000);
}

function end() {
	$('#questions').toggle("slow");
	$('#end').toggle('slow');
	 checkAnswers();

}
function checkAnswers(){
	unanswered = answers.length;
	for (var i=0; i<answers.length;i++) {
			var index = i+1;
			$("input[name='question_" + index + "']:checked").each(function() {
			var value = $(this).val();
			if (value ==answers[i]) {
				correctAnswers ++;

			} else {
				incorrectAnswers++;
			} 
			unanswered--;

		});
		}

	$("#c_a").text(correctAnswers);
	$("#i_a").text(incorrectAnswers);
	$("#un_a").text(unanswered);
}

var answers =["q1_ans3", "q2_ans2", "q3_ans4", "q4_ans1", "q5_ans4", "q6_ans3", "q7_ans1", "q8_ans3"];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered =0;
var timer;
var time = 30; 



