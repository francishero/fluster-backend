const cron = require('cron');

const pushNotifications = require('./push-notifications');
const pushChatMessages = require('./push-chat-messages');
const pushNewItems = require('./push-new-items');

const emailAdminNewItems = require('./email-admin-new-items');

const pushNotificationsJob = new cron.CronJob('0 */1 8-23 * * *', function() {
        pushNotifications.pushPendingNotifications();
    }, function () {
        /* This function is executed when the job stops */
    },
    true, /* Start the job right now */
    'Europe/Paris'
);

const pushChatMessagesJob = new cron.CronJob('0 */5 8-23 * * *', function() {
        pushChatMessages.pushPendingChatMessages();
    }, function () {
        /* This function is executed when the job stops */
    },
    true, /* Start the job right now */
    'Europe/Paris'
);

// Each day at 19:26
const pushNewItemsJob = new cron.CronJob('00 26 19 * * *', function() {
        pushNewItems.pushNewItems();
    }, function () {
        /* This function is executed when the job stops */
    },
    true, /* Start the job right now */
    'Europe/Paris'
);

const emailAdminNewItemsJob = new cron.CronJob('0 */5 7-23 * * *', function() {
        emailAdminNewItems.sendNewItems();
    }, function () {
        /* This function is executed when the job stops */
    },
    true, /* Start the job right now */
    'Europe/Paris'
);