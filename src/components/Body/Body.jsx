import React from 'react';
import './Body.css';
import ReactHtmlParser from 'react-html-parser';
import { Loader } from '../Loader/Loader';
import ReactPlayer from 'react-player';

const Body = ({data,category,isLoading}) => {

    if(isLoading){
        return <Loader />;
    }
    else{
    if(category === 'search')
    return (
        <div
         className='Body'>
            {data.results?.map((item,i) =>  <section id='body-sec' key={i}
            
                onMouseEnter={()=>{Array.from(document.getElementsByClassName('under'))[0].style.backgroundColor = 'black'}}
                onMouseLeave={()=>{Array.from(document.getElementsByClassName('under'))[0].style.backgroundColor = 'white'}}>
                                <h1 
                                onClick={()=>window.open(`${item.link}`,'_blank')}>
                                    {item.title}
                                </h1>
                                <span className='under'></span>
                                {item.description?<span>
                                    {item.description}
                                </span>:null}
                                </section>)}
        </div>);

    else if(category === 'image')
    return (
        <div
         className='Body'>
            {data.image_results?.map((item,i) =>  <section id='body-sec' key={i}
                                             onMouseEnter={()=>{Array.from(document.getElementsByClassName('under'))[0].style.backgroundColor = 'black';
                                                                Array.from(document.getElementsByClassName('link'))[0].style.color = 'black'}}
                                             onMouseLeave={()=>{Array.from(document.getElementsByClassName('under'))[0].style.backgroundColor = 'white'
                                                                Array.from(document.getElementsByClassName('link'))[0].style.color = 'white'}}
                                            style={{alignItems:'center',justifyContent:'center'}}
                                            >
                                            <img
                                            onClick={()=>{
                                                if(item.image.alt.length !== 0)
                                                window.open(`${item.image.alt}`,'_blank');
                                            }} 
                                            src={item.image.src} alt ='' />
                                            <span className='under'
                                            ></span>
                                            <h3
                                            style={{textAlign:'left'}}>
                                                {item.link?.title}
                                            </h3>
                                            <a
                                            className='link'
                                            href={item.link?.href} target={'_blank'}>{item.link?.href}</a>
                                            {item.description?<span>
                                                {item.description}
                                            </span>:null}
                                            </section>)}
        </div>
    )

    else if(category === 'news')
    return (
        <div
         className='Body'>
            {data.entries?.map((item) =>  <section id='body-sec' key={item.id}
                                            style={{alignItems:'center',justifyContent:'center'}}
                                            >
                                            <h2 onClick={()=>window.open(item.link,'_blank')}>
                                                {item.title}
                                            </h2>
                                            <div id='sub-article'>
                                            {item.sub_articles?.map((item,i)=>{
                                                return <h5 id='sub-article-container'
                                                        onClick={()=>window.open(item.url,'_blank')}>{item.publisher}</h5>
                                            })}</div>
                                            {item.summary?<span id='summary'>
                                                {ReactHtmlParser(item.summary)}
                                            </span>:null}

                                            {item.published?<span
                                            id='publish'
                                            >{item.published}</span>:null}
                                            </section>)}
        </div>
    )
    else if(category === 'video')
    return (
        <div
         className='Body'>
            {data.results?.map((item,i) =>  ( <>                    
            {item.additional_links && <div key={i}  id='body-sec'>
              <ReactPlayer url={item.additional_links?.[0].href} controls height='255px' width='100%'/>
                <h3>{item.additional_links?.[0].text}</h3>
            </div>}</> 
            ))}
        </div>
    )}
  
}

export default Body;