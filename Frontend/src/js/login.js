$(document).ready(function () {
  $("#submit_btn").click(async function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();

	if (!email || !email.includes("@")){
		alert("Please enter a valid Email")
		return	
	}

	if (password < 8 || password > 20){
		alert("Please enter a valid Password")
		return	
	}
	
    const formData = {
      email: email,
      password: password,
    };

    $.ajax({
      url: "http://localhost:5000/login",
      method: "POST",
	  contentType: 'application/json',
      data: JSON.stringify(formData),
      success: function (response) {
        console.log("User created:", response);
		$(location).attr('href', 'home.html');
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
	  
    });
  });
});
