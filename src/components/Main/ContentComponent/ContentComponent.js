import React from "react";

import DropdownComponent from "./DropdownComponent/DropdownComponent";
import PageHeaderComponent from "./PageHeaderComponent/PageHeaderComponent";
import StepsComponent from "./StepsComponent/StepsComponent";
import AutoCompleteComponent from "./AutoCompleteComponent/AutoCompleteComponent";

import { Layout } from "antd";
import CascaderComponent from "./CascaderComponent/CascaderComponent";
const { Content } = Layout;

const ContentComponent = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        overflowY: 'scroll',
        overflowX: 'hidden'
      }}
    >
      <CascaderComponent />
      <AutoCompleteComponent />
      <DropdownComponent />
      <PageHeaderComponent />
      <StepsComponent />
    </Content>
  );
};

export default ContentComponent;
