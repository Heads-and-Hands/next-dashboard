import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';               

const intitialState = {
  projects: [],
  isLogined: false,
};


const INIT_PROJECTS = 'INIT_PROJECTS';
const ADD_PROJECT = 'ADD_PROJECT';
const EDIT_PROJECT = 'EDIT_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECTS';
const AUTH = 'AUTH';

export const initProjects = projects => ({ type: INIT_PROJECTS, projects });
export const addProject = project => ({ type: ADD_PROJECT, project });
export const editProject = project => ({ type: EDIT_PROJECT, project });
export const deleteProject = project => ({ type: DELETE_PROJECT, project });
export const auth = playload => ({ type: AUTH, playload }); 

export const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case INIT_PROJECTS:
      return { ...state, projects: action.projects };

    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.project] };
    
    case EDIT_PROJECT: {
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
        ...state.projects.slice(index + 1),
      ];
      return { ...state, projects };
    }
    
    case AUTH:
      return { ...state, isLogined: action.playload };

    default: return state;
  }
};


const initStore = (state = intitialState) => createStore(reducer, state, composeWithDevTools());


export default initStore;
