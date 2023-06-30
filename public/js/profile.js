const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-name').value.trim();
    const post = document.querySelector('#blog-desc').value.trim();
  
    if (title && post) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ title, post }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create blog post');
      }
    }
  };


  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
 
 
    window.onload=function(){

      document
      .querySelector('.new-blog-form')
      .addEventListener('submit', newFormHandler);
    
    document
      .querySelector('.new-comment-form')
      .addEventListener('submit', newCommentHandler);
  
      document
      .querySelector('.blog-list')
      .addEventListener('click', delButtonHandler);
    }