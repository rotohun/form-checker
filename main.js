jQuery(document).ready(function($) {
	
var $password = $('#password');
var $confirmPass = $('#confirm_password');
	// Hide hints.
	$('form span').hide();


	//When event happenes on password input.
	function passwordEvent() {
		//Find out if password is valid.
		if ($password.val().length > 8) {
			//Hide hint if match.

			$password.next().hide();

		}else{
			//Else show hint.
			$password.next().show();
		}
	}


	function confirmPassword(argument) {
		//Find out if confirmation and input match.
		if ($password.val() === $confirmPass.val()) {
			//Hide hint if match.
			$confirmPass.next().hide();

		}else{
			//Else show hint.
			$confirmPass.next().show();
		}
	}


	$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPassword).keyup(confirmPassword);
	//When event happens on confirmation input.
	$confirmPass.focus(confirmPassword).keyup(confirmPassword);



});