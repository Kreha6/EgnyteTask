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
    this.setState({newName: e.target.value,disabled});
  }

  render() {
    if(!this.props.file.rename){
      return (
        <li className="list-group-item app__files__file">
          <div className = "row">
            <div className = "col-xs-1 app__files__file__input ">
              <input
              name="checkbox"
              type="checkbox"
              checked={this.props.file.checked}
              onChange={()=>this.props.handleToggle(this.props.file.id)}
               />
            </div>
            <div className="col-xs-11 app__files__file__name">
              {this.props.file.name}
            </div>
          </div>

        </li>
      );
    }
    else{
      return(
        <li className="list-group-item app__files__file">
          <div className = "row app__files__file__form">
            <div className = "col-xs-1 app__files__file__form__checkbox ">
              <input
              name="checkbox"
              type="checkbox"
              checked={this.props.file.checked}
               />
            </div>
            <div className = "col-xs-3 app__files__file__form__input">
              <input type="text" value={this.state.newName} onChange={this.handleChange} />
            </div>
            <div className="col-xs-4 app__files__file__form__button--save">
              <button className = "button" onClick={()=>this.props.renameFile(this.state.newName,this.props.file.id)} disabled={this.state.disabled} >
                Save
              </button>
            </div>
            <div className="col-xs-4 app__files__file__form__button--cancel">
              <button className = "button" onClick={()=>this.props.abortRename(this.props.file.id)}>
                Cancel
              </button>
            </div>
          </div>
        </li>
      )
    }

  }
}
