import React from 'react';
import { useState, useEffect } from 'react';
import userFields from './profile/handlers/fieldData';
import previewHandler from './profile/handlers/previewHandler';
import '../../styles/preview.css';
import MetaCard from './profile/cards/MetaCard';
import InfoCard from './profile/cards/InfoCard';
import GitHubCard from './profile/cards/GitHubCard';
import { Card } from 'antd';

const Preview = ({ avatar, CheckDb }) => {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckDb()
      .then(inputs => {
        setInputs(inputs);
      })
      .then(() => inputs && setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return null;
  }

  const {
    name,
    email,
    about,
    website,
    phone,
    country,
    city
  } = inputs.personalFields;

  const fields = {
    ...userFields,
    gitHub: [
      { title: 'Project Name' },
      { description: 'Description' },
      { repository: 'Link' }
    ]
  };

  const preview = previewHandler(fields, inputs);
  return (
    <div id="preview">
      <MetaCard
        data={{ avatar, name, email, about, website, phone, country, city }}
      />
      {preview.map((r, key) => {
        if (r['Github'] && r['Github'].length !== 0) {
          return (
            <Card title="Github Projects" key={key} className="card">
              <GitHubCard data={r} />
            </Card>
          );
        } else if (r && Object.values(r)[0].length !== 0) {
          // make sure that an empty card doesn't appear after inserting and then deleting data
          const firstChild = Object.values(r)[0];
          let notEmptyFields = 0;
          Object.values(firstChild).forEach(field => {
            field && notEmptyFields++;
          });
          return notEmptyFields !== 0 && <InfoCard data={r} key={key} />;
        }
        return;
      })}
    </div>
  );
};

export default Preview;
