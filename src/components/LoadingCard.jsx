import React from 'react';
import { makeStyles, Avatar, Card, CardActions, CardActionArea, CardContent, CardMedia, CardHeader, Typography, IconButton, Divider } from '@material-ui/core';
import { Error, RotateLeft } from '@material-ui/icons';
import spinner from '../images/spinner.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: '1rem',
        border: 'solid',
        borderWidth: '2px',
        borderColor: theme.palette.secondary.dark,
        backgroundColor: theme.palette.secondary.light,
        '& .MuiCardContent-root': {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: theme.spacing(2),
        },
        '& .MuiCardActions-spacing > :not(:first-child)': {
            marginLeft: '24px',
        },
        '& .MuiButton-root': {
            transition: 'none',
        },
    },
    content: {
        cursor: 'default',
        '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    header: {
        '& .MuiCardHeader-avatar': {
            display: 'flex',
            marginLeft: '-8px',
        },
    },
    avatar: {
        display: 'flex',
        marginLeft: '8px',
        marginTop: '-6px',
        position: 'static',
        width: '50px',
        height: '50px',
        paddingRight: '0px',
        borderRadius: '1rem',
        borderWidth: '1px',
        border: 'solid',
        borderColor: theme.palette.secondary.dark,
        backgroundColor: theme.palette.background.default,
        '& .MuiAvatar-img': {
            display: 'flex',
            color: 'transparent',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            textAlign: 'center',
            textIndent: '10000px'
        },
    },
    image: {
        objectFit: 'cover',
        textTransform: 'capitalize',
        cursor: 'default',
        borderColor: theme.palette.secondary.dark,
        borderRadius: '2rem',
        border: 'solid',
        borderWidth: '1px',
    },
    title: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        paddingBottom: '10px',
        '& .MuiTypography-displayBlock': {
            display: 'flex',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 700,
            flexDirection: 'column',
            textTransform: 'uppercase'
        },
        '& .MuiCardHeader-content': {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '20px',
        },
        '& .MuiCardHeader-action': {
            height: '30px',
            width: '30px',
        },
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: '1rem',
        textAlign: 'center',
        padding: theme.spacing(3),
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        alignContent: 'center',
        justifyContent: 'center',
        margin: theme.spacing(2),
    },
    errorContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        cursor: 'default',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '& .MuiSvgIcon-root': {
            transition: 'none',
        },
    },
    error: {
        height: '32px',
        width: '32px',
        display: 'flex',
        marginRight: '2px',
        color: theme.palette.primary.main,
        borderColor: theme.palette.black.main,
        '& .MuiSvgIcon-root': {
            transition: 'none',
        },
    },
    spinner: {
        minWidth: 'fit-content',
        maxWidth: 'fit-content',
        margin: 'auto',
        display: 'block',
        cursor: 'default',
    },
    divider: {
        margin: '15px',
        backgroundColor: theme.palette.secondary.dark,
    },
}));

export default function LoadingCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <CardHeader
                    className={classes.title}
                    title='Loading'
                    avatar={
                        <Avatar className={classes.avatar}>
                            <RotateLeft />
                        </Avatar>
                    }
                    action={
                        <IconButton className={classes.errorContainer} disableRipple>
                            <Error className={classes.error} />
                        </IconButton>
                    }
                />
                <CardActionArea className={classes.content} disableRipple>
                    <CardMedia
                        className={classes.spinner}
                        component='img'
                        src={spinner}
                        alt='Loading...'
                    />
                </CardActionArea>
            </CardContent>
            <CardActions className={classes.btnContainer} component='div'>
                <Divider className={classes.divider} />
                <Typography className={classes.text} component='p'>
                    Please wait while we load the Pokémon! 😀
                </Typography>
                <Divider className={classes.divider} />
            </CardActions>
        </Card>
    );
}