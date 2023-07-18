console.log('hello wakeup')


async function getData() {
  const res = await fetch("http://localhost:8080/meet-rules");
  const data = await res.json();

  const { algorithm, securityKey, initVector, encryptedData } = data;

  const securityKeyBuffer = Buffer.from(securityKey, "hex");
  const initVectorBuffer = Buffer.from(initVector, "hex");

  const decryptedData = decryptData(
    algorithm,
    securityKeyBuffer,
    initVectorBuffer,
    encryptedData
  );

  console.log("Decrypted message:", decryptedData);

}

getData();

function decryptData(algorithm, securityKey, initVector, encryptedData) {
  const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

function showAlert() {
  console.log("Alert!");
}
