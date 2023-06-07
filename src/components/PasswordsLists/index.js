import './index.css'

const PasswordsLists = props => {
  const {passwordDetails, isCheckBoxClicked} = props
  const {id, name, web, password, initialClassName} = passwordDetails
  const initial = name ? name[0].toUpperCase() : ''

  const stars =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }

  return (
    <li className="list-items">
      <div className="extra">
        <div className="details-container">
          <div className={initialClassName}>
            <div className="profile-logo">{initial}</div>
          </div>
          <div className="web-name-password-container">
            <p className="web-text">{web}</p>
            <p className="user-text">{name}</p>
            {!isCheckBoxClicked && (
              <img src={stars} alt="stars" className="stars-img" />
            )}
            {isCheckBoxClicked && <p className="password-text">{password}</p>}
          </div>
        </div>
        <div className="button-container">
          <button
            className="delete-button"
            type="button"
            onClick={onDeletePassword}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-button-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PasswordsLists
