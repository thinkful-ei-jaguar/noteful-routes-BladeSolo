import React, { Component } from 'react'

export default class MainSidebar extends Component {
 


  render() {
    
    const { folders } = this.props.state;
    return (
      <div className='main-sidebar-div'>
        <div className='main-view-sidebar'>
        <ul>
          {folders.map((folder, i) => {
            return (
              <li className='main-folder-list' key={i}>
                <a href={`/folder/${folder.id}`}> 
                {folder.name}
                </a>
              </li>
            )
          })}
        </ul>
        <button>Add folder</button>
        </div>
      </div>
    )
  }
}
