import React from 'react';
import './customStyle.css';

import { Form, Input, Button, Typography } from 'antd';
import HEROKU_URI from '../../helpers/herokuHelper'

const { Title } = Typography;

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

const Skills = ({ inputs, handleSubmit, handleInputChange }) => {
  /* const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      skills: '',
    },
    handleOnclick,
  ); */

  const res = useFetch(`${HEROKU_URI}/user/${localStorage.getItem('ID')}`);

  if (!res.response) {
    return null;
  }
  const skills = res.response.skills;

  return (
    <div className="customStyle">
      <Title level={3}>Skills</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input
            placeholder={skills}
            name="skills"
            onChange={handleInputChange}
            value={inputs.skills}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
