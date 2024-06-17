import {Route, Routes} from 'react-router-dom';

import { Login } from '../auth';
import { Principal } from '../principal';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<Principal/>}/>
            <Route path='/tutoriales' element={<Login/>}/>
            <Route path='/cursos' element={<Login/>}/>
            <Route path='/blog' element={<Login/>}/>
            <Route path='/auth' element={<Login/>}/>

        </Routes>
    
    </>
  )
}
