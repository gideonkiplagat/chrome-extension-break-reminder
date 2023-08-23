chrome.alarms.create({ delayInMinutes: 60 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'breakReminder') {
    chrome.notifications.create('breakNotification', {
      type: 'basic',
      iconUrl: 'images/icon48.png',
      title: 'Take a Break Gideon!',
      message: 'It\'s time to take a break Gideon!'
    });
  }
});


// background.js
chrome.commands.onCommand.addListener(function (command) {
  if (command === 'take-break') {
    // Implement your break reminder logic here
    chrome.notifications.create('breakNotification', {
      type: 'basic',
      iconUrl: 'images/icon48.png',
      title: 'Take a Break',
      message: 'It\'s time to take a break! Gideon'
    });
  }
});
