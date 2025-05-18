$(document).ready(function () {
  $.ajax({
    url: "http://localhost:5000/api/fetch_posts",
    method: "GET",
    contentType: "application/json",
    success: (response) => {
      console.log(response);
      response.data.forEach((post) => {
		
		const postId = post.blogId

		console.log("Post ID", postId)
		
		$.ajax({
          url: "http://localhost:5000/api/get_likes",
          method: "POST",
          contentType: "application/json",
		  data:  JSON.stringify({blogId: postId}),
          success: (response) => {
            console.log("Likes Response: ", response);

            const postComponent = `
					<div class="section_post" >
						<div class="post_title" >
							<h1>${post.blogTitle}</h1>
							<button>...</button>
						</div>
					<div class="post_content">
						<p>${post.blogContent}</p>
						<a href="">${post.author}</a>
					</div>
						<div class="post_bottom_bar">
							<button onclick="likePost(${post.blogId})">
								${response.data.length ? response.data.length : 0} likes
							</button>
							<button>
								comment
							</button>
							<button>
								share
							</button>
						</div>
					</div>
				`;
            $(".section_feed").append(postComponent);
          },
          error: (xhr, error, status) => {

		  },
        });
      });
    },
    error: () => {},
  });
});

function likePost(blogId) {
	
	const user = JSON.parse(localStorage.getItem("token"))

	const formData = {
		blogId: blogId,
		userId: user.userId
	}

	console.log(formData)

	$.ajax({
		url: "http://localhost:5000/api/like_post",
		method: "POST",
		contentType: "application/json",
		data: JSON.stringify(formData),
		success: (response) => {
			console.log(response)
		},
		error: (xhr, error, status) =>{

		}
	})

}
