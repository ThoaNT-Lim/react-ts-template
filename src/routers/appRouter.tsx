import { Spin } from "antd";
import React, { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { PATH_ROUTE } from "./const"; 
import { Navigate } from 'react-router-dom';
const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/login"));


function AppRouter() {
  const loader = <div className="sping-loading">
    <Spin />
  </div>
  return (
    <Fragment>
      <Suspense fallback={loader}>
      <Routes>
        <Route path={PATH_ROUTE.home} element={<HomePage />} />
        <Route path={PATH_ROUTE.login} element={<LoginPage />} />
        <Route path='/' element={<Navigate to={PATH_ROUTE.login} /> } />
      </Routes>
      </Suspense>
    </Fragment>
  );
}

export default AppRouter;
