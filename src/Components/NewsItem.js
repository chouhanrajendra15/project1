import React from 'react'

const NewsItem = (props) => {


        let { title, description, imageUrl, newsUrl, author, date ,source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl ? "https:nenow.in/wp-content/uploads/2022/03/Free-Fire-Redeem-Code.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0  !important translate-middle badge rounded-pill bg-danger"style= {{ zIndex:1 ,left:'84%'}}>
                            {source}                        
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} On {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem