import React, { Component } from 'react';
import { Paper, withStyles, Box, Typography } from '@material-ui/core';
import { SelectGame } from './SelectGame';
import { SportsEsports, SignalCellularAlt, Mood, SentimentDissatisfied } from '@material-ui/icons';

class GamesStatistic extends Component {
  state = {
    difficulty: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };

  componentDidMount = () => {
    this.setSpeakItData();
  };

  handleSwitchTab = (index) => {
    switch (index) {
      case 0:
        return this.setSpeakItData();
      case 1:
        return this.setEnglishPuzzleData();
      case 3:
        return this.setAudioCallData();
      default:
        return this.setState({ difficulty: 1, correctAnswers: 0, wrongAnswers: 0 });
    }
  };

  setSpeakItData = () => {
    try {
      const { speakIt } = this.props.statistics.optional;
      let correctAnswers = 0,
        wrongAnswers = 0;
      const keys = Object.keys(speakIt);
      keys.forEach((key) => {
        correctAnswers += speakIt[key].ok.length;
        wrongAnswers += 10 - speakIt[key].ok.length;
      });
      const difficulty = Math.ceil(((correctAnswers + 1) / 3600) * 6);
      this.setState({ difficulty, correctAnswers, wrongAnswers });
    } catch (e) {
      console.log(e.message);
    }
  };

  setEnglishPuzzleData = () => {
    try {
      const { puzzle } = this.props.statistics.optional;
      const correctAnswers = puzzle.lw;
      const items = puzzle.stat ? Object.keys(puzzle.stat).length : 0;
      const wrongAnswers = items * 10 - correctAnswers;
      const difficulty = Math.ceil(((correctAnswers + 1) / 2090) * 6);
      this.setState({ difficulty, correctAnswers, wrongAnswers });
    } catch (e) {
      console.log(e.message);
    }
  };

  setAudioCallData = () => {
    try {
      const { call } = this.props.statistics.optional;
      let correctAnswers = 0,
        wrongAnswers = 0;
      const keys = Object.keys(call);
      keys.forEach((key) => {
        correctAnswers += call[key].c.length;
        wrongAnswers += 10 - call[key].w.length;
      });
      const difficulty = Math.ceil(((correctAnswers + 1) / 3600) * 6);
      this.setState({ difficulty, correctAnswers, wrongAnswers });
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box className={classes.captions}>
          <SportsEsports color='secondary' />
          <Typography variant='h5'>Games</Typography>
        </Box>
        <Paper className={classes.paper}>
          <SelectGame onChange={this.handleSwitchTab} />
          <div className={classes.info}>
            <SignalCellularAlt className={classes.icons} />
            <Typography variant='button'>
              Difficulty level: <span>{this.state.difficulty}</span>
            </Typography>
          </div>
          <div className={classes.info}>
            <Mood className={classes.icons} />
            <Typography variant='button'>
              Correct answers: <span>{this.state.correctAnswers}</span>
            </Typography>
          </div>
          <div className={classes.info}>
            <SentimentDissatisfied className={classes.icons} />
            <Typography variant='button'>
              Wrong answers: <span>{this.state.wrongAnswers}</span>
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }
}

function createStyles(theme) {
  return {
    paper: {
      height: 'auto',
      width: 'auto',
      maxHeight: '100%',
      textAlign: 'left',
      margin: theme.spacing(3),
      padding: theme.spacing(3),
    },
    icons: {
      marginRight: theme.spacing(3),
    },
    captions: {
      textAlign: 'center',
    },
    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      margin: theme.spacing(2, 0),
    },
  };
}

export default withStyles(createStyles)(GamesStatistic);
