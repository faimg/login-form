var Login = {

	init: function() {
		Login.setForm();
		Login.setRememberMe();
		Login.retrieveRememberedUsername();
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
	},

	setRememberMe: function() {
		var inputCheckbox = document.getElementById('rememberMe');
		inputCheckbox.addEventListener('click', function(event){
			if(inputCheckbox.checked) {
				var username = $('#username').val();
				if(username) {
					Cookie.set('username', username, 3);
				}
			}
			else {
				Cookie.unset('username');
			}
		});
	},

	retrieveRememberedUsername: function() {
		var username = Cookie.get('username');
		if(username) {
			$('#username').val(username);
			//$('#rememberMe').attr('checked', true);
			document.getElementById('rememberMe').checked = true;
		}
	}

};

//initialization
Login.init();
