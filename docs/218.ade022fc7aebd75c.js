"use strict";(self.webpackChunkrocketfypokemon=self.webpackChunkrocketfypokemon||[]).push([[218],{9218:(y,r,n)=>{n.r(r),n.d(r,{DetailModule:()=>A});var u=n(9808),s=n(9325),g=n(7444),t=n(1223),d=n(7543),p=n(7372),c=n(8863),m=n(6362),h=n(3144);const v=[{path:"",component:(()=>{class e{constructor(o,i,a,b){this.router=o,this.activatedRoute=i,this.stateGlobal=a,this.pokeapiService=b,this.pokemon=null,this.height=0,this.weigth=0,this.urlImage=""}ngOnInit(){this.activatedRoute.params.subscribe(o=>{this.pokeapiService.getPokemonById(o.id).subscribe(a=>{this.pokemon=new g.d(a.name,""),this.pokemon.id=a.id+"",this.height=a.height,this.weigth=a.weight,this.pokemon.getImageUrl(),this.urlImage=this.pokemon.imageURL})})}goToPage(o){this.router.navigate([o])}addFavorite(){var o;const i={id:null===(o=this.pokemon)||void 0===o?void 0:o.id,pokemon:this.pokemon};this.stateGlobal.updateFavorites(i),this.goToPage("pages/home")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(d.k),t.Y36(p.j))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail"]],decls:26,vars:10,consts:[[1,"container"],[3,"click"],[1,"grid","place-items-center","rounded-lg"],[1,"max-w-sm","m-auto"],["title","Woman holding a mug",1,"h-48","lg:w-48","w-full","h-auto","flex","justify-center","m-auto","mb-4"],["loading","lazy","alt","women",1,"mt-12","lg:mt-0","h-36","w-36",3,"src"],[1,"p-5","bg-white","rounded-lg","border","border-gray-200"],[1,"mb-2","text-center","text-6xl","font-bold","tracking-tight","text-black-900"],[1,"mb-3","font-normal","text-gray-700","dark:text-gray-400"],["text","Agregar a favoritos",3,"widthFull","click"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"app-go-back-button",1),t.NdJ("click",function(){return i.goToPage("pages/home")}),t.qZA(),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6)(7,"h1",7),t._uU(8),t.ALo(9,"titlecase"),t.qZA(),t.TgZ(10,"p",8),t._uU(11," Este pokemon es lo m\xe1ximo, es un pokemon de tipo agua y fue descubierto en la regi\xf3n de Kanto. "),t.qZA(),t.TgZ(12,"p",8)(13,"strong"),t._uU(14,"ID:"),t.qZA(),t._uU(15),t.ALo(16,"filledid"),t.qZA(),t.TgZ(17,"p",8)(18,"strong"),t._uU(19,"Altura:"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"p",8)(22,"strong"),t._uU(23,"Peso:"),t.qZA(),t._uU(24),t.qZA(),t.TgZ(25,"pkm-button",9),t.NdJ("click",function(){return i.addFavorite()}),t.qZA()()()()()),2&o&&(t.xp6(5),t.s9C("src",i.urlImage,t.LSH),t.xp6(3),t.hij(" ",t.lcZ(9,6,null==i.pokemon?null:i.pokemon.name)," "),t.xp6(7),t.hij(" ",t.lcZ(16,8,i.pokemon.id)," "),t.xp6(5),t.hij(" ",i.height," "),t.xp6(4),t.hij(" ",i.weigth," "),t.xp6(1),t.Q6J("widthFull",!0))},directives:[c.L,m.Ai],pipes:[u.rS,h.y],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),e})();var f=n(2749),Z=n(4466);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,k,m.Zg,f.W,Z.m]]}),e})()}}]);