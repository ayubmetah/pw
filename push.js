var push = require('web-push');

// var vapidKeys = push.generateVAPIDKeys();

//console.log(vapidKeys)

var vapidKeys = {
    publicKey: 'BN82ji7NRhzohmiPwHL4P4TdEskv_eeUN7mchNO30VgWJfuU_bgphtPD1tEvJpljVwRI5KPIs6nGnftehzrdCPs',
    privateKey: '7R9SRjYXP_nKsITnVw4Bjw2bYMPYdH0vgGV0VTzAs-I'
};

push.setVapidDetails('mailto:metta.job@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

var sub = i;
console.log(i);

push.sendNotification(sub, 'test message');