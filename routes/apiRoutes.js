var noteData = require("../db/db");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {

    
  });

  app.post("/api/clear", function(req, res) {
    noteData.length = 0;

    res.json({ ok: true });
  });
};
