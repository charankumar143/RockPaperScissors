import './index.css'

const ChoiceItem = props => {
  const {choiceDetails, renderActiveButton, renderRandom} = props
  const {imageUrl, id} = choiceDetails

  const onClickValue = () => {
    renderActiveButton(id)
    renderRandom()
  }

  const renderButton = () => {
    if (id === 'ROCK') {
      return 'rockButton'
    }
    if (id === 'SCISSORS') {
      return 'scissorsButton'
    }
    return 'paperButton'
  }
  return (
    <div>
      <li className="list-container">
        <button
          type="button"
          className="button-item"
          data-testid={renderButton()}
          onClick={onClickValue}
          value={id}
        >
          <img src={imageUrl} className="image-icon" alt={id} />
        </button>
      </li>
    </div>
  )
}
export default ChoiceItem
