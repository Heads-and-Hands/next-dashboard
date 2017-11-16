import withRedux from 'next-redux-wrapper';
import Router from 'next/router';


import initStore, { initProjects } from '../store';


// import AdminContent


function Admin({ isLogined }) {
  return (
    isLogined ? <div>Hello you logined</div> : Router.push('/about')            
  );
}


export default withRedux(initStore, state => ({ isLogined: state.isLogined }), null)(Admin);
  
