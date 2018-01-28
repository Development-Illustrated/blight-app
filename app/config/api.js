import React from 'react'
import { Constants } from 'expo'

function checkAuth() {
  fetch('http://35.177.182.18:5000/api/user', {
    method: 'GET',
    headers: {
      userid: Constants.deviceId
    }
  }).then(response => {
    return response
  })
}

export { checkAuth }