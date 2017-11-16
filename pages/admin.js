import withRedux from 'next-redux-wrapper';

import { Auth } from '../components';
import initStore, { initProjects } from '../store';


// import AdminContent


function Admin({ isLogined }) {
  return (
    isLogined ? <div>Hello you logined</div> : <Auth />            
  );
}


export default withRedux(initStore, state => ({ isLogined: state.isLogined }), null)(Admin);
  
