import React from "react";
import "./allwances.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Allowances = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
    });

    const onFormSubmit = async (data) => {
        const responce = await fetch(
            "https://64e994a9bf99bdcc8e66ceef.mockapi.io/port/user",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
    };

    return (
        <>
            {" "}
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
                                
                                    {...register('alarySystemBasedOnMeritocracy')}
                                />
                                <FormControlLabel value="no" control={<Radio />} label="No"
                                    {...register('alarySystemBasedOnMeritocracy')}
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Allowances;
