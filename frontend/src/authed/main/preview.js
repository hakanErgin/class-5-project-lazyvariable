import React from 'react';
import { useState, useEffect } from 'react';
import userFields from './profile/handlers/fieldData';

import '../../styles/preview.css';
import MetaCard from './profile/handlers/MetaCard';
import InfoCard from './profile/handlers/InfoCard';
import GitHubCard from './profile/handlers/GitHubCard';

const Preview = ({ avatar, CheckDb }) => {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckDb()
      .then(inputs => {
        setInputs(inputs);
      })
      .then(() => inputs && setLoading(false));
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

  // function to combine two arrays(keys and values) in one object. to be completely renamed
  const combineArr = (keys, values, type) => {
    const result = {};
    const nr = keys.length;
    for (let i = 0; i <= nr; i++) {
      const key = keys[i];
      result[key] = values[i];
    }
    return { [type]: result };
  };

  //storage for the mapping. To be renamed
  let res = [];

  Object.keys(fields).map(key => {
    switch (key) {
      //we handle personal information in the MetaCard
      case 'personalFields':
        break;
      case 'skills':
        res.push({ skills: inputs[key] });
        break;
      case 'gitHub':
        const values = [];
        inputs[key].map(input => {
          values.push(input);
        });
        res.push({ Github: values });
        break;
      default:
        let val = [];
        let keyToPrint = [];

        inputs[key].map(input => {
          if (!input) {
            return;
          }
          fields[key].map(childField => {
            const objKeys = Object.keys(childField)[0];
            val.push(input[objKeys]);
            keyToPrint.push(childField[objKeys]);
          });
          if (input['startDate'] && input['endDate']) {
            keyToPrint.push('Dates');
            val.push(`${input['startDate']} - ${input['endDate']}`);
          }
        });
        val.length != 0 && res.push(combineArr(keyToPrint, val, key));
    }
  });

  return (
    <div id="preview">
      <MetaCard
        data={{ avatar, name, email, about, website, phone, country, city }}
      />
      {res.map(r => {
        return r['Github'] ? <GitHubCard data={r} /> : <InfoCard data={r} />;
      })}
    </div>
  );
};

export default Preview;
