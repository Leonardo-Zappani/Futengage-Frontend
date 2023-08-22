import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
  <div className="flex justify-center items-center h-screen">  
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://i1.sndcdn.com/avatars-000272240435-g9bvv5-t500x500.jpg" alt="Nieri" /></figure>
      <div className="card-body">
        <h2 className="card-title">Gabriel Guarnieri</h2>
        <p>Vai no tooma?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Namora comigo?</button>
        </div>
      </div>
    </div>
  </div>
  )
}


createRoot(App!).render(<Root />)
