(function(){var e={5464:function(e,t,o){"use strict";var n=o(9242),i=o(3396);function r(e,t,o,n,r,a){const s=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.j4)(s,{msg:"CSS 436 Program 4"})}const a=e=>((0,i.dD)("data-v-f85aacfa"),e=e(),(0,i.Cn)(),e),s={class:"hello"},c=a((()=>(0,i._)("h1",null,"Watchlist",-1))),l=a((()=>(0,i._)("p",null,"Save and vote for your favorate movies and anime!",-1))),u={class:"search-container"},v=a((()=>(0,i._)("h2",null,"Add Movies",-1))),d={key:0,class:"notification"},p={class:"selection-container"},h=a((()=>(0,i._)("h2",{class:"movie-title"},"Top Movies",-1))),f={class:"card-container"},m={key:0};function w(e,t,o,r,a,w){const g=(0,i.up)("movie-selection-card"),_=(0,i.up)("movie-card");return(0,i.wg)(),(0,i.iD)("div",s,[c,l,(0,i._)("div",u,[v,(0,i.wy)((0,i._)("input",{class:"search-bar",onKeyup:t[0]||(t[0]=(...e)=>w.getMovies&&w.getMovies(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>a.search=e),list:"movies",name:"browser",placeholder:"Add a Movie!"},null,544),[[n.nr,a.search]]),a.notified?((0,i.wg)(),(0,i.iD)("p",d,"Movie Added!!")):(0,i.kq)("",!0),(0,i._)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.movies,((e,t)=>((0,i.wg)(),(0,i.j4)(g,{onSelect:t=>w.addMovie(e),key:t,name:e.Name},null,8,["onSelect","name"])))),128))])]),h,(0,i._)("div",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.watchlist,((e,t)=>((0,i.wg)(),(0,i.j4)(_,{onVote:t=>w.voteForMovie(e),key:t,name:e.title,year:e.year,director:e.director,synopsis:e.plot,votes:e.up_votes},null,8,["onVote","name","year","director","synopsis","votes"])))),128))]),0==a.watchlist.length?((0,i.wg)(),(0,i.iD)("p",m,"No movies yet!")):(0,i.kq)("",!0)])}var g=o(8682),_=o(7139);const y={class:"card"},M={class:"container"},b={class:"movie-name"},k={class:"movie-info"},S={class:"synopsis"},O={class:"votes"};function j(e,t,o,n,r,a){return(0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",M,[(0,i._)("div",b,[(0,i._)("h4",null,(0,_.zw)(o.name),1),(0,i._)("p",null,(0,_.zw)(o.year),1)]),(0,i._)("div",k,[(0,i._)("p",null,(0,_.zw)(o.director),1)]),(0,i._)("div",S,[(0,i._)("p",null,(0,_.zw)(o.synopsis),1)]),(0,i._)("div",O,[(0,i._)("p",null,[(0,i._)("b",null,"Votes: "+(0,_.zw)(o.votes),1)]),(0,i._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("vote"))},"Vote!")])])])}var D={props:{name:String,year:String,director:String,synopsis:String,votes:String}},C=o(89);const z=(0,C.Z)(D,[["render",j],["__scopeId","data-v-9eb46af8"]]);var P=z;const x={class:"container"};function H(e,t,o,n,r,a){return(0,i.wg)(),(0,i.iD)("div",{onClick:t[0]||(t[0]=t=>e.$emit("select")),class:"card"},[(0,i._)("div",x,[(0,i._)("p",null,(0,_.zw)(o.name),1)])])}var N={props:{name:String}};const T=(0,C.Z)(N,[["render",H],["__scopeId","data-v-702eb7f2"]]);var V=T,A={name:"HelloWorld",components:{MovieCard:P,MovieSelectionCard:V},mounted(){(0,g.getMovies)().then((e=>{this.watchlist=e}))},data(){return{movies:[],search:"",watchlist:[],notified:!1}},methods:{getMovies(){this.notified=!1,(0,g.searchMovies)(this.search).then((e=>{void 0!==!e&&0!=!e.length||(this.movies=e)}))},voteForMovie(e){(0,g.updateMovie)(e).then((()=>{const e=e=>new Promise((t=>setTimeout(t,e))),t=async()=>{await e(500),(0,g.getMovies)().then((e=>{this.watchlist=e}))};t()}))},addMovie(e){(0,g.addNewMovie)(e).then((e=>{console.log(e),this.movies=[],this.search="",this.notified=!0}));const t=e=>new Promise((t=>setTimeout(t,e))),o=async()=>{await t(1e3),(0,g.getMovies)().then((e=>{this.watchlist=e}))};o()}}};const I=(0,C.Z)(A,[["render",w],["__scopeId","data-v-f85aacfa"]]);var W=I,Z={name:"App",components:{HelloWorld:W}};const q=(0,C.Z)(Z,[["render",r]]);var F=q;(0,n.ri)(F).mount("#app")},8682:function(e,t,o){const n=o(6265),i="http://program5-env-1.eba-mihuv8he.us-west-2.elasticbeanstalk.com/",r=async e=>{const t=e.split(" ").join("%20"),o=await n({method:"get",url:i+"api/movies/movieSearch?title="+t});return o.data},a=async()=>{const e=await n({method:"get",url:i+"query/movies"});return e.data},s=async e=>{const t={title:e.Name,year:e.Year,plot:e.Plot,type:"movie",up_votes:1,director:e.Director},o=await n({method:"post",url:i+"add",data:t});return o.data},c=async e=>{const t=parseInt(e.up_votes)+1,o={title:e.title,year:e.year,up_votes:t},r=await n({method:"put",url:i+"update",data:o});return r.data};e.exports={searchMovies:r,getMovies:a,addNewMovie:s,updateMovie:c}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(c)var u=c(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunkcss436_prog4_client"]=self["webpackChunkcss436_prog4_client"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5464)}));n=o.O(n)})();
//# sourceMappingURL=app.241a4cb8.js.map