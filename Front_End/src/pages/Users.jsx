import Breadcrumb from '../components/UI/Breadcrumb/Breadcrumb';
import { Outlet } from 'react-router-dom';
function Users({title}){
    return (
        <>
        <Breadcrumb title={title}/>
        <Outlet/>
        </>
    )
}
export default Users; 