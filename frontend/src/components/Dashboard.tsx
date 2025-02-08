import ReactorCore from "./ReactorCore";
// import ComponentHealth from "./ComponentHealth";
// import SystemStatus from "./LiveChart";
// import EmergencyAlerts from "./EmergencyAlerts";
import LiveChart from "./LiveChart";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 gap-6 p-6 bg-gray-900 text-green-400">
            <div className="col-span-2">
                <ReactorCore />
            </div>
            {/* <div>
                <SystemStatus />
            </div>
            <div className="col-span-2">
                <ComponentHealth />
            </div> */}
            {/* <div>
                <EmergencyAlerts />
            </div> */}
            <div className="col-span-3">
                <LiveChart />
            </div>
        </div>
    );
};

export default Dashboard;
