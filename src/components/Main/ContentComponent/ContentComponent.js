import React from "react";

import { Route } from "react-router-dom";
import DropdownComponent from "./DropdownComponent/DropdownComponent";
import PageHeaderComponent from "./PageHeaderComponent/PageHeaderComponent";
import StepsComponent from "./StepsComponent/StepsComponent";
import AutoCompleteComponent from "./AutoCompleteComponent/AutoCompleteComponent";
import CheckboxComponent from "./CheckboxComponent/CheckboxComponent";
import DatepickerComponent from "./DatepickerComponent/DatepickerComponent";
import FormComponent from "./FormComponent/FormComponent";
import RateComponent from "./RateComponent/RateComponent";

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
      <Route path='/' exact render={ ()=> <h1>Home page</h1>} />
      <Route path='/AutoComplete' component={AutoCompleteComponent} />
      <Route path='/Dropdown' component={DropdownComponent} />
      <Route path='/Pageheader' component={PageHeaderComponent} />
      <Route path='/Steps' component={StepsComponent} />
      <Route path='/Cascader' component={CascaderComponent} />
      <Route path='/Checkbox' component={CheckboxComponent} />
      <Route path='/Datepicker' component={DatepickerComponent} />
      <Route path='/Form' component={FormComponent} />
      <Route path='/Rate' component={RateComponent} />

    </Content>
  );
};

export default ContentComponent;
