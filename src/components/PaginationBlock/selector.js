import { createSelector } from '@reduxjs/toolkit';

const selectCurrentPageId = (state) => state.repositories.currentPage;
const selectPageCounts = (state) => state.repositories.pageCounts;

const selectPaginationData = createSelector(
  [selectCurrentPageId, selectPageCounts],
  (currentPageId, pagesAmount) => {
    return {
      pageId: currentPageId,
      pagesAmount,
    };
  },
);

export default selectPaginationData;
