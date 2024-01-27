import fs from "fs/promises";

const path = "./files/fileToRead.txt";

const read = async () => {
  try {
    const text = await fs.readFile(path, "utf8");
    return text;
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
