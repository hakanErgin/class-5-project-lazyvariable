import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, Icon, Tooltip } from 'antd';

const { Meta } = Card;

const MetaCard = ({ data }) => {
  return (
    <Card
      style={{ width: '70vw' }}
      actions={[
        <a href={`mailto:${data.email}`}>
          <Tooltip title="Email">
            <Icon type="mail" />
          </Tooltip>
        </a>,
        <a href={data.website && `https://${data.website}`}>
          {/* !!!! :)
           */}
          <Tooltip title="Website">
            <Icon type="global" />,
          </Tooltip>
        </a>,
        <Tooltip title={data.phone}>
          <Icon type="phone" />,
        </Tooltip>,
        <Tooltip
          title={data.city && data.city + ' ' + data.country && data.country}
        >
          <Icon type="compass" />
        </Tooltip>
      ]}
    >
      <Grid fluid>
        <Row>
          <Col xs>
            <div>
              <Meta title={data.name && data.name} />
            </div>
            <div>
              <p>{data.about}</p>
            </div>
          </Col>
          <Col xs={2}>
            <img alt="example" src={data.avatar} style={{ width: '10vw' }} />
          </Col>
        </Row>
      </Grid>
    </Card>
  );
};

export default MetaCard;
