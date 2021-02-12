import React from 'react';
import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

// import history from '../assets/history.svg';
// import profile from '../assets/IMG_3044.JPG';
// import yearbook from '../assets/yearbook.svg';
// import IMG_1163 from '../assets/IMG_1163.JPG';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fotWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '45em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '10em',
    width: '8em',
    [theme.breakpoints.down('sm')]: {
      height: '10em',
      width: '8em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>About Us = History & Team | Arc Development</title>
        <meta
          name='description'
          key='description'
          content='We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Midwest. Get a free online estimate now!'
        />
        <meta
          property='og:title'
          content='Bringing East Coast Technology to the IT Market | About Us'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com/about' />
        <link rel='canonical' key='canonical' href='https://arc.com/about' />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}
      >
        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify='space-around'
      >
        <Grid item>
          <Grid
            item
            container
            direction='column'
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                variant='h4'
                gutterBottom
                align={matchesMD ? 'center' : undefined}
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify='center' lg>
            <img
              src='/assets/history.svg'
              alt='quill pen sitting on top of book'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginBottom: '10em' }}
      >
        <Grid item>
          <Typography align='center' variant='h4' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Robert L. Glover, Founder & CEO
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            Over 20 years of experience.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt='avatar'
            src='/assets/IMG_3044.JPG'
            className={classes.avatar}
          />
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I’m ready to apply everything I’ve learned, with this
                talented staff of mine, and, to help others with the intuition I
                have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
          >
            <Grid item>
              <img
                src='/assets/yearbook.svg'
                alt='yearbook page about founder'
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                Page from my talented staff
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I’m ready to apply everything I’ve learned, with this
                talented staff of mine, and, to help others with the intuition I
                have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img
                src='/assets/IMG_1163.JPG'
                alt='corporate meeting'
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                Westchester NY Business Development
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
