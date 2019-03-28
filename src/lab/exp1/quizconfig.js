/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions=10

//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='c' //question 1 solution
correctchoices[2]='a' //question 2 solution, and so on.
correctchoices[3]='a'
correctchoices[4]='a'
correctchoices[5]='a'
correctchoices[6]='c'
correctchoices[7]='d'
correctchoices[8]='d'
correctchoices[9]='c'
correctchoices[10]='b'

/////Don't edit beyond here//////////////////////////

function gradeit(){
var incorrect=null
var cnt=0
for (q=1;q<=totalquestions;q++){
	actualchoices[q]='e'
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
	if(actualchoices[q]!='e'){	
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}
	else
		cnt++

		}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect
document.cookie='got='+cnt
if (document.cookie=='')
alert("Your browser does not accept cookies. Please adjust your browser settings.")
else
window.location="results.htm"
}


function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
win2.focus()
win2.document.open()
win2.document.write('<title>Solution</title>')
win2.document.write('<body bgcolor="#FFFFFF">')
win2.document.write('<center><h3>Solution to Quiz</h3></center>')
win2.document.write('<center><font face="Arial">')
for (i=1;i<=totalquestions;i++){
for (temp=0;temp<incorrect.length;temp++){
if (i==incorrect[temp])
wrong=1
}
if (wrong==1){
win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
wrong=0
}
else
win2.document.write("Question "+i+"="+correctchoices[i]+"<br>")
}
win2.document.write('</center></font>')
win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5>")
win2.document.close()
}
