# homework11

write, save & delete notes

Use express backend

save and retrieve note data from a JSON file

The following HTML routes:
GET /notes - return notes.html file

GET * - return index.html file

app has a db.json file on the backend that will be used to store and retrieve notes using fs module

The following API routes:
GET /api/notes - read the db.json file and return all saved notes as JSON

POST /api/notes - receive a new note to save on the request body, add it to the db.json file, return the new note to the client

DELETE api/notes/:id - receive a query parameter containing the id of a note to delete. 
Find a way to give each note a unique id when it is saved
In order to delete a note, you will need to read all notes from the db.json file, remove the note with a given id property, then rewrite the notes to the db.json file

