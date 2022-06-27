import * as React from 'react';
import TextField from '@mui/material/TextField';
import './input-text.scss';

const InputText = ({ setSearchTerm }) => {
  
  return (
      <TextField onChange={(e) => setSearchTerm(e.target.value)} label="Search" className="text-field" />
  );
}

export default InputText;
