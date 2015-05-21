
	$(document).ready(function(){
    $("#button1").click(function(){
        $("#b_1").fadeIn()
		;});
});
	$(document).ready(function(){
    $("#button2").click(function(){
        $("#b_2").fadeIn();});
});
	$(document).ready(function(){
    $("#button5").click(function(){
        $("#b_5").fadeIn();});
});
	$(document).ready(function(){
    $("#button4").click(function(){
        $("#b_4").fadeIn();});
});
	var obecny=1;
	function zmienArt(nr_art)
	{
		
	
		$(document).ready(function(){
    	$("#art_"+nr_art).click(function(){
        $("#article_"+obecny).fadeOut()
		$("#article_"+nr_art).fadeIn(2250);});
});
	 obecny=nr_art;


	}
   
				function logowanie()
				{
				kod=document.getElementById('haslo').value;
				if (kod==document.title) {alert('Gratulacje! Has³o poprawne!'); self.location=kod+'z.html'; } else {alert('Niepowodzenie logowania');}
				}
				
				function poczatek()
				{
					
					scrollTo(0,0);
				}
				var numer = Math.floor(Math.random()*5)+1;
			
			var timer1 = 0;
			var timer2 = 0;
			
			function ustawslajd(nrslajdu)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienslajd()", 500);
				
			}
			
			function schowaj()
			{
				$("#slider").fadeOut(500);
			}
		
			function zmienslajd()
			{
				numer++; if (numer>5) numer=1;
				
				var plik = "<img src=\"img/galeria/" + numer + ".jpg\" />";
				
				document.getElementById("slider").innerHTML = plik;
				$("#slider").fadeIn(500);
				
				timer1 = setTimeout("zmienslajd()", 5000);
				timer2 = setTimeout("schowaj()", 4500);
			
			}
    