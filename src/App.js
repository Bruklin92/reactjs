import logo from "./logo.svg";
import "./App.css";
import Contry from "./container/Contry";
import ContryClass from "./container/ContryClass";
import Counter from "./container/Counter";
import CounterFun from "./container/CounterFun";
import Coursefun from "./container/Coursefun";
import CourseClass from "./container/CourseClass";
import Changebac from "./container/Changebac";
import ChangebacClass from "./container/ChangebacClass";
import Time from "./container/Time";
import TimeClass from "./container/TimeFun";
import Product from "./container/Product";
import Travel from "./container/Travel/Travel";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./container/admin/AdminRoutes";
import UserRoutes from "./container/admin/UserRoutes";
import Apanal from "./container/Apanal";

function App() {
  return (
    <div>
      {/* <Coursefun /> */}
      {/* <CourseClass /> */}
      {/* <Contry /> */}
      {/* <ContryClass /> */}
      {/* <Counter />  */}
      {/* <CounterFun /> */}
      {/* <Changebac /> */}
      {/* <ChangebacClass /> */}
      {/* <Time /> */}
      {/* <TimeClass /> */}
      {/* <Product /> */}
      {/* <Travel /> */}
      {/* <Apanal/>  */}

      <Routes>
        <Route path="/*" element={<UserRoutes />}/>
        <Route path="/admin/*" element={<AdminRoutes />}/> 
      </Routes>

    </div>
  );
}

export default App;
