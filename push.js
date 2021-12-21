var push = require('web-push');

// var vapidKeys = push.generateVAPIDKeys();

//console.log(vapidKeys)

var vapidKeys = {
    publicKey: 'BN82ji7NRhzohmiPwHL4P4TdEskv_eeUN7mchNO30VgWJfuU_bgphtPD1tEvJpljVwRI5KPIs6nGnftehzrdCPs',
    privateKey: '7R9SRjYXP_nKsITnVw4Bjw2bYMPYdH0vgGV0VTzAs-I'
};

push.setVapidDetails('mailto:metta.job@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

var sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/eWWlYo-OdJk:APA91bES_goCfusF76CpG2oFR91RbE07H2MikNWe5krFCXJPvzy7S8xkvkRDlgvZEbQ1SoNb5njOf-thptD_NZTl7ZqkHYie1OKsj6Mss8fYea71qaPlVltCs1LNK1cunB1Kv4lODzmr", "expirationTime": null, "keys": { "p256dh": "BEStLoYgO2rA6HImiCzUuTBDtVP4i8kk9yGkQ-SkJ98Y8FlsUvPR0i9qQGh1fB3AMLz9_CRZQzDzmEej9JHEWjE", "auth": "G06LYSlmkBru6_8UcY4XnQ" } };
push.sendNotification(sub, 'test message');