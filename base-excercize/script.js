// get DOM elements
const listGroup = document.getElementById("list-group");

// API URL
const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

function generateRandomEMails(number) {
  const randomEmails = [];
  for (let i = 0; i < number; i++) {
    axios.get(apiUrl).then(function (response) {
      randomEmails.push(response.data.response);
      if (randomEmails.length === number) displayRandomEmails(randomEmails);
    });
  }

  console.log(randomEmails);
}

function displayRandomEmails(emails) {
  for (let i = 0; i < emails.length; i++) {
    currentEmail = emails[i];
    const li = document.createElement("li");
    li.textContent = currentEmail;
    li.classList.add("list-group-item");
    listGroup.appendChild(li);
  }
}

generateRandomEMails(10);
