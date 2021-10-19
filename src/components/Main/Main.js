import React from "react";
import "./Main.scss";

import "antd/dist/antd.css";

import HeaderComponent from "./HeaderComponent/HeaderComponent";
import AsideComponent from "./AsideComponent/AsideComponent";

import { Layout,Breadcrumb } from "antd";
import ContentComponent from "./ContentComponent/ContentComponent";

const Main = () => {

  return (
    <div className="main">
      <Layout className="main__content">
        <HeaderComponent/>

        <Layout>
          <AsideComponent />

          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <ContentComponent />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Main;
