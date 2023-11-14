/*
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
 */

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let userMapper = (users) => {
    let arr = [];
    for (user of users) {
        let cnt = {
            id: user.id,
            fullname: [user.name, user.surname].join(' ')
        }
        arr.push(cnt);
    }
    return arr;
}

let usersMapped = userMapper(users)

    /*
    usersMapped = [
      { fullName: "Вася Пупкин", id: 1 },
      { fullName: "Петя Иванов", id: 2 },
      { fullName: "Маша Петрова", id: 3 }
    ]
    */

    alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин