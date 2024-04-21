/***
 * A function to connect to API client
 * 
 * @param APIkey 
 * API key from developer dahsboard
 * 
 * @param APIClientId
 * API client ID from developer dashboard
 * 
 * @paramm Langugae 
 * Which language to execute
 * 
 * @param Code 
 * The code which we want to execute
 *
 * returns Executed code
 */

import axios from "axios";

let compilePhpCode = async function (
  apiKey,
  clientId,
  inputCode
) {
  const url = "https://api.codegyan.in/v1/compiler/compile";

  const data = {
    lang: 'php',
    code: inputCode
  };

  const response = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      'APIKey': apiKey,
      'ClientID': clientId
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });


  return response;
};

export default compilePhpCode;