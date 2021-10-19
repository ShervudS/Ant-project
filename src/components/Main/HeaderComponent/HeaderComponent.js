import React, { useState } from "react";
import './HeaderComponent.scss'

import 'antd/dist/antd.css';
import { Layout, Menu, Switch } from "antd";
const { Header } = Layout;

const HeaderComponent = () => {
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
      <div>
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
