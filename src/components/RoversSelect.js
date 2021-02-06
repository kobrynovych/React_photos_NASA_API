import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RoversSelect({manifestFetch}) {
  const classes = useStyles();
  const [roverName, setRoverName] = React.useState('');
// debugger
  const handleChange = ({target}) => {
    setRoverName(target.value);
    manifestFetch(target.value)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="rover">Mars Rover</InputLabel>
        <NativeSelect
          value={roverName}
          onChange={handleChange}
          inputProps={{
            name: 'rover',
            id: 'rover',
          }}
        >     
          <option aria-label="None" value={''} />
          <option value={'Curiosity'}>Curiosity</option>
          <option value={'Opportunity'}>Opportunity</option>
          <option value={'Spirit'}>Spirit</option>
        </NativeSelect>
        {roverName.length === 0 && (<FormHelperText>Please select NASA Mars rover</FormHelperText>)}
      </FormControl>
    </div>
  );
}