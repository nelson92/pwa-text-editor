const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     event.preventDefault();
//     installBtn.style.visibility = 'visible';
//     textHeader.textContent = 'Click the button to install!';
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async (event) => {
//     event.prompt();
//     installBtn.setAttribute('disabled', true);
//     installBtn.textContent = 'Installed!';
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
//     textHeader.textContent = 'Successfully installed!';
//     console.log('Thumbs up', 'appinstalled', event);
// });

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
}); 
