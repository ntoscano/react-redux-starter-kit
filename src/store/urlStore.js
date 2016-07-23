import { createStore } from 'redux'

const urlStore = createStore((state = {validUrl:false, url:''}, action) => {
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

export default urlStore;