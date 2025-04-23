const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

function generateRandomEMails(number) {
  const randomEmailsGenerated = [];
  for (let i = 0; i < number; i++) {
    axios.get(apiUrl).then(function (response) {
      randomEmailsGenerated.push(response.data.response);
    });
  }
  return randomEmailsGenerated;
}

let randomEmails = generateRandomEMails(10);

console.log(randomEmails);
