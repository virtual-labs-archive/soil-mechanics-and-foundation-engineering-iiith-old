/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions = 7

//Enter the solutions corresponding to each question:
var correctchoices = new Array()
correctchoices[1] = 'a' //question 1 solution
correctchoices[2] = 'b' //question 2 solution, and so on.
correctchoices[3] = 'b'
correctchoices[4] = 'a'
correctchoices[5] = 'c'
correctchoices[6] = 'd'
correctchoices[7] = 'b'


/////Don't edit beyond here//////////////////////////

function gradeit() {
	var incorrect = null
	for (q = 1; q <= totalquestions; q++) {
		var thequestion = eval("document.myquiz.question" + q)
		for (c = 0; c < thequestion.length; c++) {
			if (thequestion[c].checked == true)
				actualchoices[q] = thequestion[c].value
		}

		if (actualchoices[q] != correctchoices[q]) { //process an incorrect choice
			if (incorrect == null)
				incorrect = q
			else
				incorrect += "/" + q
		}
	}

	if (incorrect == null)
		incorrect = "a/b"
	document.cookie = 'q=' + incorrect
	if (document.cookie == '')
		alert("Your browser does not accept cookies. Please adjust your browser settings.")
	else
		window.location = "results.htm"
}
window.onload = function () {
	document.getElementById("showsolution").hidden = true;
}
function showsolution() {
	document.getElementById("solutionTableBody").innerHTML = "";
	this.disabled = true
	document.getElementById("showsolution").hidden = false;
	for (var i = totalquestions; i >= 1; i--) {
		var colo = "green"
		var ans = this.correctchoices[i]
		for (temp = 0; temp < incorrect.length; temp++) {
			if (i == incorrect[temp])
				wrong = 1
		}
		if (wrong == 1) {
			colo = "red"
			wrong = 0
		}
		var str1 = ans
		var str2 = str1.fontcolor(colo);
		let table = document.getElementById("solutionTableBody")
		let row = table.insertRow(0);
		let column1 = row.insertCell(0);
		let column2 = row.insertCell(1);
		column1.innerHTML = i;
		column2.innerHTML = str2;
	}
}

