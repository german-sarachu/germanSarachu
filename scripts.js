  function toggleGallery(galleryId) {
    var gallery = document.getElementById(galleryId);
    gallery.style.display = (gallery.style.display === 'none' || gallery.style.display === '') ? 'block' : 'none';
  }