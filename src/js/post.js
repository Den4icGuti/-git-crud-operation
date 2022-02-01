const URL = 'http://localhost:3000';
//====Добавляем нового пользователя===//
const newUSer = {
  name: "Nicolas",
  phone: '11236578',
  email: 'nicol54@email.com'
};
 
 function createNewUser(user) { 
  const option = {
    //====Метод post делает запрос на добавление нового ресурса в базе данных===//
    method: "POST",
    //====Обязательно передаем заголовок в свойстве headers так как серверу необходимо зхнать какой тип мы передаем значение "application/json"===//
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(user),
  };
  //====Делаем запрос на создание нового ресурса====//
  return  fetch(`${URL}/users`, option)
  .then(r => r.json())
  .then(console.log);
}

createNewUser(newUSer);

createNewUser({
  name: 'Lion',
  lastName: 'Kennadi',
  placeWork: 'R.D.P',
  city:'Racoon-City'
})
  

