document.getElementById('add-post-btn').addEventListener('click', function () {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
  
    if (title && content) {
      const post = document.createElement('div');
      post.classList.add('post');
      
      const postTitle = document.createElement('h3');
      postTitle.textContent = title;
      
      const postContent = document.createElement('p');
      postContent.textContent = content;
      
      post.appendChild(postTitle);
      post.appendChild(postContent);
      
      document.getElementById('blog-posts').appendChild(post);
      
      document.getElementById('post-title').value = '';
      document.getElementById('post-content').value = '';
    } else {
      alert('Please fill in both fields!');
    }
  });
  