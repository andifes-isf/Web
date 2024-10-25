import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Home1 from "pages/Home1";
import UsuarioCursistaDP from "pages/UsuarioCursistaDP";
import UsuarioCursistaDPEdicao from "pages/UsuarioCursistaDPEdicao";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "usuario-cursista", // Definindo o caminho da nova página
      element: <UsuarioCursistaDP />,
    },
    {
      path: "usuario-cursista-edicao", // Definindo o caminho da nova página
      element: <UsuarioCursistaDPEdicao />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
