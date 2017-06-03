import React, { Component } from 'react';
import {Form, FolderList, FileList} from './';
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
      disableRename: true,
      disableDelete: true,
      createFolder: false
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

  abortRename = (id) =>{
    let file = findById(id,this.state.files)
    file.rename = false;
    let updatedFiles = updateFile(this.state.files, file)
    this.setState({files:updatedFiles})
  }

  toggleFolderForm = () =>{
    this.setState({createFolder: !this.state.createFolder})
  }
  handleCheck = () =>{
    let files = this.state.files;
    for (let i in files) {
     files[i].checked = !this.state.checked
    }
    this.setState({checked:!this.state.checked,files})
  }
  createFolder=(name)=>{
    let folders = this.state.folders;
    let id = folders.length;
    let newFolder = {id:id, name:name}
    this.setState({folders:[newFolder,...folders],createFolder:false})
  }
  handleToggle=(id)=>{
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
    let disableRename = checkedFiles > 0 ? false:true;
    let disableDelete = checkedFiles > 0 ? false:true;
    this.setState({checked,disableDelete,disableRename})
  }
  //usuwanie indexu [...list.slice(0,index),...(list.slice(index+1))
  render() {
    return (
      <div className="container">
        <Form
          checked = {this.state.checked}
          check = {this.handleCheck}
          delete = {this.handleDelete}
          toggleFolderForm = {this.toggleFolderForm}
          folderForm = {this.state.createFolder}
          createFolder = {this.createFolder}
          disableRename = {this.state.disableRename}
          disableDelete = {this.state.disableDelete}
          activateRename = {this.activateRename}
          />
        <FolderList folders={this.state.folders} />
        <FileList files={this.state.files} handleToggle ={this.handleToggle} abortRename={this.abortRename} renameFile = {this.renameFile} />
      </div>
    );
  }
}

export default App;
