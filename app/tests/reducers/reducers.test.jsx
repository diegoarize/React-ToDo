const expect = require('expect');
const df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', function () {
  describe('searchTextReducer', function () {
    it('Should set searchText', function () {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', function () {
    it('should toggle showcompleted', function () {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', function () {
    it('should add new todo', function () {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'something to do',
          completed: false,
          createdAt: 95252
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it('should add existing todos', function () {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 3300
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

  });


});
