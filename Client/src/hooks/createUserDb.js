 // Create User Database
 export const createUserDb = async (email, userData) => {
    await fetch(`http://localhost:8080/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        return data
      })
      .catch( (error) =>{
        console.log(error.message)
      });
  };