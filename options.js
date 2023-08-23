// options.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('options-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const breakInterval = parseInt(document.getElementById('break-interval').value, 10);
      
      // Save the user's preference to local storage
      chrome.storage.local.set({ 'breakInterval': breakInterval }, function () {
        console.log('Break interval saved: ' + breakInterval);
      });
    });
  });
  