import { useFormik } from 'formik';
import * as yup from 'yup'
import React from 'react';
import { Button, TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Select, MenuItem, InputLabel } from '@mui/material';

function Component_Form({shouldUpdateTable, setShouldUpdateTable}) {
  const SERVER = process.env.REACT_APP_SERVER
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'Everyday'
    ]
    const menu = []

    days.forEach((day) => {
        menu.push(<MenuItem value={day} key={day}>{day}</MenuItem>)
    })
    const phoneRegex = new RegExp('[0-9]{10}')
    const validationSchema = yup.object({
        name: yup
          .string('Enter your name')
          .required('Name is required'),
        criteria: yup
          .string('Select criteria')
          .required('Criteria is required'),
        value: yup
          .number('Enter value')
          .integer()
          .required('Value is required'),
        day: yup
          .string('Select day')
          .required('Day is required'),
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        phone: yup
          .string()
          .matches(phoneRegex, 'Phone should be 10 digits number')
          .required('Phone is required'),
      });
      const formik = useFormik({
        initialValues: {
            name: '',
            value: '',
            email: '',
            phone: '',
            criteria:'',
            day: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            console.log(JSON.stringify(values));
            fetch(`${SERVER}/alert`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(values),
            })
            .then((res) => res.json())
            .then((data) => {console.log('Success:', data); setShouldUpdateTable(true); resetForm(values = '')
            })
            .catch((error) => {
                alert(error);
            });
        },
    });

    return (
        <div>
      <form onSubmit={formik.handleSubmit}>
      <TextField
          className='p-1 m-2'
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
      />
      <FormControl fullWidth className='p-1 m-2 border border-neutral-300'>
        <FormLabel id="demo-simple-select-label">Select Criteria</FormLabel>
          <RadioGroup 
              id="criteria"
              name="criteria" 
              onChange={formik.handleChange}
              error={formik.touched.criteria && Boolean(formik.errors.criteria)}
          >
              <FormControlLabel value="greater" label="Greater" control={<Radio />} />
              <FormControlLabel value="less" label="Less" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <TextField
          className='p-1 m-2'
          fullWidth
          id="value"
          name="value"
          label="Value"
          value={formik.values.value}
          onChange={formik.handleChange}
          error={formik.touched.value && Boolean(formik.errors.value)}
          helperText={formik.touched.value && formik.errors.value}
        />
        <FormControl fullWidth className='p-1 m-2'>
          <InputLabel id="demo-simple-select-label">Select Day</InputLabel>
          <Select
              id="day"
              name="day"
              value={formik.values.day}
              label="Day"
              onChange={formik.handleChange}
              error={formik.touched.day && Boolean(formik.errors.day)}
          >
              {menu}
          </Select>
        </FormControl>
        <TextField
          className='p-1 m-2'
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className='p-1 m-2'
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button className='p-1 m-2' color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
    )
}
export default Component_Form