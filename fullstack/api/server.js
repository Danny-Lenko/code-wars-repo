import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";

const { subtle, getRandomValues } = crypto.webcrypto;
// import { subtle } from "crypto";

console.log(subtle);

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
// app.use(bodyParser.json());
// app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function generateAesKey(length = 256) {
  const key = await subtle.generateKey(
    {
      name: "AES-CBC",
      length,
    },
    true,
    ["encrypt", "decrypt"]
  );

  return key;
}

app.get("/encryption", async (req, res) => {
  const ec = new TextEncoder();
  const key = await generateAesKey();
  // const iv = getRandomValues(new Uint8Array(16));
  const iv = crypto.randomBytes(16)

  const plaintext = "hello world";

  const ciphertext = await subtle.encrypt(
    {
      name: "AES-CBC",
      iv,
    },
    key,
    ec.encode(plaintext)
  );

  // return res.send({
  //   key, iv, ciphertext
  // })

  console.log({
    key,
    iv,
    ciphertext
  })

  // res.json({
  //   key,
  //   iv,
  //   ciphertext,
  // });
});

app.listen(port, () => {
  console.log(`extension api listening on port ${port}`);
});
