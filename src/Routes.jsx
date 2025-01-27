import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Home1 from "pages/Home1";
import UsuarioAlunoIsF from "pages/UsuarioAlunoIsF";
import UsuarioAlunoIsFEdicao from "pages/UsuarioAlunoIsFEdicao";
import RelatorioHorasPraticasCursista from "pages/RelatorioHorasPraticasCursista";
import RelatorioOrientacao from "pages/RelatorioOrientacao";
import RelatorioHorasTeoricas from "pages/RelatorioHorasTeoricas";
import CursoAtualCursista from "pages/CursoAtualCursista";
import FeedbackCursista from "pages/FeedbackCursista";
import Ementa from "pages/Ementa";
import Ouvidoria from "pages/Ouvidoria";
import TestConnection from "pages/TestConnection";
import UsuarioProfessorIsF from "pages/UsuarioProfessorIsF";
import UsuarioProfessorIsFEdicao from "pages/UsuarioProfessorIsFEdicao";


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
      path: "usuario-alunoisf", // Definindo o caminho da nova página
      element: <UsuarioAlunoIsF />,
    },
    {
      path: "usuario-alunoisf-edicao", // Definindo o caminho da nova página
      element: <UsuarioAlunoIsFEdicao />,
    },
    {
      path: "relatorio-horas-praticas-cursista", // Definindo o caminho da nova página
      element: <RelatorioHorasPraticasCursista />,
    },
    {
      path: "relatorio-orientacao", // Definindo o caminho da nova página
      element: <RelatorioOrientacao />,
    },
    {
      path: "relatorio-horas-teoricas", // Definindo o caminho da nova página
      element: <RelatorioHorasTeoricas />,
    },
    {
      path: "curso-atual-cursista", // Definindo o caminho da nova página
      element: <CursoAtualCursista />,
    },
    {
      path: "feedback-cursista", // Definindo o caminho da nova página
      element: <FeedbackCursista />,
    },
    {
      path: "ementa", // Definindo o caminho da nova página
      element: <Ementa />,
    },
    {
      path: "ouvidoria", // Definindo o caminho da nova página
      element: <Ouvidoria />,
    },
    {
      path: "test-connection", // Nova rota para teste de conexão
      element: <TestConnection />,
    },
    {
      path: "usuario-professorisf", // Definindo o caminho da nova página
      element: <UsuarioProfessorIsF />,
    },
    {
      path: "usuario-professorisf-edicao", // Definindo o caminho da nova página
      element: <UsuarioProfessorIsFEdicao />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
