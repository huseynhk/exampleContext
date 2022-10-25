import React , {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

function Header() {
    const {element , id , setRegion} = useContext(GlobalContext)
  return (
    <div className='col-md-6'>
    <div className="alert alert-success" role="alert">
    A simple success alert—check it out! {element} {id}
  </div>
  <p>
    <button className='btn btn-danger' onClick={() => {setRegion("Sumgait")}}>Change</button>
  </p>
  </div>
  )
}

export default Header