const shareButton = document.querySelector('.cv-share-button');
const shareStatus = document.querySelector('.cv-share-status');

shareButton?.addEventListener('click', async () => {
  const shareData = {
    title: document.title,
    text: 'Abinash Chaudhary — Power Systems Engineer',
    url: new URL('/cv/', window.location.origin).href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      shareStatus.textContent = 'CV shared.';
      return;
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
    }
  }

  try {
    await navigator.clipboard.writeText(shareData.url);
    shareStatus.textContent = 'CV link copied to clipboard.';
  } catch (error) {
    console.error('Unable to share or copy the CV link.', error);
    shareStatus.textContent = 'Unable to share or copy the link. Copy the page URL from your browser.';
  }
});
