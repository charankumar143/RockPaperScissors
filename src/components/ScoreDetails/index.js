import {Component} from 'react'

import {AiFillCloseCircle} from 'react-icons/ai'

import Popup from 'reactjs-popup'

import ChoiceItem from '../ChoiceItem'

import './index.css'

class ScoreDetails extends Component {
  state = {score: 0, randomValue: '', activeButton: '', activeStatus: false}

  renderRandom = () => {
    const {choicesList} = this.props
    const value = Math.floor(Math.random() * 3)
    const result = choicesList[value].id
    this.setState({randomValue: result})
  }

  onClickPlayAgain = () => {
    this.setState({activeStatus: false})
  }

  renderActiveButton = activeButtonItem => {
    this.setState({activeButton: activeButtonItem, activeStatus: true})
  }

  renderState = () => {
    const {activeButton, randomValue} = this.state
    if (activeButton === 'ROCK' && randomValue === 'SCISSORS') {
      this.state(prevState => ({score: prevState.score + 1}))
    }
    if (activeButton === 'ROCK' && randomValue === 'PAPER') {
      this.state(prevState => ({score: prevState.score - 1}))
    }
    if (activeButton === 'PAPER' && randomValue === 'ROCK') {
      this.state(prevState => ({score: prevState.score + 1}))
    }
    return null
  }

  renderParagraph = () => {
    const {activeButton, randomValue} = this.state

    if (activeButton === 'ROCK' && randomValue === 'SCISSORS') {
      return 'YOU WON'
    }
    if (activeButton === 'ROCK' && randomValue === 'ROCK') {
      return 'IT IS DRAW'
    }
    if (activeButton === 'SCISSORS' && randomValue === 'SCISSORS') {
      return 'IT IS DRAW'
    }
    if (activeButton === 'ROCK' && randomValue === 'PAPER') {
      return 'YOU LOSE'
    }
    if (activeButton === 'SCISSORS' && randomValue === 'ROCK') {
      return 'YOU LOSE'
    }
    if (activeButton === 'SCISSORS' && randomValue === 'PAPER') {
      return 'YOU WON'
    }
    if (activeButton === 'PAPER' && randomValue === 'PAPER') {
      return 'IT IS DRAW'
    }
    if (activeButton === 'PAPER' && randomValue === 'ROCK') {
      return 'YOU WON'
    }
    if (activeButton === 'PAPER' && randomValue === 'SCISSORS') {
      return 'YOU LOSE'
    }

    return null
  }

  renderGameResult = () => {
    const {choicesList} = this.props
    const {activeButton, randomValue} = this.state

    return (
      <div className="result">
        <div className="result-container">
          <div className="item">
            <h1 className="paragraph-heading">You</h1>
            {choicesList.map(eachItem => {
              if (eachItem.id === activeButton) {
                return (
                  <img
                    src={eachItem.imageUrl}
                    alt="your choice"
                    className="image-icon"
                  />
                )
              }
              return null
            })}
          </div>
          <div className="item">
            <h1 className="paragraph">Opponent</h1>
            {choicesList.map(eachItem => {
              if (eachItem.id === randomValue) {
                return (
                  <img
                    src={eachItem.imageUrl}
                    alt="opponent choice"
                    className="image-icon"
                  />
                )
              }
              return null
            })}
          </div>
        </div>
        <p className="paragraph">{this.renderParagraph()}</p>
        <button type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderHomePage = () => {
    const {choicesList} = this.props

    return (
      <div className="bg-container">
        <ul className="list-container">
          {choicesList.map(eachChoice => (
            <ChoiceItem
              key={eachChoice.id}
              choiceDetails={eachChoice}
              renderActiveButton={this.renderActiveButton}
              renderRandom={this.renderRandom}
            />
          ))}
        </ul>
        <div className="bottom">
          <Popup
            modal
            trigger={
              <button type="button">
                <h1>Rules</h1>
              </button>
            }
          >
            {close => (
              <div>
                <button type="button" onClick={() => close()}>
                  <AiFillCloseCircle className="sort-by-icon" />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }

  renderResult = () => {
    const {activeStatus} = this.state
    return (
      <div>
        {activeStatus ? this.renderGameResult() : this.renderHomePage()}
      </div>
    )
  }

  render() {
    const result = this.renderResult()
    const {score} = this.state
    console.log(score)
    return (
      <div>
        <div className="bg-container">
          <div className="top-container">
            <div>
              <h1 className="heading">
                <span className="heading">Rock</span>
                <br />
                <span className="heading">Paper</span>
                <br />
                <span className="heading">Scissors</span>
                <br />
              </h1>
            </div>
            <div className="score-container">
              <p className="score-heading">Score</p>
              <p className="count-score">{score}</p>
            </div>
          </div>
          {result}
        </div>
      </div>
    )
  }
}

export default ScoreDetails
