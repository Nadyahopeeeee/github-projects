import { createSlice } from '@reduxjs/toolkit';

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    appLoading: false,
    gitHubData: {},
    itemsCount: 10,
    pageCounts: 1,
    currentPage: 1,
    selectedCard: null,
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    setRepositoryList: (state, action) => {
      state.gitHubData = action.payload;
      localStorage.setItem('gitHubData', JSON.stringify(action.payload));
    },
    setCommentary: (state, action) => {
      state.gitHubData = {
        ...state.gitHubData,
        items: [
          ...state.gitHubData.items.reduce((acc, card) => {
            if (card.id === action.payload.id) {
              card = {
                ...card,
                commentaries: [...(card.commentaries || []), action.payload.inputValue],
              };
              acc.push(card);
            } else {
              acc.push(card);
            }
            return acc;
          }, []),
        ],
      };
    },
    setItemsCount: (state, action) => {
      state.itemsCount = action.payload;
    },
    setPageCounts: (state) => {
      state.pageCounts = Math.ceil(state.gitHubData?.items?.length / state.itemsCount) || 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setRepositoryList,
  setAppLoading,
  setItemsCount,
  setCurrentPage,
  setPageCounts,
  setCommentary,
  setSelectedCard,
} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

// [action.payload.id]: {
//   ...state.gitHubData.items[action.payload.id],
//   commentaries: {
//     ...state.gitHubData.items[action.payload.id].commentaries,
//     ...action.payload.inputValue
//   }