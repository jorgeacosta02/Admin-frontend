import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";

const UserRoutesComp = () => {
  const navigate = useNavigate();
  const accessLogin = getDataFromLocalStorage('accessLogin');

  useEffect(() => {
    if (!accessLogin || !accessLogin.user.active || accessLogin.user.role !== 'user') {
      navigate('/user-login');
    }
  }, [accessLogin, navigate]);

  if (accessLogin && accessLogin.user.active && accessLogin.user.role === 'user') {
    return <Outlet />;
  }

  // Puedes retornar null o un componente de cargando mientras rediriges
  return null;
};

export default UserRoutesComp;


















// import { Outlet, useNavigate } from "react-router-dom";
// import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


// const UserRoutesComp = () => {

//   const navigate = useNavigate();
//   const accessLogin = getDataFromLocalStorage('accessLogin');

//   console.log(accessLogin)

//   if ( accessLogin.user.active && accessLogin?.user?.role === 'user' ) {
//     console.log('dentro del if')
//     return <Outlet/>;
//   }
//   console.log('fuera del if')
//   return navigate('/user-login')
// };

// export default UserRoutesComp