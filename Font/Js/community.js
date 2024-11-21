function filterPosts() {
    const stressFilter = document.getElementById('stressFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        const postStress = post.getAttribute('data-stress');
        const postCategory = post.getAttribute('data-category');

        // Check if the post matches the selected filters
        const stressMatch = stressFilter === 'all' || postStress === stressFilter;
        const categoryMatch = categoryFilter === 'all' || postCategory === categoryFilter;

        // Show or hide the post based on filter match
        if (stressMatch && categoryMatch) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
document.querySelectorAll('.post-card').forEach(postCard => {
    postCard.addEventListener('click', () => {
        const title = postCard.querySelector('.post-title').innerText;
        const content = postCard.querySelector('.post-content').innerText;
        const stressLevel = postCard.getAttribute('data-stress');
        const category = postCard.getAttribute('data-category');

        localStorage.setItem('postTitle', title);
        localStorage.setItem('postContent', content);
        localStorage.setItem('postStress', stressLevel);
        localStorage.setItem('postCategory', category);

        window.location.href = 'post.html';
    });
});

