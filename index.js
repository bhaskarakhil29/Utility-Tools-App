const readLineSync = require("readline-sync");
const crypto = require("crypto");

const UtilityApps = [
  {
    appNo: "1",
    appName: "URL Encode/Decode",
    appOperations: ["Encode", "Decode"],
  },
  {
    appNo: "2",
    appName: "Base64 Encoder/Decoder",
    appOperations: ["base64Encode", "base64Decode"],
  },
  {
    appNo: "3",
    appName: "String Hashing",
    appOperations: ["md5", "sha1", "sha256", "sha512"],
  },
  {
    appNo: "4",
    appName: "Epoch Converters",
    appOperations: ["To Human Date", "To Epoch Time"],
  },
  {
    appNo: "5",
    appName: "Binary/Decimal/Hexa-Decimal/Octal Converters",
    appOperations: [
      "02to08",
      "02to10",
      "02t016",
      "08to02",
      "08to10",
      "08to16",
      "10to02",
      "10to08",
      "10to16",
      "16to02",
      "16to08",
      "16to16",
    ],
  },
  {
    appNo: "6",
    appName: "RGB HEX Converters",
    appOperations: ["RGB to HEX", "HEX to RGB"],
  },
  {
    appNo: "7",
    appName: "Units Converter",
    appOperations: [
      "Meter to Kilometer",
      "Centimeter to Kilometer",
      "Kilometer to Mile",
    ],
  },
  {
    appNo: "8",
    appName: "Exit",
    appOperations: [],
  },
];

function printOptions(operations) {
  let i = 1;
  for (op of operations) {
    console.log(`${i++}. ${op}`);
  }
}

function printWelcome(appName) {
  console.log(`Welcome to ${appName}\n`);
}

function encodeDeCode() {
  printOptions(UtilityApps[0].appOperations);
  const chosenOp = readLineSync.question(`Enter your input here: `);
  const url = readLineSync.question(`Enter a URL : `);
  if (chosenOp === "1") {
    const encodedURL = encodeURIComponent(url);
    console.log(`${encodedURL}`);
  } else {
    const decodedURL = decodeURIComponent(url);
    console.log(`${decodedURL}`);
  }
}

function base64EncoderDecoder() {
  printOptions(UtilityApps[1].appOperations);
  const chosenOp = readLineSync.question(`Enter your input here: `);
  const url = readLineSync.question(`Enter a URL : `);
  if (chosenOp === "1") {
    console.log(Buffer.from(url).toString("base64"));
  } else {
    console.log(Buffer.from(url, "base64").toString("ascii"));
  }
}

function stringHashing() {
  printOptions(UtilityApps[2].appOperations);
  const chosenOp = readLineSync.question(`Enter your input here: `);
  const url = readLineSync.question(`Enter a URL : `);
  if (chosenOp === "1") {
    console.log(crypto.createHash("md5").update(url).digest("hex"));
  } else if (chosenOp === "2") {
    console.log(crypto.createHash("sha1").update(url).digest("hex"));
  } else if (chosenOp === "3") {
    console.log(crypto.createHash("sha256").update(url).digest("hex"));
  } else {
    console.log(crypto.createHash("sha512").update(url).digest("hex"));
  }
}

function epochConverters() {
  printOptions(UtilityApps[3].appOperations);
  const chosenOp = readLineSync.question(`Enter your input here: `);
  if (selectedOperation === "1") {
    let millisecond = readLineSync.question(
      "Please enter millisecond value \n"
    );
    let humanDate = new Date(Number(millisecond));
    console.log(
      `Year : ${humanDate.getFullYear()}, Month : ${humanDate.getMonth()}, Date : ${humanDate.getDate()}, Hours : ${humanDate.getHours()}, Minutes : ${humanDate.getMinutes()}, Seconds: ${humanDate.getSeconds()}}`
    );
  } else {
    let date = readLineSync.question("Please enter the Date eg: 2019,2,3 \n");
    console.log(Date.parse(date));
  }
}

function numberSystemConverter() {
  printOptions(UtilityApps[4].appOperations);
  let chosenOp = readLineSync.question(`Enter your input here: `);
  chosenOp = parseInt(chosenOp) - 1;
  let fromBase =
    UtilityApps[4].appOperations[chosenOp][0] +
    UtilityApps[4].appOperations[chosenOp][1];
  fromBase = parseInt(fromBase);
  let toBase =
    UtilityApps[4].appOperations[chosenOp][4] +
    UtilityApps[4].appOperations[chosenOp][5];
  toBase = parseInt(toBase);
  let valueInput = readLineSync.question(`Enter the value: `);
  valueInput = parseInt(valueInput, fromBase).toString(toBase);
  console.log(`Value after conversion is ${valueInput}`);
}

function hexToRgb() {
  printOptions(UtilityApps[5].appOperations);
  let chosenOp = readLineSync.question(`Enter your input here: `);
  if (chosenOp === "1") {
    let red = readLineSync.question("Enter red value \n");
    let green = readLineSync.question("Enter green value \n");
    let blue = readLineSync.question("Enter blue value \n");
    red = Number(red).toString(16);
    green = Number(green).toString(16);
    blue = Number(blue).toString(16);
    if (red.length == 1) red = "0" + red;
    if (green.length == 1) green = "0" + green;
    if (blue.length == 1) blue = "0" + blue;
    console.log(`#${red}${green}${blue}`);
  } else {
    let hex = readLineSync.question("Enter the Hexadecimal code eg: #123456\n");
    let red = 0,
      green = 0,
      blue = 0;
    if (hex.length == 4) {
      red = "0x" + hex[1] + hex[1];
      green = "0x" + hex[2] + hex[2];
      blue = "0x" + hex[3] + hex[3];
    } else if (hex.length == 7) {
      red = "0x" + hex[1] + hex[2];
      green = "0x" + hex[3] + hex[4];
      blue = "0x" + hex[5] + hex[6];
    }
    console.log(`rgb(${red},${green},${blue})`);
  }
}

function unitsConverter() {
  printOptions(UtilityApps[6].appOperations);
  let chosenOp = readLineSync.question(`Enter your input here: `);
  if (chosenOp === "1") {
    const meter = readLineSync.question("Enter meter value \n");
    console.log((meter / 1000).toFixed(2));
  } else if (chosenOp === "2") {
    const centimeter = readLineSync.question("Enter centimeter value \n");
    console.log((centimeter / 100000).toFixed(2));
  } else {
    const kilometer = readLineSync.question("Enter kilometer value \n");
    console.log((kilometer * 0.621371).toFixed(2));
  }
}

function chooseApp() {
  console.log(`Choose an App to continue...\n`);
  UtilityApps.forEach((app) => console.log(`${app.appNo}. ${app.appName}`));
  let chosenApp = readLineSync.question(`Enter your input here :\t`);
  chosenApp = parseInt(chosenApp);
  switch (chosenApp) {
    case 1:
      printWelcome(UtilityApps[0].appName);
      encodeDeCode();
      break;
    case 2:
      printWelcome(UtilityApps[1].appName);
      base64EncoderDecoder();
      break;
    case 3:
      printWelcome(UtilityApps[2].appName);
      stringHashing();
      break;
    case 4:
      printWelcome(UtilityApps[3].appName);
      epochConverters();
      break;
    case 5:
      printWelcome(UtilityApps[4].appName);
      numberSystemConverter();
      break;
    case 6:
      printWelcome(UtilityApps[5].appName);
      hexToRgb();
      break;
    case 7:
      printWelcome(UtilityApps[6].appName);
      unitsConverter();
      break;
  }
}

function main() {
  console.log(`Welcome to the Utility Tools App\n`);
  chooseApp();
}

main();
