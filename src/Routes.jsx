import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Home1 from "pages/Home1";
import UsuarioCursistaDP from "pages/UsuarioCursistaDP";
import UsuarioCursistaDPEdicao from "pages/UsuarioCursistaDPEdicao";
import RelatorioHorasPraticasCursista from "pages/RelatorioHorasPraticasCursista";
import RelatorioOrientacao from "pages/RelatorioOrientacao";

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
    {
      path: "relatorio-horas-praticas-cursista", // Definindo o caminho da nova página
      element: <RelatorioHorasPraticasCursista />,
    },
    {
      path: "relatorio-orientacao", // Definindo o caminho da nova página
      element: <RelatorioOrientacao />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
