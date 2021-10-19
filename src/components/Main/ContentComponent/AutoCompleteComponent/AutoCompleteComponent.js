import React, { useState } from "react";

import "antd/dist/antd.css";
import { Typography, AutoComplete, Input, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { TextArea } = Input;
const { Option } = AutoComplete;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompleteComponent = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{
          float: "right",
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );

  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });

  const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  };

  const searchResult = (query) =>
    new Array(getRandomInt(5))
      .join(".")
      .split(".")
      .map((_, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Found {query} on{" "}
                <a
                  href={`https://s.taobao.com/search?q=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category}
                </a>
              </span>
              <span>{getRandomInt(200, 100)} results</span>
            </div>
          ),
        };
      });

  const [result, setResult] = useState([]);

  const handleResults = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  const [optionsResults, setOptionsResults] = useState([]);

  const handleSearch = (value) => {
    setOptionsResults(value ? searchResult(value) : []);
  };

  const option = [
    {
      label: renderTitle("Libraries"),
      options: [
        renderItem("AntDesign", 10000),
        renderItem("AntDesign UI", 10600),
      ],
    },
    {
      label: renderTitle("Solutions"),
      options: [
        renderItem("AntDesign UI FAQ", 60100),
        renderItem("AntDesign FAQ", 30010),
      ],
    },
    {
      label: renderTitle("Articles"),
      options: [renderItem("AntDesign design language", 100000)],
    },
  ];

  const optionsSynbol = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];

  return (
    <div>
      <Title level={2}>Auto Complete inputs</Title>
      <Space>
        <AutoComplete
          value={value}
          options={options}
          style={{
            width: 200,
          }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          placeholder="input here"
        />

        <AutoComplete
          options={options}
          style={{
            width: 200,
          }}
          onSelect={onSelect}
        >
          <TextArea
            placeholder="input here"
            className="custom"
            style={{
              height: 50,
              maxHeight: 200,
            }}
          />
        </AutoComplete>
      </Space>

      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{
          width: 250,
        }}
        options={option}
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>

      <Title level={3}>Auto Complete email</Title>
      <AutoComplete
        style={{
          width: 200,
        }}
        onSearch={handleSearch}
        placeholder="input here"
      >
        {result.map((email) => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AutoComplete>

      <Title level={3}>Auto Complete wifh symbol</Title>
      <AutoComplete
        style={{
          width: 200,
        }}
        options={optionsSynbol}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />

      <Title level={3}>Search in category and Auto Complete</Title>
      <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={optionsResults}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
    </div>
  );
};

export default AutoCompleteComponent;
