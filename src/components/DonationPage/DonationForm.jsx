import { Card, CardContent, Typography, Grid, InputAdornment, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";

import { useDispatch } from "react-redux";


export default function DonationForm() {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleButtonClick = (value) => {
        const numberValue = Number(value); // Convert to number
        setAmount(numberValue); 
        dispatch({ type: 'TEMP_STORE_AMOUNT', payload: numberValue });
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        let numberValue; 
    
        if (inputValue === '') {
            setAmount(''); // clears the input
        } else {
            numberValue = Number(inputValue); // 
            setAmount(numberValue);
        }
    
        // Dispatches only when there's a valid number
        if (numberValue !== undefined && !isNaN(numberValue)) {
            dispatch({ type: 'TEMP_STORE_AMOUNT', payload: numberValue });
        }
    };

    return (

        <Card>
            <CardContent>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <Typography>
                            Donate a MindWisk!
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button value={amount} onClick={() => handleButtonClick("5")}> $5 </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button value={amount} onClick={() => handleButtonClick("10")}> $10 </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button value={amount} onClick={() => handleButtonClick("15")} > $15 </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button value={amount} onClick={() => handleButtonClick("20")}> $20 </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <OutlinedInput
                                    type="number"
                                    value={amount}
                                    onChange={handleInputChange}
                                    startAdornment={<InputAdornment position="start"> $</InputAdornment>}
                                    fullWidth
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit">
                                    Donate
                                </Button>
                            </Grid> */}

                        </Grid>
                    </Grid>
                    </Grid>
                </CardContent>
            </Card>
        
    )
};
