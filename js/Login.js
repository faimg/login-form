var Login = {

	init: function() {
		Login.setForm();
	},

	setForm: function() {
		var form = document.getElementById('frmLogin')

    if(form) {
			form.addEventListener('submit', function(event){
				Login.validateForm(form);
				event.preventDefault();
			});
		}		
	},

	validateForm: function(form) {
		if(!Login.validateElement(form.username)) return false;
		if(!Login.validateElement(form.password)) return false;
		alert("Form submitted successfully!");
	},

	validateElement: function(element) {
		var elementGroup = $(element)
		.parents('.control-group');
		
		if(element.value === "") {
			$(elementGroup).addClass('error');
			element.focus();
			return false;
		}

		$(elementGroup).removeClass('error');
		return true;
	}

};

//initialization
Login.init();
