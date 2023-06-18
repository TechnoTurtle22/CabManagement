import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import Logo from './Images/Cab_driver.png';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    const notify = () => toast("Cab added succesfully");


const initialValue = {
    name: '',
    username: '',
    phone: '',
    email: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddCab = () => {
    const [user, setUser] = useState(initialValue);
    const { cabID, cabName, cabColor, cabNumber } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async (e) => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormControl>
                    <Typography style={{ backgroundColor: 'orange', width: 300, textAlign: 'center', borderRadius: 5 }} variant="h4">Add Cab</Typography>
                </FormControl>
                <FormControl style={{ marginTop: 15 }} >
                    <InputLabel htmlFor="my-input">Cab ID</InputLabel>
                    <Input required style={{ border: 3, borderRadius: 5, borderColor: 'black', borderStyle: 'solid' }} onChange={(e) => onValueChange(e)} name='cabID' value={cabID} id="my-input" />
                </FormControl>
                <FormControl style={{ marginTop: 15 }}>
                    <InputLabel htmlFor="my-input">Cab Name</InputLabel>
                    <Input required style={{ border: 3, borderRadius: 5, borderColor: 'black', borderStyle: 'solid' }} onChange={(e) => onValueChange(e)} name='cabName' value={cabName} id="my-input" />
                </FormControl>
                <FormControl style={{ marginTop: 15 }}>
                    <InputLabel htmlFor="my-input">Cab Color</InputLabel>
                    <Input required style={{ border: 3, borderRadius: 5, borderColor: 'black', borderStyle: 'solid' }} onChange={(e) => onValueChange(e)} name='cabColor' value={cabColor} id="my-input" />
                </FormControl>
                <FormControl style={{ marginTop: 15 }}>
                    <InputLabel htmlFor="my-input">Cab Number</InputLabel>
                    <Input required style={{ border: 3, borderRadius: 5, borderColor: 'black', borderStyle: 'solid' }} onChange={(e) => onValueChange(e)} name='cabNumber' value={cabNumber} id="my-input" />
                </FormControl>
                <FormControl style={{ marginTop: 15 }}>
                    <Button variant="contained" color="primary" style={{backgroundColor:'#ff6f00',paddingTop:10,paddingBottom:10}} onClick={() => addUserDetails()}>
                    <h3 style={{backgroundColor:'#ff6f00', height:'100%', width :'100%',paddingTop:10}} onClick={notify}>+ Add</h3>
                    
                    </Button>
                    <ToastContainer />
                    
                </FormControl>
            </div>
            <div>
                <img src={Logo} />
            </div>
        </div>
    )
}

export default AddCab;