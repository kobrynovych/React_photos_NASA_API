import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormHelperText from '@material-ui/core/FormHelperText';

const SolSelect = ({search_sol, setSol_id}) => {

  const defaultProps = {
    options: search_sol,
    getOptionLabel: (option) => option.sol,
  };

  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    return !newValue.id ? setSol_id(null) : setSol_id(newValue.id);
  }

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Mars sol" margin="normal" />}
      />
      {value === null && (<FormHelperText>Please select Mars sol</FormHelperText>)}


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
    </div>
  );
}
export default SolSelect;