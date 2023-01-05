import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Header from './Header';




const MaterialForm = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Gender, setGender] = useState("");

    
    const createObject = () => {
        const admissionForm = {
            Fname: FirstName,
            Lname: LastName,
            Gender: Gender


        };
    }
    console.log(createObject);




    return (
        <div>
            <br />
            <TextField id="firstname" label="FirstName" variant="filled" defaultValue={FirstName}
                onChange={(event) => setFirstName(event.target.value)} />
            <br />
            <br />

            <TextField id="lastname" label="LastName" variant="filled" defaultValue={LastName} onChange={(event) => setLastName(event.target.value)} />
            <br />
            <br />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} defaultValue={Gender} onChange={(event) => setGender(event.target.value)} label="female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <br />
            <Button variant="contained" onClick={createObject()}>Submit</Button>

            <Header info={FirstName} />
        </div>


    );
}
export default MaterialForm;
