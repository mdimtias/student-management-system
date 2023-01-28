 // Create User Database
 export const createUserDb = async (email, userData) => {
    await fetch(`${process.env.REACT_APP_API_URL}/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data.token)
        return data
      })
      .catch( (error) =>{
        console.log(error.message)
      });
  };