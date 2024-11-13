import  { useState } from "react";
import useAPI from "../../hooks/useAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';

export const RegisterComponent : React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {request } = useAPI();
    const error = useSelector((state: RootState) => state.status.error);
    const loading = useSelector((state: RootState) => state.status.loding);
    const success = useSelector((state: RootState) => state.status.sucssess);

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        await request({
            url: "http://localhost:3000/auth/register",
            method: "POST",
            body: { username, email, password }
        });   
    };
    return (
        <>
        <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Register
            </Typography>

            <form onSubmit={handleRegister}>
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={loading}
                    sx={{ marginBottom: 2 }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
                </Button>
            </form>

            {error && <Typography color="error">{`Error: ${error}`}</Typography>}
            {success && <Typography color="success.main">{`Success: ${success}`}</Typography>}
        </Box>
        </>
    )
}


