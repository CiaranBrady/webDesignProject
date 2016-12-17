
function nameChange()
{
	
	var name=prompt("What is your name");
	document.getElementById("myName").innerHTML= name;
		
}



function quiz()
{
	var firstQuest=prompt("Who is the leader of the Cleaners?");
	
		
			if(firstQuest.toUpperCase()=="JOE FERRO")
			{
			
				alert("Correct");
			
			}
			else
			{
			
				alert("Incorrect");
			
			}
	
	var secondQuest=prompt("What was the name of the virus?");
		
			if(secondQuest.toUpperCase()=="THE GREEN POISON")
			{
				
				alert("Correct");
				
			}
			else
			{
				
				alert("Incorrect");
				
			}
	
	var thirdQuest=prompt("What city is The Division based in?");
		
			if(thirdQuest.toUpperCase()=="NEW YORK")
			{
				
				alert("Correct");
				
			}	
			else
			{
				
				alert("Incorrect");
				
			}
	
}