document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Dynamically create gallery items
    imageList.forEach(image => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.style.backgroundImage = `url('gallery/${image}')`;
        gallery.appendChild(photoDiv);
    });
});

document.addEventListener('scroll', () => {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            photo.classList.add('in-view');
        } else {
            photo.classList.remove('in-view');
        }
    });
});
