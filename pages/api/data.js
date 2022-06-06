import excelToJson from "convert-excel-to-json";
import fs from "fs";
import path from "path";
export default function handler(req, res) {
  var data = {};
  const EXCEL_PATHS = [];
  fs.readdirSync("./excel", { withFileTypes: true }).forEach((file) => {
    if (file.name.endsWith(".xlsx")) {
      EXCEL_PATHS.push(file.name);
    }
  });
  EXCEL_PATHS.forEach((excelPath) => {
    const dir = path.resolve("./excel/" + excelPath);
    const excelData = excelToJson({
      sourceFile: dir,
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    });
    excelData[`${excelPath.split(".")[0]}`] = excelData.Sheet1;
    delete excelData.Sheet1;
    data = { ...data, ...excelData };
  });
  res.json(data);
}
