import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const TopBanner = ({message, manualRefresh}) => {
    const classes = useStyles();

    return (
        <Card  variant="outlined" raised={true} className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Latest Message:
          </Typography>
          <Typography variant="h4" component="h2">
            {message.bannerContent}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Sender:
          </Typography>
          <Typography variant="body2" component="p">
            {message.bannerCreator}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="outlined" onClick={manualRefresh}><RefreshIcon style={{marginRight: "5px"}}/>  Manual refresh</Button>
        </CardActions>
      </Card>
    )
}

export default TopBanner
