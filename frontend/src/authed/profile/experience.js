import React, { useState, Fragment } from 'react';
import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';
import REACT_APP_BACKEND_URI from '../../helpers/herokuHelper'

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const useFetch = url => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, [url]);
  return { response, error };
};

const Experience = ({
  inputs,
  handleSubmit,
  handleInputChange,
  handleInputChangeCascade,
  onExpDateChange,
}) => {
  const [inputFields, setInputFields] = useState([
    {
      workTitle: '',
      companyName: '',
      companyLocation: '',
      employmentType: '',
      jobDescription: '',
      experienceDate: '',
    },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      workTitle: '',
      companyName: '',
      companyLocation: '',
      employmentType: '',
      jobDescription: '',
      experienceDate: '',
    });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const res = useFetch(`${REACT_APP_BACKEND_URI}/user/${localStorage.getItem('ID')}`);

  if (!res.response) {
    return null;
  }
  const workTitle = res.response.workTitle;
  const companyName = res.response.companyName;
  const companyLocation = res.response.companyLocation;
  const employmentType = res.response.employmentType;
  const jobDescription = res.response.jobDescription;

  return (
    <div className="customStyle">
      <Title level={3}>Work experience</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
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
            <Form.Item>
              <Button
                type="dashed"
                style={{ width: '60%' }}
                onClick={() => handleRemoveFields(index)}
              >
                <Icon type="plus" /> Remove work
              </Button>
            </Form.Item>
          </Fragment>
        ))}
        <Form.Item>
          <Button type="dashed" style={{ width: '60%' }} onClick={() => handleAddFields()}>
            <Icon type="plus" /> Add work
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Experience;
