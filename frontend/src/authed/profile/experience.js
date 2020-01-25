import React from 'react';
import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Experience = ({ inputs, handleInputChange, onExpDateChange }) => {
  // ADDING MORE EXPERIENCES IS NOT SUPPORTED ATM

  // const handleAddFields = () => {
  //   const values = [...inputs];
  //   values.push({
  //     workTitle: '',
  //     companyName: '',
  //     companyLocation: '',
  //     employmentType: '',
  //     jobDescription: '',
  //     experienceDate: ''
  //   });
  //   setInputs(values);
  // };

  // const handleRemoveFields = index => {
  //   const values = [...inputs];
  //   values.splice(index, 1);
  //   setInputs(values);
  // };

  const {
    workTitle,
    companyName,
    companyLocation,
    employmentType,
    jobDescription
  } = inputs;

  return (
    <div className="customStyle">
      <Title level={3}>Work experience</Title>
      <Form autoComplete="off">
        <Form.Item label="Title">
          <Input
            name="workTitle"
            onChange={handleInputChange}
            placeholder={workTitle}
            value={inputs.workTitle}
          />
        </Form.Item>
        <Form.Item label="Company Name">
          <Input
            placeholder={companyName}
            name="companyName"
            onChange={handleInputChange}
            value={inputs.companyName}
          />
        </Form.Item>
        <Form.Item label="Company Location">
          <Input
            placeholder={companyLocation}
            name="companyLocation"
            onChange={handleInputChange}
            value={inputs.companyLocation}
          />
        </Form.Item>
        <Form.Item label="Employment type" autoComplete="on">
          <Input
            placeholder={employmentType}
            name="employmentType"
            onChange={handleInputChange}
            value={inputs.employmentType}
          />
        </Form.Item>

        {/*<Form.Item label="Employment Type">
              <Cascader
                label="Employment type"
                options={options}
                onChange={handleInputChangeCascade}
                placeholder="Please select"
              />
            </Form.Item>*/}

        <Form.Item label="Description">
          <TextArea
            className="newInput"
            rows={4}
            placeholder={jobDescription}
            name="jobDescription"
            onChange={handleInputChange}
            value={inputs.jobDescription}
          />
        </Form.Item>
        <Form.Item label="Date">
          <RangePicker onChange={onExpDateChange} name="experienceDate" />
        </Form.Item>
        {/* <Form.Item>
              <Button
                type="dashed"
                style={{ width: '60%' }}
                onClick={() => handleRemoveFields(index)}
              >
                <Icon type="plus" /> Remove work
              </Button>
            </Form.Item>
          </Fragment>
\        <Form.Item>
          <Button
            type="dashed"
            style={{ width: '60%' }}
            onClick={() => handleAddFields()}
          >
            <Icon type="plus" /> Add work
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default Experience;
