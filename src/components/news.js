import React,{useEffect} from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner';
import propTypes from 'prop-types'
//import { render } from "react-dom"
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';


const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
        updateNews();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // const handlePrevClick = async () => {
    //     setPage(page-1)
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page+1)
    //     updateNews()
    // }
    
    const fetchMoreData = async () => {  
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };

        return (
            <>
            {/* {console.log(props)} */}
                <h2 className="text-center" style={{margin: '25px 0px', marginTop: '48px'}}>Newsapp {capitalizeFirstLetter(props.category)} top headlines</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    style={{overflow: 'visible'}}
                >
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description: ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }

    News.defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    News.propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }

export default News
