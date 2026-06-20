import Breadcrumb from '../components/UI/Breadcrumb/Breadcrumb';
import TableDash from '../components/UI/TableDashboard/TableDash';
import { Outlet } from 'react-router-dom';
function Projects({title}){
    return (
        <>
            <Breadcrumb title={title}/>
            <Outlet />
        </>
    )
}
export default Projects; 