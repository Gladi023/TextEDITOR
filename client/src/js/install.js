const butInstall = document.getElementById('buttonInstall');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Store the event
    window.deferredPrompt = event;
    // Remove the hidden class from the button
    butInstall.classList.remove('hidden');
});

butInstall.addEventListener('click', async () => {
    // Get the stored event
    const promptEvent = window.deferredPrompt;
    // Show the prompt
    promptEvent.prompt();
    // Wait for the user's choice
    const choice = await promptEvent.userChoice;
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.add('hidden');
    if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
    } else {
        console.log('User dismissed the A2HS prompt');
    }
});

// Listen for the appinstalled event
window.addEventListener('appinstalled', (event) => {
    console.log('App Installed');
});