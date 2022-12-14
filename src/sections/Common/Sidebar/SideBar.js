import React from 'react';
import { useContext } from 'react';
// import Image from "next/image";
import offerImage from '../../../../public/image/mixed/ads-img.png';
import SideBar from './style';
import { Link } from '~components';
import SearchContext from '~context/SearchContext';
import { useTranslation } from 'next-i18next';

export default function SideBarSection({ allPosts = [], otherPosts = [] }) {
  const categories = allPosts
    .map((category) => category.category)
    .filter((x, index, array) => array.indexOf(x) === index);

  const counts = categories.map((x) => ({
    type: x,
    count: allPosts.filter((item) => item.category === x).length
  }));

  const { t } = useTranslation('translations');

  return (
    <SideBar>
      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>{t('blog.sidebar.title')}</SideBar.Title>

        {!otherPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('blog.notFound')}
          </p>
        )}

        {otherPosts.map((post, index) => (
          <SideBar.RecentPost key={index}>
            <SideBar.RecentPostList>
              <Link key={index} to={`/blog/${post.slug}`}>
                <SideBar.RecentPostTitle>{post.title}</SideBar.RecentPostTitle>
                <SideBar.RecentPostDate>{post.date}</SideBar.RecentPostDate>
              </Link>
              <hr />
            </SideBar.RecentPostList>
          </SideBar.RecentPost>
        ))}
      </SideBar.Widgets>
      {/*/ Single Widgets */}

      {/* Single Widgets */}
      <SideBar.Widgets>
        <SideBar.Title>{t('blog.sidebar.category')}</SideBar.Title>

        {counts.map((x, index) => (
          <SideBar.CateGory key={index}>
            <SideBar.CateGorySingle>
              <SideBar.CateGoryWrapper>
                <SideBar.CateGoryTitle>{x.type}</SideBar.CateGoryTitle>
                <SideBar.CateGoryCount as="span">
                  {x.count} {(x.count === 1 ? 'post' : 'posts')}
                </SideBar.CateGoryCount>
              </SideBar.CateGoryWrapper>
            </SideBar.CateGorySingle>
          </SideBar.CateGory>
        ))}
      </SideBar.Widgets>
      {/*/ .Single Widgets */}
    </SideBar>
  );
}
