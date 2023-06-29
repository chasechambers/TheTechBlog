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

  const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#comment-name').value.trim();
    const comment = document.querySelector('#comment-desc').value.trim();
    const blog_id = '';
    const user_id = '';
  
    if (title && comment) {
      const response = await fetch(`/api/blog/:id`, {
        method: 'POST',
        body: JSON.stringify({ title, comment, blog_id, user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/profile');
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