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
