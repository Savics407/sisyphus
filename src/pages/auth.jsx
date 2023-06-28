import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MD5 } from 'crypto-js';
import { FetchRepo } from '../api/fetchApi';
import { toast } from 'react-toastify';

function Auth() {
  const [email, setEmail] = useState()
  const [userName, setUserNAme] = useState()
  const [fetchData, setFetchData] = useState(false)
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState()

  const getGravatarURL = (email) => {
    const address = String(email).trim().toLowerCase();
    const hash = MD5(address).toString();

    return `https://www.gravatar.com/avatar/${hash}`;
  };

  const getUserRepos = async () => {
    setLoading(!loading)
    try {
      const data = await FetchRepo(userName);
      setFetchData(true)
      setRepos(data)
    } catch (error) {
      setFetchData(false)
      console.log(error);
      toast.error(`network error`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } finally {
      setLoading(false)
    }
  }


  const authenticate = (e) => {
    e.preventDefault();
    getGravatarURL(email);
    getUserRepos()
    localStorage.setItem("avatar", getGravatarURL(email));
    localStorage.setItem("name", userName);
  }

  return (
    <div>

      <div className="auth-layout">
        {!fetchData ?

          <div className="auth-container">
            <div className="auth-container__text">
              <h1>
                Authentication <br />
                Required!
              </h1>
              <h2>Sign-in with just your email address</h2>
            </div>
            <form className="auth-container__form" onSubmit={authenticate}>
              <div>
                <label>Github Username</label>
                <input type="text" placeholder="Savics407" defaultValue={userName} id="github" onChange={(e) => setUserNAme(e.target.value)} required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="email" id="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <button type="submit">{loading ? "Authenticate..." : "Authenticate"}</button>
            </form>
          </div>
          :

          <div className="git-container">
            {/* <!-- Gravatter and Github Repositories --> */}

            <div className="git-container__gravater">
              <img src={getGravatarURL(email)} alt="gravater" id="gravatar" />
            </div>
            <div className="git-container__repositories">

              {/* List all users repositories */}
              {repos?.length > 0 ?
                <div className="found" id="found">
                  <h1>{repos?.length} github repositories for {userName}</h1>
                  <div className="scroll" id="repositories">
                    <ul>
                      {repos?.map((repo, index) => (
                        <li key={index}><a href={repo.clone_url} target='_blank'> {repo.name}</a></li>
                      ))}
                    </ul>
                  </div>

                </div>
                :
                <div>
                  <h1>
                    No Github repositories found for user {userName}
                  </h1>
                </div>
              }

            </div>
            <Link to='/dashboard'> <button>Proceed to App</button></Link>
          </div>
        }
      </div>
    </div >
  )
}

export default Auth