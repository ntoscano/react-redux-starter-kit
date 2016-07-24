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
    default: 
      return state;
  }
});

export default store;