import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import cors from "cors";

const { subtle, getRandomValues } = crypto.webcrypto;


const meetingsData = {
  participants: [
    {
      participantId: 1,
      participantName: "Yuriy Motrych",
      participantRole: "organizer",
    },
    {
      participantId: 2,
      participantName: "Kateryna Pakharenko",
      participantRole: "participant",
    },
    {
      participantId: 3,
      participantName: "Valerii Danylenko",
      participantRole: "participant",
    },
    {
      participantId: 4,
      participantName: "Danylo Tabachenko",
      participantRole: "participant",
    },
    {
      participantId: 5,
      participantName: "Enver Emir-Useynov",
      participantRole: "participant",
    },
    {
      participantId: 6,
      participantName: "Oleksandr Sulzhenko",
      participantRole: "organizer",
    },
  ],
  topics: [
    {
      topicId: 1,
      topicTitle: "Daily Standup",
      keyParticipants: [
        "Kateryna Pakharenko",
        "Danylo Tabachenko",
        "Enver Emir-Useynov",
      ],
    },
    {
      topicId: 2,
      topicTitle: "Release discussion",
      keyParticipants: [
        "Danylo Tabachenko",
        "Oleksandr Sulzhenko",
        "Enver Emir-Useynov",
      ],
    },
    {
      topicId: 3,
      topicTitle: "Scrum poker",
      keyParticipants: [
        "Kateryna Pakharenko",
        "Valerii Danylenko",
        "Yuriy Motrych",
      ],
    },
  ],
};

const jsonData = JSON.stringify(meetingsData);

const app = express();
const port = 8080;
app.use(cors());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);


app.get("/meet-rules", (req, res) => {
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(jsonData, "utf-8", "hex");
  encryptedData += cipher.final("hex");

  return res.json({
    algorithm: algorithm,
    securityKey: Securitykey.toString("hex"),
    initVector: initVector.toString("hex"),
    encryptedData: encryptedData
  });
});


// the decipher function
// const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

// let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

// decryptedData += decipher.final("utf8");

// console.log("Decrypted message: " + decryptedData);



// ======================================================================== the earlier version
// async function generateAesKey(length = 256) {
//   const key = await subtle.generateKey(
//     {
//       name: "AES-CBC",
//       length,
//     },
//     true,
//     ["encrypt", "decrypt"]
//   );

//   return key;
// }

// app.get("/encryption", async (req, res) => {
//   const ec = new TextEncoder();
//   const key = await generateAesKey();
//   // const iv = getRandomValues(new Uint8Array(16));
//   const iv = crypto.randomBytes(16)

//   const plaintext = "hello world";

//   const ciphertext = await subtle.encrypt(
//     {
//       name: "AES-CBC",
//       iv,
//     },
//     key,
//     ec.encode(plaintext)
//   );

//   // return res.send({
//   //   key, iv, ciphertext
//   // })

//   console.log({
//     key,
//     iv,
//     ciphertext
//   })

//   // res.json({
//   //   key,
//   //   iv,
//   //   ciphertext,
//   // });
// });

app.listen(port, () => {
  console.log(`extension api listening on port ${port}`);
});
