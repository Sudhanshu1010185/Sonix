const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const soundBtn = document.getElementById('soundBtn');

// Disable autoplay
video.autoplay = false;
video.pause();
playPauseBtn.textContent = '►'; // Show play button initially
playPauseBtn.style.display = 'block'; // Ensure it is visible

soundBtn.textContent = '🔊';
video.muted = false; // Start with sound on

// Play/Pause Video Functionality
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.style.display = 'none'; // Hide play/pause button when video is playing
    } else {
        video.pause();
        playPauseBtn.style.display = 'block'; // Show play/pause button when video is paused
        playPauseBtn.textContent = '►'; // Change to play icon
    }
}

// Toggle play/pause when the video is clicked
video.addEventListener('click', togglePlayPause);

// Ensure the play/pause button works as expected
playPauseBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click from bubbling up to the video
    togglePlayPause();
});
playPauseBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent touchstart from bubbling up to the video
    togglePlayPause();
});

// Change button to '►' and show it when the video ends
video.addEventListener('ended', function () {
    playPauseBtn.textContent = '►';
    playPauseBtn.style.display = 'block'; // Show play button
    video.load(); 
});

// Mute/Unmute Sound Functionality
soundBtn.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
        soundBtn.textContent = '🔊'; // Unmute icon
    } else {
        video.muted = true;
        soundBtn.textContent = '🔇'; // Mute icon
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const pText = document.querySelector('.p-text');
    const videomotion = document.querySelector('.videomotion');

    function handleAnimation(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes to the elements within .videomotion
                videoContainer.classList.add('animate');
                pText.classList.add('animate');
                
                // Optionally, you can reset the animation if needed
                // by removing and re-adding the animation class
                setTimeout(() => {
                    videoContainer.classList.remove('animate');
                    pText.classList.remove('animate');
                }, 3000); // Duration of the animation in milliseconds (should match animation duration)
            } else {
                // Remove the animation classes when out of view
                videoContainer.classList.remove('animate');
                pText.classList.remove('animate');
            }
        });
    }

    const observer = new IntersectionObserver(handleAnimation, {
        threshold: 0.1 // Adjust as needed
    });

    // Observe the .videomotion container
    observer.observe(videomotion);
});
