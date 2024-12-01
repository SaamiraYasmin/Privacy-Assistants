import React from "react";
import UserForm from "../components/UserForm";

import {
    Container,
} from '@mui/material';

const InitPage = () => {
    return (
        <>
            <Container
                sx={{
                    pt: '5em',
                    backgroundColor: 'primary.main',
                    height: '100vh',
                }}
            >
                <UserForm />
            </Container>
        </>
    );
}

export default InitPage;