import React from 'react';
import useUsers from '../../Hooks/useUsers';
import breakfast from '../../../../public/bf.JSON'

const Breakfast = () => {
   const userData = useUsers({breakfast});
   console.log(userData);
   return (
       
       <div>
            <h1>total:{userData.length}</h1>
        </div>
    );
};

export default Breakfast;