document.addEventListener('DOMContentLoaded', () => {
    const title = localStorage.getItem('postTitle');
    const content = localStorage.getItem('postContent');
    const stressLevel = localStorage.getItem('postStress');
    const category = localStorage.getItem('postCategory');

    // Map categories to Thai labels
    const categoryMap = {
        'recommend': 'แนะนำ',
        'question': 'สอบถามปัญหา',
        'other': 'อื่นๆ'
    };
    
    const thaiCategory = categoryMap[category] || 'ไม่ระบุ';

    // Display title, content, and category in Thai
    document.getElementById('postTitleContent').textContent = title || 'ไม่มีข้อมูล';
    document.getElementById('postFullContent').textContent = content || 'ไม่มีข้อมูล';
    document.getElementById('postCategory').textContent = thaiCategory;

    // Display stress level with colored circle
    const stressIndicator = document.getElementById('postStressIndicator');
    stressIndicator.classList.add(`stress-${stressLevel}`);
    stressIndicator.innerHTML = `<span class="status-dot ${stressLevel}">`;
});




// Function to load existing comments
function loadComments() {
    const commentsList = document.getElementById("commentsList");
    commentsList.innerHTML = ""; // Clear current comments
    comments.forEach((comment) => {
        const commentItem = document.createElement("div");
        commentItem.className = "comment-item";
        commentItem.textContent = comment.text;
        commentsList.appendChild(commentItem);
    });
}

// Function to add a new comment
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();
    if (commentText) {
        comments.push({ text: commentText });
        loadComments();
        commentInput.value = ""; 
    }
}

// Load comments when the page loads
window.onload = loadComments;
