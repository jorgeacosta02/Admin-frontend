import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";

const UserRoutesComp = () => {
  const navigate = useNavigate();
  const accessLogin = getDataFromLocalStorage('accessLogin');

  useEffect(() => {
    if (!accessLogin || !accessLogin.user.active || accessLogin.user.role !== 'prof') {
      navigate('/user-login');
    }
  }, [accessLogin, navigate]);

  if (accessLogin && accessLogin.user.active && accessLogin.user.role === 'prof') {
    return <Outlet />;
  }

  // Puedes retornar null o un componente de cargando mientras rediriges
  return null;
};

export default UserRoutesComp;


















// import { Outlet, useNavigate } from "react-router-dom";
// import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


// const WorkerRoutesComp = () => {

//   const navigate = useNavigate();
//   const accessLogin = getDataFromLocalStorage('accessLogin');

//   console.log(accessLogin)

//   if ( accessLogin.worker.active && accessLogin?.worker?.role === 'prof' ) {
//     console.log('dentro del if de worker')
//     return <Outlet/>;
//   }
//   console.log('fuera del if')
//   alert('No tiene permiso para ingresar a esta ruta.')
//   return navigate('/')
// };

// export default WorkerRoutesComp