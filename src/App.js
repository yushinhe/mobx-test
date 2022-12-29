import './stylesheet/app.scss'
import {observer} from 'mobx-react-lite'
import React from 'react';
import useStore from './store'
function App() {
  const {count} = useStore()
  return (
   <>
      <div className='container'>
        計數器案例
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary me-3' onClick={count.minusCount}> - 1</button>
          {count.count}
          <button className='btn btn-primary ms-3' onClick={count.addCount}> + 1</button>
        </div>
      </div>
   </>
  );
}

export default observer(App) ;
