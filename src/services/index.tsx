import axios from 'axios'
import { toast } from 'react-toastify'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  let msg: string
  
  instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response)
    },
    (error) => {
      if (
        axios.isCancel(error)
      ) {
        return Promise.reject(error)
      }
      if (error.response && error.response.status === 401) {
        msg = error.response.data.errors[0][0].details
        toast.warn(msg, {
          toastId: msg,
        })
      } else if (error.response && error.response.status === 0) {
        msg = 'Falha ao se comunicar com a API'
        toast.warn(msg, {
          toastId: msg,
        })
      } else {
        msg =
          error.response?.data.errors[0][0].details ??
          'Ocorreu um erro inesperado, tente novamente mais tarde'
        toast.warn(msg, {
          toastId: msg,
        })
      }
      return Promise.reject(error)
    },
  )
  
  export default instance