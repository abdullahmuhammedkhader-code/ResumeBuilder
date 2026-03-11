import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='btn text-primary fs-2 me-2'><MdEditDocument /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 className='text-center m-2 '>Edit Resume Details</h2>
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Basic Details */}
             <div>
                    <h3>Personal Details</h3>
                    <div className="row p-4 m-2">
                        <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField id="standard-basic-location" label="Location" variant="standard" />
                        <FormControl variant="standard" >
                            <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Age" variant='standard'
                            >
                                
                                <MenuItem value={10}>Ten</MenuItem>
                                
                            </Select>
                        </FormControl>

                    </div>
                </div>
            {/* Contact Details */}
            <div>
                                <h3>Contact Details</h3>
                                <div className="row p-4 m-2">
                                    <TextField id="standard-basic-email" label="Email" variant="standard" />
                                    <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                                    <TextField id="standard-basic-linkedin" label="LinkedIn" variant="standard" />
                                    <TextField id="standard-basic-github" label="Git-Hub Link" variant="standard" />
                                    
            
                                </div>
            </div>
            {/* Educational Details */}
            <div>
                                <h3>Education Details</h3>
                                <div className="row p-4 m-2">
                                    <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                                    <TextField id="standard-basic-college" label="University-College Name" variant="standard" />
                                    <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
                                    
            
                                </div>
            </div>
            {/* Skills */}
            <div>
                                <h3>Skills</h3>
                                <div className=" p-3 d-flex justify-content-between align-items-center ">
                                  <input type="text" placeholder='Add Skill' className='form-control mx-2'/>
                                  <button variant="standard" className='btn btn-primary'>Add</button>
                                </div>
                                <h5>Added Skills</h5>
                                {/* Display all existing skill */}
                                <div className=" p-3 d-flex justify-content-between flex-wrap ">
                                  <button variant="contained" className='btn btn-primary' >Skill <FaXmark className='ms-1'/> </button>
                                </div>

            </div>
            {/* Summary */}
            <div>
                <h3>Summary</h3>
                <div className='p-3 row'>
                     <TextField id="standard-basic-summary" label="Summary" variant="standard" />
                </div>
            </div>
            {/* Update Button */}
            <button className='btn btn-primary'>Update</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit
