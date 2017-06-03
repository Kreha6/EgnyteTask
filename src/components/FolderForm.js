import React, { Component } from 'react';

export class FolderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      disabled:true
    }
  }
  handleChange = (e) => {
    let disabled = e.target.value.length > 0 ? false:true;
    this.setState({name: e.target.value,disabled});
  }
  render() {
    return (
      <li className="list-group-item">
        <div className = "row">
          <div className = "col-xs-4">
            <input ref={input => input && input.focus()} type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="col-xs-4">
            <button onClick={()=>this.props.createFolder(this.state.name)} disabled={this.state.disabled} >
              Create
            </button>
          </div>
          <div className="col-xs-4">
            <button onClick={this.props.toggleForm}>
              Cancel
            </button>
          </div>
        </div>

      </li>
    );
  }
}
