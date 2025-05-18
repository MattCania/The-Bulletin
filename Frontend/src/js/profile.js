$(document).ready(function(){
	$("#logout_btn").click(()=>{
		localStorage.removeItem("token")

		$(location).attr('href', 'login.html'); 
	})


})