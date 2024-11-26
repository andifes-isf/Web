import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { FiHome, FiUser, FiFileText } from "react-icons/fi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box
      {...props}
      width={collapsed ? "80px" : "280px"}
      collapsedWidth="80px"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 270 } }}
      as={Sidebar}
      display="flex"
      flexDirection="column"
      bg="white"
      boxShadow="xs"
      h="100vh"
      top="0px"
      overflow="visible" // Permite que o submenu seja exibido corretamente
      borderRadius="4px"
      position="relative"
      zIndex="10" // Garante que a sidebar esteja sobre o conteúdo da página
    >
      <Box
        menuItemStyles={{
          button: {
            padding: "6px 6px 6px 16px",
            gap: "7px",
            color: "#191d23",
            fontWeight: 600,
            fontSize: "16px",
            [`&:hover, &.ps-active`]: { color: "#000000", backgroundColor: "#f7f7f7 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "10px" } }}
        as={Menu}
        display="flex"
        alignSelf="stretch"
        flexDirection="column"
        w="100%"
      >
        {/* Botão Home */}
        <MenuItem
          icon={<FiHome size={24} color="black" />}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "8px",
            padding: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          {!collapsed && "Home"}
        </MenuItem>

        {/* Botão Cursista */}
        <MenuItem
          icon={<FiUser size={16} />}
          style={{
            paddingLeft: "16px",
            position: "relative",
          }}
        >
          {!collapsed && "Cursista"}
        </MenuItem>

        {/* Botão Horas Práticas */}
        <MenuItem
          icon={<FiFileText size={16} />}
          style={{
            paddingLeft: "16px",
            position: "relative",
          }}
        >
          {!collapsed && "Horas Práticas"}
        </MenuItem>

        {/* Botão Horas Teóricas */}
        <MenuItem
          icon={<FiFileText size={16} />}
          style={{
            paddingLeft: "16px",
            position: "relative",
          }}
        >
          {!collapsed && "Horas Teóricas"}
        </MenuItem>

        {/* Botão Orientação */}
        <MenuItem
          icon={<FiFileText size={16} />}
          style={{
            paddingLeft: "16px",
            position: "relative",
          }}
        >
          {!collapsed && "Orientação"}
        </MenuItem>

        {/* Botão para expandir/contrair a Sidebar */}
        <Flex alignSelf="center" alignItems="center" mt="4" mb="4">
          <IconButton
            icon={collapsed ? <AiOutlineRight /> : <AiOutlineLeft />}
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            bg="transparent"
            _hover={{ bg: "gray.100" }}
            size="lg"
          />
        </Flex>
      </Box>
    </Box>
  );
}
