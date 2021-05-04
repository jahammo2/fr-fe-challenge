const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5555;
const pageSize = 5;
const { parts } = require(__dirname + "/part_data.js");
const { manufacturingProcesses } = require(__dirname +
  "/manufacturing_process_data.js");

const getPage = (pageNumber) => {
  startingIndex = (pageNumber - 1) * pageSize;
  endingIndex = startingIndex + (pageSize - 1);
  return parts.slice(startingIndex, endingIndex);
};

const totalPages = Math.ceil(parts.length / pageSize);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get("/parts", (req, res) => {
  const pageNumber = req.query.page;
  const result = getPage(pageNumber);

  res.setHeader("per-page", pageSize);
  res.setHeader("page-number", pageNumber);
  res.setHeader("total-entries", parts.length);
  res.setHeader("total-pages", totalPages);

  return res.json({ data: result });
});

app.get("/manufacturing_processes", (req, res) => {
  return res.json({ data: manufacturingProcesses });
});

app.post("/parts", (req, res) => {
  console.log(req.body);

  return res.json("");
});

app.listen(port, () => console.log(`Open for business on port ${port}!`));
