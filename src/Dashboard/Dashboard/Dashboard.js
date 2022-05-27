import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 dashboard-lg-sidebar">
            <DashboardSidebar />
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
