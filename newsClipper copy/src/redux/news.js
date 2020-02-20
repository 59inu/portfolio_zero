import {handleActions, createActions} from 'redux-actions';
import {serachMode, searchFrom, sectionFromSource} from '../libs/news';
import config from '../../config';

//action-creator
const actions = createActions({
  NEWS: {
    ADD: data => data,
    GET: prop => prop,
    PENDING: isnew => isnew,
    FAILURE: (error, dash) => ({error, dash}),
    PAGE: p => p,
    KEYWORD: keyword => keyword,
    SOURCE: source => source,
    MODE: mode => mode,
  },
});

export const newsActions = {
  setKeyword: actions.news.keyword,
  setMode: actions.news.mode,
  setAPIsource: actions.news.source,
  getNews: getNews,
};

const createFetchConfig = APIsource => {
  const BASIC = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  switch (APIsource) {
    case 'NYTimes':
      return BASIC;
    case 'GOOGLE':
      return BASIC;
    case 'NAVER':
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      };
  }
};

const createAPI = {
  search: (keyword, p, APIsource) => {
    const apiKey = config.API_KEY[APIsource];
    const fetchConfig = createFetchConfig(APIsource);
    const page = APIsource === 'NYtimes' ? p - 1 : p;
    switch (APIsource) {
      case 'NAVER':
        return {
          uri: `https://openapi.naver.com/v1/search/news.json&query=${keyword}&start=${page}display=10`,
          fetchConfig,
        };
      case 'NYTimes':
        return {
          uri: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page -
            1}&api-key=${apiKey}`,
          fetchConfig,
        };
      case 'GOOGLE':
        return {
          uri: `http://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}&page=${page}&pageSize=10`,
          fetchConfig,
        };
    }
  },
  category: (category, p, APIsource) => {
    const page = APIsource === 'NYtimes' ? p - 1 : p;
    switch (APIsource) {
      case 'NYTimes':
        return {
          uri: `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("${category}")&api-key=yourkey&page=${page -
            1}
          `,
          fetchConfig: createFetchConfig(APIsource),
        };
      case 'GOOGLE':
        return {
          uri: `http://newsapi.org/v2/sources?apiKey=${apiKey[APIsource]}&category=${category}&page=${page}&pageSize=10`,
          fetchConfig: createFetchConfig(APIsource),
        };
    }
  },
};

function getNews(getBy, page, APIsource, mode) {
  const createNewsData = result => {
    switch (APIsource) {
      case searchFrom.google:
        return result.articles;
      case searchFrom.naver:
        return result.items;
      case searchFrom.nyTimes:
        return result.response.docs;
    }
  };
  const createProp = result => {
    const isSearch = mode === serachMode.search;
    const keyword = isSearch ? getBy : '';
    const category = isSearch ? '' : getBy;
    return {
      data: createNewsData(result),
      dash: false,
      keyword,
      category,
      searchRecord: isSearch ? [getBy] : [],
    };
  };
  return function action(dispatch) {
    const isNew =
      page > 1
        ? false //load more news by current keyword
        : true; //search news by new keyword
    dispatch(actions.news.pending(isNew));
    const api = createAPI[mode](getBy, page, APIsource);
    return fetch(api.uri, api.fetchConfig)
      .then(res => res.json())
      .then(result => {
        if (page > 0) {
          //load more
          console.log('애드보낸다');
          const prop = {
            data: createNewsData(result),
          };
          dispatch(actions.news.add(prop));
        } else {
          //new search
          console.log('겟보낸다');
          const prop = createProp(result);
          dispatch(actions.news.get(prop));
        }
      })
      .catch(err => {
        dispatch(actions.news.failure(err, true));
      });
  };
}

const initialState = {
  pending: false,
  error: false,

  isnew: true,
  mode: serachMode.search,

  APIsource: searchFrom.google,
  category: '',
  keyword: '',
  page: 1,

  news: [],
  searchRecord: [],
};

export default handleActions(
  {
    'NEWS/PENDING': (state, action) => {
      return {...state, pending: true, isnew: action.payload};
    },
    'NEWS/FAILURE': (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload.err,
        dash: action.payload.dash,
      };
    },
    'NEWS/GET': (state, action) => {
      const searchRecord = state.searchRecord.includes(
        action.payload.searchRecord[0],
      )
        ? [...state.searchRecord]
        : action.payload.searchRecord.concat([...state.searchRecord]);

      return {
        ...state,
        pending: false,
        page: 1,
        isnew: false,
        news: action.payload.data,
        dash: action.payload.dash,
        keyword: action.payload.keyword,
        searchRecord:
          searchRecord.length > 4 ? searchRecord.slice(0, 5) : searchRecord,
      };
    },
    'NEWS/ADD': (state, action) => {
      const newNews = [...state.news].concat(action.payload.data);
      return {
        ...state,
        news: newNews,
        dash: false,
        pending: false,
        page: state.page + 1,
      };
    },
    'NEWS/KEYWORD': (state, action) => {
      return {
        ...state,
        keyword: action.payload,
      };
    },
    'NEWS/MODE': (state, action) => {
      return {
        mode: action.payload,
      };
    },
    'NEWS/PAGE': (state, action) => {
      return {
        ...state,
        page: action.payload,
        pending: false,
      };
    },
    'NEWS/SOURCE': (state, action) => {
      return {
        ...state,
        source: action.payload,
      };
    },
  },
  initialState,
);
