import {closeSwal, shortError, shortSuccess, showLoadingSpinner} from "../components/modalAlerts"
import baseInstance from "../api";

export async function baseGet (route, token, loadMessage ){
    try {
      showLoadingSpinner(loadMessage)
      const response = await baseInstance.get(route, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      shortSuccess()
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      shortError()
      console.log(error);
    }
    finally{
      closeSwal()
    }
  }
  
  export async function basePost (route, token, data, loadMessage ){
    try {
      showLoadingSpinner(loadMessage)
      const response = await baseInstance.post(route, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      shortSuccess()
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      shortError()
      console.log(error);
    }
    finally{
      closeSwal()
    }
  }
  
  export async function basePut(route, token, data, loadMessage){
    try {
      showLoadingSpinner(loadMessage)
      const response = await baseInstance.put(route, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      shortSuccess()
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      shortError()
      console.log(error);
    }
    finally{
      closeSwal()
    }
  }

  export async function baseDelete(route, token, loadMessage){
    try {
      showLoadingSpinner(loadMessage)
      const response = await baseInstance.delete(route, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      shortSuccess()
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      shortError()
      console.log(error);
    }
    finally{
      closeSwal()
    }
  }