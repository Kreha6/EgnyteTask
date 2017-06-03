import React from 'react';
import {Folder} from "./"
export const FolderList = (props) => {
  const folders = props.folders.map(folder => {
  return <Folder key={folder.id} folder={folder}/>
  })
    return (
      <div className="">
        {folders}
      </div>
    )

}
