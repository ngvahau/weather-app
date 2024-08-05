import React from "react";

import { Outlet, Link } from 'react-router-dom';


const header = () => {

    return (
      <div>
        <nav>
        <Link to="/">Home</Link> |{""}
        <Link to="/Sign">Sign</Link>
      </nav>
      <Outlet/>

      

      </div>
    );
  };
  
  export default header;