"use strict";(self.webpackChunkfirstApp=self.webpackChunkfirstApp||[]).push([[634],{2634:(et,f,r)=>{r.r(f),r.d(f,{BOOK_ROUTES:()=>tt});var d=r(6814),t=r(9212),l=r(95),m=r(2296),b=r(2495),B=r(3680);let T=(()=>{class o{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(e){this._vertical=(0,b.Ig)(e)}get inset(){return this._inset}set inset(e){this._inset=(0,b.Ig)(e)}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,n){2&i&&(t.uIk("aria-orientation",n.vertical?"vertical":"horizontal"),t.ekj("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,n){},styles:[".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color);border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color);border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0})}return o})(),w=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[B.BQ,B.BQ]})}return o})();var k=r(9116),x=r(2032),p=r(4124),Z=r(7264),h=r(7809),A=r(8645),g=r(9397),v=r(4664),S=r(6306),D=r(6232),U=r(1474);function _(o,s){const e=!s?.manualCleanup;e&&!s?.injector&&(0,t.gHi)(_);const i=e?s?.injector?.get(t.ktI)??(0,t.f3M)(t.ktI):null;let n;n=(0,t.tdS)(s?.requireSync?{kind:0}:{kind:1,value:s?.initialValue});const a=o.subscribe({next:c=>n.set({kind:1,value:c}),error:c=>{if(s?.rejectErrors)throw c;n.set({kind:2,error:c})}});return i?.onDestroy(a.unsubscribe.bind(a)),(0,t.Flj)(()=>{const c=n();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new t.vHH(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var O=r(1309),C=r(5619),M=r(940),J=r(2096);class F{constructor(s,e,i,n,a,c){this.title=s,this.author=e,this.pages=i,this.summary=n,this.likes=a,this._id=c||""}}let y=(()=>{class o{constructor(){this.http=(0,t.f3M)(U.eN),this.bookApiUrl=O.N.apiUrl+"/api/books",this.refreshListSubj=new C.X(!0),this.booksSnl=_(this.getAllBooks(),{initialValue:[]}),this.refreshDetailSubj=new C.X(""),this.selectedBookSnl=_(this.getBookById(),{initialValue:void 0})}refreshList(){this.refreshListSubj.next(!0)}refreshDetail(e){this.refreshDetailSubj.next(e)}getAllBooks(){return this.refreshListSubj.asObservable().pipe((0,v.w)(()=>this.http.get(this.bookApiUrl)),(0,M.d)())}getBookById(){return this.refreshDetailSubj.asObservable().pipe((0,g.b)(e=>console.log(e)),(0,v.w)(e=>"new"===e?(0,J.of)(new F("","",0,"",0)):this.http.get(this.bookApiUrl+"/"+e)),(0,M.d)())}createBook(e){return console.log(e),this.http.post(this.bookApiUrl,e)}updateBook(e,i){return this.http.patch(this.bookApiUrl+"/"+e,i)}deleteBook(e){return this.http.delete(this.bookApiUrl+"/"+e)}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();const q=["bookForm"];function L(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",15),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return n.currBook.likes=n.currBook.likes+1,t.KtG(n.modifyCurrBook("like"))}),t.TgZ(2,"span",16)(3,"span",17),t._uU(4),t.qZA()(),t._uU(5," Like "),t.qZA(),t.TgZ(6,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.currViewMode=n.viewMode.EDIT)}),t._uU(7," Edit "),t.qZA(),t.BQk()}if(2&o){const e=t.oxw(3);t.xp6(4),t.Oqu(e.currBook.likes)}}function Q(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.modifyCurrBook("delete"))}),t._uU(2," Delete "),t.qZA(),t.TgZ(3,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.modifyCurrBook("update"))}),t._uU(4," Update "),t.qZA(),t.BQk()}if(2&o){t.oxw();const e=t.MAs(4);t.xp6(3),t.Q6J("disabled",e.invalid)}}function E(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",21),t.NdJ("click",function(){t.CHM(e),t.oxw();const n=t.MAs(4);return t.KtG(n.resetForm())}),t._uU(2," Clear "),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.modifyCurrBook("create"))}),t._uU(4," Create Book "),t.qZA(),t.BQk()}if(2&o){t.oxw();const e=t.MAs(4);t.xp6(3),t.Q6J("disabled",e.invalid)}}const H=()=>["/books"];function N(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"form",null,4)(5,"mat-form-field",5)(6,"mat-label"),t._uU(7,"Title"),t.qZA(),t.TgZ(8,"input",6),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.currBook.title=n)}),t.qZA()(),t.TgZ(9,"mat-form-field",5)(10,"mat-label"),t._uU(11,"Author"),t.qZA(),t.TgZ(12,"input",7),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.currBook.author=n)}),t.qZA()(),t.TgZ(13,"mat-form-field",5)(14,"mat-label"),t._uU(15,"Pages"),t.qZA(),t.TgZ(16,"input",8),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.currBook.pages=n)}),t.qZA()(),t.TgZ(17,"mat-form-field",5)(18,"mat-label"),t._uU(19,"Summary"),t.qZA(),t.TgZ(20,"textarea",9),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw(2);return t.KtG(a.currBook.summary=n)}),t._uU(21,"                "),t.qZA()(),t.TgZ(22,"div",10)(23,"a",11)(24,"button",12),t.NdJ("click",function(){t.CHM(e);const n=t.MAs(4);return t.KtG(n.resetForm())}),t._uU(25," Back to list "),t.qZA()(),t.ynx(26,13),t.YNc(27,L,8,1,"ng-container",14)(28,Q,5,1,"ng-container",14)(29,E,5,1,"ng-container",14),t.BQk(),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(2),t.Oqu("new"!==e.id?"Book:"+e.currBook.title:"Create new book"),t.xp6(1),t.Tol("form col "+e.currViewMode),t.xp6(5),t.Q6J("ngModel",e.currBook.title)("disabled",e.currViewMode===e.viewMode.READ),t.xp6(4),t.Q6J("ngModel",e.currBook.author)("disabled",e.currViewMode===e.viewMode.READ),t.xp6(4),t.Q6J("ngModel",e.currBook.pages)("disabled",e.currViewMode===e.viewMode.READ),t.xp6(4),t.Q6J("ngModel",e.currBook.summary)("disabled",e.currViewMode===e.viewMode.READ),t.xp6(3),t.Q6J("routerLink",t.DdM(16,H)),t.xp6(3),t.Q6J("ngSwitch",e.currViewMode),t.xp6(1),t.Q6J("ngSwitchCase",e.viewMode.READ),t.xp6(1),t.Q6J("ngSwitchCase",e.viewMode.EDIT),t.xp6(1),t.Q6J("ngSwitchCase",e.viewMode.CREATE)}}function R(o,s){if(1&o&&(t.TgZ(0,"div",1),t._UZ(1,"br")(2,"br")(3,"hr"),t.YNc(4,N,30,17,"div",2),t._UZ(5,"hr"),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.currBook)}}const K=o=>({action:o});let P=(()=>{class o{constructor(){this.booksService=(0,t.f3M)(y),this.alertService=(0,t.f3M)(Z.c9),this.router=(0,t.f3M)(p.F0),this.currBookSnl=this.booksService.selectedBookSnl,this.currViewMode=h.wO.READ,this.viewMode=h.wO,this.ongoingRequest=!1,this.userInteractionSubj=new A.x,this.userInteraction$=this.getUserInteraction(),(0,t.cEC)(()=>{this.currBook=this.currBookSnl()})}ngOnInit(){this.booksService.refreshDetail(this.id||""),"new"===this.id&&(this.currViewMode=h.wO.CREATE)}modifyCurrBook(e){this.userInteractionSubj.next({action:e,entity:this.currBook})}getUserInteraction(){return this.userInteractionSubj.asObservable().pipe((0,g.b)(e=>{this.currInteraction=e.action,this.ongoingRequest=!0}),(0,v.w)(e=>{switch(e.action){case"create":return this.booksService.createBook(this.currBook);case"update":case"like":return this.booksService.updateBook(this.id,this.currBook);case"delete":return this.booksService.deleteBook(this.id)}}),(0,g.b)(()=>{this.alertService.showAlert(`The entity has been ${h.Mx[this.currInteraction]}.`,"success"),this.ongoingRequest=!1,["like"].includes(this.currInteraction)||(this.bookForm.resetForm(),this.router.navigate(["/books"]))}),(0,S.K)(()=>(this.alertService.showAlert(`The entity has not been ${h.Mx[this.currInteraction]}.`,"danger"),this.ongoingRequest=!1,D.E)))}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-detail"]],viewQuery:function(i,n){if(1&i&&t.Gf(q,5),2&i){let a;t.iGM(a=t.CRH())&&(n.bookForm=a.first)}},inputs:{id:"id"},standalone:!0,features:[t.jDz],decls:2,vars:5,consts:[["class","container",4,"ngIf"],[1,"container"],["class","col col--centered",4,"ngIf"],[1,"col","col--centered"],["bookForm","ngForm"],[1,"form__input"],["matInput","","name","title","data-testid","title","required","","type","text",3,"ngModel","disabled","ngModelChange"],["matInput","","name","author","data-testid","author","required","","type","text",3,"ngModel","disabled","ngModelChange"],["matInput","","name","pages","data-testid","pages","required","","type","number",3,"ngModel","disabled","ngModelChange"],["matInput","","name","summary","data-testid","summary","required","","type","text",3,"ngModel","disabled","ngModelChange"],[1,"row","row--sp-btw"],[3,"routerLink"],["mat-raised-button","","color","primary","type","button","data-testid","backToListBtn",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],["mat-raised-button","","color","primary","type","button","data-testid","likeBtn",1,"ml-a",3,"click"],[1,"icon","fa-solid","fa-heart"],[1,"icon__count"],["mat-raised-button","","color","accent","type","button","data-testid","editBtn",1,"ml-a",3,"click"],["mat-raised-button","","color","warn","type","button","data-testid","deleteBtn",3,"click"],["mat-raised-button","","color","accent","type","button","data-testid","updateBtn",3,"disabled","click"],["mat-raised-button","","color","primary","type","button","data-testid","clearBtn",1,"ml-a",3,"click"],["mat-raised-button","","color","accent","type","button","data-testid","createBtn",3,"disabled","click"]],template:function(i,n){1&i&&(t.YNc(0,R,6,1,"div",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.VKq(3,K,t.lcZ(1,1,n.userInteraction$)))},dependencies:[p.rH,m.ot,m.lW,l.u5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.On,l.F,k.lN,k.KE,k.hX,x.c,x.Nt,w,d.ez,d.O5,d.RF,d.n9,d.Ov],styles:[".form[_ngcontent-%COMP%]{width:700px}.form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}"]})}return o})();const V=o=>[o];let G=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-section-title"]],inputs:{creationUrl:"creationUrl",title:"title"},standalone:!0,features:[t.jDz],decls:6,vars:4,consts:[[1,"row","row--sp-btw"],[3,"routerLink"],["mat-raised-button","","color","primary","data-testid","addNew",1,"btn","btn--symbol"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"a",1)(4,"button",2),t._uU(5,"+"),t.qZA()()()),2&i&&(t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("routerLink",t.VKq(2,V,n.creationUrl)))},dependencies:[p.Bz,p.rH,d.ez],styles:["[_ngcontent-%COMP%]:root{--pri: #469597;--sec: #5ba199;--acc: #ddbeaa;--danger: red;--success: green;--warn: tomato;--textPri: #ffffff;--textSec: #000000;--bgPri: #b8dedc;--bgSec: #bbc6c8;--rounding: 5px}[_nghost-%COMP%]{height:20px;background-color:var(--sec);margin-top:auto;color:var(--textPri)}"]})}return o})();var u=r(5195);function z(o,s){if(1&o&&(t.TgZ(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-subtitle"),t._uU(3,"Literature"),t.qZA(),t.TgZ(4,"mat-card-title"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t._UZ(15,"mat-divider"),t.qZA()()),2&o){const e=t.oxw();t.xp6(5),t.Oqu(e.book.title),t.xp6(3),t.hij("Author: ",e.book.author,""),t.xp6(2),t.hij("Pages: ",e.book.pages,""),t.xp6(2),t.hij("Sumamry: ",e.book.summary,""),t.xp6(2),t.hij("Likes: ",e.book.likes,"")}}let $=(()=>{class o{constructor(){this.likeBook=new t.vpe,this.deleteBook=new t.vpe}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-preview"]],inputs:{book:"book"},outputs:{likeBook:"likeBook",deleteBook:"deleteBook"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","example-card",4,"ngIf"],[1,"example-card"]],template:function(i,n){1&i&&t.YNc(0,z,16,5,"mat-card",0),2&i&&t.Q6J("ngIf",n.book)},dependencies:[d.O5,u.QW,u.a8,u.dn,u.dk,u.$j,u.n5,w,T,m.ot],styles:[".example-card[_ngcontent-%COMP%]{width:400px}"]})}return o})();const X=(o,s)=>s._id;function Y(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-book-preview",3),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.showDetails(a._id))}),t.qZA()}2&o&&t.Q6J("book",s.$implicit)}function W(o,s){1&o&&(t.TgZ(0,"div"),t._uU(1,"There were no items in the list."),t.qZA())}const tt=[{path:"",component:(()=>{class o{constructor(){this.booksService=(0,t.f3M)(y),this.router=(0,t.f3M)(p.F0),this.bookList=this.booksService.booksSnl,this.totalBooks=(0,t.Flj)(()=>this.bookList().length),this.totalLikes=(0,t.Flj)(()=>this.bookList().flatMap(e=>e.likes).reduce((e,i)=>i+e,0))}ngOnInit(){this.booksService.refreshList()}showDetails(e){this.router.navigate(["books/"+e])}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-list"]],inputs:{title:"title"},standalone:!0,features:[t.jDz],decls:15,vars:4,consts:[[1,"container"],["creationUrl","/books/new",3,"title"],[1,"row","row--sp-around","row--wrap"],[1,"mb-20",3,"book","click"],["class","mb-20",3,"book"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"br")(2,"br")(3,"app-section-title",1)(4,"br")(5,"hr"),t.TgZ(6,"div",2),t.SjG(7,Y,1,1,"app-book-preview",4,X,!1,W,2,0),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"div"),t._uU(12),t.qZA(),t.TgZ(13,"div"),t._uU(14),t.qZA()()),2&i&&(t.xp6(3),t.Q6J("title",n.title),t.wJu(7,n.bookList()),t.xp6(9),t.hij("Total number of registered books: ",n.totalBooks(),""),t.xp6(2),t.hij("Total number of registered book likes: ",n.totalLikes(),""))},dependencies:[m.ot,$,G]})}return o})()},{path:":id",component:P}]}}]);