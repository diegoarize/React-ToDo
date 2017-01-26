var React = require('react');
var {connect} = require('react-redux');
const actions = require('actions');

export var AddTodo = React.createClass({
  handleOnSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.addTodoBox.value;

    if(todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
      this.refs.addTodoBox.value = '';
    } else {
      this.refs.addTodoBox.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" ref="addTodoBox" placeholder="Enter something to Do on your List"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
export default connect()(AddTodo);
