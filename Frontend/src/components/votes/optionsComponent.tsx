import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../../store/store";
import { Option } from "../../types/optionType";
import { useEffect } from "react";
import { optinsThunk } from "../../features/voteSlice";
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';



export const OptionsComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const error = useSelector((state: RootState) => state.status.error);
    const loading = useSelector((state: RootState) => state.status.loding);
    const success = useSelector((state: RootState) => state.status.sucssess);

    useEffect(() => {
        dispatch(optinsThunk());
    }, [dispatch]);
        const options: Option[] = useSelector((state: RootState) => state.vote.options);
        if (options.length === 0) {
    return <p>No options available</p>;
        }


  return (
    <>
   <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Options
            </Typography>

            <Grid container spacing={3}>
                {options.map((option) => (
                    <Grid item xs={12} sm={6} md={4} key={option._id}>
                        <Card>
                            <img src={option.imageUrl} alt={option.optionName} style={{ width: '100%', height: 'auto' }} />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {option.optionName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        {error && <p>{"error: " + error}</p>}
        {loading && <p>Loading...</p>}
        {success && <p>{"success: " + success}</p>}    
    </>
  )
}
