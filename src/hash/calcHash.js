import fs from "fs/promises";
import cr from "crypto";

const file = "./files/fileToCalculateHashFor.txt";
const calculateHash = async () => {
  const text = await fs.readFile(file, "utf8");
  const hash = cr.createHash("sha256").update(text).digest("hex");
  console.log(hash);
};

await calculateHash();
