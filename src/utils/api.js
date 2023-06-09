class Api {
  constructor({ headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateUserInfo(data) {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.profileName,
        about: data.profileJob
      })
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(this._checkResponse);
  }

  removeCard(data) {
    const requestUrl = this._baseUrl + `/cards/${data._id}`;
    return fetch(requestUrl, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCardLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCardLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(requestUrl, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateProfileAvatar(data) {
    const requestUrl = this._baseUrl + `/users/me/avatar`;
    return fetch(requestUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink
      })
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '5c068809-9a0f-4741-88c5-237d1193c9e0',
    'Content-Type': 'application/json'
  }
})

export default api;
