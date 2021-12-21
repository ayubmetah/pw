self.addEventListener('push', function(e) {
    self.registration.sendNotification('test message', options);

});