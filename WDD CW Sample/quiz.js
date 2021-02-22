
    
       
		var question001 = ["What is the national sport of Sri Lanka?",
            "Where was the commonwealth Games 2018 held?",
            "Which criketer had scored highest individual score in ODI cricket?",
            "How many players are on a basketball team?",
            "Who did England beat in the final of the 2019 cricket world cup?",
            "How many players are on a football team?",
            "How many minutes is a rugby match?	",
            "In which country were the first Olympic Games held?",
            "What is the national sport in Japan?",
            "What was the Olympic city of 1992 ?",
        ]
        var options001 = ["<button class=buttons001  onclick=q1c()>Volleyball</button><button class=buttons001 onclick=q1i()>Cricket</button><button class=buttons001 onclick=q1i()>Basketball</button><button class=buttons001 onclick=q1i()>Rugby</button>"];
		var options002 = ["<button class=buttons001  onclick=q2c() >Gold Cost,Australia</button><button class=buttons001 onclick=q2i()>Sydney,Australia</button><button class=buttons001 onclick=q2i()>Birmingham,England</button><button class=buttons001 onclick=q2i()>Glasgow,Scotland</button>"];
        var options003 = ["<button class=buttons001 onclick=q3c()>Rohit Sharma</button><button class=buttons001 onclick=q3i()>Chris Gale</button><button class=buttons001 onclick=q3i()>Virender Sehwag</button><button class=buttons001 onclick=q3i()>Martin Guptill</button>"];
        var options004 = ["<button class=buttons001 onclick=q4i()>8 players</button><button class=buttons001 onclick=q4c()>5 players</button><button class=buttons001 onclick=q4i()>10 players</button><button class=buttons001 onclick=q4i()>12 players</button>"];
        var options005 = ["<button class=buttons001 onclick=q5c()>New Zeland</button><button class=buttons001 onclick=q5i()>Australia</button><button class=buttons001 onclick=q5i()>Sri Lanka</button><button class=buttons001 onclick=q5i()>Belarus</button>"];
        var options006 = ["<button class=buttons001 onclick=q6i()>12 players</button><button class=buttons001 onclick=q6c()>11 players</button><button class=buttons001 onclick=q6i()>10 players</button><button class=buttons001 onclick=q6i()>5 players</button>"];
        var options007 = ["<button class=buttons001 onclick=q7c()>80 minutes</button><button class=buttons001 onclick=q7i()>50 minutes</button><button class=buttons001 onclick=q7i()>60 minutes</button><button class=buttons001 onclick=q7i()>30 minutes</button>"];
        var options008 = ["<button class=buttons001 onclick=q8c()>Greece</button><button class=buttons001 onclick=q8i()>Athlanta</button><button class=buttons001 onclick=q8i()>Brazil</button><button class=buttons001 onclick=q8i()>Barcelona</button>"];
        var options009 = ["<button class=buttons001 onclick=q9c()>Sumo Wrestling</button><button class=buttons001 onclick=q9i()>Tenis</button><button class=buttons001 onclick=q9i()>Kabadi</button><button class=buttons001 onclick=q9i()>Basketball</button>"];
        var options010 = ["<button class=buttons001 onclick=q10i()>Athlanta</button><button class=buttons001 onclick=q10c()>Barcelona</button><button class=buttons001 onclick=q10i()>Macau</button><button class=buttons001 onclick=q10i()>Australia</button>"];
        
      
	
		

        function begin001() {
      k=2;
	  j=4;
	  l=6;
	  m=10;
	  n=8;
	  o=3;
	  p=1;
	  q=5;
	  r=9;
	  s=7;
	  
			a=1;
			b=0;
			c = 60;
			d=0;
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
			 message003.innerHTML ="";
            number001.innerHTML = a+ " out of 10 Questions";
			
        }
		


         
        function q1c() {
		     
            message003.innerHTML = " Correct";
			message001.innerHTML = "";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
            count.innerHTML=j+=1;
			message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			
			}
			
        

        function q1i() {
		   
            message001.innerHTML = question001[0];
			message003.innerHTML = " Incorrect";
            message002.innerHTML = "";
			score001.innerHTML =  b=b-1;
	        count.innerHTML=j-=1;	
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";

			}
			
        

        function q2c() {
           message001.innerHTML = "";
		   message003.innerHTML = " Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			    count001.innerHTML=k+=1;	       
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q2i() {
            message001.innerHTML = question001[1];
			message003.innerHTML = " Incorrect. ";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			    count001.innerHTML=k-=1;       
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3c() {
            message001.innerHTML = "";
			message003.innerHTML = " Correct";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			 count002.innerHTML=l+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3i() {
           message001.innerHTML = question001[2];
		   message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			 count002.innerHTML=l-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4c() {
           message001.innerHTML = "";
		   message003.innerHTML = " Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			count003.innerHTML=m+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4i() {
            message001.innerHTML = question001[3];
			message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count003.innerHTML=m-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5c() {
            message001.innerHTML = "";
			message003.innerHTML = " Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			count004.innerHTML=n+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5i() {
            message001.innerHTML = question001[4];
			message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count004.innerHTML=n-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6c() {
           message001.innerHTML = "";
		   message003.innerHTML = " Correct";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			count005.innerHTML=o+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6i() {
		
           message001.innerHTML = question001[5];
		   message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count005.innerHTML=o-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7c() {
           message001.innerHTML = ""; 
		   message003.innerHTML = " Correct";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			count006.innerHTML=p+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7i() {
            message001.innerHTML = question001[6];
			message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count006.innerHTML=p-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8c() {
           message001.innerHTML = "";
		   message003.innerHTML = " Correct.";
            message002.innerHTML = "";
            score001.innerHTML =b=b+2;
			count007.innerHTML=q+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8i() {
           message001.innerHTML = question001[7];
		   message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count007.innerHTML=q-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9c() {
            message001.innerHTML = "";
			message003.innerHTML = "Correct";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			count008.innerHTML=r+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9i() {
           message001.innerHTML = question001[8];
		   message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count008.innerHTML=r-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10c() {
            message001.innerHTML = "";
			message003.innerHTML = " Correct.";
            message002.innerHTML = "";
            score001.innerHTML = b=b+2;
			count009.innerHTML=s+=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10i() {
            message001.innerHTML = question001[9];
			message003.innerHTML = " Incorrect.";
            message002.innerHTML = "";
			score001.innerHTML = b=b-1;
			count009.innerHTML=s-=1;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }
		
		
        function next001() {
		a=a+1;
            if (a == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions" ;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML =a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "6") {
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "7") {
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "8") {
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "9") {
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            }

            else if (a == "10") {
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                message004.innerHTML = "";
            } else {
			   number001.innerHTML = "Questions:Completed." ;
			    if (b <1)
				document.body.style.backgroundColor="#2b2b05";
			   if (b >=1)
			   document.body.style.backgroundColor="#c40229";
			  if (b>=5)
			    document.body.style.backgroundColor="#f7a22a";
				
			  if (b>=10)
			    document.body.style.backgroundColor="#e5f229";
				 
			  if (b>=15)
			    document.body.style.backgroundColor="#ADD8E6";
				if (b>=20)
				 document.body.style.backgroundColor="#f72aea";
			 
		
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Quiz";
                 message002.innerHTML = "";
		         message003.innerHTML = "";
				 message015.innerHTML="Performance"
		if(j=="5")
		{message005.innerHTML = "1. What is the national sport of Sri Lanka?"+ "  Volleyball"+ "<span style=\"color:green;\">  Correct" + " <img src=c.png height='20' width='30'>";} 
		else if(j=="3")
		{message005.innerHTML =  "1. What is the national sport of Sri Lanka?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: volleyball ";}
        
		  if(k=="3")
		{message006.innerHTML = "2. Where was the commonwealth Games 2018 held?"+ " Gold Cost,Australia"+"<span style=\"color:green;\">  Correct"+ " <img src=c.png height='20' width='30'>" ;} 
		else if (k=="1")
		{message006.innerHTML = "2. Where was the commonwealth Games 2018 held?"+"<span style=\"color:red;\"> Incorrect"+ " <img src=w.png height='20' width='20'>" +" The correct answer is: Gold Cost,Australia";}
		
		if(l=="7")
		{message007.innerHTML = "3. Which criketer had scored highest individual score in ODI cricket?"+ " Rohit Sharma"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (l=="5")
		{message007.innerHTML =  "3. Which criketer had scored highest individual score in ODI cricket?"+ "<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: Rohit Sharma";}
		
		if(m=="11")
		{message008.innerHTML = "4. How many players are on a basketball team?"+" 5 players"+"<span style=\"color:green;\">  Correct"+ " <img src=c.png height='20' width='30'>";} 
		else if (m=="9")
		{message008.innerHTML = "4. How many players are on a basketball team?"+"<span style=\"color:red;\"> Incorrect"+ " <img src=w.png height='20' width='20'>" +" The correct answer is: 5 players";}
		
		if(n=="9")
		{message009.innerHTML = "5. Who did England beat in the final of the 2019 cricket world cup?"+" New Zeland"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>";} 
		else if (n=="7")
		{message009.innerHTML =  "5. Who did England beat in the final of the 2019 cricket world cup?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: New Zeland ";}
		
		if(o=="4")
		{message010.innerHTML = "6. How many players are on a football team?"+" 11 players"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (o=="2")
		{message010.innerHTML = "6. How many players are on a football team?"+"<span style=\"color:red;\"> Incorrect"+ " <img src=w.png height='20' width='20'>" +" The correct answer is: 11 players";}
		
		if(p=="2")
		{message011.innerHTML = "7. How many minutes is a rugby match?	"+ " 80 minutes"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (p=="0")
		{message011.innerHTML =  "7. How many minutes is a rugby match?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: 80 minutes";}
		
		if(q=="6")
		{message012.innerHTML = "8. In which country were the first Olympic Games held?"+" Greece"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (q=="4")
		{message012.innerHTML =  "8. In which country were the first Olympic Games held?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: Greece";}
		
		if(r=="10")
		{message013.innerHTML = "9. What is the national sport in Japan?"+" Sumo Wrestling"+"<span style=\"color:green;\">  Correct"+"<img src=c.png height='20' width='30'>" ;} 
		else if (r=="8")
		{message013.innerHTML =  "9. What is the national sport in Japan?"+"<span style=\"color:red;\"> Incorrect"+"<img src=w.png height='20' width='20'>" +" The correct answer is: Sumo Wrestling";}
		
		if(s=="8")
		{message014.innerHTML =  "10. What was the Olympic city of 1992 ?"+" Barcelona"+"<span style=\"color:green;\">  Correct"+"<img src=c.png height='20' width='30'>" ;} 
		else if (s=="6")
		{message014.innerHTML =   "10. What was the Olympic city of 1992 ?"+"<span style=\"color:red;\"> Incorrect"+"<img src=w.png height='20' width='20'>" +" The correct answer is: Barcelona";}
		
		else{
		message015.innerHTML = "";}
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }
	}
	     
		
		
		 
		  
			
			

        function timer001() {
            
			c = c - 1;
			d=d+1;
			
            if (c < 70) {
                time001.innerHTML ="Time Remaining:"+ c+" sec";
				time002.innerHTML = "Time Taken:"+d + " sec";
            }

            if (c < 1) {
                window.clearInterval(update);
				if (b <1)
				document.body.style.backgroundColor="#2b2b05";
			   if (b >=1)
			   document.body.style.backgroundColor="#c40229";
			  if (b>=5)
			    document.body.style.backgroundColor="#f7a22a";
				
			  if (b>=10)
			    document.body.style.backgroundColor="#e5f229";
				 
			  if (b>=15)
			    document.body.style.backgroundColor="#ADD8E6";
				if (b>=20)
				 document.body.style.backgroundColor="#f72aea";
                message001.innerHTML = "Time's up";
                message002.innerHTML = "";
                message003.innerHTML = "";
				message015.innerHTML="Performance"
		if(j=="5")
		{message005.innerHTML = "1. What is the national sport of Sri Lanka?"+ "  Volleyball"+ "<span style=\"color:green;\">  Correct" + " <img src=c.png height='20' width='30'>";} 
		else if(j=="3")
		{message005.innerHTML =  "1. What is the national sport of Sri Lanka?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: volleyball ";}
        else{message005.innerHTML =  "1. What is the national sport of Sri Lanka?"+"<span style=\"color:red;\"> Not selected"+" <img src=q.png height='20' width='20'>" +" The correct answer is: volleyball ";}
		 
		 if(k=="3")
		{message006.innerHTML = "2. Where was the commonwealth Games 2018 held?"+ " Gold Cost,Australia"+"<span style=\"color:green;\">  Correct"+ " <img src=c.png height='20' width='30'>" ;} 
		else if (k=="1")
		{message006.innerHTML = "2. Where was the commonwealth Games 2018 held?"+"<span style=\"color:red;\"> Incorrect"+ " <img src=w.png height='20' width='20'>" +" The correct answer is: Gold Cost,Australia";}
		else{message006.innerHTML = "2. Where was the commonwealth Games 2018 held?"+"<span style=\"color:red;\"> Not selected"+ " <img src=q.png height='20' width='20'>" +" The correct answer is: Gold Cost,Australia";}
		
		if(l=="7")
		{message007.innerHTML = "3. Which criketer had scored highest individual score in ODI cricket?"+ " Rohit Sharma"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (l=="5")
		{message007.innerHTML =  "3. Which criketer had scored highest individual score in ODI cricket?"+ "<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: Rohit Sharma";}
		else{ message007.innerHTML =  "3. Which criketer had scored highest individual score in ODI cricket?"+ "<span style=\"color:red;\"> Not selected"+" <img src=q.png height='20' width='20'>" +" The correct answer is: Rohit Sharma"; }
		
		if(m=="11")
		{message008.innerHTML = "4. How many players are on a basketball team?"+" 5 players"+"<span style=\"color:green;\">  Correct"+ " <img src=c.png height='20' width='30'>";} 
		else if (m=="9")
		{message008.innerHTML = "4. How many players are on a basketball team?"+"<span style=\"color:red;\"> Incorrect"+ " <img src=w.png height='20' width='20'>" +" The correct answer is: 5 players";}
		else{message008.innerHTML = "4. How many players are on a basketball team?"+"<span style=\"color:red;\"> Not selected"+ " <img src=q.png height='20' width='20'>" +" The correct answer is: 5 players";	}
		
		if(n=="9")
		{message009.innerHTML = "5. Who did England beat in the final of the 2019 cricket world cup?"+" New Zeland"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>";} 
		else if (n=="7")
		{message009.innerHTML =  "5. Who did England beat in the final of the 2019 cricket world cup?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: New Zeland ";}
		else{message009.innerHTML =  "5. Who did England beat in the final of the 2019 cricket world cup?"+"<span style=\"color:red;\"> Not Selected"+" <img src=q.png height='20' width='20'>" +" The correct answer is: New Zeland ";	}
		
		if(o=="4")
		{message010.innerHTML = "6. How many players are on a football team?"+" 11 players"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (o=="2")
		{message010.innerHTML = "6. How many players are on a football team?"+"<span style=\"color:red;\"> Incorrect"+ " <img src=w.png height='20' width='20'>" +" The correct answer is: 11 players";}
		else{message010.innerHTML = "6. How many players are on a football team?"+"<span style=\"color:red;\"> Not selected"+ " <img src=q.png height='20' width='20'>" +" The correct answer is: 11 players";}
		
		if(p=="2")
		{message011.innerHTML = "7. How many minutes is a rugby match?	"+ " 80 minutes"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (p=="0")
		{message011.innerHTML =  "7. How many minutes is a rugby match?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: 80 minutes";}
		else{message011.innerHTML =  "7. How many minutes is a rugby match?"+"<span style=\"color:red;\"> Not selected"+" <img src=q.png height='20' width='20'>" +" The correct answer is: 80 minutes";}
		
		if(q=="6")
		{message012.innerHTML = "8. In which country were the first Olympic Games held?"+" Greece"+"<span style=\"color:green;\">  Correct"+" <img src=c.png height='20' width='30'>" ;} 
		else if (q=="4")
		{message012.innerHTML =  "8. In which country were the first Olympic Games held?"+"<span style=\"color:red;\"> Incorrect"+" <img src=w.png height='20' width='20'>" +" The correct answer is: Greece";}
		else{message012.innerHTML =  "8. In which country were the first Olympic Games held?"+"<span style=\"color:red;\"> Not selected"+" <img src=q.png height='20' width='20'>" +" The correct answer is: Greece";}
		
		if(r=="10")
		{message013.innerHTML = "9. What is the national sport in Japan?"+" Sumo Wrestling"+"<span style=\"color:green;\">  Correct"+"<img src=c.png height='20' width='30'>" ;} 
		else if (r=="8")
		{message013.innerHTML =  "9. What is the national sport in Japan?"+"<span style=\"color:red;\"> Incorrect"+"<img src=w.png height='20' width='20'>" +" The correct answer is: Sumo Wrestling";}
		else{ message013.innerHTML =  "9. What is the national sport in Japan?"+"<span style=\"color:red;\"> Not selected"+"<img src=q.png height='20' width='20'>" +" The correct answer is: Sumo Wrestling";}
		
		if(s=="8")
		{message014.innerHTML =  "10. What was the Olympic city of 1992 ?"+" Barcelona"+"<span style=\"color:green;\">  Correct"+"<img src=c.png height='20' width='30'>" ;} 
		else if (s=="6")
		{message014.innerHTML =   "10. What was the Olympic city of 1992 ?"+"<span style=\"color:red;\"> Incorrect"+"<img src=w.png height='20' width='20'>" +" The correct answer is: Barcelona";}
		else{
	     message014.innerHTML =   "10. What was the Olympic city of 1992 ?"+"<span style=\"color:red;\"> Not selected"+"<img src=q.png height='20' width='20'>" +" The correct answer is: Barcelona";				}
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }
                
            
        }
update = setInterval("timer001()", 1000);

        function repeat001() {
            location.reload();
        }
		
		var mybutton = document.getElementById("myBtn");
		window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    