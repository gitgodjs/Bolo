const post_to_api = async function (url, request) {
    const API_URL = await process.env.NEXT_PUBLIC_API_URL;
    return await fetch(API_URL + url, {
        method: "POST",
        body: request,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualq>
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // M>
          "Access-Control-Allow-Headers": "Content-Type, Authorization" // Encabe>
        },
      });
  };
  
  const get_from_api = async function (url, request) {
    const API_URL = await process.env.NEXT_PUBLIC_API_URL;
    return await fetch(API_URL + url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualq>
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // M>
          "Access-Control-Allow-Headers": "Content-Type, Authorization" // Encabe>
        },
      });
  }
  
  const get_from_api_files = async function (url, request) {
    const API_URL = await process.env.NEXT_PUBLIC_API_URL;
    return await fetch(API_URL + url, {
        method: "GET",
      });
  }
  
  const post_to_api_token = async function (url, request, token = null) {
    const API_URL = await process.env.NEXT_PUBLIC_API_URL;
    return await fetch(API_URL + url, {
        method: "POST",
        body: request,
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualq>
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // M>
          "Access-Control-Allow-Headers": "Content-Type, Authorization" // Encabe>
        },
      });
  };
  
  const post_to_api_token_files = async function (url, request, token = null) {
    const API_URL = await process.env.NEXT_PUBLIC_API_URL;
    return await fetch(API_URL + url, {
        method: "POST",
        body: request,
        headers: {
          "Authorization": "Bearer " + token,
        },
      });
  };
  
  const get_from_api_token = async function (url, request, token = null) {
    const API_URL = await process.env.NEXT_PUBLIC_API_URL;
    return await fetch(API_URL + url, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Permitir solicitudes desde cualq>
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // M>
          "Access-Control-Allow-Headers": "Content-Type, Authorization" // Encabe>
        },
      });
  }
  
  export default { post_to_api, get_from_api, post_to_api_token, get_from_api_token, post_to_api_token_files, get_from_api_files };