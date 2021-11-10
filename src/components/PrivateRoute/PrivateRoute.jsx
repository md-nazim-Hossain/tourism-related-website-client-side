import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
      return <div className="text-center p-5">
          <Spinner animation="grow" />
      </div>
    }
     return (
       user.email ? children :<Navigate to='/register'></Navigate>
       );
};

export default PrivateRoute;