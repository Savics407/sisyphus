import React from 'react'
import { Link } from 'react-router-dom'

function Auth() {
  return (
    <div>
          <div className="auth-layout">
            {/* <!-- Authentication screen --> */}
            <div className="auth-container">
              <div className="auth-container__text">
                <h1>
                  Authentication <br />
                  Required!
                </h1>
                <h2>Sign-in with just your email address</h2>
              </div>
              <form className="auth-container__form">
                <div>
                  <label>Github Username</label>
                  <input type="text" placeholder="Savics407" id="github" required />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="email" id="email" required />
                </div>

                <button type="submit">Authenticate</button>
              </form>
            </div>

            {/* <!-- Gravatter and Github Repositories --> */}

            <div className="git-container">
              <div className="git-container__gravater">
                <img src="" alt="gravater" id="gravatar" />
              </div>
              <div className="git-container__repositories">
                <div hidden id="notfound">
                  <h1>
                    No Github repositories found for user <span id="user"></span>
                  </h1>
                </div>
                <div className="found" id="found">
                  <h1><span id="number"></span> github repositories for <span id="user2"></span></h1>
                  <div className="scroll" id="repositories"></div>
                </div>
              </div>
              <Link to='/dashboard'> <button>Proceed to App</button></Link>
            </div>
          </div>

    </div>
  )
}

export default Auth