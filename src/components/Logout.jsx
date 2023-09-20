import React from "react";
import { Link} from "react-router-dom";
import '../scss/_logout.scss';
import HomeHeader from "./HomeHeader";

function Logout() {
  return (
    <>
      <HomeHeader />
      <div className='main-login'>
        <h2>Wylogowanie nastąpiło<br/> pomyślnie!</h2>
        <div className='decoration'> </div>
        <div className='form-button'>
                   <Link to="/">
            <button >
              Strona główna
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Logout;
