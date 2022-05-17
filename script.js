(function(){
	var myhead = document.querySelector('h1');
	
	
		window.addEventListener('keydown' , function(event){
			var key = event.which;
			var choice;
			
		switch(key)
			{	
				case (75 || 107): 
					choice = 'M';
					myhead.innerHTML = `<h2>Miles to Kilometers converter</h2>`;
										
				break;
				
				case (77 || 109): 
					choice = 'K';
					myhead.innerHTML = `<h2>Kilometers to Miles converter</h2>`;
                
				break;
			}
			
		
		document.getElementById('convert').addEventListener('submit', function(event){
			event.preventDefault();
			
			const distance = parseFloat(document.getElementById('distance').value);
			var answer = document.getElementById('answer');
			if(distance)
			{	
				switch(choice)
				{
					case 'M': 
					{
						const conversion = (distance*1.609).toFixed(3);
						answer.innerHTML = `<h2>${distance} Miles converts to ${conversion} Kilometers</h2>`;
					}				
					break;
					
					case 'K':
					{	
						const conversion = (distance/1.609).toFixed(3);
						answer.innerHTML = `<h2>${distance} Kilometers converts to ${conversion} Miles</h2>`;
					}
					break;
				}
			
			}
			else{	
				answer.innerHTML= `<h2>Please enter a number</h2>`;
				}
			
		})
	})
})();