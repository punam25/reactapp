import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline, Divider, Typography, InputLabel } from "@mui/material";
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


const AdmissionForm = (props) => {
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState("");
    const [ischeckBox1, setIsCheckBox1] = useState();
    const [ischeckBox2, setIsCheckBox2] = useState();
    const [ischeckBox3, setIsCheckBox3] = useState();
    const [ischeckBox4, setIsCheckBox4] = useState();
    const [age, setAge] = useState("");
    const [technology, setTechnology] = useState("");
    const [completeForm, setCompleteForm] = useState({});
    const [formToPropogate, setFormToPropogate] = useState({});
    const checkboxex = { ischeckBox1, ischeckBox2, ischeckBox3, ischeckBox4 };
    // console.log(checkboxex);

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
    const handleDevloperChange = (event) => {
        setTechnology(event.target.value);
        const form = { ...completeForm }
        form.technology = event.target.value;

        setCompleteForm(form);
    }
    useEffect(() => {
        setGender('female');


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
                <Container maxWidth="md">
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
                            border: 1,
                            display: "flex",
                            padding: 5
                        }}
                    >

                        <FormControl sx={{ justifyContent: "space-between" }}>

                            <FormLabel id="demo-radio-buttons-group-label">
                                Personal Info
                            </FormLabel>
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: 2,
                                    border: "1px dashed teal",
                                    justifyContent: "space-between",

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
                            <br />

                            <Box
                                sx={{
                                     display: "flex",
                                     
                            
                                }}
                            >
                            <FormLabel id="demo-radio-buttons-group-label" sx={{ fontWeight: "bold"}}>Gender</FormLabel>
                            
                            
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    value={gender}
                                    onChange={onGenderName}
                                >
                                    <br />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                                <Box>
                                    <FormControl sx={{ width: 300, marginLeft: 40 }} component="fieldset" variant="standard">
                                        <FormLabel component="legend" sx={{ fontWeight: "bold", justifyContent: "center" }}>Coffee i Like</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        value="espresso"
                                                        onClick={onCheckBox1Change} name="espresso" />
                                                }
                                                label="espresso"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox value="cappachinoo"
                                                        onClick={onCheckBox2Change}
                                                        name="cappachinoo" />
                                                }
                                                label="cappachinoo"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox value="flat-white"
                                                        onClick={onCheckBox3Change}
                                                        name="flatwhite" />
                                                }
                                                label="flat white"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox value="long-black"
                                                        onClick={onCheckBox4Change}
                                                        name="longblack" />
                                                }
                                                label="long black"
                                            />


                                        </FormGroup>

                                    </FormControl>
                                </Box>
                            </Box>
                            <br />
                            <Box sx={{
                                justifyContent: "space-between"

                            }}>

                                <FormControl sx={{ width: 250 }}>
                                    <InputLabel id="  ">Age</InputLabel>

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
                                </FormControl>
                                <FormControl sx={{ width: 250, marginLeft: 10 }}>
                                    <InputLabel id="av">Developer In</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={technology}
                                        label="technology"
                                        onChange={handleDevloperChange}
                                    >
                                        <MenuItem value={"Database"}>Database</MenuItem>
                                        <MenuItem value={"Api"}>Api</MenuItem>
                                        <MenuItem value={"Ui"}>Ui</MenuItem>
                                        <MenuItem value={"Devops"}>Devops</MenuItem>
                                    </Select>

                                </FormControl>

                            </Box>



                            <Box
                                sx={{
                                    marginY: 2,
                                    display: "flex",
                                    justifyContent: "flex-end",

                                }}
                            >
                                {

                                    <Button variant="contained"
                                        disabled={(!completeForm.firstName) && (!completeForm.middleName)}
                                        onClick={handleSubmit}>
                                        Submit
                                    </Button>

                                }

                            </Box>

                        </FormControl >
                    </Box>

                    <pre>{JSON.stringify(completeForm, null, 3)}</pre>


                </Container>
                <FormUpdate info={formToPropogate} />
            </React.Fragment>


        </>
    );
}
export default AdmissionForm;