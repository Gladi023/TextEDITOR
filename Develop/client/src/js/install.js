const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    }
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App Installed');
    butInstall.style.display = 'none';
});

