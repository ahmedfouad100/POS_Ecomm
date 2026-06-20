import { NavLink } from 'react-router-dom'
import Styles from './Sidebar.module.css'
function Sidebar({Udraft,Pdraft}) {
    const links = [
        { icon: "fa-chart-pie", title: "Status", path:"/"},
        { icon: "fa-users", title: "Users Management", path:"/users",badge:Udraft},
        { icon: "fa-building", title: "Projects Management", path:"/projects",badge:Pdraft},
        { icon: "fa-code", title: "Developers Management", path:"/"},
        { icon: "fa-globe", title: "CMS", path:"/"},
        { icon: "fa-comments", title: "Live Chat", path:"/"}
    ]
    return (
        <>
            <aside className={`${Styles.sidebar} min-vh-100 py-4 px-3 col-2 fw-semibold`}>
                <div className='fs-3 text-center opacity-50'>Dashboard</div>
                {/* Nav Links */}
                <nav className=''>
                    {links.map((item,i) => (
                        <NavLink
                        to={item.path}
                        className={`${Styles.navItem} d-flex gap-3 align-items-center py-3 px-2`} key={i}>
                            <i className={`fa-solid ${item.icon} `}></i> 
                            {/* me-1 my-2 */}
                            <span> {item.title}</span>
                            {(!item.badge) && (item.badge != undefined) && <span className="badge text-bg-warning ms-auto">Draft...</span> }
                        </NavLink>
                    ))}

                </nav>
            </aside>
        </>
    )
}
export default Sidebar 