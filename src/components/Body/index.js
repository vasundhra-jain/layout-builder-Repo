// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div>
              <h1>Content</h1>
              <p>Lorem ipsum dolor sit amet,consectetur aiwefhuew</p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div>
              <h1>Right Navbar</h1>
              <div>
                <p>Ad 1</p>
              </div>
              <div>
                <p>Ad 2</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
