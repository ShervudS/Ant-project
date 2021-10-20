import React, { useState } from "react";

import "antd/dist/antd.css";
import { Typography, Cascader } from "antd";

const { Title } = Typography;

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "item",
    label: "Item",
    children: [
      {
        value: "subitem",
        label: "Sub item",
        disabled: true,
        children: [
          {
            value: "subsubitem",
            label: "Sub Sub item",
          },
        ],
      },
      {
        value: "subitem 2",
        label: "Sub item 2",
        children: [
          {
            value: "subsubitem 2",
            label: "Sub Sub item 2",
          },
        ],
      },
    ],
  },
];

const CustomOptions = [
  {
    code: "zhejiang",
    name: "Zhejiang",
    child: [
      {
        code: "hangzhou",
        name: "Hangzhou",
        child: [
          {
            code: "xihu",
            name: "West Lake",
          },
        ],
      },
    ],
  },
  {
    code: "item",
    name: "Item",
    child: [
      {
        code: "subitem",
        name: "Sub item",
        disabled: true,
        child: [
          {
            value: "subsubitem",
            label: "Sub Sub item",
          },
        ],
      },
      {
        code: "subitem 2",
        name: "Sub item 2",
        child: [
          {
            code: "subsubitem 2",
            name: "Sub Sub item 2",
          },
        ],
      },
    ],
  },
]

const CascaderComponent = () => {
  const [text, setText] = useState("Unselect");

  const onChange = (value, selectedOptions) => {
    setText(selectedOptions.map((item) => item.label).join(", "));
  };

  const displayRender = (label) => label[label.length - 1];

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  return (
    <div>
      <Title level={2}>Cascader</Title>
      <Title level={3}>Cascader with input</Title>
      <Cascader options={options} placeholder="Please select" />
      <Title level={3}>Cascader with text</Title>
      <span>
        {text}&nbsp;
        <Cascader options={options} onChange={onChange}>
          <a href="#">Change city</a>
        </Cascader>
      </span>
      <Title level={3}>
        Cascader hover to expand menu or click to select option
      </Title>
      <Cascader
        options={options}
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
      />

      <Title level={3}>Change on select</Title>
      <Cascader options={options} onChange={onChange} changeOnSelect />

      <Title level={3}>Seacrch and secect cascader</Title>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
        showSearch={{ filter }}
      />

      <Title level={3}>Custom name option</Title>
      <Cascader
        fieldNames={{ label: 'name', value: 'code', children: 'child' }}
        options={CustomOptions}
        onChange={onChange}
        placeholder="Please select"
      />
    </div>
  );
};

export default CascaderComponent;
