let nameInput = document.getElementById('input-name');
let bundleIdInput = document.getElementById('input-bundle-id');
let developerInput = document.getElementById('input-developer');
let versionInput = document.getElementById('input-version');
let yearInput = document.getElementById('input-year');
let monthInput = document.getElementById('input-month');
let dayInput = document.getElementById('input-day');
let timeInput = document.getElementById('input-time')
let descriptionInput = document.getElementById('input-description');
let downloadUrlInput = document.getElementById('input-download-url');
let localizedDescriptionInput = document.getElementById('input-localized-description');
let iconUrlInput = document.getElementById('input-icon-url');
let sizeInput = document.getElementById('input-size');
let submitButton = document.getElementById('submit');
let resultParagraph = document.getElementById('result');
submitButton.addEventListener('click', updateResult);

function updateResult() {
  let name = nameInput.value;
  let bundleId = bundleIdInput.value;
  let developer = developerInput.value;
  let version = versionInput.value;
  let year = yearInput.value;
  let month = monthInput.value;
  let day = dayInput.value;
  let time = timeInput.value;
  let date = `${year}-${month}-${day}T${time}:00`;
  let description = descriptionInput.value;
  let downloadUrl = downloadUrlInput.value;
  let localizedDescription = localizedDescriptionInput.value;
  let iconUrl = iconUrlInput.value;
  let size = sizeInput.value * '1048576';
  
  resultParagraph.innerHTML = `{
    "name": "${name}",
    "bundleIdentifier": "${bundleId}",
    "developerName": "${developer}",
    "version": "${version}",
    "versionDate": "${date}",
    "versionDescription": "${description}",
    "downloadURL": "${downloadUrl}",
    "localizedDescription": "${localizedDescription}",
    "iconURL": "${iconUrl}",
    "tintColor": "018084",
    "isLanZouCloud": 0,
    "size": ${size},
    "type": 1
  },`;
  }

nameInput.addEventListener('input', updateResult);
bundleIdInput.addEventListener('input', updateResult);
developerInput.addEventListener('input', updateResult);
versionInput.addEventListener('input', updateResult);
dateInput.addEventListener('input', updateResult);
descriptionInput.addEventListener('input', updateResult);
downloadUrlInput.addEventListener('input', updateResult);
localizedDescriptionInput.addEventListener('input', updateResult);
iconUrlInput.addEventListener('input', updateResult);
sizeInput.addEventListener('input', updateResult);

function copyResult() {
  let resultText = document.getElementById("result").innerText;
  let tempInput = document.createElement("input");
  tempInput.value = resultText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Text copied to clipboard: " + resultText);
}

document.getElementById("copy-button").addEventListener("click", copyResult);
