import React, { useState } from "react";

import { Typography, Space, message, Button, Checkbox } from "antd";

const { Title } = Typography;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const CheckboxComponent = () => {
  const [stateCheckBox, setStateCheckBox] = useState({
    checked: true,
    disabled: false,
  });

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const toggleChecked = () => {
    setStateCheckBox((prev) => {
      return {
        ...prev,
        checked: !prev.checked,
      };
    });
  };

  const toggleDisable = () => {
    setStateCheckBox((prev) => {
      return {
        ...prev,
        disabled: !prev.disabled,
      };
    });
  };

  const onChange = (e) => {
    message.info(`checked = ${e.target.checked}`);
  };

  const onChangeLabel = (e) => {
    onChange(e);
    toggleChecked();
  };

  const onChageGroup = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const label = `${stateCheckBox.checked ? "checked" : "Unchecked"}-${
    stateCheckBox.disabled ? "Disabled" : "Enabled"
  } `;

  return (
    <div>
      <Title level={2}>Checkbox</Title>
      <Checkbox onChange={onChange}>Default Checkbox</Checkbox>

      <Title level={3}>Checkbox and control </Title>
      <Space>
        <Checkbox
          checked={stateCheckBox.checked}
          disabled={stateCheckBox.disabled}
          onChange={onChangeLabel}
        >
          {label}
        </Checkbox>

        <Button type="primary" size="small" onClick={toggleChecked}>
          {!stateCheckBox.checked ? "Check" : "Uncheck"}
        </Button>

        <Button
          style={{ margin: "0 10px" }}
          type="primary"
          size="small"
          onClick={toggleDisable}
        >
          {!stateCheckBox.disabled ? "Disable" : "Enable"}
        </Button>
      </Space>

      <Title level={3}>Checked group checkbox</Title>
      <Space>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChageGroup}
        />
      </Space>
    </div>
  );
};

export default CheckboxComponent;
