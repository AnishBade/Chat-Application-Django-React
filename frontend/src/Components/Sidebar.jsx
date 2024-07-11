import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import WithAuthentication from '../utils/withAuthenticatiion'

// eslint-disable-next-line react-refresh/only-export-components
function Sidebar() {
  const BASE_URL = 'http://localhost:8000/'
  const [userList, setUserList] = useState([])
  const getAuthTokenFromCookie = () => {
    const cookies = document.cookie.split(';')
    console.log('cookies', cookies)
    for (const cookie in cookies) {
      console.log('cookie', cookie[0])
      const [name, value] = cookie.trim().split('=')
      if (name === 'token') {
        return value
      }
    }
    return null
  }

  useEffect(() => {
    const authToken = getAuthTokenFromCookie()
    console.log(authToken);
    if (authToken) {
      axios.get(`${BASE_URL}api/users/`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }).then(response => {
        setUserList(response.data)
        console.log(userList)

      }).catch(error => {
        console.log("Error making API request:", error)
      })

    }
  }, [])

  return (
    <div className='sidebar'>

    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
// export default WithAuthentication(Sidebar);
export default Sidebar;