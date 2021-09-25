import { API_BASE_URL } from "/constants/config";

const path = `${API_BASE_URL}/game`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
const getOptions = {
  headers,
  method: "GET"
};
const deleteOptions = {
  headers,
  method: "DELETE"
};
const postOptions = {
  headers,
  method: "POST"
};
const putOptions = body => ({
  headers,
  method: "PUT",
  body
});

const GameService = {
  getGameCards: id =>
    fetch(`${path}/getCard/${id}`, getOptions)
      .then(data => {
        return data.json();
      })
      .then(({ response }) => response),
  getGameSolution: id =>
    fetch(`${path}/getSolution/${id}`, getOptions)
      .then(data => {
        return data.json();
      })
      .then(({ response }) => response),
  getScore: (id, sprints) =>
    fetch(`${path}/score/${id}?sprints=${JSON.stringify(sprints)}`, getOptions)
      .then(data => {
        return data.json();
      })
      .then(({ response }) => response)
};

export default GameService;
