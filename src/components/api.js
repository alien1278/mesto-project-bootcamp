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

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse);
}

const addNewCard = (name, link) => {
  return request(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
};

const getCards = () => {
  return request(`${config.baseUrl}/cards`, { headers: config.headers });
};
const getUserInfo = () => {
  return request(`${config.baseUrl}/users/me`, { headers: config.headers });
};
const editUserInfo = (name, about, avatar) => {
  return request(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
      avatar: avatar,
    }),
  });
};
const editUserAvatar = (avatar) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  });
};

const like = (id) => {
  return request(`${config.baseUrl}/cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers,
  });
};
const dislike = (id) => {
  return request(`${config.baseUrl}/cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers,
  });
};
const deleteCard = (id) => {
  return request(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  });
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
