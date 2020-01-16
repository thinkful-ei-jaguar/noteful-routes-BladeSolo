import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import NotefulContext from './NotefulContext'
import PropTypes from 'prop-types'
export default class NoteSidebar extends Component {
  static contextType = NotefulContext;
  
  render() {
    let currentNoteId = this.props.match.params.noteid;
    
    let currentNoteFolder = this.context.notes.find(note => note.id === currentNoteId).folderId;
    let displayFolder = this.context.folders.find(folder => folder.id === currentNoteFolder).name;
    
  
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

NoteSidebar.propTypes = { 
  match: PropTypes.shape({
    params: PropTypes.shape({
      noteid: PropTypes.string.isRequired
    })

})}