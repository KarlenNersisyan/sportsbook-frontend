export function getProducts() {
  return fetch("https://sportsbook-task.herokuapp.com/products").then((res) =>
    res.json()
  );
}
export function getCategories() {
  return fetch("https://sportsbook-task.herokuapp.com/categories").then((res) =>
    res.json()
  );
}
export function getTags() {
  return fetch("https://sportsbook-task.herokuapp.com/tags").then((res) =>
    res.json()
  );
}
