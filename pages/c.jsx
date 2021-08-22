import React, { useState } from 'react';
import ReactFacebookLogin from 'react-facebook-login';

function c() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const responseFacebook = async (response) => {
    console.log(response);
    setIsLoggedin(true);
  };

  return (
    <div>
      {/* {isLoggedin ? ( */}
        {/* 'Home' */}
      {/* ) : ( */}
        <ReactFacebookLogin
          appId="898478667681744"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      {/* )} */}
    </div>
  );
}

export default c;
