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
});
