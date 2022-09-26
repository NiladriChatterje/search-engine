import './Navbar.css';
import React from 'react';

const section_tags=['search','image','news','Video']

const Navbar = ({setCategory,setQuery}) => {
 

    return <>
        <nav>
           
            <span>
            <img src={'https://i.pinimg.com/736x/83/01/57/83015788d8436fc2a1f6fc409351f83e.jpg'}
            alt='' />
                Vite Engine</span>
            <input type='text' id='search'
            onKeyDown={e =>{
                e.stopPropagation();
                if(e.code === 'Enter'){
                    setQuery(e.target.value);
                }
            }} />
            <img
            onClick={()=>{
                setQuery(e.target.value);
            }}
            src={'https://imgs.search.brave.com/XnTEeU2ohkqPPW3NiGDWLvYXRUGHanZIGof5h4wuTWU/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYmFzaWMtdWkt/ZWxlbWVudHMtY29s/b3IvNzAwLzA5X3Nl/YXJjaC0xMDI0LnBu/Zw'} alt="" />
            
            <section id='nav-sec'>
                {section_tags?.map((item,i)=><span key={i}
                                                onClick={()=>setCategory(item)}>
                                                    {item}
                                             </span>)}
            </section>
        </nav>
        </>;
}

export default Navbar;