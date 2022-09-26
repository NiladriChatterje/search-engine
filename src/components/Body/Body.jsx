import React from 'react';
import './Body.css';

const Body = ({data,category}) => {
    if(category === 'search')
    return (
        <div
        style={{flexDirection:'column'}}
         className='Body'>
            {data.results?.map((item,i) =>  <section id='body-sec' key={i}>
                                <h1 
                                onClick={()=>window.open(`${item.link}`,'_blank')}>
                                    {item.title}
                                </h1>
                                {item.description?<span>
                                    {item.description}
                                </span>:null}
                                </section>)}
        </div>);

    else if(category === 'image')
    return (
        <div
        style={{flexWrap:'wrap'}}
         className='Body'>
            {data.image_results?.map((item,i) =>  <section id='body-sec' key={i}
                                            style={{alignItems:'center',justifyContent:'center'}}
                                            >
                                            <img
                                            onClick={()=>{
                                                if(item.image.alt.length !== 0)
                                                window.open(`${item.image.alt}`,'_blank');
                                            }} 
                                            src={item.image.src} alt ='' />
                                            <span
                                            style={{marginTop:'20px',width:'80%',height:'2px',background:'black'}}
                                            ></span>
                                            <h1
                                            style={{textAlign:'center'}}
                                            onClick={()=>window.open(`${item.link.href}`,'_blank')}>
                                                {item.link?.title}
                                            </h1>
                                            {item.description?<span>
                                                {item.description}
                                            </span>:null}
                                            </section>)}
        </div>
    )

    else if(category === 'news')
    return (
        <div
        style={{flexDirection:'column'}}
         className='Body'>
            {data.entries?.map((item) =>  <section id='body-sec' key={item.id}
                                            style={{alignItems:'center',justifyContent:'center'}}
                                            >
                                            <h2 onClick={()=>window.open(item.link,'_blank')}>
                                                {item.title}
                                            </h2>
                                            <div id='sub-article'>
                                            {item.sub_articles?.map((item,i)=>{
                                                return <div id='sub-article-container'
                                                        onClick={()=>window.open(item.url,'_blank')}>
                                                            <h5>{item.publisher}</h5>
                                                        </div>
                                            })}</div>
                                            {item.summary?<span id='summary'>
                                                {item.summary}
                                            </span>:null}

                                            {item.published?<span
                                            id='publish'
                                            >{item.published}</span>:null}
                                            </section>)}
        </div>
    )
  
}

export default Body;