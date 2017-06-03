import React, { Component } from 'react';
export class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName:this.props.file.name,
      disabled:false
    }
  }

  handleChange = (e) => {
    let disabled = e.target.value.length > 0 ? false:true;
    this.setState({newName: e.target.value});
  }

  render() {
    if(!this.props.file.rename){
      return (
        <li className="list-group-item">
          <div className = "row">
            <div className = "col-xs-1">
              <input
              name="checkbox"
              type="checkbox"
              checked={this.props.file.checked}
              onChange={()=>this.props.handleToggle(this.props.file.id)}
               />
            </div>
            <div className="col-xs-11">
              {this.props.file.name}
            </div>
          </div>

        </li>
      );
    }
    else{
      return(
        <div className = "row">
          <div className = "col-xs-4">
            <input type="text" value={this.state.newName} onChange={this.handleChange} />
          </div>
          <div className="col-xs-4">
            <button onClick={()=>this.props.renameFile(this.state.newName,this.props.file.id)} disabled={this.state.disabled} >
              Save
            </button>
          </div>
          <div className="col-xs-4">
            <button onClick={()=>this.props.abortRename(this.props.file.id)}>
              Cancel
            </button>
          </div>
        </div>
      )
    }

  }
}
