import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import NotefulContext from './NotefulContext'
export default class NoteSidebar extends Component {
  static contextType = NotefulContext;

  render() {
    
    const currentNoteId = this.props.match.params.noteid;
    const currentNoteFolder = this.context.notes.find(note => note.id === currentNoteId).folderId;
    const displayFolder = this.context.folders.find(folder => folder.id === currentNoteFolder).name;
  
    return (
      <div className='main-sidebar-div'>
        <div className='app-sidebar'>
        <ul>
          <li>{displayFolder}</li>
        </ul>
        <button><Link to={`/folder/${currentNoteFolder}`}>Go Back</Link></button>
        </div>
      </div>
    )
  }
}