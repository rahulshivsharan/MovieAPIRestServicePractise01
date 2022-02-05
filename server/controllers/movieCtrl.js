import config from "../../config/env";
import axios from 'axios';

var welcome = welcome;
var search = search;
var findByTitle = findByTitle;
var getTopTvShows = getTopTvShows;
var getMovieDetail = getMovieDetail;
var getReviews = getReviews;
var getUserReviews = getUserReviews;
var getCasts = getCasts;
var getCharacterInfo = getCharacterInfo;
var sendRequest = sendRequest;

export default {
    "welcome" : welcome,
    "search" : search,
    "findByTitle" : findByTitle,
    "getTopTvShows" : getTopTvShows,
    "getMovieDetail" : getMovieDetail,
    "getReviews" : getReviews,
    "getUserReviews" : getUserReviews,
    "getCasts" : getCasts,
    "getCharacterInfo" : getCharacterInfo  
}

function welcome(request, response){
    return response.json({
        "message" : "Hi !!, welcome to movies"
    });
}

function search(request, response){
    let url = "/search/" + request.params.someText;        
    sendRequest(url, "GET", {
        "api" : "imdb"
    }, response);    
}

function findByTitle(request, response){
    let url = "/title/find?q=" + request.params.someText;        
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);    
}

function getTopTvShows(request, response){
    let url = "/title/get-top-rated-tv-shows";        
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);    
}

function getMovieDetail(request, response){
    let url = "/title/get-details?tconst=" + request.params.id;        
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);
}

function getReviews(request, response){
    let url = "/title/get-reviews?currentCountry=US&purchaseCountry=US&tconst=" + request.params.id;        
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);
}

function getCasts(request, response){
    let url = "/title/get-top-cast?tconst=" + request.params.id;        
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);
}

function getCharacterInfo(request, response){
    let url = "/title/get-charname-list?tconst=" + request.params.movieID + "&id=" + request.params.characterID;
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);
}

function getUserReviews(request, response){
    let url = "/title/get-user-reviews?tconst=" + request.params.id;        
    sendRequest(url, "GET", {
        "api" : "imdb8"
    }, response);
}

function sendRequest(apiPath, httpMethod, querystring, response){    
    var url = undefined;

    var options = {
        "method" : httpMethod,
        "headers" : {            
            "x-rapidapi-key" : config.X_RAPID_API_KEY
        }
    };

    if (querystring["api"] === "imdb"){
        url = config.hostUrl + apiPath;
    }

    if (querystring["api"] === "imdb8"){
        url = config.movieURL + apiPath;
        options["headers"]["x-rapidapi-host"] = "imdb8.p.rapidapi.com";
    }
    
    var successFn = successFn,
        errorFn = errorFn;
        

    axios(url,options).then(successFn, errorFn);

    function successFn (res) {
        return response.json(res.data);
    }

    function errorFn (err){
        console.log(`${err}`);

        let data = {
            "error" : "There is error"
        }

        return response.json(data);
    }
}