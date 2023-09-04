import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import News from '../components/News';
import { getNewsStart } from '../redux/action/new.action';


export default function Home() {
    const news = useSelector(state => state.news);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsStart())
    },[news.length])

    return (
        <div className='container'>
            <div className="row">
                {
                    news.length > 0 && news.map((item,index) => (
                        <News item={item} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}
