(this.webpackJsonpppc=this.webpackJsonpppc||[]).push([[0],{11:function(e,a,t){e.exports={tablePanel:"Table_tablePanel__2dw-E",turnPage:"Table_turnPage__3BMtl",rightTurn:"Table_rightTurn___OiF0",page:"Table_page__QQTJ0",left:"Table_left__1ixxQ",right:"Table_right__3JKTU",prev:"Table_prev__KWkoH",next:"Table_next__1a_YB",goto:"Table_goto__2Z6Jh"}},23:function(e,a,t){e.exports={container:"Module_container__guACP"}},25:function(e,a,t){e.exports={main:"Page_main__2mKbo"}},31:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(22),r=t.n(n),i=(t(31),t(3)),l=t(2),o=t(5),j=t.n(o),u=(t(32),t(7)),d=t(26),b=t(15),p=t(0),h=function(e){return"$"+parseFloat(e).toLocaleString("USD",{minimumFractionDigits:2})},m=[{Header:"Picture",accessor:"img",maxWidth:70,minWidth:70,Cell:function(e){var a=e.cell.value;return Object(p.jsx)("img",{src:a,alt:"",width:60})}},{Header:"Breakdown",Footer:"Total:",accessor:"product"},{Header:"Spend",Footer:"",accessor:"spend",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",h(e.value)]})}},{Header:"Sales",Footer:"",accessor:"sales",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",h(e.value)]})}},{Header:"ACoS",Footer:"",accessor:"a_co_s",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",e.value+"%"]})}},{Header:"ROAS",Footer:"",accessor:"roas"},{Header:"Impressions",Footer:"",accessor:"impressions",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",e.value.toLocaleString()]})}},{Header:"Clicks",Footer:"",accessor:"clicks",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",e.value.toLocaleString()]})}},{Header:"CTR",Footer:"",accessor:"ctr",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",e.value+"%"]})}},{Header:"CPC",Footer:"",accessor:"cpc",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",h(e.value)]})}},{Header:"PPC Orders",Footer:"",accessor:"ppc_orders"},{Header:"Total Sales",Footer:"",accessor:"total_sales",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",h(e.value)]})}},{Header:"TACoS",Footer:"",accessor:"ta_cos",Cell:function(e){return Object(p.jsxs)(s.a.Fragment,{children:[" ",e.value+"%"]})}}],O=t(11),x=t.n(O),g=t(12),_=t.n(g),f=function(){var e=Object(c.useState)([]),a=Object(d.a)(e,2),t=a[0],s=a[1];Object(c.useEffect)((function(){fetch("/list").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var n=Object(c.useMemo)((function(){return m}),[]),r=Object(b.useTable)({columns:n,data:t},b.useSortBy,b.usePagination),i=r.getTableProps,l=r.getTableBodyProps,o=r.headerGroups,j=r.footerGroups,O=r.prepareRow,g=r.pageOptions,f=r.page,v=r.state,N=v.pageIndex,P=v.pageSize,C=r.gotoPage,F=r.previousPage,S=r.nextPage,H=r.setPageSize,T=r.canPreviousPage,k=r.canNextPage;return Object(p.jsxs)("div",{className:x.a.tablePanel,children:[Object(p.jsxs)("table",Object(u.a)(Object(u.a)({},i()),{},{children:[Object(p.jsx)("thead",{children:o.map((function(e){return Object(p.jsx)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsxs)("th",Object(u.a)(Object(u.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(p.jsx)("span",{children:e.isSorted?e.isSortedDesc?"\u25bc":"\u25b2":""})]}))}))}))}))}),Object(p.jsx)("thead",{children:j.map((function(e){return Object(p.jsx)("tr",Object(u.a)(Object(u.a)({},e.getFooterGroupProps()),{},{className:x.a.summary,children:e.headers.map((function(e,a){return Object(p.jsxs)("th",{children:[e.render("Footer"),2===a?Object(p.jsx)("span",{children:h(_.a.sum(_.a.map(t,(function(e){return e.spend}))))}):null,3===a?Object(p.jsx)("span",{children:h(_.a.sum(_.a.map(t,(function(e){return e.sales}))))}):null,6===a?Object(p.jsx)("span",{children:_.a.sum(_.a.map(t,(function(e){return e.impressions}))).toLocaleString()}):null,7===a?Object(p.jsx)("span",{children:_.a.sum(_.a.map(t,(function(e){return e.clicks}))).toLocaleString()}):null,11===a?Object(p.jsx)("span",{children:h(_.a.sum(_.a.map(t,(function(e){return e.total_sales}))))}):null]},a)}))}))}))}),Object(p.jsx)("tbody",Object(u.a)(Object(u.a)({},l()),{},{children:f.map((function(e){return O(e),Object(p.jsx)("tr",Object(u.a)(Object(u.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(p.jsx)("td",Object(u.a)(Object(u.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(p.jsxs)("div",{className:x.a.turnPage,children:[Object(p.jsxs)("div",{children:[N*P+1," - ",N*P+f.length," of ",t.length," items"]}),Object(p.jsxs)("div",{className:x.a.rightTurn,children:[Object(p.jsx)("button",{className:x.a.prev,onClick:function(){return F()},disabled:!T,children:Object(p.jsx)("i",{className:"".concat(x.a.left," fa fa-angle-left")})}),Object(p.jsxs)("div",{className:x.a.page,children:["Page"," ",Object(p.jsxs)("em",{children:[N+1," of ",g.length]})]}),Object(p.jsx)("button",{className:x.a.next,onClick:function(){return S()},disabled:!k,children:Object(p.jsx)("i",{className:"".concat(x.a.right," fa fa-angle-right")})}),Object(p.jsx)("div",{className:x.a.goto,children:"Go to page:"}),Object(p.jsx)("input",{type:"number",defaultValue:N+1||1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;C(a)}}),Object(p.jsx)("select",{value:P,onChange:function(e){H(Number(e.target.value))},children:[10,20,50,100].map((function(e){return Object(p.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})]})},v=t(23),N=t.n(v),P=function(){var e=Object(l.f)().topicId;return Object(p.jsx)("div",{className:N.a.container,children:Object(p.jsx)("h1",{children:e})})},C=t(6),F=t.n(C),S=function(){return Object(p.jsxs)("main",{className:F.a.main,children:[Object(p.jsxs)("header",{children:[Object(p.jsxs)("p",{className:F.a.subtitle,children:[Object(p.jsx)("span",{className:F.a.profits,children:"Profits / "}),Object(p.jsx)("span",{children:"PPC"})]}),Object(p.jsx)("h1",{children:"PPC"}),Object(p.jsxs)("nav",{className:F.a.nav,children:[Object(p.jsxs)(i.c,{to:"/",exact:!0,className:F.a.link,activeClassName:F.a.active,children:[Object(p.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(p.jsx)("span",{children:"Portfolio Level"})]}),Object(p.jsxs)(i.c,{to:"/main/campaign",exact:!0,className:F.a.link,activeClassName:F.a.active,children:[Object(p.jsx)("i",{className:"fa fa-bullhorn","aria-hidden":"true"}),Object(p.jsx)("span",{children:"Campaign Level"})]}),Object(p.jsxs)(i.c,{to:"/main/group",exact:!0,className:F.a.link,activeClassName:F.a.active,children:[Object(p.jsx)("i",{className:"fa fa-database","aria-hidden":"true"}),Object(p.jsx)("span",{children:"Ad Group Level"})]}),Object(p.jsxs)(i.c,{to:"/main/keyword",exact:!0,className:F.a.link,activeClassName:F.a.active,children:[Object(p.jsx)("i",{className:"fa fa-key","aria-hidden":"true"}),Object(p.jsx)("span",{children:"Keyword Level"})]}),Object(p.jsxs)(i.c,{to:"/main/search",exact:!0,className:F.a.link,activeClassName:F.a.active,children:[Object(p.jsx)("i",{className:"fa fa-search","aria-hidden":"true"}),Object(p.jsx)("span",{children:"Search Term Level"})]}),Object(p.jsxs)(i.c,{to:"/main/product",exact:!0,className:F.a.link,activeClassName:F.a.active,children:[Object(p.jsx)("i",{className:"fa fa-shopping-bag","aria-hidden":"true"}),Object(p.jsx)("span",{children:"Product Level"})]})]})]}),Object(p.jsx)("section",{children:Object(p.jsxs)(l.c,{className:F.a.route,children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(f,{})}),Object(p.jsx)(l.a,{path:"/main/:topicId",children:Object(p.jsx)(P,{})})]})})]})},H=t(25),T=t.n(H),k=function(){var e=Object(l.f)().id;return Object(p.jsxs)("main",{className:T.a.main,children:["This is ",e," page"]})};var A=function(){return Object(p.jsxs)("div",{className:j.a.app,children:[Object(p.jsx)("header",{className:j.a.appHeader,children:Object(p.jsxs)("ul",{className:j.a.ul,children:[Object(p.jsxs)("li",{className:j.a.leftHeader,children:[Object(p.jsx)(i.b,{to:"/",className:j.a.logoLink,children:Object(p.jsx)("img",{className:j.a.logo,src:"https://ui-avatars.com/api/?name=S&background=6B59CC&color=fff&bold=true",alt:"logo"})}),Object(p.jsx)(i.b,{to:"/summary",className:j.a.summary,children:"Summary"}),Object(p.jsx)(i.b,{to:"/tools",className:j.a.tools,children:"Amazon tools"}),Object(p.jsx)(i.b,{to:"/inventory",className:j.a.inventory,children:"Warehouse Inventory"})]}),Object(p.jsxs)("li",{className:j.a.rightHeader,children:[Object(p.jsx)(i.b,{to:"/notification",className:j.a.notification,children:Object(p.jsx)("i",{className:"".concat(j.a.bellIcon," far fa-bell")})}),Object(p.jsx)(i.b,{to:"/user",className:j.a.user,children:"Monica Simons"}),Object(p.jsx)(i.b,{to:"/user",className:j.a.avatar,children:Object(p.jsx)("img",{className:j.a.avatar,src:"https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",alt:"avatar"})})]})]})}),Object(p.jsxs)(l.c,{className:j.a.switch,children:[Object(p.jsx)(l.a,{path:"/main",className:j.a.route,children:Object(p.jsx)(S,{})}),Object(p.jsx)(l.a,{path:"/:id",children:Object(p.jsx)(k,{})}),Object(p.jsx)(l.a,{path:"/",className:j.a.route,children:Object(p.jsx)(S,{})})]})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(i.a,{basename:"",children:Object(p.jsx)(A,{})}),document.getElementById("root")),y()},5:function(e,a,t){e.exports={app:"App_app__3c79W",appHeader:"App_appHeader__2ylqP",ul:"App_ul__26lVQ",logo:"App_logo__YwAxA",avatar:"App_avatar__1kDhC",leftHeader:"App_leftHeader__2eGIs",logoLink:"App_logoLink__2gYIF",summary:"App_summary__3MFQp",tools:"App_tools__gyaM9",inventory:"App_inventory__XPlAZ",notification:"App_notification__ej5sE",user:"App_user__P3Ywh",rightHeader:"App_rightHeader__1N790",bellIcon:"App_bellIcon__JFzzR"}},6:function(e,a,t){e.exports={main:"MainPage_main__3hKUt",subtitle:"MainPage_subtitle__IFA2M",profits:"MainPage_profits__zUOog",nav:"MainPage_nav__28ESa",active:"MainPage_active__ESWZ9",link:"MainPage_link__wdr1N"}}},[[42,1,2]]]);
//# sourceMappingURL=main.43b86ec1.chunk.js.map