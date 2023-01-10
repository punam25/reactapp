import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";


function FormUpdate(props) {

       return (
        <>
            <CssBaseline />
            <Container maxWidth="md">

                <Box
                    sx={{
                        bgcolor: "lightgreen",
                        display: "flex",
                        padding: 5
                    }}
                >
                    <pre>{JSON.stringify(props.info, null, 2)}</pre>
                    <br />
                    
                    </Box>
                    <Box sx={{
                        marginY:2,
                        display:"flex",
                        justifyContent:"flex-end",
                        
                        
                    
        
                    }}>
                        <Button variant="contained" color="success">
                            Confirm
                        </Button>
                    </Box>
                
            </Container>
        </>

    );
}
export default FormUpdate;

