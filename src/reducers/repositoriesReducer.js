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
      state.gitHubData = addOrDeleteComment(state, action, 'add');
      localStorage.setItem('gitHubData', JSON.stringify(state.gitHubData));
    },
    removeCommentary: (state, action) => {
      state.gitHubData = addOrDeleteComment(state, action, 'remove');
      localStorage.setItem('gitHubData', JSON.stringify(state.gitHubData));
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

function addOrDeleteComment(state, action, type) {
  return {
    ...state.gitHubData,
    items: [
      ...state.gitHubData.items.reduce((acc, card) => {
        if (card.id === action.payload.id) {
          if (type === 'add') {
            card = {
              ...card,
              commentaries: [...(card.commentaries || []), action.payload.inputValue],
            };
          } else {
            const filteredCommentaries = card.commentaries.filter(
              (commentary) => commentary !== action.payload.str,
            );
            card = {
              ...card,
              commentaries: filteredCommentaries,
            };
          }
          acc.push(card);
        } else {
          acc.push(card);
        }
        return acc;
      }, []),
    ],
  };
}

export const {
  setRepositoryList,
  setAppLoading,
  setItemsCount,
  setCurrentPage,
  setPageCounts,
  setCommentary,
  setSelectedCard,
  removeCommentary,
} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
