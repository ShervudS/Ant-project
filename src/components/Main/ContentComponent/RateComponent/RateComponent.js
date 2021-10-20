import React, { useState } from "react";
import './RateComponent.scss'

import { Typography, Space, Rate } from "antd";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  HeartOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const RateComponent = () => {
  const [rateValue, setRateValue] = useState(3);

  const handleRate = (value) => setRateValue(value);

  return (
    <>
      <Title level={2}>Rate</Title>
      <Space direction="vertical">
        <Title level={3}>Default Rate</Title>
        <Space
          style={{
            backgroundColor: "#333",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          <Rate tooltips={desc} onChange={handleRate} value={rateValue} />
          {rateValue ? (
            <span className="ant-rate-text" style={{ color: "#fff" }}>
              {desc[rateValue - 1]}
            </span>
          ) : (
            ""
          )}
        </Space>

        <Title level={3}>Custom Icon rate</Title>
        <Space wrap>
          <Rate character={<HeartOutlined />} allowHalf className="Rate-bg" />
          <Rate
            character="A"
            allowHalf
            style={{ fontSize: 20 }}
            className="Rate-bg"
          />
          <Rate character="好" allowHalf className="Rate-bg" />
          <Rate
            defaultValue={2}
            character={({ index }) => index + 1}
            className="Rate-bg"
          />
          <Rate
            defaultValue={3}
            character={({ index }) => customIcons[index + 1]}
            className="Rate-bg"
          />
        </Space>

        <Title level={3}>Select half star</Title>
        <Rate allowHalf defaultValue={2.5} className="Rate-bg" />
      </Space>
    </>
  );
};

export default RateComponent;
