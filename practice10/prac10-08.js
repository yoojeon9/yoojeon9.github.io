var show=null, count;
		function ontime()	//시간 카운트
		{
			document.getElementById("grade").innerHTML = 0;
			var time = document.getElementById("time");
			count = 10;
			if(show != null)
				clearTimeout(show);
			outtime(time);
		}
		function outtime(cls)	//점점 시간이 줄어드는 함수
		{
			count--;
			cls.innerHTML = count;
			if(count != 0)
				show = setTimeout("outtime(time)", 1000);
			else 
				correct();	// 0이 되면 채점을 하는 함수
		}
		function make()	//문제 만들기 함수
		{
			
			var one = document.getElementsByClassName("one");
			var two = document.getElementsByClassName("two");
			for(i=0; i<one.length; i++)
			{
				var num1 = Math.floor(Math.random()*99);	//첫 번째 랜덤 넘버
				var num2 = Math.floor(Math.random()*99);	//두 번째 랜던 넘버
				var op = Math.floor(Math.random()*4);		// 연산자를 랜덤으로 하기 위해서 상수화를 하고 switch를 써서 연산자를 정한다.
				var operator;
				
				switch(op)
				{
					case 0 : operator = "+"; 
						break;
					case 1 : operator = "-"; 
						break;
					case 2 : operator = "*"; 
						break;
					case 3 : operator = "/"; 
						break;
				}
				
				one[i].innerHTML = num1 + operator + num2;	// 문제 출력
			}
		}
		function correct()	//채점 함수
		{
			var countgrade = 0;	// 채점 개수
			var one = document.getElementsByClassName("one");
			var two = document.getElementsByClassName("two");
			for(i=0; i<one.length; i++)
			{
				var question = one[i].innerHTML;
				var answer = two[i].value;
				var correct = Math.floor(eval(question));
				if(parseInt(answer) == correct)	//정답이면 개수 +1
					countgrade += 1;
				else if(answer=="")	//비어 있으면 틀림
					one[i].style.textDecoration = "line-through";
				else if(isNaN(answer))// 숫자가 아니면 틀림
					one[i].style.textDecoration = "line-through";
				else// 정답이 틀리면 틀림
					one[i].style.textDecoration = "line-through";
			}
			document.getElementById("grade").innerHTML = countgrade;	// 정답 개수 출력
			for(i=0; i<one.length; i++)
			{
				one[i].style.textDecoration = "";
			}
		}