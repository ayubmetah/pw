    var push = require('web-push');

    // var vapidKeys = push.generateVAPIDKeys();

    //console.log(vapidKeys)

    var vapidKeys = {
        publicKey: 'BN82ji7NRhzohmiPwHL4P4TdEskv_eeUN7mchNO30VgWJfuU_bgphtPD1tEvJpljVwRI5KPIs6nGnftehzrdCPs',
        privateKey: '7R9SRjYXP_nKsITnVw4Bjw2bYMPYdH0vgGV0VTzAs-I'
    };

    push.setVapidDetails('mailto:metta.job@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

    var sub = {
        "endpoint": "https://fcm.googleapis.com/fcm/send/d9aoS-tVGBM:APA91bFmAIQlWqs6giHM4idSQ9Vs6WTzKoneppwbf9uaZjV_GNjdvX98mkLL6-Hk32Un-RwoNWhCpSyZnF68ppKKOsMbTmM3igz7UX1bF1Ivue4AXlKxiD_Tp8JPmjuNPE33ppMdrJ2T",
        "expirationTime": null,
        "keys": {
            "p256dh": "BNZB3yicp6LzI6RqYM4ELEShnleSxCuRY47eFEwzTCCgayXKR1riCNeHVq73UeOJB-12rostd47ex6_ZbKN3d1w",
            "auth": "x4QD7GHwaz-BoAqHDPHNtQ"
        }
    };


    push.sendNotification(sub, 'test message');