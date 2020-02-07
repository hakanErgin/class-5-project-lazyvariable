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

const previewHandler = (fields, inputs) => {
  //storage for the mapping. To be renamed
  let res = [];

  const defaultHandler = key => {
    let val = [];
    let keyToPrint = [];

    inputs[key].forEach(input => {
      if (!input) {
        return;
      }
      fields[key].forEach(childField => {
        const objKeys = Object.keys(childField)[0];
        val.push(input[objKeys]);
        keyToPrint.push(childField[objKeys]);
      });
      if (input['startDate'] && input['endDate']) {
        keyToPrint.push('Dates');
        val.push(`${input['startDate']} - ${input['endDate']}`);
      }
    });
    val.length !== 0 && res.push(combineArr(keyToPrint, val, key));
  };

  Object.keys(fields).forEach(key => {
    switch (key) {
      //we handle personal information in the MetaCard
      case 'personalFields':
        break;
      case 'skills':
        res.push({ skills: inputs[key] });
        break;
      case 'gitHub':
        const values = [];
        inputs[key].forEach(input => {
          values.push(input);
        });
        res.push({ Github: values });
        break;
      default:
        defaultHandler(key);
    }
  });

  return res;
};

export default previewHandler;
