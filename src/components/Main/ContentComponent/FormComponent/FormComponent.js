import React, { useState } from "react";

import { Typography, Space } from "antd";
import {
  Form,
  Input,
  Button,
  Radio,
  Tabs,
  Mentions,
  Select,
  DatePicker,
  TimePicker,
  Cascader,
  InputNumber,
} from "antd";
import { InfoCircleOutlined, SmileOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const FormComponent = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Title level={2}>Form</Title>
      <Space direction="vertical">
        <Title level={3}>Default form and required mark</Title>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          requiredMark={requiredMark}
          size={componentSize}
        >
          <Form.Item label="Required Mark" name="requiredMarkValue">
            <Radio.Group>
              <Radio.Button value="optional">Optional</Radio.Button>
              <Radio.Button value>Required</Radio.Button>
              <Radio.Button value={false}>Hidden</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Field A"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item
            label="Field B"
            tooltip={{
              title: "Tooltip with customize icon",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>

        <Title level={3}>Color validation</Title>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Error and Fail" key="1">
            <Form>
              <Form.Item
                label="inline"
                style={{
                  marginBottom: 0,
                }}
              >
                <Form.Item
                  validateStatus="error"
                  help="Please select right date"
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 12px)",
                  }}
                >
                  <DatePicker />
                </Form.Item>{" "}
              </Form.Item>

              <Form.Item label="Fail" validateStatus="error">
                <Mentions />
              </Form.Item>

              <Form.Item
                label="Fail"
                hasFeedback
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
              >
                <Input placeholder="unavailable choice" id="error2" />
              </Form.Item>

              <Form.Item
                label="Fail"
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
              >
                <Input placeholder="unavailable choice" id="error" />
              </Form.Item>

              <Form.Item label="Error" hasFeedback validateStatus="error">
                <Input.Password
                  allowClear
                  placeholder="with input password and allowClear"
                />
              </Form.Item>

              <Form.Item label="Error" hasFeedback validateStatus="error">
                <Select allowClear>
                  <Option value="1">Option 1</Option>
                  <Option value="2">Option 2</Option>
                  <Option value="3">Option 3</Option>
                </Select>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Warning" key="2">
            <Form>
              <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <Input.Password placeholder="with input password" />
              </Form.Item>

              <Form.Item label="Warning" validateStatus="warning">
                <Input
                  placeholder="Warning"
                  id="warning"
                  prefix={<SmileOutlined />}
                />
              </Form.Item>

              <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <Input placeholder="Warning" id="warning2" />
              </Form.Item>

              <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <TimePicker
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Success" key="3">
            <Form>
              <Form.Item label="Success" hasFeedback validateStatus="success">
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <Input placeholder="I'm the content" id="success" />
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <Input allowClear placeholder="with allowClear" />
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane tab="Validation" key="4">
            <Form>
              <Form.Item
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="The information is being validated..."
              >
                <Input
                  placeholder="I'm the content is being validated"
                  id="validating"
                />
              </Form.Item>

              <Form.Item
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="The information is being validated..."
              >
                <Cascader
                  options={[
                    {
                      value: "xx",
                      label: "xx",
                    },
                  ]}
                  allowClear
                />
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Space>
    </>
  );
};

export default FormComponent;
