import React, { useState, useContext } from "react";
import "./HeaderComponent.scss";

import UserProfile from "./UserProfile/UserProfile";
import { AppContext } from "../../App/App";

import "antd/dist/antd.css";
import { Layout, Menu, Dropdown, Switch, Button, Avatar, Space } from "antd";
import {
  PoweroffOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const HeaderComponent = () => {
  const { toggleIsAuth } = useContext(AppContext);

  const [theme, setTheme] = useState("dark");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>

      <Dropdown overlay={<UserProfile />} trigger={["click"]}>
        <a className="ant-dropdown-link" href onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar icon={<UserOutlined />} />
            Click me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <div>
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Button onClick={toggleIsAuth} type="default">
          <PoweroffOutlined /> Log out
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
