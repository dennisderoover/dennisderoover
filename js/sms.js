// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACf01eb8c7a102a367212cf7d9defa03aa';
const authToken = '4becba3880415f55e75663abcf8c1a60';
const client = require('twilio')(accountSid, authToken);

var numbersToMessage = ["+32485836453", "+32485755249"]

function sendSms() {
    numbersToMessage.forEach(function(number){
        var message = client.messages.create({
            body: 'Eten staat klaar!',
            from: '+32460201164',
            to: number
        })
        .then(message =>  console.log(message.status))
        .done();
    });
}