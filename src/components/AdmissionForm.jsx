import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormUpdate from "./formUpdate";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";

const AdmissionForm = (props) => {
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState("");
    const [ischeckBox1, setIsCheckBox1] = useState();
    const[ischeckBox2,setIsCheckBox2]=useState();
    const[ischeckBox3,setIsCheckBox3]=useState();
    const[ischeckBox4,setIsCheckBox4]=useState();
    const [age, setAge] = useState("");
    const [completeForm, setCompleteForm] = useState({});
    const [formToPropogate, setFormToPropogate] = useState({});

    const firstNameChange = (event) => {
        setFirstName(event.target.value);
        const form = { ...completeForm }
        form.firstName = event.target.value;

        setCompleteForm(form);
    }
    const middleNameChange = (event) => {
        setMiddleName(event.target.value);
        const form = { ...completeForm }
        form.middleName = event.target.value;

        setCompleteForm(form);
    }

    const lastNameChange = (event) => {
        setLastName(event.target.value);
        const form = { ...completeForm }
        form.lastName = event.target.value;

        setCompleteForm(form);
    }

    const onGenderName = (event) => {
        setGender(event.target.value);
        const form = { ...completeForm };
        form.gender = event.target.value;

        setCompleteForm(form);
    }
    const onCheckBox1Change = (event) => {
        setIsCheckBox1(event.target.value);
        const form = { ...completeForm };
        form.ischeckBox1 = event.target.value;

        setCompleteForm(form);
    }
    const onCheckBox2Change = (event) => {
        setIsCheckBox2(event.target.value);
        const form = { ...completeForm };
        form.ischeckBox2 = event.target.value;

        setCompleteForm(form);
    }

    const onCheckBox3Change = (event) => {
        setIsCheckBox3(event.target.value);
        const form = { ...completeForm };
        form.ischeckBox3 = event.target.value;

        setCompleteForm(form);
    }
const onCheckBox4Change = (event) => {
        setIsCheckBox4(event.target.value);
        const form = { ...completeForm };
        form.ischeckBox4 = event.target.value;

        setCompleteForm(form);
    }


    const handleAgeChange = (event) => {
        setAge(event.target.value);
        const form = { ...completeForm }
        form.age = event.target.value;

        setCompleteForm(form);
    }
    useEffect(() => {
        setGender('female');
        setAge(28);
    }, [setGender]);

    const handleSubmit = () => {
        console.log(completeForm);
        setTimeout(() => {
            setFormToPropogate(completeForm);
        }, 5000);


    }
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            textAlign: "center",
                            backgroundColor: "orange",


                        }}
                    >
                        <Typography variant="h4"> Admission Form</Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            bgcolor: '#cfe8fc',
                            display: "flex",
                            padding: 5
                        }}
                    >

                        <FormControl>

                            <FormLabel id="demo-radio-buttons-group-label">
                                Personal Info
                            </FormLabel>
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: 2,
                                    border: "1px dashed teal",
                                    justifyContent: "space-evenly",

                                }}
                            >
                                <TextField id="outlined-basic"
                                    label="FirstName"
                                    value={firstName}
                                    onChange={firstNameChange}
                                    variant="outlined" />
                                <TextField id="outlined-basic"
                                    label="MiddleName"
                                    value={middleName}
                                    onChange={middleNameChange}
                                    variant="outlined" />

                                <TextField id="outlined-basic"
                                    label="LastName"
                                    value={lastName}
                                    onChange={lastNameChange}
                                    variant="outlined" />
                            </Box>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                value={gender}
                                onChange={onGenderName}

                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <Box sx={{ display: 'flex' }}>
                                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">Coffee i Like</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    value="check1"
                                                    onClick={onCheckBox1Change} name="espresso" />
                                            }
                                            label="espresso"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox value="check2"
                                                    onClick={onCheckBox2Change}
                                                    name="cappachinoo" />
                                            }
                                            label="cappachinoo"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox value="check3"
                                                    onClick={onCheckBox3Change}
                                                    name="flatwhite" />
                                            }
                                            label="flat white"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox value="check4"
                                                    onClick={onCheckBox4Change}
                                                    name="longbank" />
                                            }
                                            label="long blank"
                                        />


                                    </FormGroup>

                                </FormControl>

                            </Box>


                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleAgeChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={28}>Twenty Eight</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <Box
                                sx={{
                                    marginY: 2,
                                    display: "flex",
                                    justifyContent: "flex-end",

                                }}
                            >
                                {
                                    <Button variant="contained"
                                        disabled={(!completeForm.firstName && !completeForm.middleName && !completeForm.lastName && completeForm.gender !== "")}
                                        onClick={handleSubmit}>
                                        Submit
                                    </Button>

                                }

                            </Box>

                        </FormControl>
                    </Box>

                    <pre>{JSON.stringify(completeForm, null, 3)}</pre>


                </Container>
                <FormUpdate info={formToPropogate} />
            </React.Fragment>


        </>
    );
}
export default AdmissionForm;