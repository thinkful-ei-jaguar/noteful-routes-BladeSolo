import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class NoteSidebar extends Component {
 


  render() {
    
    const currentNoteId = this.props.match.params.noteid;
    const currentNoteFolder = this.props.state.notes.find(note => note.id === currentNoteId).folderId;
    const displayFolder = this.props.state.folders.find(folder => folder.id === currentNoteFolder).name;
  
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