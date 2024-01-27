import fs from "fs/promises";

const fileNameOld = "./files/wrongFilename.txt";
const fileNameNew = "./files/properFilename.md";
const rename = async () => {
  try {
    await fs.rename(fileNameOld, fileNameNew);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
