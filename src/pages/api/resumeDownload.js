import fs from 'fs';
import path from 'path';

const filePath = path.resolve('.', 'public/files/Sandeep_Bajracharya_CV.pdf');
const imageBuffer = fs.readFileSync(filePath);

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/pdf');
  res.send(imageBuffer);
}
