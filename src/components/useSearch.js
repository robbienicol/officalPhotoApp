export default function searchAndNavigate(history, searchText) {
  history.push(`collection?query=${searchText}`);
}
