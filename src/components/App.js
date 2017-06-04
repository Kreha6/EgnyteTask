import React, { Component } from 'react';
import {Form, FolderList, FileList,Modal} from './';
import {findById,toggleFile,updateFile,removeFile} from '../lib/helpers'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files:[
        {id:0, name:"Sample.txt",checked:false,rename:false},
        {id:1, name:"Other.doc",checked:false,rename:false},
        {id:2, name:"Third.jpg",checked:false,rename:false},
        {id:3, name:"Fouth.js",checked:false,rename:false}],
      folders:[],
      checked: false,
      disableRenameButton: true,
      disableDeleteButton: true,
      createFolder: false,
      openModal: false,
      folderButtonActive:true
    }
  }
  
  activateRename = () => {
    let files = this.state.files;
    files.forEach((file) => {
      if(file.checked == true){
        file.rename = true;
      }
    })
    this.setState({files})
  }

  renameFile = (name,id) =>{
    let file = findById(id,this.state.files)
    file.name = name;
    file.rename = false;
    let updatedFiles = updateFile(this.state.files, file)
    this.setState({files:updatedFiles})
  }

  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal })
  }

  abortRename = (id) =>{
    let file = findById(id,this.state.files)
    file.rename = false;
    let updatedFiles = updateFile(this.state.files, file)
    this.setState({files:updatedFiles})
  }

  toggleFolderForm = () =>{
    this.setState({createFolder: !this.state.createFolder,folderButtonActive:!this.state.folderButtonActive})
  }

  handleCheck = () =>{
    let files = this.state.files;
    for (let i in files) {
     files[i].checked = !this.state.checked
   }
   let disableRenameButton = true;
   let disableDeleteButton = true;
   if((files.length>0) && !this.state.checked){
     disableRenameButton = false;
     disableDeleteButton = false;
   }
    this.setState({checked:!this.state.checked,files,disableDeleteButton,disableRenameButton})
  }

  createFolder=(name)=>{
    let folders = this.state.folders;
    let id = folders.length;
    let newFolder = {id:id, name:name}
    this.setState({folders:[newFolder,...folders],createFolder:false,folderButtonActive:true})
  }
  deleteFiles = () =>{
    let files = this.state.files;
    let index;
    files.forEach((file) => {
      if(file.checked){
        index = files.map((file) => file.id).indexOf(file.id);
        files = [...files.slice(0,index),...files.slice(index+1)]
      }
    })
    this.setState({files,openModal: !this.state.openModal,disableDeleteButton:true,disableRenameButton:true})
    if(files.length == 0){
      this.setState({checked:false})
    }
  }

  handleToggleFile=(id)=>{
    let file = findById(id,this.state.files)
    let toggled = toggleFile(file)
    let updatedFiles = updateFile(this.state.files, toggled)
    this.setState({files:updatedFiles})
    let checkedFiles = 0;
    let checked = true
    updatedFiles.forEach((file) => {
      if(file.checked == false){
        checked = false
      }
      else
      {
        checkedFiles++;
      }
    })
    let disableRenameButton = checkedFiles > 0 ? false:true;
    let disableDeleteButton = checkedFiles > 0 ? false:true;
    this.setState({checked,disableDeleteButton,disableRenameButton})
  }

  render() {
    return (
      <div className="container app">
        <Modal isOpen={this.state.openModal} openModal = {this.toggleModal} >
            <h1>Are you sure you want to delete selected files?</h1>
            <div className = "row app__modal__buttons">
              <div className="col-xs-6 app__modal__buttons--yes text-center">
                <button className = "button" onClick={() => this.deleteFiles()}>
                  Yes
                </button>
              </div>
              <div className="col-xs-6 app__modal__buttons--no text-center">
                <button className = "button" onClick={() => this.toggleModal()} >
                  No
                </button>
              </div>
            </div>
        </Modal>
        <Form
          checked = {this.state.checked}
          check = {this.handleCheck}
          toggleFolderForm = {this.toggleFolderForm}
          folderForm = {this.state.createFolder}
          folderButton = {this.state.folderButtonActive}
          createFolder = {this.createFolder}
          disableRename = {this.state.disableRenameButton}
          disableDelete = {this.state.disableDeleteButton}
          activateRename = {this.activateRename}
          openModal = {this.toggleModal}
          />
        <FolderList folders={this.state.folders} />
        <FileList files={this.state.files} handleToggle ={this.handleToggleFile} abortRename={this.abortRename} renameFile = {this.renameFile} />
      </div>
    );
  }
}

export default App;
