import React from 'react';
import img404 from '../../images/404.jpg'

const Notfound = () => {
    return (
        <div>
          <img style={{width:'50%'}} src={img404}alt="" />
          <h2> 404 Error!!!</h2>
            
        </div>
    );
};

export default Notfound;