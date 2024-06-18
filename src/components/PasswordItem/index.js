import './index.css'

const renderPasswords = props => {
  const {eachPasswordDetails, isCheckedValue, onDelete} = props
  const {
    id,
    username,
    websiteUrl,
    password,
    initial,
    bgColor,
  } = eachPasswordDetails

  const onClickDeleteIcon = () => {
    onDelete(id)
  }

  const hideAndSeekPasswordView = isCheckedValue ? (
    <p className="input-details-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="password-stars"
    />
  )

  return (
    <li className="added-password-item">
      <div className={`initial-container ${bgColor}`}>
        <h1 className="initial-text">{initial}</h1>
      </div>
      <div className="input-details-container">
        <p className="input-details-text">{websiteUrl}</p>
        <p className="input-details-text">{username}</p>
        {hideAndSeekPasswordView}
      </div>
      <button
        type="button"
        data-testid="delete"
        label="true"
        className="trash-button"
        onClick={onClickDeleteIcon}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="trash-icon"
        />
      </button>
    </li>
  )
}

export default renderPasswords
