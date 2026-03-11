import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTypes from "../assets/jobRole.json";

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Review and Submit'];


function Userinput() {
    const [activeStep, setActiveStep] = React.useState(0);

    const [resumeData,setResumeData] = useState({
        fullName:"",
        location:"",
        job:"",
        email:"",
        phone:"",
        linkedin:"",
        github:"",
        degree:"",
        university:"",
        passOut:"",
        skills:[],
        summary:""
    })


    const [skipped, setSkipped] = React.useState(new Set());

    console.log(resumeData);
    

    const handleNext = () => {
        let newSkipped = skipped;
        

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    
    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div className="row p-4 m-2">
                        <TextField name='fullName' onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField name='location' onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-location"  label="Location" variant="standard" />
                        <FormControl variant="standard" >
                            <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                            <Select
                                onChange={e=>setResumeData({...resumeData,job:e.target.value})}
                                defaultValue={""}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Age" variant='standard'
                            >
                                {jobTypes.jobRoles.map(role=>( <MenuItem key={role} value={role}>{role}</MenuItem>))}
                               
                                
                            </Select>
                        </FormControl>

                    </div>
                </div>
            )
            case 1: return (
                <div>
                    <h3>Contact Details</h3>
                    <div className="row p-4 m-2">
                        <TextField id="standard-basic-email" label="Email" variant="standard" />
                        <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                        <TextField id="standard-basic-linkedin" label="LinkedIn" variant="standard" />
                        <TextField id="standard-basic-github" label="Git-Hub Link" variant="standard" />
                        

                    </div>
                </div>
            )
             case 2: return (
                <div>
                    <h3>Education Details</h3>
                    <div className="row p-4 m-2">
                        <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField id="standard-basic-college" label="University-College Name" variant="standard" />
                        <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
                        

                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h5>Our AI will generate Skills & Summary according to your job role, Click the AI skill's & Summary button to proceed</h5>
                    
                </div>
            )
            default : return null
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button>FINISHED</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {/* Render form according to activestep count */}
                    <Box>
                        {renderStepContent(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        
                        
                        {
                            activeStep === steps.length - 1 ?
                            <Button >
                             Generate AI skills and Summary</Button> : 
                             <Button onClick={handleNext}>
                             Next
                        </Button>
                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Userinput
