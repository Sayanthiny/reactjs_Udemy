import React from 'react';
import './App.css';
import Main from './components/Main';
import DataList from './components/DataList';
import Counter from './components/Counter';
import {createStore} from 'redux';
import rootReducer from './store/reducer';
import { Provider } from 'react-redux';


//action 
// const increment=()=>{
//   return {type : 'INCREMENT'}
// }

// const decrement=()=>{
//   return {type :'DECREMENT'}
// }

// // reducer

// const reducerCounter=(state=0, action)=>{
//   switch(action.type){
//     case 'INCREMENT' :
//       return state+1 ;

//       case 'DECREMENT' :
//       return state-1;

//       default :
//       return state;
//   }

// }

// store
// let store=createStore(rootReducer);

// // dispatch
// store.dispatch(increment());
// store.dispatch(decrement());

//display


let store =createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>(console.log(store.getState())));

function App() {
  return (

    <>
    <Provider  store={store}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
              <Counter />
          </div>

          <div className='col-md-6'>
            <DataList />
            
          </div>
        </div>
        
        <div className='row'>
          <div className='col-md-12'>
            <Main/>

          </div>
        </div>
      </div>

      </Provider>
      
    </>
  );
}

export default App;
