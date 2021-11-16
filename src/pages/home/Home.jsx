import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
// import Topbar from "../../components/topbar/Topbar";
// import Topbar from "./components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      {/* <Topbar />
      <Sidebar />  */}
      <FeaturedInfo />
      <Chart data={userData} title="Patient Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
