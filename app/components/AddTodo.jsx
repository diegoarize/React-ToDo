var React = require('react');

var AddTodo = React.createClass({
  handleOnSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.addTodoBox.value;

    if(todoText.length > 0) {
      this.props.onAddTodo(todoText);
      this.refs.addTodoBox.value = '';
    } else {
      this.refs.addTodoBox.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" ref="addTodoBox" placeholder="Enter something to Do on your List"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
module.exports = AddTodo;
