
var {connect} = require('react-redux');
const actions = require('actions');

import React from 'react';

export class AddTodo extends React.Component {

  constructor (props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.addTodoBox.value;

    if(todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
      this.refs.addTodoBox.value = '';
    } else {
      this.refs.addTodoBox.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" ref="addTodoBox" placeholder="Enter something to Do on your List"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}


export default connect()(AddTodo);
