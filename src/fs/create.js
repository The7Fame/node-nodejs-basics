import fs from "fs/promises";

const toWrite = "I am fresh and young";
const create = async () => {
  try {
    await fs.writeFile("./files/fresh.txt", toWrite);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
