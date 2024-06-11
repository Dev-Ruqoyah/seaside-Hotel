// function showAll() {
//     // Show all images
//     document.querySelectorAll('.image-container img').forEach(img => {
//       img.style.display = 'block';
//     });
//   }

  function showCategory(category) {
    // Hide all images
    document.querySelectorAll('.image-container img').forEach(img => {
      img.style.display = 'none';
    });

    // Show images of the selected category
    document.querySelectorAll('.image-container img.' + category).forEach(img => {
      img.style.display = 'block';
    });
  }