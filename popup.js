// Google Apps Script URL
const WEB_APP_URL = "BURAYA_KENDI_GOOGLE_SCRIPT_URLNIZI_YAZIN";

// HTML elementlerine erişim
const saveBtn = document.getElementById("saveBtn");
const statusDiv = document.getElementById("status");

// Butona tıklama işlemi
saveBtn.addEventListener("click", () => {
  statusDiv.textContent = "";
  statusDiv.className = "";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (!activeTab.id) return;

    chrome.scripting.executeScript(
      {
        target: { tabId: activeTab.id },
        function: getProfileData,
      },
      (injectionResults) => {
        if (
          chrome.runtime.lastError ||
          !injectionResults ||
          !injectionResults[0]
        ) {
          statusDiv.textContent = "Error: Can't access page data.";
          statusDiv.classList.add("error");
          console.error(chrome.runtime.lastError);
          return;
        }

        const collectedData = injectionResults[0].result;
        collectedData.linkedinUrl = activeTab.url;

        statusDiv.textContent = "Saving...";
        statusDiv.classList.add("saving");

        fetch(WEB_APP_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(collectedData),
        })
          .then(() => {
            statusDiv.className = "";
            statusDiv.textContent = "Saved Successfully!";
            statusDiv.classList.add("success");
            setTimeout(() => window.close(), 1500);
          })
          .catch((error) => {
            statusDiv.className = "";
            statusDiv.textContent = "Error: Data could not be sent.";
            statusDiv.classList.add("error");
            console.error("Error:", error);
          });
      }
    );
  });
});

// Veri toplama fonksiyonu
function getProfileData() {
  let name = "Not Found";
  let title = "Not Found";
  let company = "Not Found";

  const topCard = document.querySelector("div.mt2.relative, div.ph5.pb5");
  if (topCard) {
    const nameElement = topCard.querySelector(
      "h1.inline.t-24, h1.text-heading-xlarge"
    );
    if (nameElement) name = nameElement.innerText.trim();

    const titleElement = topCard.querySelector(".text-body-medium.break-words");
    if (titleElement) title = titleElement.innerText.trim();
  }

  const companyButton = document.querySelector(
    'button[aria-label^="Mevcut şirket:"]'
  );
  if (companyButton) {
    const labelText = companyButton.getAttribute("aria-label");
    company = labelText.replace("Mevcut şirket: ", "").split(".")[0].trim();
  } else {
    // Fallback if aria-label is not found
    const companyElement = document.querySelector(
      'a[href*="/company/"] span[aria-hidden="true"]'
    );
    if (companyElement) company = companyElement.innerText.trim();
  }

  const emailElement = document.querySelector('a[href^="mailto:"]');
  const email = emailElement ? emailElement.innerText.trim() : "";

  return { name, title, company, email };
}
