import Realm from "realm";

export const NotesSchema = "NotesSchema";
export const Note = "Note";

export const NoteSchema = {
    name: Note,
    primaryKey: 'id',
    properties: {
        title: { type: 'string', indexed: true },
        content: { type: 'string', indexed: true },
        starred: { type: 'bool', default: false },
        locked: { type: 'bool', default: false },
    }
}

export const _NotesSchema = {
    name: NotesSchema,
    primaryKey: 'id',
    properties: {
        name: 'string',
        notes: { type: 'list', objectType: Note }
    }
}

const databaseOptions = {
    path: 'notes.realm',
    schema: [NoteSchema, _NotesSchema],
    schemaVersion: 0
};

export const insertNewList = newNotesList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(NotesSchema, newNotesList);
        });
    });
}); 