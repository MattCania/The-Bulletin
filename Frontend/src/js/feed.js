$(document).ready(function () {
  $.ajax({
    url: "http://localhost:5000/api/fetch_posts",
    method: "GET",
    contentType: "application/json",
    success: (response) => {
		console.log(response)
		response.data.forEach((post) => {
        const postComponent = `
					<div
			class="section_post"
		>
			<div
				class="post_title"
			>
				<h1>${post.blogTitle}</h1>
				<button>...</button>
			</div>

			<div
				class="post_content"
			>
				<p>
					${post.blogContent}
				</p>

				<a href="">${post.author}</a>
			</div>
			
			<div
				class="post_bottom_bar"
			>
				<button
					onclick="likePost(${post.blogId})"
				>
					${post.likes} likes
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
			$(".section_feed").append(postComponent)
      });
    },
    error: () => {},
  });
});

function likePost(blogId) {
	alert(blogId)
}
