(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CXQP:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",(function(){return L}));var i=n("3Pt+"),o=n("tyNb"),s=n("sPvp"),r=n("fXoL"),c=n("ozzT"),b=n("kt0X"),d=n("EiSp"),a=n("ofXK");const p=["form"];function u(t,e){1&t&&(r.Mb(0,"span",15),r.mc(1,"Please enter a valid item-name"),r.Lb())}function l(t,e){1&t&&(r.Mb(0,"span",15),r.mc(1,"Please enter a valid item-amount"),r.Lb())}function m(t,e){if(1&t){const t=r.Nb();r.Mb(0,"button",16),r.Ub("click",(function(){return r.gc(t),r.Wb().onDelete()})),r.mc(1,"Delete"),r.Lb()}}let g=(()=>{class t{constructor(t,e){this.shoppingListService=t,this.store=e,this.editMode=!1}ngOnInit(){this.subscription=this.store.select("shoppingList").subscribe(t=>{t.editedIngredientIndex>-1?(this.editMode=!0,this.editedItem=t.editedIngredient,this.editForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})):this.editMode=!1})}addIngredients(t){const e=t.value.name,n=t.value.amount;void 0!==e&&void 0!==n&&this.store.dispatch(this.editMode?new s.l(new d.a(e,Number(n))):new s.c(new d.a(e,Number(n)))),this.editMode=!1,t.reset()}resetFormData(){this.editForm.reset(),this.editMode=!1,this.store.dispatch(new s.j)}onDelete(){this.store.dispatch(new s.f),this.resetFormData()}ngOnDestroy(){this.subscription.unsubscribe(),this.store.dispatch(new s.j)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.a),r.Jb(b.h))},t.\u0275cmp=r.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&r.jc(p,!0),2&t&&r.dc(n=r.Vb())&&(e.editForm=n.first)},decls:24,vars:6,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["form","ngForm"],[1,"col-sm-6","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],["nameInput","ngModel"],["class","help-block",4,"ngIf"],["for","amount"],["type","text","id","amount","name","amount","ngModel","","required","",1,"form-control",3,"pattern"],["amountInput","ngModel"],["type","submit",1,"btn","btn-success","margin-right-5perc",3,"disabled"],["class","btn btn-danger margin-right-5perc","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],[1,"help-block"],["type","button",1,"btn","btn-danger","margin-right-5perc",3,"click"]],template:function(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"form",2,3),r.Ub("ngSubmit",(function(){r.gc(t);const n=r.ec(3);return e.addIngredients(n)})),r.Mb(4,"div",0),r.Mb(5,"div",4),r.Mb(6,"label",5),r.mc(7,"Name"),r.Lb(),r.Kb(8,"input",6,7),r.kc(10,u,2,0,"span",8),r.Lb(),r.Mb(11,"div",4),r.Mb(12,"label",9),r.mc(13,"Amount"),r.Lb(),r.Kb(14,"input",10,11),r.kc(16,l,2,0,"span",8),r.Lb(),r.Lb(),r.Mb(17,"div",0),r.Mb(18,"div",1),r.Mb(19,"button",12),r.mc(20),r.Lb(),r.kc(21,m,2,0,"button",13),r.Mb(22,"button",14),r.Ub("click",(function(){return e.resetFormData()})),r.mc(23,"Clear"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&t){const t=r.ec(3),n=r.ec(9),i=r.ec(15);r.zb(10),r.Zb("ngIf",!n.valid&&n.touched),r.zb(4),r.Zb("pattern","^[1-9]+[0-9]*$"),r.zb(2),r.Zb("ngIf",!i.valid&&i.touched),r.zb(3),r.Zb("disabled",!t.valid),r.zb(1),r.nc(e.editMode?"Update":"Add"),r.zb(1),r.Zb("ngIf",e.editMode)}},directives:[i.t,i.m,i.n,i.a,i.l,i.o,i.r,a.k,i.p],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.help-block[_ngcontent-%COMP%]{color:red}.margin-right-5perc[_ngcontent-%COMP%]{margin-right:5%}"]}),t})();function h(t,e){if(1&t){const t=r.Nb();r.Mb(0,"a",4),r.Ub("click",(function(){r.gc(t);const n=e.index;return r.Wb().onEditIngredient(n)})),r.mc(1),r.Lb()}if(2&t){const t=e.$implicit;r.zb(1),r.oc(" ",t.name," (",t.amount,") ")}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.shoppingListService=t,this.store=e}ngOnInit(){this.ingredientsModelArray=this.store.select("shoppingList")}onEditIngredient(t){this.store.dispatch(new s.i(t))}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.a),r.Jb(b.h))},t.\u0275cmp=r.Db({type:t,selectors:[["app-shopping-list"]],decls:7,vars:3,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Kb(2,"app-shopping-edit"),r.Kb(3,"hr"),r.Mb(4,"ul",2),r.kc(5,h,2,2,"a",3),r.Xb(6,"async"),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.zb(5),r.Zb("ngForOf",r.Yb(6,1,e.ingredientsModelArray).ingredients))},directives:[g,a.j],pipes:[a.b],styles:[""]}),t})()},{path:"**",component:n("n9Sv").a,data:{message:"Please double check the URL entered"}}];let M=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[o.j.forChild(f)],o.j]}),t})();var v=n("PCNd");let L=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[v.a,i.j,M]]}),t})()}}]);