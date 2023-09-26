function hideLoadingPage() {
    const loadingPage = document.getElementById('loading-page');
    loadingPage.style.display = 'none';

    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
}

window.addEventListener('pagehide', hideLoadingPage);
