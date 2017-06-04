import React from 'react';

export const Folder = (props) => (
  <li className="list-group-item app__folders__folder">
    {props.folder.name}
  </li>
)
