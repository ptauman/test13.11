import  { useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { TextField, Button, Box, Typography, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const RegisterComponent : React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [organizationStr, setOrganization] = useState("");
    const {request } = useAPI();
    const error = useSelector((state: RootState) => state.status.error);
    const loading = useSelector((state: RootState) => state.status.loding);
    const success = useSelector((state: RootState) => state.status.sucssess);
    const [options, setOptions] = useState<string[]>([]);
    
    useEffect(() => {
        const loadOptions = async () => {
            const response = await request({
                url: "http://localhost:3000/info/organizations",
                method: "GET"
            });
            setOptions(response);
        }
        loadOptions();
    }, []);

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        await request({
            url: "http://localhost:3000/auth/register",
            method: "POST",
            body: { username, password, organizationStr }
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
          label="Password"
          variant="outlined"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
          <InputLabel>Select Role</InputLabel>
          <Select
            value={organizationStr}
            onChange={(e) => setOrganization(e.target.value)}
            label="Select organization"
          >
            {options.map((option) => (
              <MenuItem key = {option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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


