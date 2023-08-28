import React from "react";
import "./register.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm, Controller } from 'react-hook-form';;
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
  });

  const onFormSubmit = async(data) => {
    const responce = await fetch('https://64e994a9bf99bdcc8e66ceef.mockapi.io/port/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate('/')
  }


  return (
    <div className="top">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box px={3} py={2}>
          <Grid container spacing={1}>

            <Grid item xs={12} sm={6}>
              <span className="textLevel">
                Business Description <span className="requred">&#8902;</span>
              </span>  
              <TextField
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                {...register('businessDescription', {
                  required: "This field is Required",
                })}
                error={errors.businessDescription ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.businessDescription?.message}
              </Typography>
            </Grid>


            <Grid item xs={12} sm={6} sx={{ marginTop: 0.5 }}>
              <span className="textLevel">
                Corporate Philosophy
              </span>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                {...register('corporatePhilosophy')}
              />
            </Grid>

            <Grid item xs={12} sm={4} sx={{marginTop: 5}}>
              <span className="textLevel">
                Company Name  <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('companyName', {
                  required: "This field is Required",
                })}
                error={errors.companyName ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.companyName?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4} sx={{ marginTop: 5.5 }}>
              <span className="textLevel">
                Industry
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('industry')}
              />
            </Grid>

            
            <Grid item xs={12} sm={4} sx={{ marginTop: 5 }}>
              <span className="textLevel">
               Mail ID <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('email', {
                  required: "This field is Required",
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "please enter a valid e-mail address",
                  }
                })}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.email?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Phone Number <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('phoneNumber', {
                  required: "This field is Required",
                  minLength: {
                    value: 10,
                    message:
                      "please enter a valid 10-digit phone number",
                  },
                  maxLength: {
                    value: 10,
                     message:
                      "please enter a valid 10-digit phone number",
                  },
                
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "please enter a valid 10-digit phone number",
                  }
                })}
                error={errors.phoneNumber ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.phoneNumber?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Location <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('location', {
                  required: "This field is Required",
                })}
                error={errors.location ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.location?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Website
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('website')}
              />
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Working Hours <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('workingHours', {
                  required: "This field is Required",
                })}
                error={errors.workingHours ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.workingHours?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Establishment Date <span className="requred">&#8902;</span>
              </span> 
              <div>
                <input type="date"
                className="date"
                  {...register('establishmentDate', {
                    required: "This field is Required",
                  })}
                  error={errors.establishmentDate ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.establishmentDate?.message}
                </Typography>
              </div>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Initial Capital <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('initailCapital', {
                  required: "This field is Required",
                })}
                error={errors.initailCapital ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.initailCapital?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Representative  <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('representative', {
                  required: "This field is Required",
                })}
                error={errors.representative ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.representative?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
               Branch <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('branch', {
                  required: "This field is Required",
                })}
                error={errors.branch ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.branch?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Number Of Employees <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                inputProps={{ inputMode: 'numeric', }}
                {...register('numberOfEmployees', {
                  required: "This field is Required",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "please enter only number",
                  }
                })}
                error={errors.numberOfEmployees ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.numberOfEmployees?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Sales Revenue <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('salesRevenue', {
                  required: "This field is Required",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "please enter only number",
                  }
                })}
                error={errors.salesRevenue ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.salesRevenue?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Operation Profit <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('operationProfit', {
                  required: "This field is Required",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "please enter only number",
                  }
                })}
                error={errors.operationProfit ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.operationProfit?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Avrage Age Of Employees <span className="requred">&#8902;</span>
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('avrageAgeOfEmployess', {
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "please enter only number",
                  }
                })}
                error={errors.avrageAgeOfEmployess ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.avrageAgeOfEmployess?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Stock
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('stock', {
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "please enter only number",
                  }
                })}
                error={errors.stock ? true : false}
              />
              <Typography variant="inherit" color="error">
                {errors.stock?.message}
              </Typography>
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Linkedin Link
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('linkedinLink')}
              />
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Twitter Link
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('twitterLink')}
              />
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Facebook Link
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('facebookLink')}
              />
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Instagram Link
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('istagramLink')}
              />
            </Grid>

            
            <Grid item xs={12} sm={4}>
              <span className="textLevel">
                Youtube Link
              </span> 
              <TextField
                fullWidth
                variant="outlined"
                multiline
                size="small"
                {...register('youtubeLink')}
              />
            </Grid>
            
            <Grid item xs={12} sm={4} sx={{marginTop: 2}}>

              <div className="textLevel">
                Foreign Owned
              </div> 
              <FormControl>
               
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes"  {...register('foreign')} />
                  <FormControlLabel value="no" control={<Radio />} label="No" {...register('foreign')} />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          
        </Box>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center"
          alignItems="center">
          <Button type="submit" variant="contained" size="large">
            Save
          </Button>
        </Stack>
      
      </form>
    </div>
  );
};

export default Register;
