"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[506],{7506:(m,o,a)=>{a.r(o),a.d(o,{DemoTabsModule:()=>tt,TabsSectionComponent:()=>x});var i=a(36895),F=a(90433),I=a(59459),B=a(1329),u=a(21639),t=a(41571),b=a(44808),d=a(70138);let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-basic"]],decls:8,vars:0,consts:[["heading","Basic title","id","tab1"],["heading","Basic Title 1"],["heading","Basic Title 2"]],template:function(n,l){1&n&&(t.TgZ(0,"div")(1,"tabset")(2,"tab",0),t._uU(3,"Basic content"),t.qZA(),t.TgZ(4,"tab",1),t._uU(5,"Basic content 1"),t.qZA(),t.TgZ(6,"tab",2),t._uU(7,"Basic content 2"),t.qZA()()())},dependencies:[b.w,d.A],encapsulation:2}),e})();const R=["staticTabs"];let f=(()=>{class e{selectTab(n){this.staticTabs?.tabs[n]&&(this.staticTabs.tabs[n].active=!0)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-manual-selection"]],viewQuery:function(n,l){if(1&n&&t.Gf(R,5),2&n){let c;t.iGM(c=t.CRH())&&(l.staticTabs=c.first)}},decls:19,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["staticTabs",""],["heading","Static title"],["heading","Static Title 1"],["heading","Static Title 2"],["heading","Static Title 3"]],template:function(n,l){1&n&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"You can select tabs directly from component"),t.qZA(),t.TgZ(3,"p")(4,"button",0),t.NdJ("click",function(){return l.selectTab(1)}),t._uU(5,"Select second tab"),t.qZA(),t.TgZ(6,"button",0),t.NdJ("click",function(){return l.selectTab(2)}),t._uU(7,"Select third tab"),t.qZA()(),t._UZ(8,"hr"),t.TgZ(9,"tabset",null,1)(11,"tab",2),t._uU(12,"Static content"),t.qZA(),t.TgZ(13,"tab",3),t._uU(14,"Static content 1"),t.qZA(),t.TgZ(15,"tab",4),t._uU(16,"Static content 2"),t.qZA(),t.TgZ(17,"tab",5),t._uU(18,"Static content 3"),t.qZA()()())},dependencies:[b.w,d.A],encapsulation:2}),e})();function O(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.tabs=[])}),t._uU(1," Remove all tabs "),t.qZA()}}function J(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"tab",5),t.NdJ("selectTab",function(){const r=t.CHM(n).$implicit;return t.KtG(r.active=!0)})("deselect",function(){const r=t.CHM(n).$implicit;return t.KtG(r.active=!1)})("removed",function(){const r=t.CHM(n).$implicit,g=t.oxw();return t.KtG(g.removeTabHandler(r))}),t._uU(1),t.qZA()}if(2&e){const n=s.$implicit;t.Q6J("heading",n.title)("active",n.active)("disabled",n.disabled)("removable",n.removable)("customClass",n.customClass),t.xp6(1),t.hij(" ",null==n?null:n.content," ")}}let C=(()=>{class e{constructor(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1",removable:!1,disabled:!1},{title:"Dynamic Title 2",content:"Dynamic content 2",removable:!1,disabled:!1},{title:"Dynamic Title 3",content:"Dynamic content 3",removable:!0,disabled:!1}]}addNewTab(){const n=this.tabs.length+1;this.tabs.push({title:`Dynamic Title ${n}`,content:`Dynamic content ${n}`,disabled:!1,removable:!0})}removeTabHandler(n){this.tabs.splice(this.tabs.indexOf(n),1),console.log("Remove Tab handler")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-dynamic"]],decls:11,vars:2,consts:[[3,"click"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["type","button","class","btn btn-primary btn-sm",3,"click",4,"ngIf"],["heading","Static title"],[3,"heading","active","disabled","removable","customClass","selectTab","deselect","removed",4,"ngFor","ngForOf"],[3,"heading","active","disabled","removable","customClass","selectTab","deselect","removed"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0),t.NdJ("click",function(r){return r.preventDefault()}),t.TgZ(1,"p"),t._uU(2,"Change quantity of tabs by manipulating tabs array"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return l.addNewTab()}),t._uU(4," Add new tab "),t.qZA(),t.YNc(5,O,2,0,"button",2),t._UZ(6,"hr"),t.TgZ(7,"tabset")(8,"tab",3),t._uU(9,"Static content"),t.qZA(),t.YNc(10,J,2,6,"tab",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("ngIf",l.tabs.length),t.xp6(5),t.Q6J("ngForOf",l.tabs))},dependencies:[i.sg,i.O5,b.w,d.A],encapsulation:2,changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-pills"]],decls:5,vars:0,consts:[["type","pills"],["heading","Pills 1"],["heading","Pills 2"]],template:function(n,l){1&n&&(t.TgZ(0,"tabset",0)(1,"tab",1),t._uU(2,"Pills content 1"),t.qZA(),t.TgZ(3,"tab",2),t._uU(4,"Pills content 2"),t.qZA()())},dependencies:[b.w,d.A],encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-vertical-pills"]],decls:5,vars:1,consts:[["type","pills",3,"vertical"],["heading","Vertical 1"],["heading","Vertical 2"]],template:function(n,l){1&n&&(t.TgZ(0,"tabset",0)(1,"tab",1),t._uU(2,"Vertical content 1"),t.qZA(),t.TgZ(3,"tab",2),t._uU(4,"Vertical content 2"),t.qZA()()),2&n&&t.Q6J("vertical",!0)},dependencies:[b.w,d.A],encapsulation:2}),e})(),D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-justified"]],decls:7,vars:1,consts:[[3,"justified"],["heading","Justified"],["heading","SJ"],["heading","Long Justified"]],template:function(n,l){1&n&&(t.TgZ(0,"tabset",0)(1,"tab",1),t._uU(2,"Justified content"),t.qZA(),t.TgZ(3,"tab",2),t._uU(4,"Short Labeled Justified content"),t.qZA(),t.TgZ(5,"tab",3),t._uU(6,"Long Labeled Justified content"),t.qZA()()),2&n&&t.Q6J("justified",!0)},dependencies:[b.w,d.A],encapsulation:2}),e})();function K(e,s){if(1&e&&(t.TgZ(0,"tab",2),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.Q6J("heading",n.title)("customClass",n.customClass),t.xp6(1),t.hij(" ",null==n?null:n.content," ")}}let v=(()=>{class e{constructor(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1",customClass:"customClass"},{title:"Dynamic Title 2",content:"Dynamic content 2",customClass:"customClass"}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-custom-class"]],decls:4,vars:1,consts:[["heading","Static title","customClass","customClass"],[3,"heading","customClass",4,"ngFor","ngForOf"],[3,"heading","customClass"]],template:function(n,l){1&n&&(t.TgZ(0,"tabset")(1,"tab",0),t._uU(2,"Static content"),t.qZA(),t.YNc(3,K,2,3,"tab",1),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",l.tabs))},dependencies:[i.sg,b.w,d.A],encapsulation:2}),e})();var p=a(5747);function L(){return Object.assign(new p.J,{type:"pills",isKeysAllowed:!0})}let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-config"]],features:[t._Bn([{provide:p.J,useFactory:L}])],decls:5,vars:0,consts:[["heading","Config 1"],["heading","Config 2"]],template:function(n,l){1&n&&(t.TgZ(0,"tabset")(1,"tab",0),t._uU(2,"Config content 1"),t.qZA(),t.TgZ(3,"tab",1),t._uU(4,"Config content 2"),t.qZA()())},dependencies:[b.w,d.A],encapsulation:2}),e})();const M=["staticTabs"];let Z=(()=>{class e{disableEnable(){this.staticTabs?.tabs[2]&&(this.staticTabs.tabs[2].disabled=!this.staticTabs.tabs[2].disabled)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-disabled"]],viewQuery:function(n,l){if(1&n&&t.Gf(M,5),2&n){let c;t.iGM(c=t.CRH())&&(l.staticTabs=c.first)}},decls:20,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["staticTabs",""],["heading","Static title"],["heading","Static Title 1"],["heading","Static Title 2"],["heading","Static Title 3"]],template:function(n,l){1&n&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Tabs can be enabled or disabled by changing "),t.TgZ(3,"code"),t._uU(4,"disabled"),t.qZA(),t._uU(5," input property"),t.qZA(),t.TgZ(6,"p")(7,"button",0),t.NdJ("click",function(){return l.disableEnable()}),t._uU(8," Enable / Disable third tab "),t.qZA()(),t._UZ(9,"hr"),t.TgZ(10,"tabset",null,1)(12,"tab",2),t._uU(13,"Static content"),t.qZA(),t.TgZ(14,"tab",3),t._uU(15,"Static content 1"),t.qZA(),t.TgZ(16,"tab",4),t._uU(17,"Static content 2"),t.qZA(),t.TgZ(18,"tab",5),t._uU(19,"Static content 3"),t.qZA()()())},dependencies:[b.w,d.A],encapsulation:2}),e})(),X=(()=>{class e{constructor(n,l){l.headingRef=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.Rgc),t.Y36(b.w))},e.\u0275dir=t.lG2({type:e,selectors:[["","tabHeading",""]]}),e})();function N(e,s){1&e&&(t.TgZ(0,"span",2),t._uU(1,"Heading"),t.qZA())}function W(e,s){1&e&&(t.TgZ(0,"i")(1,"b"),t._uU(2,"Tab 3"),t.qZA()())}let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-custom-template"]],decls:10,vars:0,consts:[["heading","Static"],["tabHeading",""],[1,"badge","badge-secondary","bg-secondary"]],template:function(n,l){1&n&&(t.TgZ(0,"div")(1,"tabset")(2,"tab",0),t._uU(3," Tab 1 "),t.qZA(),t.TgZ(4,"tab"),t.YNc(5,N,2,0,"ng-template",1),t._uU(6," I've got an HTML heading. Pretty cool! "),t.qZA(),t.TgZ(7,"tab"),t.YNc(8,W,3,0,"ng-template",1),t._uU(9," Tab with html tags in heading "),t.qZA()()())},dependencies:[b.w,d.A,X],encapsulation:2}),e})();function w(e,s){if(1&e&&(t.TgZ(0,"pre",4),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Event select is fired. The heading of the selected tab is: ",n.value,"")}}let U=(()=>{class e{onSelect(n){this.value=n.heading}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-tabs-select-event"]],decls:13,vars:1,consts:[[1,"mb-3"],["class","card card-block card-header",4,"ngIf"],["heading","First tab",1,"mt-2",3,"selectTab"],["heading","Second tab",1,"mt-2",3,"selectTab"],[1,"card","card-block","card-header"]],template:function(n,l){1&n&&(t.TgZ(0,"div",0),t.YNc(1,w,2,1,"pre",1),t.qZA(),t.TgZ(2,"tabset")(3,"tab",2),t.NdJ("selectTab",function(r){return l.onSelect(r)}),t.TgZ(4,"h4"),t._uU(5,"Title"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),t.qZA()(),t.TgZ(8,"tab",3),t.NdJ("selectTab",function(r){return l.onSelect(r)}),t.TgZ(9,"h4"),t._uU(10,"Title 2"),t.qZA(),t.TgZ(11,"p"),t._uU(12,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("ngIf",l.value))},dependencies:[i.O5,b.w,d.A],encapsulation:2}),e})(),E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-accessibility"]],decls:76,vars:0,consts:[[1,"highlighter-rouge"],["href","https://www.w3.org/TR/wai-aria-practices/#tabpanel"],["title","Web Accessibility Initiative"],["title","Accessible Rich Internet Applications"],[1,"table","table-bordered"],[1,"col-xs-3"],[1,"col-xs-9"]],template:function(n,l){1&n&&(t.TgZ(0,"p"),t._uU(1,"Note that tabs can be given "),t.TgZ(2,"code",0),t._uU(3,'role="tablist"'),t.qZA(),t._uU(4,", "),t.TgZ(5,"code",0),t._uU(6,'role="tab"'),t.qZA(),t._uU(7," and "),t.TgZ(8,"code",0),t._uU(9,'role="tabpanel"'),t.qZA(),t._uU(10," attributes. These are appropriate for tabbed interfaces, as described in the "),t.TgZ(11,"a",1)(12,"abbr",2),t._uU(13,"WAI"),t.qZA(),t.TgZ(14,"abbr",3),t._uU(15,"ARIA"),t.qZA(),t._uU(16," Authoring Practices"),t.qZA(),t._uU(17,"."),t.qZA(),t.TgZ(18,"p"),t._uU(19,"If your control element is targeting a single collapsible element - you should add the "),t.TgZ(20,"code"),t._uU(21,"aria-controls"),t.qZA(),t._uU(22," attribute to the control element, containing the "),t.TgZ(23,"code"),t._uU(24,"id"),t.qZA(),t._uU(25," of the collapsible element."),t.qZA(),t.TgZ(26,"p"),t._uU(27,"To confirm the tab content opening you should use "),t.TgZ(28,"code"),t._uU(29,"aria-selected"),t.qZA(),t._uU(30," property. If "),t.TgZ(31,"code"),t._uU(32,'aria-selected="true"'),t.qZA(),t._uU(33," it indicates the tab control is activated and its associated panel is displayed."),t.qZA(),t.TgZ(34,"p"),t._uU(35,"If you use a visible text element on the page as a label for a focusable element - you should add "),t.TgZ(36,"code"),t._uU(37,"aria-labelledby"),t.qZA(),t._uU(38,". It refers to the tab element that controls the panel."),t.qZA(),t.TgZ(39,"h4"),t._uU(40,"Keyboard interaction"),t.qZA(),t.TgZ(41,"table",4)(42,"tbody")(43,"tr")(44,"td",5)(45,"code"),t._uU(46," LEFT_ARROW "),t.qZA()(),t.TgZ(47,"td",6),t._uU(48," Move focus to previous tab "),t.qZA()(),t.TgZ(49,"tr")(50,"td",5)(51,"code"),t._uU(52," RIGHT_ARROW "),t.qZA()(),t.TgZ(53,"td",6),t._uU(54," Move focus to next tab "),t.qZA()(),t.TgZ(55,"tr")(56,"td",5)(57,"code"),t._uU(58," HOME "),t.qZA()(),t.TgZ(59,"td",6),t._uU(60," Move focus to first tab "),t.qZA()(),t.TgZ(61,"tr")(62,"td",5)(63,"code"),t._uU(64," END "),t.qZA()(),t.TgZ(65,"td",6),t._uU(66," Move focus to last tab "),t.qZA()(),t.TgZ(67,"tr")(68,"td",5)(69,"code"),t._uU(70,"SPACE"),t.qZA(),t._uU(71," or "),t.TgZ(72,"code"),t._uU(73,"ENTER"),t.qZA()(),t.TgZ(74,"td",6),t._uU(75," Switch to focused tab "),t.qZA()()()())},encapsulation:2}),e})(),H=(()=>{class e{constructor(){this.onInit=new t.vpe,this.onDestroy=new t.vpe}ngOnInit(){Promise.resolve().then(()=>this.onInit.emit())}ngOnDestroy(){this.onDestroy.emit()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["sub-component"]],inputs:{name:"name"},outputs:{onInit:"onInit",onDestroy:"onDestroy"},decls:2,vars:1,template:function(n,l){1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n&&(t.xp6(1),t.hij(" Sub-Component ",l.name,"\n"))},styles:["p[_ngcontent-%COMP%]{margin:30px}"],changeDetection:0}),e})();function q(e,s){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.Oqu(n)}}function z(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"sub-component",11),t.NdJ("onInit",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.message("Sub-Component A activated"))})("onDestroy",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.message("Sub-Component A destroyed"))}),t.qZA()}}function V(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"sub-component",12),t.NdJ("onInit",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.message("Sub-Component B activated"))})("onDestroy",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.message("Sub-Component B destroyed"))}),t.qZA()}}function j(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"sub-component",13),t.NdJ("onInit",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.message("Sub-Component C activated"))})("onDestroy",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.message("Sub-Component C destroyed"))}),t.qZA()}}let S=(()=>{class e{constructor(){this.messages=[]}message(n){this.messages.push(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["dynamic-content-rendering"]],decls:14,vars:4,consts:[[1,"eventlist"],[4,"ngFor","ngForOf"],["heading","Tab A"],["tabA","tab"],["name","A",3,"onInit","onDestroy",4,"ngIf"],["heading","Tab B"],["tabB","tab"],["name","B",3,"onInit","onDestroy",4,"ngIf"],["heading","Tab C"],["tabC","tab"],["name","C",3,"onInit","onDestroy",4,"ngIf"],["name","A",3,"onInit","onDestroy"],["name","B",3,"onInit","onDestroy"],["name","C",3,"onInit","onDestroy"]],template:function(n,l){if(1&n&&(t.TgZ(0,"p"),t._uU(1,"The Component inside the Tab is rendered, when the tab is activated and destroyed when the tab is left."),t.qZA(),t.TgZ(2,"ul",0),t.YNc(3,q,2,1,"li",1),t.qZA(),t.TgZ(4,"tabset")(5,"tab",2,3),t.YNc(7,z,1,0,"sub-component",4),t.qZA(),t.TgZ(8,"tab",5,6),t.YNc(10,V,1,0,"sub-component",7),t.qZA(),t.TgZ(11,"tab",8,9),t.YNc(13,j,1,0,"sub-component",10),t.qZA()()),2&n){const c=t.MAs(6),r=t.MAs(9),g=t.MAs(12);t.xp6(3),t.Q6J("ngForOf",l.messages),t.xp6(4),t.Q6J("ngIf",c.active),t.xp6(3),t.Q6J("ngIf",r.active),t.xp6(3),t.Q6J("ngIf",g.active)}},dependencies:[i.sg,i.O5,b.w,d.A,H],styles:[".eventlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:monospace}"],changeDetection:0}),e})();function Q(){return Object.assign(new p.J,{type:"tabs",isKeysAllowed:!1})}let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["demo-disabled-key-navigations"]],features:[t._Bn([{provide:p.J,useFactory:Q}])],decls:5,vars:0,consts:[["heading","Tab1"],["heading","Tab2"]],template:function(n,l){1&n&&(t.TgZ(0,"tabset")(1,"tab",0),t._uU(2,"Tab1"),t.qZA(),t.TgZ(3,"tab",1),t._uU(4,"Tab2"),t.qZA()())},dependencies:[b.w,d.A],encapsulation:2}),e})();const G=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:u.ke,content:[{title:"Basic",anchor:"basic",component:a(88632),html:a(99715),outlet:T},{title:"Manual selection",anchor:"tabs-manual-select",component:a(60295),html:a(3687),outlet:f},{title:"Disabled tabs",anchor:"disabled",component:a(89584),html:a(88391),outlet:Z},{title:"Dynamic tabs",anchor:"tabs-dynamic",component:a(90342),html:a(77168),outlet:C},{title:"Pills",anchor:"tabs-Pills",component:a(88734),html:a(2209),outlet:h},{title:"Vertical Pills",anchor:"tabs-vertical-pills",component:a(53343),html:a(38022),outlet:y},{title:"Justified",anchor:"tabs-justified",component:a(74522),html:a(92092),description:"<p><i>Bootstrap 4 doesn't have justified classes</i></p>",outlet:D},{title:"Custom class",anchor:"tabs-custom-class",component:a(40833),html:a(7615),outlet:v},{title:"Select event",anchor:"select-event",component:a(81324),html:a(37191),description:"<p>You can subscribe to tab's <code>select</code> event</p>",outlet:U},{title:"Configuring defaults",anchor:"tabs-config-defaults",component:a(50994),html:a(72394),outlet:A},{title:"Custom template",anchor:"tabs-custom-template",component:a(76781),html:a(54626),outlet:_},{title:"Dynamic content rendering",anchor:"dynamic-content-rendering",component:a(89739),html:a(20081),outlet:S},{title:"Accessibility",anchor:"accessibility",outlet:E},{title:"Disable key navigations",anchor:"disable-key-navigations",component:a(99428),html:a(59199),outlet:P}]},{name:"Installation",anchor:"api-reference",tabName:"api",outlet:u.s$,usage:a(26904),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">tabs</span>',content:[{title:"TabsetComponent",anchor:"tabset-component",outlet:u.Wh},{title:"TabDirective",anchor:"tab-directive",outlet:u.Wh},{title:"TabHeadingDirective",anchor:"tab-heading-directive",outlet:u.Wh},{title:"TabsetConfig",anchor:"tabset-config",outlet:u.Vg}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:u.ke,content:[{title:"Basic",anchor:"basic-ex",outlet:T},{title:"Manual selection",anchor:"tabs-manual-select-ex",outlet:f},{title:"Disabled tabs",anchor:"disabled-ex",outlet:Z},{title:"Dynamic tabs",anchor:"tabs-dynamic-ex",outlet:C},{title:"Pills",anchor:"tabs-Pills-ex",outlet:h},{title:"Vertical Pills",anchor:"tabs-vertical-pills-ex",outlet:y},{title:"Justified",anchor:"tabs-justified-ex",outlet:D},{title:"Custom class",anchor:"tabs-custom-class-ex",outlet:v},{title:"Select event",anchor:"select-event-ex",outlet:U},{title:"Configuring defaults",anchor:"tabs-config-defaults-ex",outlet:A},{title:"Custom template",anchor:"tabs-custom-template-ex",outlet:_},{title:"Dynamic content rendering",anchor:"dynamic-content-rendering-ex",outlet:S},{title:"Accessibility",anchor:"accessibility-ex",outlet:E},{title:"Disable key navigations",anchor:"disable-key-navigations-ex",outlet:P}]}];var Y=a(22289),$=a(33505);let x=(()=>{class e{constructor(){this.name="Tabs",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/tabs",this.componentContent=G}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tabs-section"]],decls:8,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(n,l){1&n&&(t.TgZ(0,"demo-section",0)(1,"p"),t._uU(2,"Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. "),t.TgZ(3,"strong"),t._uU(4,"Nested tabs are not supported."),t.qZA()(),t.TgZ(5,"p"),t._uU(6,"The easiest way to add the tabs component to your app (will be added to the root module)"),t.qZA(),t._UZ(7,"docs-section",1),t.qZA()),2&n&&(t.Q6J("name",l.name)("src",l.src)("componentContent",l.componentContent),t.xp6(7),t.Q6J("content",l.componentContent))},dependencies:[Y.Z,$.Z],encapsulation:2,changeDetection:0}),e})();const k=[{path:"",component:x}];let tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,F.u5,u.Gz,B.P.forRoot(),I.Bz.forChild(k)]}),e})()},99715:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<div>\n  <tabset>\n    <tab heading="Basic title" id="tab1">Basic content</tab>\n    <tab heading="Basic Title 1">Basic content 1</tab>\n    <tab heading="Basic Title 2">Basic content 2</tab>\n  </tabset>\n</div>\n\n'},88632:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoTabsBasicComponent {}\n"},72394:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<tabset>\n  <tab heading="Config 1">Config content 1</tab>\n  <tab heading="Config 2">Config content 2</tab>\n</tabset>\n'},50994:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'ngx-bootstrap/tabs';\n\n// such override allows to keep some initial values\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoTabsConfigComponent {}\n"},7615:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<tabset>\n  <tab heading="Static title" customClass="customClass">Static content</tab>\n  <tab *ngFor="let tabz of tabs"\n       [heading]="tabz.title"\n       [customClass]="tabz.customClass">\n    {{tabz?.content}}\n  </tab>\n</tabset>\n'},40833:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\n\ninterface ITab {\n  title: string;\n  content: string;\n  removable?: boolean;\n  disabled?: boolean;\n  active?: boolean;\n  customClass?: string;\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-custom-class',\n  templateUrl: './custom-class.html'\n})\nexport class DemoTabsCustomClassComponent {\n  tabs: ITab[] = [\n    {\n      title: 'Dynamic Title 1',\n      content: 'Dynamic content 1',\n      customClass: 'customClass'\n    },\n    {\n      title: 'Dynamic Title 2',\n      content: 'Dynamic content 2',\n      customClass: 'customClass'\n    }\n  ];\n}\n"},54626:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<div>\n  <tabset>\n    <tab heading="Static">\n      Tab 1\n    </tab>\n    <tab>\n      <ng-template tabHeading>\n        <span class="badge badge-secondary bg-secondary">Heading</span>\n      </ng-template>\n      I\'ve got an HTML heading. Pretty cool!\n    </tab>\n    <tab>\n      <ng-template tabHeading>\n        <i><b>Tab 3</b></i>\n      </ng-template>\n      Tab with html tags in heading\n    </tab>\n  </tabset>\n</div>\n'},76781:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-custom-template',\n  templateUrl: './custom-template.html'\n})\nexport class DemoTabsCustomComponent {}\n"},59199:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<tabset>\n  <tab  heading="Tab1">Tab1</tab>\n  <tab  heading="Tab2">Tab2</tab>\n</tabset>\n'},99428:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'ngx-bootstrap/tabs';\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'tabs', isKeysAllowed: false });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-disabled-key-navigations',\n  templateUrl: './disabled-key-navigations.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoDisabledKeyNavigationsComponent {\n}\n"},88391:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<div>\n  <p>Tabs can be enabled or disabled by changing <code>disabled</code> input property</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="disableEnable()">\n      Enable / Disable third tab\n    </button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3">Static content 3</tab>\n  </tabset>\n</div>\n'},89584:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap/tabs';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoTabsDisabledComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;\n\n  disableEnable() {\n    if (this.staticTabs?.tabs[2]) {\n      this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;\n    }\n  }\n}\n"},20081:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<p>The Component inside the Tab is rendered, when the tab is activated and destroyed when the tab is left.</p>\n<ul class="eventlist">\n  <li *ngFor="let message of messages">{{\xa0message }}</li>\n</ul>\n<tabset>\n  <tab heading="Tab A" #tabA="tab">\n    <sub-component\n      name="A"\n      *ngIf="tabA.active"\n      (onInit)="message(\'Sub-Component A activated\')"\n      (onDestroy)="message(\'Sub-Component A destroyed\')"\n    ></sub-component>\n  </tab>\n\n  <tab heading="Tab B" #tabB="tab">\n    <sub-component\n      name="B"\n      *ngIf="tabB.active"\n      (onInit)="message(\'Sub-Component B activated\')"\n      (onDestroy)="message(\'Sub-Component B destroyed\')"\n    ></sub-component>\n  </tab>\n\n  <tab heading="Tab C" #tabC="tab">\n    <sub-component\n      name="C"\n      *ngIf="tabC.active"\n      (onInit)="message(\'Sub-Component C activated\')"\n      (onDestroy)="message(\'Sub-Component C destroyed\')"\n    ></sub-component>\n  </tab>\n</tabset>\n'},89739:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'dynamic-content-rendering',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './dynamic-content-rendering.html',\n  styleUrls: ['./dynamic-content-rendering.css']\n})\nexport class DynamicContentRenderingComponent {\n\n  messages: string[] = [];\n\n  message(s: string) {\n    this.messages.push(s);\n  }\n\n}\n"},77168:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<div (click)="$event.preventDefault()">\n    <p>Change quantity of tabs by manipulating tabs array</p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="addNewTab()">\n      Add new tab\n    </button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="tabs = []"  *ngIf="tabs.length">\n      Remove all tabs\n    </button>\n  <hr/>\n  <tabset>\n    <tab heading="Static title">Static content</tab>\n    <tab *ngFor="let tabz of tabs"\n         [heading]="tabz.title"\n         [active]="tabz.active"\n         (selectTab)="tabz.active = true"\n         (deselect)="tabz.active = false"\n         [disabled]="tabz.disabled"\n         [removable]="tabz.removable"\n         (removed)="removeTabHandler(tabz)"\n         [customClass]="tabz.customClass">\n      {{tabz?.content}}\n    </tab>\n  </tabset>\n</div>\n'},90342:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component, ChangeDetectionStrategy } from '@angular/core';\n\ninterface ITab {\n  title: string;\n  content: string;\n  removable: boolean;\n  disabled: boolean;\n  active?: boolean;\n  customClass?: string;\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-dynamic',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './dynamic.html'\n})\nexport class DemoTabsDynamicComponent {\n  tabs: ITab[] = [\n    { title: 'Dynamic Title 1', content: 'Dynamic content 1', removable: false, disabled: false},\n    { title: 'Dynamic Title 2', content: 'Dynamic content 2', removable: false, disabled: false},\n    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true, disabled: false}\n  ];\n\n  addNewTab(): void {\n    const newTabIndex = this.tabs.length + 1;\n    this.tabs.push({\n      title: `Dynamic Title ${newTabIndex}`,\n      content: `Dynamic content ${newTabIndex}`,\n      disabled: false,\n      removable: true\n    });\n  }\n\n  removeTabHandler(tab: ITab): void {\n    this.tabs.splice(this.tabs.indexOf(tab), 1);\n    console.log('Remove Tab handler');\n  }\n}\n"},92092:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<tabset [justified]="true">\n  <tab heading="Justified">Justified content</tab>\n  <tab heading="SJ">Short Labeled Justified content</tab>\n  <tab heading="Long Justified">Long Labeled Justified content</tab>\n</tabset>\n'},74522:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-justified',\n  templateUrl: './justified.html'\n})\nexport class DemoTabsJustifiedComponent {}\n"},3687:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<div>\n  <p>You can select tabs directly from component</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(1)">Select second tab</button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(2)">Select third tab</button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3">Static content 3</tab>\n  </tabset>\n</div>\n\n'},60295:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap/tabs';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-manual-selection',\n  templateUrl: './manual-selection.html'\n})\nexport class DemoTabsManualSelectionComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;\n\n  selectTab(tabId: number) {\n    if (this.staticTabs?.tabs[tabId]) {\n      this.staticTabs.tabs[tabId].active = true;\n    }\n  }\n}\n"},2209:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<tabset type="pills">\n  <tab heading="Pills 1">Pills content 1</tab>\n  <tab heading="Pills 2">Pills content 2</tab>\n</tabset>\n'},88734:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-pills',\n  templateUrl: './pills.html'\n})\nexport class DemoTabsPillsComponent {}\n"},37191:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<div class="mb-3">\n  <pre class="card card-block card-header" *ngIf="value">Event select is fired. The heading of the selected tab is: {{value}}</pre>\n</div>\n<tabset>\n  <tab heading="First tab" class="mt-2" (selectTab)="onSelect($event)">\n    <h4>Title</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n      Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n  </tab>\n  <tab heading="Second tab" class="mt-2" (selectTab)="onSelect($event)">\n    <h4>Title 2</h4>\n    <p>It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged. It was popularised in the 1960s with the release of\n      Letraset sheets containing Lorem Ipsum passages</p>\n  </tab>\n</tabset>\n'},81324:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\nimport { TabDirective } from 'ngx-bootstrap/tabs';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-select-event',\n  templateUrl: './select-event.html'\n})\nexport class DemoTabsSelectEventComponent {\n  value?: string;\n  onSelect(data: TabDirective): void {\n    this.value = data.heading;\n  }\n}\n"},38022:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i='<tabset [vertical]="true" type="pills">\n  <tab heading="Vertical 1">Vertical content 1</tab>\n  <tab heading="Vertical 2">Vertical content 2</tab>\n</tabset>\n'},53343:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-tabs-vertical-pills',\n  templateUrl: './vertical-pills.html'\n})\nexport class DemoTabsVerticalPillsComponent {}\n"},26904:(m,o,a)=>{a.r(o),a.d(o,{default:()=>i});const i="import { TabsModule } from 'ngx-bootstrap/tabs';\n\n@NgModule({\n  imports: [TabsModule.forRoot(),...]\n})\nexport class AppModule(){}\n"}}]);