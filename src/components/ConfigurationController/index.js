// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="label-input-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onClick={onToggleShowContent}
            />
            <label htmlFor="content" className="layout-label">
              Content
            </label>
          </div>
          <div className="label-input-container">
            <input
              type="checkbox"
              id="left"
              checked={showLeftNavbar}
              onClick={onToggleShowLeftNavbar}
            />
            <label htmlFor="left" className="layout-label">
              left Navbar
            </label>
          </div>
          <div className="label-input-container">
            <input
              type="checkbox"
              id="right"
              checked={showRightNavbar}
              onClick={onToggleShowRightNavbar}
            />
            <label htmlFor="right" className="layout-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
