import React from 'react';
import Select from './Select';

const Cameras = ({cameras_list, setCamera}) => {
  const [value, setValue] = React.useState(null);

  const defaultProps = {
    options: cameras_list,
    getOptionLabel: (option) => option.camera,
  };

  const handleChange = (e, newValue) => {
      debugger
    setValue(newValue);
    return newValue ? setCamera(newValue.camera) : setCamera(null);
  }

  return (<>
             <Select defaultProps={defaultProps} 
                     value={value} 
                     handleChange={handleChange}
                     labell="Rover camera"
                     id='Rover_camera'
                     text_mess='Please select rover camera'
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
export default Cameras;