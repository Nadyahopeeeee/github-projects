import { createSelector } from '@reduxjs/toolkit';

const selectGitHubData = (state) => state.repositories.gitHubData;
const selectIsLoading = (state) => state.repositories.appLoading;
const selectItemsCount = (state) => state.repositories.itemsCount;
const selectCurrentPage = (state) => state.repositories.currentPage;
const selectCardId = (_, id) => id;
const selectModalState = (state) => state.modal.isOpen;

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const selectRepositoryList = createSelector(
  [selectGitHubData, selectItemsCount, selectCurrentPage],
  (data, itemsCount, currentPageId) => {
    if (Object.keys(data).length === 0) {
      return {
        repositories: [],
      };
    }

    if (currentPageId === 1) {
      return {
        repositories: data.items.slice(0, Number(itemsCount)),
      };
    }

    return {
      repositories: paginate(data.items, itemsCount, currentPageId),
    };
  },
);

const selectHomeData = createSelector(
  [selectRepositoryList, selectCardId, selectIsLoading, selectModalState],
  (data, cardId, isLoading, isModalOpen) => {
    return {
      repositories: data.repositories,
      cardData: data.repositories.find((repo) => repo.id === Number(cardId)),
      isLoading,
      isModalOpen,
    };
  },
);

export default selectHomeData;
