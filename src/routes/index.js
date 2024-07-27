import React from "react";
import { Route, Routes } from "react-router-dom";
import useStore from "../(store)/store";
import * as Page from "../pages";
import * as Landlord from "../pages/Landlord";
import * as Tenant from "../pages/Tenant";

const AppRoutes = () => {
  const { role } = useStore();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page.Home role={role} />}>
          {role === "landlord" && (
            <>
              <Route path="/" element={<Landlord.Dashboard />} />
              <Route path="/properties" element={<Landlord.Properties />} />
              <Route path="/tenants" element={<Landlord.Tenants />} />
              <Route path="/prospects" element={<Landlord.Prospects />} />
              <Route path="/vendors" element={<Landlord.Vendors />} />
            </>
          )}

          {role === "tenant" && (
            <>
              <Route path="/" element={<Tenant.Dashboard />} />
              <Route path="/properties" element={<Tenant.Properties />} />
            </>
          )}
        </Route>
        <Route path="/login" element={<Page.Login />} />
        <Route path="/sign-up" element={<Page.SignUp />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
