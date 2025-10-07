
import React from 'react';
import Widget from './Widget';
import type { NewsArticle } from '../types';

interface NewsWidgetProps {
  news: NewsArticle[];
}

const NewsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-6-4h6" />
    </svg>
);


const NewsWidget: React.FC<NewsWidgetProps> = ({ news }) => {
  return (
    <Widget title="Rock Wire" icon={<NewsIcon />}>
      <div className="space-y-4">
        {news.map((article, index) => (
          <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
            <h3 className="font-bold text-rock-light mb-1">{article.headline}</h3>
            <p className="text-sm">{article.summary}</p>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default NewsWidget;
