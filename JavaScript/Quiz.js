var question001 = ["What is the longest river of Sri Lanka?",
            "what is the highest mountain of sri lanka?",
            "what currency do they use?",
            "What is the country code of sri lanka?",
            "How many airports are in sri lanka?",
            "who did sri lanka gain their independence from?",
            "What is the capital of sri lanka?	",
            "What is the commercial capital city of sri lanka?",
            "How many districs in sri lanka?",
            "How many provinces in sri lanka?",
        ]
        var options001 = ["<button class=buttons001  onclick=q1c()>Mahaveli</button><button class=buttons001 onclick=q1i()>kelani</button><button class=buttons001 onclick=q1i()>Nilwala</button><button class=buttons001 onclick=q1i()>kalu</button>"];
		var options002 = ["<button class=buttons001  onclick=q2c() >Piduruthalagala</button><button class=buttons001 onclick=q2i()>kirigalpoththa</button><button class=buttons001 onclick=q2i()>Knuckles</button><button class=buttons001 onclick=q2i()>Adam's peak</button>"];
        var options003 = ["<button class=buttons001 onclick=q3c()>Rupee</button><button class=buttons001 onclick=q3i()>Dollar</button><button class=buttons001 onclick=q3i()>Peso</button><button class=buttons001 onclick=q3i()>Euro</button>"];
        var options004 = ["<button class=buttons001 onclick=q4i()>93</button><button class=buttons001 onclick=q4c()>94</button><button class=buttons001 onclick=q4i()>244</button><button class=buttons001 onclick=q4i()>672</button>"];
        var options005 = ["<button class=buttons001 onclick=q5c()>22</button><button class=buttons001 onclick=q5i()>19</button><button class=buttons001 onclick=q5i()>15</button><button class=buttons001 onclick=q5i()>34</button>"];
        var options006 = ["<button class=buttons001 onclick=q6i()>Spain</button><button class=buttons001 onclick=q6c()>United Kingdom</button><button class=buttons001 onclick=q6i()>china</button><button class=buttons001 onclick=q6i()>France</button>"];
        var options007 = ["<button class=buttons001 onclick=q7c()>Sri Jayawardenepure kotte</button><button class=buttons001 onclick=q7i()>Gampaha</button><button class=buttons001 onclick=q7i()>Kaluthara</button><button class=buttons001 onclick=q7i()>Maharagama</button>"];
        var options008 = ["<button class=buttons001 onclick=q8c()>Colombo</button><button class=buttons001 onclick=q8i()>Gampaha</button><button class=buttons001 onclick=q8i()>Kaluthara</button><button class=buttons001 onclick=q8i()>Polonnaruwa</button>"];
        var options009 = ["<button class=buttons001 onclick=q9c()>25</button><button class=buttons001 onclick=q9i()>10</button><button class=buttons001 onclick=q9i()>45</button><button class=buttons001 onclick=q9i()>32</button>"];
        var options010 = ["<button class=buttons001 onclick=q10i()>12</button><button class=buttons001 onclick=q10c()>9</button><button class=buttons001 onclick=q10i()>20</button><button class=buttons001 onclick=q10i()>6</button>"];
        
      
	
		

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
            set1.innerHTML = question001[0];
            set2.innerHTML = options001;
			 set3.innerHTML ="";
            number001.innerHTML = a+ " out of 10 Questions";
			
        }
		


         
        function q1c() {
		     
            set3.innerHTML = " Correct";
			set1.innerHTML = "";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
            count.innerHTML=j+=1;
			set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
			
			}
			
        

        function q1i() {
		   
            set1.innerHTML = question001[0];
			set3.innerHTML = " Incorrect";
            set2.innerHTML = "";
			score001.innerHTML =  b=b-1;
	        count.innerHTML=j-=1;	
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";

			}
			
        

        function q2c() {
           set1.innerHTML = "";
		   set3.innerHTML = " Correct.";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			    count001.innerHTML=k+=1;	       
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q2i() {
            set1.innerHTML = question001[1];
			set3.innerHTML = " Incorrect. ";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			    count001.innerHTML=k-=1;       
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3c() {
            set1.innerHTML = "";
			set3.innerHTML = " Correct";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			 count002.innerHTML=l+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q3i() {
           set1.innerHTML = question001[2];
		   set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			 count002.innerHTML=l-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4c() {
           set1.innerHTML = "";
		   set3.innerHTML = " Correct.";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			count003.innerHTML=m+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q4i() {
            set1.innerHTML = question001[3];
			set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count003.innerHTML=m-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5c() {
            set1.innerHTML = "";
			set3.innerHTML = " Correct.";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			count004.innerHTML=n+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q5i() {
            set1.innerHTML = question001[4];
			set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count004.innerHTML=n-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6c() {
           set1.innerHTML = "";
		   set3.innerHTML = " Correct";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			count005.innerHTML=o+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q6i() {
		
           set1.innerHTML = question001[5];
		   set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count005.innerHTML=o-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7c() {
           set1.innerHTML = ""; 
		   set3.innerHTML = " Correct";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			count006.innerHTML=p+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q7i() {
            set1.innerHTML = question001[6];
			set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count006.innerHTML=p-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8c() {
           set1.innerHTML = "";
		   set3.innerHTML = " Correct.";
            set2.innerHTML = "";
            score001.innerHTML =b=b+2;
			count007.innerHTML=q+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q8i() {
           set1.innerHTML = question001[7];
		   set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count007.innerHTML=q-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9c() {
            set1.innerHTML = "";
			set3.innerHTML = "Correct";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			count008.innerHTML=r+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q9i() {
           set1.innerHTML = question001[8];
		   set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count008.innerHTML=r-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10c() {
            set1.innerHTML = "";
			set3.innerHTML = " Correct.";
            set2.innerHTML = "";
            score001.innerHTML = b=b+2;
			count009.innerHTML=s+=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q10i() {
            set1.innerHTML = question001[9];
			set3.innerHTML = " Incorrect.";
            set2.innerHTML = "";
			score001.innerHTML = b=b-1;
			count009.innerHTML=s-=1;
            set4.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }
		
		
        function next001() {
		a=a+1;
            if (a == "2") {
                set1.innerHTML = question001[1];
                set2.innerHTML = options002;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "3") {
                set1.innerHTML = question001[2];
                set2.innerHTML = options003;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "4") {
                set1.innerHTML = question001[3];
                set2.innerHTML = options004;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions" ;
                set4.innerHTML = "";
            }

            else if (a == "5") {
                set1.innerHTML = question001[4];
                set2.innerHTML = options005;
                set3.innerHTML = "";
                number001.innerHTML =a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "6") {
                set1.innerHTML = question001[5];
                set2.innerHTML = options006;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "7") {
                set1.innerHTML = question001[6];
                set2.innerHTML = options007;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "8") {
                set1.innerHTML = question001[7];
                set2.innerHTML = options008;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "9") {
                set1.innerHTML = question001[8];
                set2.innerHTML = options009;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
            }

            else if (a == "10") {
                set1.innerHTML = question001[9];
                set2.innerHTML = options010;
                set3.innerHTML = "";
                number001.innerHTML = a +" out of 10 Questions";
                set4.innerHTML = "";
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
                set1.innerHTML = "End of Quiz";
                 set2.innerHTML = "";
		         set3.innerHTML = "";
				 set15.innerHTML="Performance"
		if(j=="5")
		{set5.innerHTML = "1. What is the longest river of Sri Lanka?"+ "  Mahaveli"+ "<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if(j=="3")
		{set5.innerHTML =  "1. What is the longest river of Sri Lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Mahaveli ";}
        
		  if(k=="3")
		{set6.innerHTML = "2. what is the highest mountain of sri lanka?"+ " Piduruthalagala"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (k=="1")
		{set6.innerHTML = "2. what is the highest mountain of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Piduruthalagala";}
		
		if(l=="7")
		{set7.innerHTML = "3. what currency do they use?"+ "  Rupee"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (l=="5")
		{set7.innerHTML =  "3. what currency do they use?"+ "<span style=\"color:red;\"> Incorrect" +" The correct answer is: Rupee";}
		
		if(m=="11")
		{set8.innerHTML = "4. What is the country code of sri lanka?"+" 94"+"<span style=\"color:#00ffcc;\">  Correct"} 
		else if (m=="9")
		{set8.innerHTML = "4. What is the country code of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: 94";}
		
		if(n=="9")
		{set9.innerHTML = "5. How many airports are in sri lanka?"+" 22"+"<span style=\"color:#00ffcc;\">  Correct";} 
		else if (n=="7")
		{set9.innerHTML =  "5. How many airports are in sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: 22 ";}
		
		if(o=="4")
		{set10.innerHTML = "6. who did sri lanka gain their independence from?"+" United Kingdom"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (o=="2")
		{set10.innerHTML = "6. who did sri lanka gain their independence from?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: United Kingdom";}
		
		if(p=="2")
		{set11.innerHTML = "7. What is the capital of sri lanka?	"+ " Sri Jayawardenepure kotte"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (p=="0")
		{set11.innerHTML =  "7. What is the capital of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Sri Jayawardenepure kotte";}
		
		if(q=="6")
		{set12.innerHTML = "8. What is the commercial capital city of sri lanka?"+"Colombo"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (q=="4")
		{set12.innerHTML =  "8. What is the commercial capital city of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Colombo";}
		
		if(r=="10")
		{set13.innerHTML = "9. How many districs in sri lanka?"+" 25"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (r=="8")
		{set13.innerHTML =  "9. How many districs in sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is:25";}
		
		if(s=="8")
		{set14.innerHTML =  "10. How many provinces in sri lanka?"+" 9"+"<span style=\"color:#00ffcc;\">  Correct" ;} 
		else if (s=="6")
		{set14.innerHTML =   "10. How many provinces in sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: 9";}
		
		else{
		set15.innerHTML = "";}
                set4.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
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
                set1.innerHTML = "Time's up";
                set2.innerHTML = "";
                set3.innerHTML = "";
				set15.innerHTML="Performance"
		if(j=="5")
		{set5.innerHTML = "1. What is the longest river of Sri Lanka?"+ "  Mahaveli"+ "<span style=\"color:green;\">  Correct" ;} 
		else if(j=="3")
		{set5.innerHTML =  "1. What is the longest river of Sri Lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Mahaveli ";}
        else{set5.innerHTML =  "1. What is the longest river of Sri Lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: Mahaveli ";}
		 
		 if(k=="3")
		{set6.innerHTML = "2. what is the highest mountain of sri lanka?"+ " Piduruthalagala"+"<span style=\"color:green;\">  Correct" ;} 
		else if (k=="1")
		{set6.innerHTML = "2. what is the highest mountain of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Piduruthalagala";}
		else{set6.innerHTML = "2. what is the highest mountain of sri lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: Piduruthalagala";}
		
		if(l=="7")
		{set7.innerHTML = "3. what currency do they use?"+ " Rupee"+"<span style=\"color:green;\">  Correct" ;} 
		else if (l=="5")
		{set7.innerHTML =  "3. what currency do they use?"+ "<span style=\"color:red;\"> Incorrect" +" The correct answer is: Rupee";}
		else{ set7.innerHTML =  "3. what currency do they use?"+ "<span style=\"color:red;\"> Not selected" +" The correct answer is: Rupee"; }
		
		if(m=="11")
		{set8.innerHTML = "4. What is the country code of sri lanka?"+" 94"+"<span style=\"color:green;\">  Correct";} 
		else if (m=="9")
		{set8.innerHTML = "4. What is the country code of sri lanka?"+"<span style=\"color:red;\"> Incorrect"+" The correct answer is: 94";}
		else{message008.innerHTML = "4. What is the country code of sri lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: 94";	}
		
		if(n=="9")
		{set9.innerHTML = "5. How many airports are in sri lanka?"+" 22"+"<span style=\"color:green;\">  Correct";} 
		else if (n=="7")
		{set9.innerHTML =  "5. How many airports are in sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: 22 ";}
		else{set9.innerHTML =  "5. How many airports are in sri lanka?"+"<span style=\"color:red;\"> Not Selected" +" The correct answer is: 22 ";	}
		
		if(o=="4")
		{set10.innerHTML = "6. who did sri lanka gain their independence from?"+" United Kingdom"+"<span style=\"color:green;\">  Correct" ;} 
		else if (o=="2")
		{set10.innerHTML = "6. who did sri lanka gain their independence from?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: United Kingdom";}
		else{set10.innerHTML = "6. who did sri lanka gain their independence from?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: United Kingdom";}
		
		if(p=="2")
		{set11.innerHTML = "7. What is the capital of sri lanka?	"+ " Sri Jayawardenepure kotte"+"<span style=\"color:green;\">  Correct" ;} 
		else if (p=="0")
		{set11.innerHTML =  "7. What is the capital of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Sri Jayawardenepure kotte";}
		else{set11.innerHTML =  "7. What is the capital of sri lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: Sri Jayawardenepure kotte";}
		
		if(q=="6")
		{set12.innerHTML = "8. What is the commercial capital city of sri lanka?"+" Colombo"+"<span style=\"color:green;\">  Correct" ;} 
		else if (q=="4")
		{set12.innerHTML =  "8. What is the commercial capital city of sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: Colombo";}
		else{set12.innerHTML =  "8. What is the commercial capital city of sri lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: Colombo";}
		
		if(r=="10")
		{set13.innerHTML = "9. How many districs in sri lanka?"+" 25"+"<span style=\"color:green;\">  Correct" ;} 
		else if (r=="8")
		{set13.innerHTML =  "9. How many districs in sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: 25";}
		else{ set13.innerHTML =  "9. How many districs in sri lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: 25";}
		
		if(s=="8")
		{set14.innerHTML =  "10. How many provinces in sri lanka?"+" 9"+"<span style=\"color:green;\">  Correct" ;} 
		else if (s=="6")
		{set14.innerHTML =   "10. How many provinces in sri lanka?"+"<span style=\"color:red;\"> Incorrect" +" The correct answer is: 9";}
		else{
	     set14.innerHTML =   "10. How many provinces in sri lanka?"+"<span style=\"color:red;\"> Not selected" +" The correct answer is: 9";				}
                set4.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
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
    