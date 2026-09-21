document.getElementById('year').textContent = new Date().getFullYear();


// Graceful fallback for remotely hosted event photos.
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  img.addEventListener('error', () => {
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== fallback) img.src = fallback;
  }, { once: true });
});
