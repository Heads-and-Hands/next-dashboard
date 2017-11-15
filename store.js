import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const intitialState = {
  projects: [],
  isLogined: false,
};

const ADD_PROJECT = 'ADD_PROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECTS';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
 
export const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.project] };
    
    case UPDATE_PROJECT: {
      const projects = state.projects.map((item) => {
        if (action.project._id === item._id) {
          return { ...action.project };
        } 
        return item;
      });  
      return { ...state, projects };
    }
    
    case DELETE_PROJECT: {
      const index = state.projects
        .findIndex(item => item._id === action.project._id);
      const projects = [
        ...state.projects.slice(0, index),
        ...state.projects.slice(index),
      ];
      return { ...state, projects };
    }
    
    case LOG_IN:
      return { ...state, isLogined: true };

    case LOG_OUT:
      return { ...state, isLogined: false };

    default: return state;
  }
};


const initStore = (state = intitialState) => createStore(reducer, state, composeWithDevTools());


export default initStore;
