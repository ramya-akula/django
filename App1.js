/*alert*/
		function fun(){
			alert("HELLO JS....")
		}
		function add(){
			alert("add");
			var first=document.getElementById("a").value;
			var second=document.getElementById("b").value;
			alert(parseInt(first)+parseInt(second));
		function sub(){
			alert("sub");
		}
			var first=document.getElementById("a").value;
			var second=document.getElementById("b").value;
			alert(parseInt(first)-parseInt(second));
		}
		function mul(){
			alert("mul");
			var first=document.getElementById("a").value;
			var second=document.getElementById("b").value;
			alert(parseInt(first)*parseInt(second));
		}
		function changecolor(){
			var color = document.getElementById("color").value;
			var title = document.getElementById("title")
			title.style.color=color
		}