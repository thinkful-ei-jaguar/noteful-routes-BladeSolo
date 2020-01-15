import React, { Component } from 'react'
import notefulContext from './NotefulContext'



export default class AddFolder extends Component {
  
  static contextType = notefulContext;

  addNewFolder(folder) {
    fetch(`http://localhost:9090/folders/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: folder
      
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
  }
  handleNewFolder (event) {

    const newFolderName = event.target.name.value;
    const newFolderId = newFolderName;
    const newFolder = JSON.stringify({
      id: newFolderId,
      name: newFolderName
    })
    console.log(this.props.history);
    this.addNewFolder(newFolder);
  }
  
  render() {
    return (
      <form onSubmit={(event) => this.handleNewFolder(event)}>
        <label htmlFor="folder-name"><p>New Folder Name: </p></label>
        <input type="text" name="name" id="name" />
        <button>Create Folder</button>
      </form>
    )
  }
}
