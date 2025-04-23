// get DOM elements
const listGroup = document.getElementById("list-group");

const generateEmailBtn = document.getElementById("generate-email-list");

// API URL
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

/* async function displayRandomEmails() {
  for (let i = 0; i < randomEmails.length; i++) {
    currentEmail = randomEmails[i];
    const li = document.createElement("li");
    li.textContent = currentEmail;
    listGroup.appendChild(li);
    console.log(currentEmail);
  }
} */

function generateListItems() {
  for (let i = 0; i < randomEmails.length; i++) {
    currentEmail = randomEmails[i];
    const li = document.createElement("li");
    li.textContent = currentEmail;
    li.classList.add("list-group-item");
    listGroup.appendChild(li);
  }
}

generateEmailBtn.addEventListener("click", () => {
  const listItems = listGroup.querySelectorAll("li");
  if (listItems.length === 0) return generateListItems();
  if (listItems.length > 0) {
    listItems.forEach((item) => item.remove());
    randomEmails = generateRandomEMails(10);
    generateListItems();
  }
});
