import React, { useState } from "react";
import "./asideComponent.scss";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";

import { Layout, Switch, Menu, Divider, Button } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AsideComponent = () => {
  const [mode, setMode] = useState("inline");
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const rootSubmenuKeys = ["sub1", "sub2", "sub3"];
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const [isAsideCollapse, setIsAsideCollapse] = useState(false);
  const asideCollapseHandler = () => {
    setIsAsideCollapse((prev) => !prev);
  };

  return (
    <Sider
      width={200}
      className="site-layout"
      trigger={null}
      collapsible
      collapsed={isAsideCollapse}
    >
      <Menu
        mode={mode}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
          <Menu.ItemGroup key="group1" title="Gropup menu one">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
          </Menu.ItemGroup>

          <Menu.ItemGroup key="group2" title="Gropup menu two">
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Navigation">
          <Menu.Item key="5">Dropdown</Menu.Item>
          <Menu.Item key="6">Page Header</Menu.Item>
          <Menu.Item key="7">Steps navigation</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Data Entry">
          <Menu.Item key="9">Auto complete</Menu.Item>
          <Menu.Item key="10">Cascader</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
      <Divider></Divider>
      <Switch onChange={changeMode} 
      disabled={isAsideCollapse ? true : false}
      /> Change Mode
      <Button 
        onClick={asideCollapseHandler}
      >
        { isAsideCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </Button>
    </Sider>
  );
};

export default AsideComponent;
