import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class FolderMain extends Component {
 


  render() {
    
    const { notes } = this.props.state;
    const { folderid } = this.props.match.params;
    const theseNotes = notes.filter(note => note.folderId === folderid)
    return (
      <div className="main-main-div">

          <ul className='main-view-main'>
            {theseNotes.map((note, i) => {
              return (
                <li className='main-note-list' key={i}>
                  <Link to={`../../note/${note.id}`}>{note.name}</Link>
                  <p>Last modified: {note.modified.slice(0, 10)}</p>
                  <button className='main-note-delete'>Delete Note</button>
                </li>
              )
            })}
          </ul>
          <button>Add note</button>

      </div>
    )
  }
}