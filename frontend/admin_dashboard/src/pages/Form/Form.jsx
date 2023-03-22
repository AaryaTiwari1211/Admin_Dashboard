import React from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { useState } from 'react'
import { Formik } from 'formik'
import { tokens } from '../../theme'
import * as yup from 'yup'
import { useMediaQuery } from '@mui/material'
import Header from '../../components/Header/Header'

function Form() {
    const Mobile = useMediaQuery('(max-width:600px)')
    const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const userSchema = yup.object().shape({
        firstName: yup.string().required("This is a Required Field"),
        lastName: yup.string().required("This is a Required Field"),
        email: yup
            .string()
            .email("Email is not Valid")
            .required("This is a Required Field"),
        contact: yup
            .string()
            .matches(PHONE_REGEX, "Phone Number Not Valid")
            .required("This is a Required Field"),
        address1: yup.string().required("This is a Required Field"),
        address2: yup.string().required("This is a Required Field"),
    })
    const initialValues = {
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        address1: "",
        address2: "",
    }
    const handleFormSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box
            m='20px'
        >
            <Header title='CREATE USER' subtitle='Create new User Profile' />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            sx={{
                                flexDirection: Mobile ? 'column' : 'row',
                                m: Mobile ? '20px' : '10px',
                            }}
                        >
                            <TextField
                                variant='filled'
                                type='text'
                                label='First Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name='firstName'
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        color: `${colors.grey[100]} !important`,
                                    },
                                    width: Mobile ? '60%' : '40%',
                                    m: Mobile ? '20px' : '10px',
                                }}
                            />
                            <TextField
                                variant='filled'
                                type='text'
                                label='Last Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name='lastName'
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        color: `${colors.grey[100]} !important`,
                                    },
                                    width: Mobile ? '60%' : '40%',
                                    m: Mobile ? '20px' : '10px',
                                }}
                            />
                        </Box>
                        <Box height='30px' />
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            sx={{
                                flexDirection: Mobile ? 'column' : 'row',
                                m: Mobile ? '20px' : '10px',
                            }}
                        >
                            <TextField
                                variant='filled'
                                type='text'
                                label='Email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name='email'
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        color: `${colors.grey[100]} !important`,
                                    },
                                    width: Mobile ? '60%' : '40%',
                                    m: Mobile ? '20px' : '10px',
                                }}
                            />
                            <TextField
                                variant='filled'
                                type='text'
                                label='Contact'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name='contact'
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        color: `${colors.grey[100]} !important`,
                                    },
                                    width: Mobile ? '60%' : '40%',
                                    m: Mobile ? '20px' : '10px',
                                }}
                            />
                        </Box>
                        <Box height='30px' />
                        <Box
                            width='100%'
                            textAlign='center'
                        >
                            <TextField
                                variant='filled'
                                type='text'
                                label='Address 1'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name='address1'
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        color: `${colors.grey[100]} !important`,
                                    },
                                    width: Mobile ? '60%' : '80%',
                                    m: Mobile ? '20px' : '10px',
                                }}
                            />
                        </Box>
                        <Box height='30px' />
                        <Box
                            width='100%'
                            textAlign='center'
                        >
                            <TextField
                                variant='filled'
                                type='text'
                                label='Address 2'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name='address2'
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        color: `${colors.grey[100]} !important`,
                                    },
                                    width: Mobile ? '60%' : '80%',
                                    m: Mobile ? '20px' : '10px',
                                }}
                            />
                        </Box>
                        <Box height='30px' />
                        <Box
                            width='100%'
                            textAlign='center'
                        >
                            <Button
                                variant="outlined"
                                size='large'
                                type='submit'
                                sx={{
                                        backgroundColor: `${colors.blueAccent[100]} !important`,
                                        color: `${colors.grey[800]} !important`,
                                        
                                }}
                            >Submit</Button>
                        </Box>
                    </form>
                )
                }
            </Formik>
        </Box>
    )
}

export default Form