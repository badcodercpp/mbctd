// import saveOtp from '../../db/connection/mongo/auth/saveOtp';
const twilio = require('twilio');

const accountSid = 'AC13c142cc4ef2d2f65314c7157e111b0f';
const authToken = '2e6340ecda4ca68c80c585e79d58b91d';
const t = Math.floor(1000 + Math.random() * 9000);
const sendOtp = (to = '+917416634081', otp = t) => {
    // const otp = Math.floor(1000 + Math.random() * 9000);
    const client = new twilio(accountSid, authToken);
    return client.messages.create({
        body: `your verification code is - ${otp}`,
        to,
        from: '+12029331896'
    });
}

export default sendOtp;