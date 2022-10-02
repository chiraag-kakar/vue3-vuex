import apiClient from "../../http-common";
const actions = {
    getBooks: async function (ctx) {
        try {
            ctx.commit("GET_BOOKS_REQUEST");
            let response = await apiClient.get('books/')
            console.log('response', response)
            ctx.commit("GET_BOOKS_SUCCESS", { books: response });
        } catch (error) {
            ctx.commit("GET_BOOKS_FAILED", { error: error });
        }
    },
    getBookDetails: async function (ctx, bookId) {
        let response = await apiClient.get(`books/${bookId}`)
        console.log('response_book_details', response)
        ctx.commit("GET_BOOK_DETAILS", { books: response });
    },
    getChapterDetails: async function (ctx, chapterId) {
        let response = await apiClient.get(`chapters/${chapterId}`)
        console.log('response_chapter_details', response)
        ctx.commit("GET_CHAPTER_DETAILS", { books: response });
    }
}

export default actions
