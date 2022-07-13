import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Editor = lazy(() => import("../pages/Editor"));

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/editor" />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default DashboardRoutes;
