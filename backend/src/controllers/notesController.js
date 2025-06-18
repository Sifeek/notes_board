export function getAllNotes(req, res) {
    res.status(200).send("You just fetxhed the notes");
}
export function createNote(req, res) {
   res.status(201).json({ message: "Note created successufully"});
}

export function updateNote(req, res) {
   res.status(200).json({ message: "Note updated successfully!"});
}

export function deletedNote(req, res) {
   res.status(200).json({message: "Note deleted successfully!"})
}