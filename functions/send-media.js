const path = Runtime.getFunctions()['response-header'].path
const response = require(path).response()
const FormData = require('form-data')
const axios = require('axios')

exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient()
  const accountSid = context.ACCOUNT_SID
  const authToken = context.AUTH_TOKEN

  const { serviceSid, conversationSid, imgUrl } = event

  const baseUrl = `https://mcs.us1.twilio.com/v1/Services/${serviceSid}/Media`

  const { data: stream } = await axios.get(imgUrl, { responseType: 'stream' })

  const form = new FormData()
  form.append('image', stream)

  await axios({
    method: 'post',
    url: baseUrl,
    data: form,
    headers: form.getHeaders(),
    auth: {
      username: accountSid,
      password: authToken
    }
  })
    .then(async res => {
      await client.conversations.v1
        .services(serviceSid)
        .conversations(conversationSid)
        .messages.create({ mediaSid: res.data.sid })
    })
    .then(() => callback(null, response))
    .catch(error => callback(error))
}
