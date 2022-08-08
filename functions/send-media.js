const path = Runtime.getFunctions()['response-header'].path
const response = require(path).response()

exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient()

  const { serviceSid, conversationSid } = event

  const baseUrl = `https://mcs.us1.twilio.com/v1/Services/${serviceSid}/Media`

  try {
    await // Create the webhook and update conversation attributes
    // await client.conversations
    //   .conversations(conversationSid)
    //   .webhooks.create({
    //     'configuration.flowSid': 'FWd24881c7b71b45b26d44b7443853a5a8',
    //     target: 'studio'
    //   })
    //   .then(async () => {
    //     await client.conversations
    //       .conversations(conversationSid)
    //       .update({ attributes: `${JSON.stringify(attributes)}` })
    //       .then(conversation => {
    //         console.log('conversation attributes updated')
    //         console.log(conversation)
    //       })
    //   })

    callback(null, response)
  } catch (error) {
    console.log(error)
    callback(error)
  }
}
