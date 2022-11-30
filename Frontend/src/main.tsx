import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import App from "./App";
import Login from "./subPages/Login";
import Home from "./subPages/Home";
import Loading from "./subPages/Loading";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
