document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item'); // Select all video items
    const videoPlayer = document.getElementById('videoPlayer'); // Video player container

    // Iterate over each video item
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video'); // Get video ID
            playVideo(videoId); // Play the selected video
        });
    });

    // Function to load and play the selected video
    function playVideo(videoId) {
        videoPlayer.innerHTML = `
            <video id="video${videoId}" class="w-100" controls>
                <source src="video${videoId}.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="text-center mt-2">Now playing: Video ${videoId}</p>
        `;
    }
});
