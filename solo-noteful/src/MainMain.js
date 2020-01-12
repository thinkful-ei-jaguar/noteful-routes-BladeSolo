import React, { Component } from 'react'

export default class MainView extends Component {
 


  render() {
    
    const { notes } = this.props.state;
    return (
      <div className="main-main-div">

          <ul className='main-view-main'>
            {notes.map((note, i) => {
              return (
                <li className='main-note-list' key={i}>
                  <p>{note.name}</p>
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
