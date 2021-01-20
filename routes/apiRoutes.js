var noteData = require("../db/db");
var notesPath = "./db/db.json";
var fs = require("fs");

function readNotes() {
  fs.readFile(notesPath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    return data;
  })
}

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    fs.readFile(notesPath, "utf-8", (err, notes) => {
      if (err) {
        throw err;
      }
      // console.log(data);
      // console.log(notes);
      res.json(JSON.parse(notes));
    })

  });

  app.post("/api/notes", function (req, res) {
    // console.log(req.body);
    fs.readFile(notesPath, "utf-8", (err, notes) => {
      if (err) {
        throw err;
      }
      notes = JSON.parse(notes);
      notes.push(req.body);
      console.log(notes);
      fs.writeFile(notesPath, JSON.stringify(notes), (err) =>{
        if(err){
          throw err;
        }
        res.json(req.body);
      })
    })
  });

  app.post("/api/clear", function (req, res) {
    noteData.length = 0;

    res.json({
      ok: true
    });
  });
};