import { Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { FiHome, FiUser, FiBook, FiFileText } from "react-icons/fi";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
      gap={{ md: "270px", base: "135px", sm: "202px" }}
      display="flex"
      flexDirection="column"
      bg="white.a700"
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
            backgroundColor: "#f0f0f0",
            color: "black",
            borderRadius: "8px",
            padding: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontWeight: "bold",
            backgroundColor: "white", // Fundo sólido
            zIndex: "100",
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
            zIndex: "100",
            position: "relative",
          }}
        >
          {!collapsed && "Cursista"}
        </MenuItem>

        {/* Botão Matérias */}
        <MenuItem
          icon={<FiBook size={16} />}
          style={{
            paddingLeft: "16px",
            zIndex: "100",
            position: "relative",
          }}
        >
          {!collapsed && "Matérias"}
        </MenuItem>

        {/* Submenu Relatórios */}
        <SubMenu
          label="Relatórios"
          icon={<FiFileText size={16} />}
          style={{
            paddingLeft: "16px",
            display: "flex",
            alignItems: "center",
            zIndex: "100", // Z-index alto para garantir que cubra o conteúdo
            position: "relative",
            borderRadius: "4px",
          }}
          componentsProps={{
            expandIcon: {
              render: ({ open }) =>
                open ? (
                  <IconButton
                    icon={<AiOutlineDown />}
                    aria-label="Expandir Submenu"
                    variant="unstyled"
                    size="sm"
                  />
                ) : (
                  <IconButton
                    icon={<AiOutlineRight />}
                    aria-label="Expandir Submenu"
                    variant="unstyled"
                    size="sm"
                  />
                ),
              style: { alignSelf: 'center' },
            },
          }}
        >
          <MenuItem
            style={{
              paddingLeft: "32px",
              fontSize: "14px",
              zIndex: "100",
              position: "relative",
              backgroundColor: "white", // Cor de fundo sólida para o item
            }}
          >
            Horas Práticas
          </MenuItem>
          <MenuItem
            style={{
              paddingLeft: "32px",
              fontSize: "14px",
              zIndex: "100",
              position: "relative",
              backgroundColor: "white", // Cor de fundo sólida para o item
            }}
          >
            Horas Teóricas
          </MenuItem>
          <MenuItem
            style={{
              paddingLeft: "32px",
              fontSize: "14px",
              zIndex: "100",
              position: "relative",
              backgroundColor: "white", // Cor de fundo sólida para o item
            }}
          >
            Orientação
          </MenuItem>
        </SubMenu>

        {/* Botão para expandir/contrair a Sidebar logo abaixo de Relatórios */}
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
