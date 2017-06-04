import React, {Component} from 'react';
import {FolderForm} from "./"

export const Form = (props) => {

  let create = props.folderForm;
  let folderForm = null;
  if (create) {
    folderForm = (
        <FolderForm toggleForm = {props.toggleFolderForm} createFolder = {props.createFolder}/>
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
              checked={props.checked}
              onChange={props.check} />
            </div>
            <div className="col-xs-2 app__form__button--rename">
              <button className = "button" onClick={props.activateRename} disabled={props.disableRename} >
                Rename
              </button>
            </div>
            <div className="col-xs-2 app__form__button--delete">
              <button className = "button" onClick={props.openModal} disabled={props.disableDelete}>
                Delete
              </button>
            </div>
            <div className="col-xs-7 app__form__button--folder">
              <button className = "button" disabled = {!props.folderButton} onClick={props.toggleFolderForm}>
                New Folder
              </button>
            </div>
          </div>
        </li>
        {folderForm}
      </div>
    )
}
