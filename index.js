const axios = require("axios");
const accountSid = "ACCOUNTSID HERE";
const authToken = "AUTHTOKEN HERE";
const client = require("twilio")(accountSid, authToken);

axios
  .get("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats")
  .then((res) => {
    total_cases = res.data.data.total_cases;
    death_cases = res.data.data.death_cases;
    recovery_cases = res.data.data.recovery_cases;
    last_update = res.data.data.last_update;

    total_cases_msg = 'Total number of cases: ' + total_cases;

    death_cases_msg = 'Number of deaths: ' + death_cases;

    recovery_cases_msg = 'Number of recoveries: ' + recovery_cases;

    last_update_msg = 'Last update: ' + last_update;

    const msg = ` Corona SMS : \n ${total_cases_msg} \n ${death_cases_msg} \n ${recovery_cases_msg} \n ${last_update_msg}`;
    console.log(msg);

    client.messages
  .create({
     body: msg,
     from: '+TWILIO NUMBER HERE',
     to: '+YOUR NUMBER HERE'
   })
  .then(message => console.log(message.sid))

  })
  .catch(function (err) {
    console.log(err);
  });