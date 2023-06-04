import axios from "axios";
import { fake_popular } from "./fakedata";
import { BASEURL,backbaseurl,API_KEY } from "./config";

export class tvShowService{
    
   static async fetchPopular(){  

    const popularTvShows=await axios.get(`${BASEURL}/tv/popular${API_KEY}`);
      return popularTvShows.data.results;
   //return fake_popular;
   }
   static async fetchRecommondation(tvShowId){

      const recomondedTvShow=await axios.get(`${BASEURL}/tv/${tvShowId}/recommendations${API_KEY}`);
      console.log("recommended");

      console.log(recomondedTvShow);
     return recomondedTvShow.data.results;
   }
   static async fetchbyTitle(title){

      const searchResult=await axios.get(`${BASEURL}/search/tv${API_KEY}&query=${title}`);
      console.log("recommended");

      console.log(searchResult);
     return searchResult.data.results;
   }

}