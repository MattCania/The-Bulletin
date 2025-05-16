$(document).ready(function(){

	$("#upload_btn").click(async function(e){
		e.preventDefault()
		const tokenString = localStorage.getItem("token");
		const token = JSON.parse(tokenString);
		const username = token?.name;
		const userId = token.userId

		const title = $("#title").val()
		const content = $("#content").val()
		const image = $("#fileContent").val()

		formData = {
			title, content, username, userId
		}

		if (!title) {
			alert("Enter a Title for your Post") 
			return
		}
		if (!content){ 
			alert("You must upload an image or caption") 
			return
		}

		$.ajax({
			url: "http://localhost:5000/api/post_content",
			method: "POST",
			contentType: 'application/json',
			data: JSON.stringify(formData),
			success: function (response) {
				console.log("Blog Successfully Uploaded, ", response.message) 
			},
			error: function (xhr, status, error) {
			  console.error("Error:", error);
			},
			
		  });



	})


})