import axios from 'axios';

const useInterceptor = () => {

   axios.interceptors.request.use((config) => {
      if(sessionStorage.getItem('token')!=null && sessionStorage.getItem('token')!=undefined)
      config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
      return config;
  });
  
}

export default useInterceptor;
