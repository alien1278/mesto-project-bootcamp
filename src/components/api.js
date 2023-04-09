const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-7",
  headers: {
    authorization: "b51a5a63-5226-41fb-a533-985e542ca482",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`error: ${res.status}`);
}
const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
};

const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, { headers: config.headers }).then(
    checkResponse
  );
};
const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, { headers: config.headers }).then(
    checkResponse
  );
};
const editUserInfo = (name, about, avatar) => {
  console.log(name, about, avatar);
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
      avatar: avatar,
    }),
  }).then(checkResponse);
};
const editUserAvatar = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(checkResponse);
};

const like = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkResponse);
};
const dislike = (id) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};
const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};
export {
  getCards,
  getUserInfo,
  addNewCard,
  editUserInfo,
  like,
  dislike,
  deleteCard,
  editUserAvatar,
};
