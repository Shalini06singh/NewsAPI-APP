import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import News from '../components/News';
import { getCategoryNewsStart } from '../redux/action/new.action';

export default function Category() {
  let { slug } = useParams();

  const categoryNews = useSelector(state => state.categoryNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryNewsStart(slug))
  }, [slug, categoryNews.length])
  return (
    <div className='container'>
      <div className="row">
        {
          categoryNews.length > 0 && categoryNews.map((item, index) => (
            <News item={item} key={index} />
          ))
        }
      </div>
    </div>
  )
}
