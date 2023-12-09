// DonationForm.jsx

import { Card, CardContent, Typography, Grid, InputAdornment, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";

export default function DonationForm() {
    const [amount, setAmount] = useState(Number[null]);

    const handleChange = (value) => {
        setAmount(Number(value));
        dispatch({ type: 'TEMP_STORE_AMOUNT', payload: amount })
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
                            <Button value={amount} onClick={() => handleChange("5")}> $5 </Button> 
                            </Grid>
                            <Grid item xs={12}> 
                            <Button value={amount} onClick={() => handleChange("10")}> $10 </Button>
                            </Grid> 
                            <Grid item xs={12}> 
                            <Button value={amount} onClick={() => handleChange("15")} > $15 </Button> 
                            </Grid> 
                            <Grid item xs={12}> 
                            <Button value={amount} onClick={() => handleChange("20")}> $20 </Button>    
                            </Grid> 
                            <Grid item xs={12}>
                                <OutlinedInput
                                    type="text"
                                    value={amount}
                                    onChange={handleChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit">
                                    Donate
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>)
}; 