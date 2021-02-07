import React from 'react';
import Select from './Select';

const Sols = ({sols_list, setSol}) => {
  const [value, setValue] = React.useState(null);

  const defaultProps = {
    options: sols_list,
    getOptionLabel: (option) => option.text,
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
    return newValue ? setSol(newValue.sol) : setSol(null);
  }

  return (<>
             <Select defaultProps={defaultProps} 
                     value={value} 
                     handleChange={handleChange}
                     labell="Mars sol"
                     id='Mars_sol'
                     text_mess='Please select Mars sol'
                />



    {/* <div style={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Mars sol" margin="normal" />}
      />
      {value === null && (<FormHelperText>Please select Mars sol</FormHelperText>)} */}


      {/* <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        id="disabled"
        disabled
        renderInput={(params) => <TextField {...params} label="disabled" margin="normal" />}
      /> */}
    {/* </div> */}
    </>
  );
}
export default Sols;