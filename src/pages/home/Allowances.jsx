import React from "react";
import "./allwances.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Typography } from "@mui/material";

const Allowances = ({ handleClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
    });

    const onFormSubmit = async (data) => {
        console.log("data", data);
        const responce = await fetch(
            "https://64e994a9bf99bdcc8e66ceef.mockapi.io/port/allowances",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        handleClose();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Salary System Based On Meritocracy</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('alarySystemBasedOnMeritocracy', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('alarySystemBasedOnMeritocracy')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.alarySystemBasedOnMeritocracy?.message}
                        </Typography>
                    </div>
                </div>


                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">120 Or More Annual Holidays</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('OrMoreAnnualHolidays', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('OrMoreAnnualHolidays')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.OrMoreAnnualHolidays?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Generous Welfare Benifits</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('generousWelfareBenifits', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('generousWelfareBenifits')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.generousWelfareBenifits?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Enhanced Education And Training</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('enhancedEducationAndTraining', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('enhancedEducationAndTraining')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.enhancedEducationAndTraining?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Support System For Acquriring Qualification</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('supportSystemForAcquriringQualification', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('supportSystemForAcquriringQualification')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.supportSystemForAcquriringQualification?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Reduced Working Hours System</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('reducedWorkingHoursSystem', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('reducedWorkingHoursSystem')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.reducedWorkingHoursSystem?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Maternity Care Leave System</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('maternityCareLeaveSystem', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('maternityCareLeaveSystem')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.maternityCareLeaveSystem?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Company Housing / Rent Subsidy</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('companyHousingRentSubsidy', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('companyHousingRentSubsidy')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.companyHousingRentSubsidy?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Family Allowance</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('familyAllowance', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('familyAllowance')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.familyAllowance?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Employee Stock Ownership</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('employeeStockOwnership', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('employeeStockOwnership')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.employeeStockOwnership?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <div className="star">&#8902;</div>
                        <div className="textLevel">Side Job Available</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('sideJobAvailable', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('sideJobAvailable')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Typography variant="inherit" color="error">
                            {errors.sideJobAvailable?.message}
                        </Typography>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                       
                        <div className="textLevel">Mentor System</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('mentorSystem', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('mentorSystem')}
                                />
                            </RadioGroup>
                        </FormControl>
                      
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                       
                        <div className="textLevel">Career Consulting</div>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes"
                                
                                    {...register('careerConsulting', {
                                        required: "This field is Required",
                                    })}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('careerConsulting')}
                                />
                            </RadioGroup>
                        </FormControl>
                      
                    </div>
                </div>



                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center"
                    alignItems="center">
                    <Button type="submit" variant="contained" size="large">
                        Save
                    </Button>
                </Stack>
            </form>
        </>
    );
};

export default Allowances;
