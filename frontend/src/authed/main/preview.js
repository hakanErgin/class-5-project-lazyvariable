import React from 'react';
import { useState, useEffect } from 'react';
import fields from './profile/handlers/fieldData';

import '../../styles/preview.css';
import MetaCard from './profile/handlers/MetaCard';
import InfoCard from './profile/handlers/InfoCard';

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

  console.log('inputs', inputs);

  // function to combine two arrays(keys and values) in one object. to be completely renamed
  const combineArr = (keys, values, type) => {
    const result = {};
    const nr = keys.length;
    for (let i = 0; i <= nr; i++) {
      const key = keys[i];
      result[key] = values[i];
    }
    const completeResult = { [type]: result };
    return completeResult;
  };

  //storage for the mapping. To be renamed
  let res = [];

  Object.keys(fields).map(key => {
    // this [0] should be removed if we want to support arrays
    let input = inputs[key][0];

    //we handle personal information in the MetaCard
    if (key === 'personalFields') {
      return;
    } else if (key === 'skills') {
      res.push({ skills: inputs[key] });
    }

    console.log('input', input);

    let val = [];
    let keyToPrint = [];

    fields[key].map(childField => {
      console.log('childField', childField);

      const objKeys = Object.keys(childField)[0];

      console.log('objKeys', objKeys);

      if (!input) {
        return;
      }
      val.push(input[objKeys]);
      keyToPrint.push(childField[objKeys]);
    });
    if (input['startDate'] && input['endDate']) {
      keyToPrint.push('Dates');
      val.push(`${input['startDate']} - ${input['endDate']}`);
    }
    val.length != 0 && res.push(combineArr(keyToPrint, val, key));
  });

  console.log('res', res);

  return (
    <div id="preview">
      <MetaCard
        data={{ avatar, name, email, about, website, phone, country, city }}
      />
      {res.map(r => {
        return <InfoCard data={r} />;
      })}
    </div>
  );
};

export default Preview;
