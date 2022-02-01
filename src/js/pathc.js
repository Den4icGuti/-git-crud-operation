const URL = 'http://localhost:3000';


function updateByIdUser(update, userId) { 
 const options = {
  //=====Обновляем данные через метод PATCH===//
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json'
  },
   //=====Преобразовуем данные свойства щбъекта в строку через  JSON.stringify ===//
  body: JSON.stringify(update),
  };
  
return fetch(`${URL}/users/${userId}`,options).then(r => r.json()).then(console.log).catch(error => console.log(error));
}
 //=====указываем в параметрах функции обьект, какие свойства хотим обновить, в конце обязательно индефекатор ID пользователя на котором хотим обновить даннные ===//
updateByIdUser({ name: 'Jacson', phone: '987415666', email: 'jackson7458@gmail.com' }, 1)
updateByIdUser({ name: 'Maik' }, 2)
updateByIdUser({name:'Rico',phone:'354-871-152',email:'ricoKiller@gmail.com'},9)