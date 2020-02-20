import React from 'react';
import {Linking} from 'react-native';
import {searchFrom} from '../libs/news';

const getDate = (item, APIsource) => {
  switch (APIsource) {
    case searchFrom.google:
      return item.publishedAt.substring(0, 10);
    case searchFrom.naver:
      return item.pubDate.substring(6, 17);
    case searchFrom.nyTimes:
      return item.pub_date.substring(0, 10);
  }
};
const cutTitleLen = title => {
  return title.length > 20 ? title.substring(0, 60) + '...' : title;
};
const getTitle = (item, APIsource) => {
  switch (APIsource) {
    case searchFrom.google:
      return cutTitleLen(item.title);
    case searchFrom.naver:
      return cutTitleLen(item.title);
    case searchFrom.nyTimes:
      return cutTitleLen(item.headline.main);
  }
};

const getLink = (item, APIsource) => {
  switch (APIsource) {
    case searchFrom.google:
      return cutTitleLen(item.url);
    case searchFrom.naver:
      return cutTitleLen(item.link);
    case searchFrom.nyTimes:
      return cutTitleLen(item.web_url);
  }
};

export {getTitle, getDate, getLink};
