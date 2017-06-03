import React from 'react';
import {File} from "./"

export const FileList = (props) => {
  const files = props.files.map(file => {
    return <File key={file.id} file={file} handleToggle={props.handleToggle} abortRename = {props.abortRename} renameFile = {props.renameFile} />
  })
    return (
      <div className="container-fluid">
          {files}
      </div>
    )

}
