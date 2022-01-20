import { FormControl , InputLabel, Input, FormHelperText  } from '@mui/material';
import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { container } from './index.module.css';

/**
 * FormField is a re-usable component called from multiple components
 * @param {*} props has multiple fields, and is used accordingly to render fields
 * @returns 
 */
const FormField = (props) => {
  const { name, label, icon } = props;
  const [field, meta] = useField(props);
  return (
    <div className={container}>
      <FontAwesomeIcon icon={icon} style={{marginTop: '16px', marginRight: '4px'}} size='2x'/>
      <FormControl>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Input {...props} {...field} error={meta.error && meta.touched }/>
        {meta.error && meta.touched 
        ? <FormHelperText name={name} error={true}>{meta.error}</FormHelperText>
        : <></>}
      </FormControl>
    </div>
  );
};

export default FormField;