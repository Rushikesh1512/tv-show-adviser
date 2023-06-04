import logo from './logo.svg';
import Logo from './components/Logo/Logo'
import './App.css';
import s from './style.module.css'
import { tvShowService } from './Api/tv-show';
import { useEffect, useState } from 'react';
import { backbaseurl } from './Api/config';
import TVShowDetails from './components/TvShowDetails/TVShowDetails';
import logoimages from './assets/images/logo.png'
import TvshowListItem from './components/TvshowListItem/TvshowListItem';
import TvShowList from './components/TvShowList/TvShowList';
import SearchBar from './components/SearchBar/SearchBar';
tvShowService.fetchPopular();
function App() {

  const [currentTVShow,SetCurrentTvShow]=useState();
  const [recommentdationList,SetRecommendation]=useState([]);
async function fetchPopular(){
const popularTvShow=await tvShowService.fetchPopular();
if(popularTvShow.length>0){
SetCurrentTvShow(popularTvShow[0]);
}
}
async function fetchRecommendation(tvshowId){
const recommentedTvShow=await tvShowService.fetchRecommondation(tvshowId);
if(recommentedTvShow.length>0){
  SetRecommendation(recommentedTvShow.slice(0,10));
  }

}
    

async function fetchTvByTitle(title){
  const fetchResult=await tvShowService.fetchbyTitle(title);
  if(fetchResult.length>0){
    SetCurrentTvShow(fetchResult[0]);
  }
  
  }
  
         

  useEffect(()=>{
      fetchPopular();
      },[]);

      useEffect((
      )=>{
if(currentTVShow){

  fetchRecommendation(currentTVShow.id);
}

      },[currentTVShow]);

    
  function updateTvShow(tvshow){
  SetCurrentTvShow(tvshow);

  }

  return (
    <div className={s.Main_Container} style={{background:currentTVShow?`url:(${backbaseurl}${currentTVShow.backdrop_path})`:'black'}}>
      <div className={s.header}> 
      <div className='row'>
          <div className="col-4">
        <Logo img={logoimages} title="watowatch" subtitle="find a show you may like"/>
          </div>
           <div className="col-md-12 col-lg-4">
            {/* <input style={{width:"100%"}} type="text"/> */}
            <SearchBar onSubmit={fetchTvByTitle}/>
           </div>
      </div>
      </div>
       <div className={s.tv_show_details}>
      {currentTVShow && <TVShowDetails Tvshow={currentTVShow}/>}
      </div>
      <div className={s.recommended_tv_show} >
   {recommentdationList && <TvShowList  onClickItem={updateTvShow} tvshowlist={recommentdationList} onClick={(tvshow)=>{

   }}/>}
       </div>
    </div>
  );
}

export default App;
