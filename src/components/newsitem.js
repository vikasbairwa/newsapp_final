import React from 'react'

const Newsitem = (props)=> {
        let { title, description, imageurl, newsurl, author, date, source } = props;
        const imgStyle = {
            maxHeight: '240px'
          };
        return (
            <div className="my-2">
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: '90%', zIndex:'1'}}>
                            {source}
                        </span>
                    <img src={!imageurl ? "https://www.compareraja.in/blog/wp-content/uploads/2014/11/news-300x200.jpg" : imageurl} className="card-img-top img-fluid" style={imgStyle} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description} ...</p>
                        <p className="card-text">By {!author ? "Lois Lane" : author} on {new Date(date).toGMTString()}</p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }

export default Newsitem
