// get DOM elements
const listGroup = document.getElementById("list-group");

const generateEmailBtn = document.getElementById("generate-email-list");

// API URL
const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

function generateRandomEMails(number) {
  const randomEmails = [];
  for (let i = 0; i < number; i++) {
    axios.get(apiUrl).then(function (response) {
      randomEmails.push(response.data.response);
      if (randomEmails.length === number) generateListItems(randomEmails);
    });
  }
}

function generateListItems(emails) {
  for (let i = 0; i < emails.length; i++) {
    currentEmail = emails[i];
    const li = document.createElement("li");
    li.textContent = currentEmail;
    li.classList.add("list-group-item");
    listGroup.appendChild(li);
  }
}

generateEmailBtn.addEventListener("click", () => {
  const listItems = listGroup.querySelectorAll("li");
  if (listItems.length === 0) return generateRandomEMails(10);
  if (listItems.length > 0) {
    listItems.forEach((item) => item.remove());
    generateRandomEMails(10);
  }
});
