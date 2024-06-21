import {Route, Routes} from 'react-router-dom';

import { Login } from '../auth';
import { Principal } from '../principal';
import { Blog } from '../blog/pages/Blog';
import { Cursos } from '../cursos';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<Principal/>}/>
            <Route path='/tutoriales' element={<Login/>}/>
            <Route path='/cursos' element={<Cursos />}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/auth' element={<Login/>}/>

        </Routes>
    
    </>
  )
}
