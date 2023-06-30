const newCommentHandler = async (event) => {
    event.preventDefault();
  
    
    const comment = document.querySelector('#comment-desc').value.trim();
    const blog_id = document.querySelector('#blog_id').value;
  
    if (comment) {
      const response = await fetch(`/api/blog/${blog_id}`, {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace(`blog/${id}`);
      } else {
        alert('Failed to create blog post');
      }
    }
  };

  window.onload=function(){

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

  }