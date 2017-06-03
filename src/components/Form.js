import React, {Component} from 'react';
import {FolderForm} from "./"

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let create = this.props.folderForm;
    let folderForm = null;
    if (create) {
      folderForm = <FolderForm toggleForm = {this.props.toggleFolderForm} createFolder = {this.props.createFolder}/>;
    }
    return (
        <div>
          <div className="form row">
            <div className="col-xs-1">
              <input
              name="checkAll"
              type="checkbox"
              checked={this.props.checked}
              onChange={this.props.check} />
            </div>
            <div className="col-xs-2">
              <button onClick={this.props.activateRename} disabled={this.props.disableRename} >
                Rename
              </button>
            </div>
            <div className="col-xs-2">
              <button onClick={this.props.delete} disabled={this.props.disableDelete}>
                Delete
              </button>
            </div>
            <div className="col-xs-7">
              <button onClick={this.props.toggleFolderForm}>
                New Folder
              </button>
            </div>
          </div>
          <div className = "row">
            {folderForm}
          </div>
        </div>
    )
  }
}
