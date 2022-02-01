const URL = 'http://localhost:3000/users';

 function fetchUsers() { 
    return fetch(`${URL}`)
     .then(r => r.json())
     .catch(error => comnsple.log(error))
}
     
 function fetchById(userId) { 
   return fetch(`http://localhost:3000/users/${userId}`).then(r => r.json()).catch(error => console.log(error));
}


//===Возвращыем всех пользователей из сурвера===//

fetchUsers()

//===Возвращаем пользователя по идентификатору id===//
fetchById(1)
fetchById(3)




