import React from 'react';
import './customStyle.css';
import { Form, Input, /*Button,*/ Typography } from 'antd';
import HEROKU_URI from '../../helpers/herokuHelper' 

const { Title } = Typography;
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

const Personal = ({ setSelected, inputs, handleSubmit, handleInputChange }) => {
  //console.log('personal inputs', inputs);

  const res = useFetch(`${HEROKU_URI}/user/${localStorage.getItem('ID')}`);

  if (!res.response) {
    return null;
  }
  const email = res.response.email;
  const name = res.response.name;
  const about = res.response.about;
  const website = res.response.website;
  const phone = res.response.phone;
  const country = res.response.country;
  const city = res.response.city;

  //console.log(name);

  return (
    <div className="customStyle">
      <Title level={3}>Personal & Contact information</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Name">
          <Input
            name="name"
            onChange={handleInputChange}
            placeholder={name}
            value={inputs.name}
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
            value={inputs.about}
          />
        </Form.Item>
        <Form.Item label="Telephone Number">
          <Input
            placeholder={phone}
            name="phone"
            onChange={handleInputChange}
            value={inputs.phone}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder={email}
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            placeholder={country}
            name="country"
            onChange={handleInputChange}
            value={inputs.country}
            //value={inputs.country}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input placeholder={city} name="city" onChange={handleInputChange} value={inputs.city} />
        </Form.Item>

        <Form.Item label="Website">
          <Input
            placeholder={website}
            name="website"
            onChange={handleInputChange}
            value={inputs.website}
          />
        </Form.Item>
        {/* <Form.Item>
          <Link to="/auth/profile/experience">
            <Button
              type="primary"
              onClick={() => {
                return (
                  <div>
                    <Route>
                      <Experience />
                    </Route>
                  </div>
                );
              }}
            >
              Next
            </Button>
          </Link>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default Personal;
