import {
  setRepositoryList,
  setAppLoading,
  setPageCounts,
  setCommentary,
  removeCommentary,
} from '../reducers/repositoriesReducer';

const FETCH_REPOSITORIES_URL = 'https://api.github.com/search/repositories';

export const fetchRepositories = (searchValue) => {
  return async function (dispatch) {
    dispatch(setAppLoading(true));

    try {
      if (searchValue) {
        let response = await fetch(`${FETCH_REPOSITORIES_URL}?q=${searchValue}`);
        let responseJSON = await response.json();
        dispatch(setRepositoryList(responseJSON));
        dispatch(setPageCounts());
      }
      dispatch(setAppLoading(false));
    } catch (error) {
      console.error('We have a problem => ', error);
      dispatch(setAppLoading(false));
    }
  };
};

export const initializeApp = () => {
  return async function (dispatch) {
    dispatch(setAppLoading(true));

    try {
      let gitHubData = localStorage.getItem('gitHubData');

      if (gitHubData) {
        dispatch(setRepositoryList(JSON.parse(gitHubData)));
        dispatch(setAppLoading(false));
      }

      dispatch(setPageCounts());
      dispatch(setAppLoading(false));
    } catch (error) {
      console.error('We have a problem => ', error);
      dispatch(setAppLoading(false));
    }
  };
};

export const removeProjectById = (id) => {
  return async function (dispatch, getState) {
    dispatch(setAppLoading(true));
    const { gitHubData } = getState().repositories;
    try {
      const newRepos = {
        items: gitHubData.items.filter((repo) => repo.id !== Number(id)),
      };
      await dispatch(setRepositoryList(newRepos));
      await dispatch(setAppLoading(false));
    } catch (error) {
      console.error('We have a problem => ', error);
      dispatch(setAppLoading(false));
    }
  };
};

export const setCommentById = (id, inputValue) => {
  return async function (dispatch) {
    dispatch(setAppLoading(true));
    try {
      await dispatch(setCommentary({ id, inputValue }));
      await dispatch(setAppLoading(false));
    } catch (error) {
      console.error('We have a problem => ', error);
      dispatch(setAppLoading(false));
    }
  };
};

export const removeCommentByName = (id, str) => {
  return async function (dispatch, getState) {
    dispatch(setAppLoading(true));
    const { gitHubData } = getState().repositories;
    try {
      // const newComments = {
      //   items: gitHubData.items.commentaries.filter((comment) => comment !== String(str)),
      // };

      await dispatch(removeCommentary({ id, str }));
      await dispatch(setAppLoading(false));
    } catch (error) {
      console.error('We have a problem => ', error);
      dispatch(setAppLoading(false));
    }
  };
};
