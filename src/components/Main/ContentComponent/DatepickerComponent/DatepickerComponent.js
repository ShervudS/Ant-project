import React, {useState} from "react";

import { Typography, Space, message, DatePicker } from "antd";

const { Title } = Typography;
const { RangePicker } = DatePicker;

const DatepickerComponent = () => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate;
  };

  const onChange = (date, dateString) => {
    message.info(date, dateString);
  };

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <>
      <Title level={2}>DatePicker</Title>

      <Space direction="vertical">
        <Title level={3}>Default DatePicker</Title>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="month" />
          <DatePicker onChange={onChange} picker="quarter" />
          <DatePicker onChange={onChange} picker="year" />
        </Space>

        <Title level={3}>Range DatePicker</Title>
        <Space direction="vertical">
          <RangePicker />
          <RangePicker showTime />
          <RangePicker picker="week" />
          <RangePicker picker="month" />
          <RangePicker picker="year" />
        </Space>

        <Title level={3}>Customized Date Rendering</Title>
        <Space>
          <DatePicker
            dateRender={(current) => {
              const style = {};
              if (current.date() === 1) {
                style.border = "1px solid #1890ff";
                style.borderRadius = "50%";
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
          />
          <RangePicker
            dateRender={(current) => {
              const style = {};
              if (current.date() === 1) {
                style.border = "1px solid #1890ff";
                style.borderRadius = "50%";
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
          />
        </Space>

        <Title level={3}>Select range dates in 7 days Rendering</Title>
        <Space>
          <RangePicker
            value={hackValue || value}
            disabledDate={disabledDate}
            onCalendarChange={(val) => setDates(val)}
            onChange={(val) => setValue(val)}
            onOpenChange={onOpenChange}
          />
        </Space>
      </Space>
    </>
  );
};

export default DatepickerComponent;
