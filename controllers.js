import fs from "fs/promises";
import path from "path";

const FilesPath = path.resolve("files");

const createFile = async (req, res) => {
  const filePath = path.resolve("files", req.body.fileName);

  try {
    await fs.writeFile(filePath, req.body.content, "utf8");
    res.status(201).json({ message: "Create" });
  } catch (error) {
    console.log(error);
  }
};

const getFile = async (req, res) => {
  try {
    const result = await fs.readdir(FilesPath);
    if (result.length === 0) {
      res.status(404).json({ message: "Folder is empty" });
      return;
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getfileInfo = async (req, res) => {
  try {
    const { fileName } = req.params;

    const result = await fs.readdir(FilesPath);
    if (!result.includes(fileName)) {
      res.status(404).json({ message: "File not found" });
      return;
    }

    const filePath = path.resolve("files", fileName);
    const fileContent = await fs.readFilefi(fileName, "utf8");

    const fileExst = path.extname(filePath);
    const fileBaseName = path.basename(filePath, fileExst);
    const { size } = await fs.stat(filePath);
    const resultForCustomer = {
      name: fileBaseName,
      extention: fileExst,
      content: fileContent,
      size,
    };
    res.json(resultForCustomer);
  } catch (error) {
    console.log(error);
  }
};
export default {
  createFile,
  getFile,
  getfileInfo,
};
