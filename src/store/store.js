import { createStore } from 'redux'

const store = createStore((state = {validUrl:false, url:'', notes:[]}, action) => {
  switch (action.type) {
    case 'VALIDURL': 
      return {
        ...state,
        validUrl: true,
        url: action.url
      };
    case 'INVALIDURL':
      return {
        ...state,
        validUrl: false,
        url: ''
      }
    case 'ADDNOTE':
      var notes = state.notes.slice(0);
      notes.splice(state.notes.length, 0, action.note);
      return {
        ...state,
        notes: notes
      }
    default: 
      return state;
  }
});

export default store;