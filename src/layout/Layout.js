import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({open, setOpen, clearAllIssues}) => {
  return (
    <>
       <Header />
       <div className="wrapper"> 
       <Sidebar open={open} setOpen={setOpen} clearAllIssues={clearAllIssues}/>
       <div className="page__wrapper">
       <Outlet />
       </div>
      </div>
    </>
  )
};
export default Layout;