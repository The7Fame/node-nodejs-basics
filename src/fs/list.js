import fs from "fs/promises";
const path = "./files";
const list = async () => {
  try {
    const dir = await fs.readdir(path);
    console.log(dir);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
