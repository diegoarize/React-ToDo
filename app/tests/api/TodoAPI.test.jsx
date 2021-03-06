var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist.', () => {
    expect(TodoAPI).toExist();
  });

  // describe('setTodos', ()=>{
  //   it('should set valid todos array', () => {
  //     var todos = [{
  //       id: 1,
  //       text: 'test all files',
  //       completed: false
  //     }];
  //
  //     TodoAPI.setTodos(todos);
  //
  //     var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //
  //     expect(actualTodos).toEqual(todos);
  //   });
  //
  //   it('should not set invalid todos array', () => {
  //     var badTodos = {a: 'b'};
  //     TodoAPI.setTodos(badTodos);
  //
  //     expect(localStorage.getItem('todos')).toBe(null);
  //   });
  //
  // });
  //
  // describe('getTodos', ()=>{
  //   it('should return empty array for bad localstorage data', () => {
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual([]);
  //   });
  //
  //   it('should return todos if valid array in localstorage', ()=>{
  //     var todos = [{
  //       id: 1,
  //       text: 'test all files',
  //       completed: false
  //     }];
  //
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //
  //     var actualTodos = TodoAPI.getTodos();
  //
  //     expect(actualTodos).toEqual(todos);
  //
  //   });
  // 
  // });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'test 1',
      completed: true
    },{
      id: 2,
      text: 'test 2',
      completed: false
    }, {
      id: 3,
      text: 'something 3',
      completed: true
    }];

    it('should return all aitems if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return the items that have not be completed', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos when empty string is entered', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
    });

    it('should return all todos that match  with string test', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'test'.toLowerCase());
        expect(filteredTodos.length).toBe(2);
    });
  });
});
