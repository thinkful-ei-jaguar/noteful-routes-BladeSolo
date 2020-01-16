import React, { Component } from 'react'
import notefulContext from './NotefulContext'
import ErrorMessage from './ErrorMessage';
import {Link} from 'react-router-dom'


export default class AddFolder extends Component {
  
  static contextType = notefulContext;

  constructor(props) {
    super(props);
    this.state = {
      error: {value: ''}, 
      success: {value: false}
    }
  }

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
        this.context.addFolder()
        this.setState({
          success: {value: true}
        })
        return res.json()
      })
      .catch(err => {
        this.setState({
          error: {value: err.message},
          success: {value: false}
        })
      })
  }
  handleNewFolder (event) {
    event.preventDefault();
    const newFolderName = event.target.name.value;
    const newFolderId = newFolderName;
    const newFolder = JSON.stringify({
      id: newFolderId,
      name: newFolderName
    })
    this.addNewFolder(newFolder);
  }
  
  render() {
    return (
      <form onSubmit={(event) => this.handleNewFolder(event)}>
        <label htmlFor="folder-name"><p>New Folder Name: </p></label>
        <input type="text" name="name" id="name" />
        <button>Create Folder</button>
        {this.state.error.value !== '' && <ErrorMessage props={this.state.error.value} />}
        {(this.state.error.value === '' && this.state.success.value === true) && (<p>Successfully submitted new folder!</p>)}
        
      </form>
    )
  }
}
