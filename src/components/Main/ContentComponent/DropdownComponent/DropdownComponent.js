import React from "react";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  Typography,
  Menu,
  Dropdown,
  Button,
  Space,
  Tooltip,
  message,
} from "antd";
const { SubMenu } = Menu;
const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="/">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const subItemMenu = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const DropdownComponent = () => {
  const handleButtonClick = () => {
    message.info("Click on left button.");
  };

  return (
    <div>
      <Title level={2}>Dropdown label</Title>

      <Title level={3}>For hover</Title>
      <Space wrap>
        <Dropdown overlay={menu}>
          <a
            className="ant-dropdown-link"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            Hover me <DownOutlined />
          </a>
        </Dropdown>

        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button>bottomLeft</Button>
        </Dropdown>

        <Dropdown overlay={menu} placement="topCenter" arrow>
          <Button>topCenter</Button>
        </Dropdown>

        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
      </Space>

      <Title level={3}>For click</Title>
      <Space wrap>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a
            className="ant-dropdown-link"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            Click me <DownOutlined />
          </a>
        </Dropdown>
      </Space>

      <Title level={3}>Button with dropdown menu</Title>
      <Space wrap>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          Dropdown
        </Dropdown.Button>

        <Dropdown.Button
          overlay={menu}
          placement="bottomCenter"
          icon={<UserOutlined />}
        >
          Dropdown
        </Dropdown.Button>

        <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
          Dropdown
        </Dropdown.Button>

        <Dropdown.Button
          overlay={menu}
          buttonsRender={([leftButton, rightButton]) => [
            <Tooltip title="tooltip" key="leftButton">
              {leftButton}
            </Tooltip>,
            React.cloneElement(rightButton, { loading: true }),
          ]}
        >
          With Tooltip
        </Dropdown.Button>

        <Dropdown overlay={menu}>
          <Button>
            Button <DownOutlined />
          </Button>
        </Dropdown>
      </Space>

      <Title level={3}>Placement</Title>
      <Space wrap>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomCenter">
          <Button>bottomCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button>bottomRight</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topLeft">
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topCenter">
          <Button>topCenter</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topRight">
          <Button>topRight</Button>
        </Dropdown>
      </Space>

      <Title level={3}>Button with menu has multiple levels</Title>
      <Dropdown overlay={subItemMenu}>
        <a
          className="ant-dropdown-link"
          href="/"
          onClick={(e) => e.preventDefault()}
        >
          Cascading menu <DownOutlined />
        </a>
      </Dropdown>

      <Title level={3}>Rigth click on open menu</Title>
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <div
          className="site-dropdown-context-menu"
          style={{
            border: "1px solid #000",
            textAlign: "center",
            height: 200,
            lineHeight: "200px",
          }}
        >
          Right Click on here
        </div>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
