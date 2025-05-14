$(document).ready(function () {
  $("#submit_btn").click(async function (e) {
	e.preventDefault()
    const firstname = $("#firstname").val();
    const middlename = $("#middlename").val();
    const lastname = $("#lastname").val();
    const birthday = $("#birthday").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();

    if (
      !firstname ||
      !middlename ||
      !lastname ||
      !birthday ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please Fill Out Required Fields!");
      return;
    }
	if(!email.includes("@")){
      alert("Please Use a Valid Email!");
      return;
	}
    if (password !== confirmPassword) {
      alert("Password Does not Match");
      return;
    }

    const formData = {
      firstname,
      middlename,
      lastname,
      birthday,
      email,
      password,
    };
	console.log(formData)

    $.ajax({
      url: "http://localhost:5000/api/register",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function (response) {
        console.log("User created:", response);
        // $(location).attr("href", "login.html");
		alert("Successful Creation")
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
		alert("Error Creation")
      },
    });
  });
});
