import axios from "axios";

class AxiosWrapper {
  
    axios: any;
    constructor(baseURL: any) {
      this.axios = axios.create({
        baseURL: baseURL
      });
      this.setHeader("Content-Type", "application/json");
      this.setHeader("Accept", "application/json");
    }
  
    setHeader(key: string | number, value: any) {
      this.axios.defaults.headers.common[key] = value;
    }
  
    removeHeader(key: string | number) {
      delete this.axios.defaults.headers.common[key];
    }
  
    get(path: any) {
      return this.axios.get(path);
    }
  
    post(path: any, data: any) {
      return this.axios.post(path, data);
    }
  
    put(path: any, data: any) {
      return this.axios.put(path, data);
    }
  
    patch(path: any, data: any) {
      return this.axios.patch(path, data);
    }
  
    delete(path: any) {
      return this.axios.delete(path);
    }
  }

  export default AxiosWrapper;
  