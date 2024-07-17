const apiKey = 'yt api';
const channelId = 'channel id';
const maxResults = 3;

async function fetchVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`);
    const data = await response.json();
    displayVideos(data.items);
}

function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        videoElement.appendChild(iframe);
        videoContainer.appendChild(videoElement);
    });
}

fetchVideos();
