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
      folderForm = (
          <FolderForm toggleForm = {this.props.toggleFolderForm} createFolder = {this.props.createFolder}/>
      );
    }
    return (
        <div>
          <li className="list-group-item app__form">
            <div className="row row-main">
              <div className="col-xs-1 app__form__input">
                <input
                name="checkAll"
                type="checkbox"
                checked={this.props.checked}
                onChange={this.props.check} />
              </div>
              <div className="col-xs-2 app__form__button--rename">
                <button className = "button" onClick={this.props.activateRename} disabled={this.props.disableRename} >
                  Rename
                </button>
              </div>
              <div className="col-xs-2 app__form__button--delete">
                <button className = "button" onClick={this.props.openModal} disabled={this.props.disableDelete}>
                  Delete
                </button>
              </div>
              <div className="col-xs-7 app__form__button--folder">
                <button className = "button" disabled = {!this.props.folderButton} onClick={this.props.toggleFolderForm}>
                  New Folder
                </button>
              </div>
            </div>
          </li>
          {folderForm}
        </div>
    )
  }
}

// @media screen and (max-width: 992px) {
// width:80px;
// }
