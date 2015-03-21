var Login = {

	init: function() {
		Login.setForm();
	},

	setForm: function() {
		var form = document.getElementById('frmLogin');
		if(form) {
			
			var ouvinteRaul = function(event){
				console.log('Hey Raul, the form was submitted!');
				event.preventDefault();
			};

			var ouvinteNatalia = function(event) {
				console.log('Hi Natália! The form was submitted!');
				event.preventDefault();
			};

			form.addEventListener('submit', ouvinteRaul);
			form.addEventListener('submit', ouvinteNatalia);
		}		
	}

};

//initialization
Login.init();
