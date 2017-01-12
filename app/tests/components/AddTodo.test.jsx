var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should call onAddTodo prop if a valid Todo is entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    var assertionStr = 'Test something to do';
    addTodo.refs.addTodoBox.value = assertionStr;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(assertionStr);
  });

  it('Should not call onAddTodo prop when invalid Todo is entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    var assertionStr = '';
    addTodo.refs.addTodoBox.value = assertionStr;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(assertionStr);
  });

});
