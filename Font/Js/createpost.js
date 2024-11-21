let selectedCategory = '';
let selectedAnonymity = '';

// Function to select category and go to anonymity selection
function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('categoryStep').style.display = 'none'; // Hide category selection
    document.getElementById('anonymityStep').style.display = 'block'; // Show anonymity selection
}

// Function to select anonymity and go to content step
function selectAnonymity(anonymity) {
    selectedAnonymity = anonymity;
    document.getElementById('anonymityStep').style.display = 'none'; // Hide anonymity selection
    document.getElementById('contentStep').style.display = 'block'; // Show content input
}

// Function to handle post submission
document.querySelector('.submit-button').addEventListener('click', function () {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        // Mock submission - replace with actual API call
        alert(`โพสต์สำเร็จ!\nหมวดหมู่: ${selectedCategory}\nระบุตัวตน: ${selectedAnonymity}\nชื่อโพสต์: ${title}\nเนื้อหา: ${content}`);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
});
