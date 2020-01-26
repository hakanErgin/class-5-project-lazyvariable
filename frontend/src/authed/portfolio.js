import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Collapse, Icon } from 'antd'

import REACT_APP_BACKEND_URI from '../helpers/herokuHelper'
import REACT_APP_FIREBASE_URI from '../helpers/firebaseHelper'

console.log('h', REACT_APP_BACKEND_URI)
console.log('f', REACT_APP_FIREBASE_URI)

const { Panel } = Collapse
const Portfolio = () => {
  const [repos, setRepos] = useState([])
  const titleState = []
  const descriptionState = []
  const repositoryState = []
  const deployedSiteState = []
  const photoState = []
  const gitHub = []
  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URI}/user/${localStorage.getItem('ID')}`)
      .then(result => {
        setRepos(result.data.gitHub)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const customPanelStyle = {
    background: '#f9f9f9 0% 0% no-repeat padding-box',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
    width: 754,
    color: '#f9f9f9',
    marginTop: 40,
  }
  const PostButton = () => {
    axios.post(
      `${REACT_APP_BACKEND_URI}/user/github/${localStorage.getItem('ID')}`,
      {
        gitHub,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      },
    )
  }

  const handleClick = () => {
    window.location.href = `/auth/preview`
  }

  const handleTitleChange = e => {
    titleState.push(e.target.value)
    console.log(titleState)
  }

  const handleDescriptionChange = p => {
    descriptionState.push(p.target.value)
    console.log(descriptionState)
  }

  const handleDeployedSiteChange = p => {
    deployedSiteState.push(p.target.value)
  }

  const handlePhotoChange = p => {
    photoState.push(p.target.value)
  }

  return (
    <div className="profileHeader">
      <div className="titleMin">Edit your projects details</div>

      {repos.map(function (item) {
        const currentTitle = item.title
        const currentDescription = item.description
        const currentRepository = item.repository
        const currentDeployedSite = item.deployedSite
        const currentPhoto = item.photo

        return (
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            <Panel header={currentTitle} key="1" style={customPanelStyle}>
              <div className="repoDetailsContainer">
                <form onSubmit={event => {
                  event.preventDefault()
                  const title = titleState.slice(-1)[0]
                  const description = descriptionState.slice(-1)[0]
                  const repository = repositoryState.slice(-1)[0]
                  const deployedSite = deployedSiteState.slice(-1)[0]
                  const photo = photoState.slice(-1)[0]
                  gitHub.push({ title, description, repository, deployedSite, photo })
                  console.log(gitHub)
                }}>
                  <div className="repoDetailsWrapper">
                    <div className="repoField">
                      <div className="repoLabel">Name:</div>
                      <input
                        className="repoInput"
                        type="text"
                        defaultValue={currentTitle}
                        onChange={handleTitleChange}
                      ></input>
                    </div>
                    <div className="repoField">
                      <div className="githubLabel">deployed site: </div>
                      <input
                        className="repoInput"
                        type="text"
                        defaultValue={currentDeployedSite}
                        onChange={handleDeployedSiteChange}
                      ></input>
                    </div>
                    <div className="repoField">
                      <div className="githubLabel">Photo: </div>
                      <input
                        type="text"
                        className="repoInput"
                        defaultValue={currentPhoto}
                        onChange={handlePhotoChange}
                      ></input>
                    </div>
                    <div className="repoField">
                      <div className="githubLabel">Repo: </div>
                      <input
                        type="text"
                        className="repoInput"
                        defaultValue={currentRepository}
                      ></input>
                    </div>
                    <div className="repoField">
                      <div className="githubLabel">Description:</div>
                      <textarea
                        className="repoInputDescription"
                        cols="50"
                        rows="10"
                        defaultValue={currentDescription}
                        onChange={handleDescriptionChange}
                      ></textarea>
                    </div>
                  </div>
                  <input type="submit" className="repoSaveButton" value="save" />
                </form>
              </div>
            </Panel>
          </Collapse>
        )
      })}
      <form
        onSubmit={event => {
          event.preventDefault()
          console.log(gitHub)
          PostButton()
          handleClick()
        }}
      >
        <input type="submit" className="submitPortfolio" value="Submit" />
      </form>
    </div>
  )
}

export default Portfolio
