import React from 'react';
import { Form, Input, Typography } from 'antd';
import REACT_APP_BACKEND_URI from '../../helpers/herokuHelper';
import useSignUpForm from '../profile/handlers/InputHooks';

const { Title } = Typography;
const { TextArea } = Input;

const Personal = ({ setSelected }) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { handleSubmit } = useSignUpForm();

  const useFetch = url => {
    React.useEffect(() => {
      const FetchData = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          console.log('json', json);
          const { email, name, about, website, phone, country, city } = json;

          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      FetchData();
    }, [url]);
    return { response, error };
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setResponse({ ...response, [name]: value });
  };

  const res = useFetch(
    `${REACT_APP_BACKEND_URI}/user/${localStorage.getItem('ID')}`
  );

  if (!res.response) {
    return null;
  }
  const { email, name, about, website, phone, country, city } = res.response;

  return (
    <div className="customStyle">
      <Title level={3}>Personal & Contact information</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Name">
          <Input
            name="name"
            onChange={handleInputChange}
            placeholder={name}
            value={response.name}
            required
          />
        </Form.Item>
        <Form.Item label="About">
          <TextArea
            className="newInput"
            rows={4}
            placeholder={about}
            name="about"
            onChange={handleInputChange}
            value={response.about}
          />
        </Form.Item>
        <Form.Item label="Telephone Number">
          <Input
            placeholder={phone}
            name="phone"
            onChange={handleInputChange}
            value={response.phone}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder={email}
            name="email"
            onChange={handleInputChange}
            value={response.email}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            placeholder={country}
            name="country"
            onChange={handleInputChange}
            value={response.country}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input
            placeholder={city}
            name="city"
            onChange={handleInputChange}
            value={response.city}
          />
        </Form.Item>

        <Form.Item label="Website">
          <Input
            placeholder={website}
            name="website"
            onChange={handleInputChange}
            value={response.website}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Personal;
