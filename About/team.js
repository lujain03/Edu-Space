// script.js
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
        const id = this.getAttribute('data-member');
        
        // Hide all details
        document.querySelectorAll('.member-info').forEach(info => {
            info.classList.remove('active');
        });
        
        // Show the selected member's details
        document.getElementById(`member-${id}`).classList.add('active');
        
        // Highlight the selected member's photo
        document.querySelectorAll('.team-member').forEach(m => {
            m.classList.remove('active');
        });
        this.classList.add('active');
    });
});
