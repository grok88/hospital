import React from 'react';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const PageNotFound:React.FC = () => {
    return <Grid item xs={12}>
        <Typography variant="h1" component="h1">
            404 - Page not found
        </Typography>
    </Grid>
};

export default PageNotFound;