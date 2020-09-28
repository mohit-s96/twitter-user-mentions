// /*  Async HTTP Library
// *   using async and await
// *   ES6 features.
// *   
// *   Author: @msx47
// *
// *   Version: 1.0
// *   
// *   License: MIT
// */

class HttpLib{
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    async post(url, message){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(message)
        });
        const data = await response.json();
        return data;
    }
    async put(url, message){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(message)
        });
        const data = await response.json();
        return data;
    }
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.status;
        return data;
    }
}
export const http = new HttpLib();
  
   