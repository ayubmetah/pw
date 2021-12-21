self.addEventListener('push', function(e) {
    var options = {
        body: 'There are customers waiting in the Queue!',
        icon: 'images/48.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [{
                action: 'explore',
                title: 'Open Workstation Terminal',
                url: 'http://127.0.0.1:8080/workstationterminal/?4.3.0.93'
                icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Qmatic Orchestra', options)
    );
});