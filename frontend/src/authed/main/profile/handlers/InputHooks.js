import { useState, useEffect } from "react"
import axios from "axios"

import REACT_APP_BACKEND_URI from "../../../../helpers/herokuHelper"

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
      axios
        .post(
          `${REACT_APP_BACKEND_URI}/user/${localStorage.getItem("ID")}`,
          inputs,
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => console.log("response", response))
        .catch(err => {
          console.log(err)
        })
      window.location.href = `/auth/projects`
    }
  }

  const CheckDb = async () => {
    try {
      const res = await fetch(
        `${REACT_APP_BACKEND_URI}/user/${localStorage.getItem("ID")}`
      )
      const jsonResponse = await res.json()
      setInputs({ ...jsonResponse })
    } catch (error) {
      console.log(error)
      setInputs({})
    }
  }

  useEffect(() => {
    CheckDb()
  }, [])

  const postToGithub = data => {
    axios
      .post(
        `${REACT_APP_BACKEND_URI}/user/github/${localStorage.getItem("ID")}`,
        { gitHub: data },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => console.log("response", response.config.data))
      .catch(err => {
        console.log(err)
      })
  }

  const handleInputChange = event => {
    event.persist()
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleInputChangeCascade = (value, selectedOptions) => {
    console.log(value, selectedOptions)
    const empType = selectedOptions[0]
    setInputs(inputs => ({ ...inputs, empType }))
  }

  function onEduDateChange(date, educationDate) {
    console.log(date, educationDate)
    const educationStartDate = educationDate[0]
    const educationEndDate = educationDate[1]
    setInputs({ ...inputs, educationStartDate, educationEndDate })
  }

  function onExpDateChange(date, experienceDate) {
    console.log(date, experienceDate)
    const workStartDate = experienceDate[0]
    const workEndDate = experienceDate[1]
    setInputs({ ...inputs, workStartDate, workEndDate })
  }

  return {
    handleSubmit,
    handleInputChange,
    handleInputChangeCascade,
    inputs,
    onEduDateChange,
    onExpDateChange,
    CheckDb,
    setInputs,
    postToGithub
  }
}

export default useSignUpForm
