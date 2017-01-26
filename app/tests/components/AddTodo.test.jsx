var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid Todo text', () => {
    var todoText = 'Test something to do';
    var action = actions.startAddTodo(todoText);
    
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));


    addTodo.refs.addTodoBox.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should not dispatch ADD_TODO when invalid Todo is entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    var assertionStr = '';
    addTodo.refs.addTodoBox.value = assertionStr;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
