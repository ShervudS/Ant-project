import React, { useState } from "react";

import "antd/dist/antd.css";
import { Typography, Steps, Button, message } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Step } = Steps;

const stepsData = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const StepsComponent = () => {
  const [current, setCurrent] = useState(0);
  const nextCurrent = () => setCurrent((prev) => prev + 1);
  const prevCurrent = () => setCurrent((prev) => prev - 1);

  const currentChange = (current) => setCurrent(current);

  const currentValue = current;

  return (
    <div>
      <Title level={2}>Steps navigation</Title>
      <Title level={3}>Default steps navigation</Title>
      <Steps current={1} size="small">
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Title level={3}>Steps with icon</Title>
      <Steps size={"small"}>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step
          status="finish"
          title="Verification"
          icon={<SolutionOutlined />}
        />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
      <Title level={3}>
        Steps with the content and button, next and previous step
      </Title>
      <Steps current={current}>
        {stepsData.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{stepsData[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prevCurrent}>
            Previous
          </Button>
        )}
        {current === stepsData.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current < stepsData.length - 1 && (
          <Button type="primary" onClick={nextCurrent}>
            Next
          </Button>
        )}
      </div>
      <Title level={3}>Clicable steps</Title>
      <Steps current={currentValue} onChange={currentChange}>
        <Step title="Step 1" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" description="This is a description." />
      </Steps>
      <Title level={3}>Steps orintation</Title>
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Title level={3}>Steps or error for step</Title>
      <Steps current={1} status="error">
        <Step title="Finished" description="This is a description" />
        <Step title="In Process" description="This is a description" />
        <Step title="Waiting" description="This is a description" />
      </Steps>
      <Title level={3}>Doted style steps</Title>
      <Steps progressDot current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>

      <Title level={3}>Steps progress</Title>
      <Steps current={1} percent={40}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  );
};

export default StepsComponent;
