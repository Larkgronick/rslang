import React from 'react';
import {
  Avatar,
  Grid,
  Typography,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  CardMedia,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Background from './PromoPageImages/PromoBg.png';
import secondImage from './PromoPageImages/2.jpg';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import { PROMO_LINK, REPO_LINK } from './constants';

const useStyles = makeStyles({
  container: {
    backgroundImage: 'url(' + Background + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  green: {
    color: '#73ff77',
  },
  blue: {
    color: '#08b1ff',
  },
  orange: {
    color: '#ffb508',
  },
  white: {
    color: '#ffffff',
  },
  englishEasy: {
    textAlign: 'center',
  },
  playNowLink: {
    color: '#ff0000',
    fontSize: '26px',
    backgroundColor: '#faffe9',
    borderRadius: '5px',
    border: '2px solid #73ff77',
    padding: '5px',
  },
  root: {
    minWidth: '300px',
    maxWidth: '450px',
  },
  media: {
    height: '0',
    paddingTop: '56.25%',
  },
  gridItem: {
    padding: '10px',
  },
  displayFlex: {
    display: 'flex',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    minHeight: '300px',
  },
  link: {
    cursor: 'pointer',
    fontSize: '24px',
    textDecoration: 'none',
    marginLeft: '5px',
  }
});

export const PromoPage = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      className={classes.container}
    >
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='flex-start'
        style={{ height: '100%' }}
      >
        <Grid
          item lg={6} md={6} sm={12}
          className={classes.gridItem}
        >
          <div
            className={classes.englishEasy}
          >
            <Typography
              color='secondary'
              variant='h2'
            >
              ENGLISH IS <span className={classes.blue}>EASY</span>
            </Typography>
            <Typography
              color='primary'
              variant='h6'
            >
              All you need - is a little <strong className={classes.green}>effort!</strong>
            </Typography>
            <Typography
              color='primary'
              variant='h6'
            >
              Let's do it <strong className={classes.orange}>Together!</strong>
              <p>
                What are you waiting for?
            </p>
              <Link
                component={RouterLink}
                to='/home'
                className={classes.playNowLink}
              >
                Play Now
            </Link>
            </Typography>
          </div>
        </Grid>
        <Grid
          item lg={6} md={6} sm={12}
          className={`${classes.gridItem} ${classes.displayFlex}`}
        >
          <Card
            className={classes.root}
            style={{ width: '100%' }}
          >
            <iframe
              className={classes.video}
              title='RsLang'
              src={PROMO_LINK}
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            >
            </iframe>
          </Card>
        </Grid>

        <Grid
          item lg={6} md={6} sm={12}
          className={`${classes.gridItem} ${classes.displayFlex}`}
        >
          <Typography
            color='secondary'
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <Avatar>
                    <VideogameAssetOutlinedIcon
                      className={classes.green}
                      fontSize='large' />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary='GAMES'
                  secondary='Play different games to show your skill'
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Avatar>
                    <MenuBookOutlinedIcon
                      className={classes.white}
                      fontSize='large' />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary='DICTIONARY'
                  secondary='Improve your vocabulary' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Avatar>
                    <EqualizerOutlinedIcon
                      color='secondary'
                      fontSize='large' />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary='STATS'
                  secondary='Check your progress' />
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid
          item lg={6} md={6} sm={12}
          className={`${classes.gridItem} ${classes.displayFlex}`}
        >
          <Card
            className={classes.root}
            style={{ width: '100%' }}
          >
            <CardMedia
              className={classes.media}
              image={secondImage}
              style={{ backgroundSize: 'contain' }}
            >
            </CardMedia>
          </Card>
        </Grid>
        <Grid
          item lg={12} md={12} sm={12}
          className={`${classes.gridItem} ${classes.displayFlex}`}
        >
          <Typography
            variant='h6'
            color='primary'
          >
            Stay tuned for updates on our
            <a
              href={REPO_LINK}
              target='_blank'
              rel="noopener noreferrer"
              className={`${classes.orange} ${classes.link}`}
            >
              GitHub
            </a>
          </Typography>
        </Grid>
      </Grid >
    </Container >
  )
}
export default PromoPage
