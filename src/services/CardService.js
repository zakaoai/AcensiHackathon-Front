import { API_BASE_URL } from "/constants/config";

const path = `${API_BASE_URL}/card`;
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

const CardService = {
  getAllCards: () =>
    fetch(path, getOptions)
      .then(data => {
        return data.json();
      })
      .then(({ response }) => response)
};

export default CardService;
