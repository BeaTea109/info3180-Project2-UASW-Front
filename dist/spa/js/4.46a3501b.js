(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{c78c:function(e,a,r){"use strict";var t=r("970b"),n=r.n(t),o=r("5bc3"),c=r.n(o);r("a4d3"),r("e01a");function s(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var i=r("bc3a"),d=r.n(i),u="https://info3180-project-2-backend.herokuapp.comapi/",p=function(){function e(){n()(this,e)}return c()(e,[{key:"getCars",value:function(){return d.a.get(u+"cars",{headers:s()})}},{key:"saveCar",value:function(e,a){console.log("not working");var r=new FormData;return r.append("user_id",a),r.append("make",e.make),r.append("model",e.model),r.append("colour",e.colour),r.append("year",e.year),r.append("transmission",e.transmission),r.append("car_type",e.type),r.append("price",e.price),r.append("photo",e.photo),r.append("description",e.description),d.a.post(u+"cars",r,{headers:s()})}},{key:"getCarByID",value:function(e){return d.a.get(u+"cars/".concat(e),{headers:s()})}},{key:"getUserFavouriteCars",value:function(e){return d.a.get(u+"users/".concat(e,"/favourites"),{headers:s()})}}]),e}();a["a"]=new p},fddb:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("q-page",{staticClass:"flex flex-center"},[r("b-card",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"overflow-hidden",staticStyle:{"min-width":"1000px","max-width":"1000px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-0",staticStyle:{height:"100%"},attrs:{src:e.car.photo}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{"sub-title":e.car.model,title:e.car.year+" "+e.car.make}},[r("b-card-text",[e._v("\n            "+e._s(e.car.description)+"\n          ")]),r("b-row",{attrs:{cols:"2"}},[r("b-col",[e._v(" Color "+e._s(e.car.colour)+" ")]),r("b-col",[e._v(" Body Type "+e._s(e.car.car_type)+" ")]),r("b-col",[e._v(" Price "+e._s(e.currencyFormat(e.car.price))+" ")]),r("b-col",[e._v("\n              Transmission "+e._s(e.car.transmission)+"\n            ")])],1)],1)],1)],1)],1)],1)},n=[],o=r("c78c"),c={data:function(){return{loaded:!1,car:null}},created:function(){var e=this;console.log(this.$route.params.id),o["a"].getCarByID(this.$route.params.id).then((function(a,r){r||(e.car=a.data,console.log(e.car),e.loaded=!0)}))},methods:{currencyFormat:function(e){var a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return a.format(e)}}},s=c,i=r("2877"),d=r("9989"),u=r("eebe"),p=r.n(u),l=Object(i["a"])(s,t,n,!1,null,"f771c3d4",null);a["default"]=l.exports;p()(l,"components",{QPage:d["a"]})}}]);