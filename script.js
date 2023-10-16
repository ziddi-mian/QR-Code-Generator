const linkInput = document.getElementById("link-input");
const linkBtn = document.getElementById("link-btn");
const linkCanvas = document.getElementById("link-canvas");
const linkDownloadBtn = document.getElementById("link-download-btn");

const ssidInput = document.getElementById("ssid-input");
const passwordInput = document.getElementById("password-input");
const encryptionType = document.getElementById("encryption-type");
const wifiBtn = document.getElementById("wifi-btn");
const wifiCanvas = document.getElementById("wifi-canvas");
const wifiDownloadBtn = document.getElementById("wifi-download-btn");

const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const emailInput = document.getElementById("email-input");
const companyInput = document.getElementById("company-input");
const vcardBtn = document.getElementById("vcard-btn");
const vcardCanvas = document.getElementById("vcard-canvas");
const vcardDownloadBtn = document.getElementById("vcard-download-btn");

function generateLinkQRCode() {
  const qr = new QRious({
    element: linkCanvas,
    value: linkInput.value
  });
  linkDownloadBtn.href = linkCanvas.toDataURL("image/png");
}

function generateWifiQRCode() {
  const ssid = ssidInput.value;
  const password = passwordInput.value;
  const encryption = encryptionType.value;
  let wifiString = `WIFI:S:${ssid};T:${encryption};`;
  if (encryption === "WEP") {
    wifiString += `WEP:${password};`;
  } else {
    wifiString += `P:${password};`;
  }
  const qr = new QRious({
    element: wifiCanvas,
    value: wifiString
  });
  wifiDownloadBtn.href = wifiCanvas.toDataURL("image/png");
}

function generateVCardQRCode() {
  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const company = companyInput.value;
  const vcardString = `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nORG:${company}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
  const qr = new QRious({
    element: vcardCanvas,
    value: vcardString
  });
  vcardDownloadBtn.href = vcardCanvas.toDataURL("image/png");
}

linkBtn.addEventListener("click", generateLinkQRCode);
wifiBtn.addEventListener("click", generateWifiQRCode);
vcardBtn.addEventListener("click", generateVCardQRCode);
