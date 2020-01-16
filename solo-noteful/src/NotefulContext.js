import React from 'react';

const NotefulContext = React.createContext({
  folders: [
    {
      id: "id"
    }
  ],
  notes: [
    {
      id: "id",
      name: "name",
      modified: "now",
      folderId: "id",
      content: "content"
    }
  ],
  deleteNote: () => {},
  addFolder: () => {},
  addNote: () => {}
});

export default NotefulContext;