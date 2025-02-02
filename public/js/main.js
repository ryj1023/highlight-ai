// eslint-disable-next-line @typescript-eslint/no-unused-vars
const navigateToHighlights = (bookId) => {
  if (bookId) {
    window.location.href = `/api/highlights?bookId=${bookId}`;
  }
};