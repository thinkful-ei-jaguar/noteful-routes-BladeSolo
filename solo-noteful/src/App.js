import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainMain from './MainMain';
import MainSidebar from './MainSidebar';
import FolderMain from './FolderMain';
import FolderSidebar from './FolderSidebar';
import NoteMain from './NoteMain';
import NoteSidebar from './NoteSidebar';
import './App.css';
import NotefulContext from './NotefulContext';




class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      "folders": [],
      "notes": []
    };
  }
  
  deleteNote = (noteId) => {
    const updatedNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: updatedNotes
    })
  }
  
  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => response.json())
      .then(newFolders => {
        console.log(newFolders)
        return this.setState({
          folders: newFolders
        })
      });
    fetch('http://localhost:9090/notes')
      .then(response => response.json())
      .then(newNotes => {
        return this.setState({
          notes: newNotes
        })
      });  
  }
  


  render () {
    
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
    }
    return (
      <>
      <h1><Link to='/' className='noteful-header'>Noteful</Link></h1>
      <div className='main-view'>
        
        <NotefulContext.Provider value={contextValue}>
          <div className='app-sidebar'>
            <Route exact path='/' component={MainSidebar} 
            /> 
            <Route path='/folder/:folderid' component={FolderSidebar} 
            /> 
            <Route path='/note/:noteid' component={NoteSidebar} 
            /> 
          </div>

          <main className='app-main'>
            <Route exact path='/' component={MainMain}
            /> 
            <Route path='/folder/:folderid' component={FolderMain} 
            /> 
            <Route path='/note/:noteid' component={NoteMain}
            />
          </main>
        </NotefulContext.Provider>
      </div>
      </>
    );
  }
}


export default App;


