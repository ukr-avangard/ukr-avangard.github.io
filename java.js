/*plants*/

function show1(argument1, input, block)
{
		var div = document.getElementById(argument1);
		var conteiner = document.getElementById(block);	
		if(div.style.display == 'none')
		{
			div.style.display = 'block';
			input.value="Закрити калькулятор";
            conteiner.style.height="585px";			
		}
		else
		{
			div.style.display = 'none';
			input.value="Відкрити калькулятор";
			 conteiner.style.height="520px";		
		}
	 
	}


	function rah(tsena, input , rez){
var cislo = parseInt(input.value);
console.log(cislo);
var vivod = document.getElementById(rez);
if(isNaN(cislo)){
	cislo=0;
}
			vivod.value=cislo*tsena;

}
	/*if(100<=rezultat.value<=500){
	rezultat.value=mail2.value*12;}*/


	/*plants*/