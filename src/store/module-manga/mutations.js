const mutation = {
    GET_BOOKS_REQUEST: function (state) {
        state.bookList.loading = true;
    },
    GET_BOOKS_SUCCESS: function (state, payload) {
        console.log('payload_books', payload)
        state.bookList.loading = false;
        state.bookList.books = payload.books;
    },
    GET_BOOKS_FAILED: function (state, payload) {
        state.bookList.loading = false;
        state.bookList.errorMessage = payload.error
    },
    GET_BOOK_DETAILS: function (state, payload) {
        console.log('payload_book', payload)
    },
    GET_CHAPTER_DETAILS: function (state, payload) {
        console.log('payload_chapter', payload)
    }
}
export default mutation
