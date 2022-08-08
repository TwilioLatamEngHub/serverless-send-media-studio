# Disclaimer

This solution features sample code that is provided “as is” and is not production grade. The featured code does not account for edge case handling, scalability, and reliability. It is not covered under Twilio's [Service Level Agreement (SLA)](https://www.twilio.com/legal/service-level-agreement) and [support plans](https://www.twilio.com/support-plans).

# A High Level Overview of This Solution

When building a flow in Studio using the [Incoming Conversation trigger](https://www.twilio.com/docs/studio/user-guide#incoming-conversation), we currently do not support sending media with this integration. This solution makes this possible.

Inside the flow, we will call a [Twilio serverless function](https://www.twilio.com/docs/runtime) through the [Run Function Widget](https://www.twilio.com/docs/studio/widget-library/run-function) to do this job for us, and once it is done, it will return to the flow and continue the next steps. Feel free to use your own service for this function.
