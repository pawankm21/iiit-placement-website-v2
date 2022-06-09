import fs from "fs";


export default function handler(req, res) {
  var IMAGE_PATHS = [];
  fs.readdirSync("./public/company", {
    withFileTypes: true,
  }).forEach((file) => {
    IMAGE_PATHS.push("/company/" + file.name);
  });
  res.json(IMAGE_PATHS);
}
