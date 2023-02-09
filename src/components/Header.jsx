import React, { useContext } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';

export const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className="main-header flex justify-between items-center text-3xl font-bold p-3 border-b-2 border-black-500 ">
        <Link to={"/"}><span>Filmy<span className='text-red-500'>Adda</span></span></Link>
        {useAppstate.login ? 
          <Link to={'/addmovie'}> <h1 className='text-lg flex items-center cursor-pointer'>
            <Button><AddCircleIcon className='mr-1' color='secondary' /><span>Add new</span></Button></h1></Link>
          :
          <Link to={'/login'}> <h1 className='text-lg bg-green-500 flex items-center cursor-pointer'>
            <Button><span>Login</span></Button></h1></Link>
        }
    </div>
  )
}

export default Header;
