import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormHelperText from '@material-ui/core/FormHelperText';

const Select = ({defaultProps, value, handleChange, labell, id, text_mess}) => {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id={id}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label={labell} margin="normal" />}
      />
      {value === null && (<FormHelperText>{text_mess}</FormHelperText>)}
    </div>
  );
}
export default Select;