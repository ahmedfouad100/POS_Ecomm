import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import TableDash from "../components/UI/TableDashboard/TableDash";
import FormDash from "../components/UI/FormDashboard/FormDash";
import { useState } from 'react';

function Dashboard() {
  const [Udraft, setUDraft] = useState(true);
  const [Pdraft, setPDraft] = useState(true);

  return (
    <>
      <Navbar adminName="Axmed" />
      <div className="d-flex">
        <Sidebar Udraft={Udraft} Pdraft={Pdraft}/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage title="Home" />} />

            <Route path="/users" element={<Users title="Users" />}>
              <Route index element={<TableDash title="Home" />} />
              <Route path="add" element={<FormDash draft={Udraft} setDraft={setUDraft} />} />
            </Route>

            <Route path="/projects" element={<Projects title="Projects" />} >
              <Route index element={<TableDash title="Home" />} />
              <Route path="add" element={<FormDash draft={Pdraft} setDraft={setPDraft} />} />
            </Route>
            
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
