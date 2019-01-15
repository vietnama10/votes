import fetch from 'cross-fetch';

export const request = (url, method) => {
    let methodObject = {method: 'GET'};
    switch(method) {
      case 'GET':
        methodObject = {method: 'GET'}; break;
      case 'POST':
        methodObject = {method: 'POST'}; break;
      case 'PUT' :
        methodObject = {method: 'PUT'}; break;
      case 'DELETE' :
        methodObject = {method: 'DELETE'}; break;
      default: 
        methodObject = {method: 'GET'}; break;
    }
    return fetch(url, methodObject)
      .then(response => response.json())
      .catch(error => {
        console.log(error);
        return false;
      });
}