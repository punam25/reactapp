import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Header from './Header';
import "./app-new.css";
 import Grid from '@mui/material/Grid';

const MaterialForm = () => {
    const [firstName, setFirstName] = useState("default value");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");


     useEffect(() => {
        setFirstName("comonent mounted");

      }, []);

    
    const createObject = () => {
        const admissionForm = {
            Fname: firstName,
            Lname: lastName,
            gn:gender 


        };
       
        console.log(admissionForm);
    }
    return (
        <div class="materialcss">
            <Grid container spacing={2}>
            <Grid item xs={2}>
        
            <TextField id="firstname" label="FirstName" variant="filled" defaultValue={firstName}
                onChange={(event) => setFirstName(event.target.value)} />
            </Grid>
            <Grid item xs={2}>
            <TextField id="lastname" label="LastName" variant="filled" defaultValue={lastName} onChange={(event) => setLastName(event.target.value)} />
            </ Grid>
            </Grid>
            <Grid container spacing={2}>
                     <Grid item xs={6}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(event) => setGender(event.target.value)}
                >
                    <FormControlLabel value="female" control={<Radio />} defaultValue={gender}  label="female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            </Grid>
            </Grid>
            <Button variant="contained" onClick={createObject()}>Submit</Button>
            {/* <Button variant="contained" onClick={buttonReset()}>Reset</Button> */}


            <Header info={firstName} />
            <Header info={lastName} />
            <Header info={gender} /> 
        
            </div>


    );
}
export default MaterialForm;
