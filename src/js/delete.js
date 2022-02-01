 const URL = 'http://localhost:3000';

function removeUser(userId) {
  const url = `${URL}/users/${userId}`
  
  const options = {
    method: 'DELETE'
  };
  return fetch(url, options).then(r => r.json());
}


removeUser(109);
removeUser(108);
removeUser(106)
