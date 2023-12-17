"use strict";(self.webpackChunkvct_vendor_github_io=self.webpackChunkvct_vendor_github_io||[]).push([[708],{8148:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=n(5893),c=n(1151);const s={},o="Price Diff",r={id:"price-diff",title:"Price Diff",description:"Module for Magento 2",source:"@site/docs/price-diff.md",sourceDirName:".",slug:"/price-diff",permalink:"/price-diff",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Place Order Sidebar",permalink:"/place-order-sidebar"},next:{title:"Privacy Policy",permalink:"/privacy-policy"}},a={},d=[{value:"Module for Magento 2",id:"module-for-magento-2",level:6},{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Installation",id:"installation",level:2},{value:"Update",id:"update",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<kbd>Hide price difference</kbd>",id:"hide-price-difference",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h6:"h6",img:"img",input:"input",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"price-diff",children:"Price Diff"}),"\n",(0,t.jsx)(i.h6,{id:"module-for-magento-2",children:"Module for Magento 2"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/vct-pricediff.html#bazaarvoice.reviews.tab",children:"Leave review"})," to help in further development"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/vct-pricediff.html",children:(0,t.jsx)(i.img,{alt:"VCT Price Diff Logo",src:n(2606).Z+"",width:"481",height:"483"})})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/vct-pricediff.html",children:"Marketplace"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/vct-pricediff.html#product.info.details.release_notes",children:"Release Notes"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/vct-pricediff.html#product.info.details.quality_report",children:"Quality Report"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product",children:"configurable product"})," appears to be a single product with lists of options for each variant. However, each option represents a separate product. The price displayed on the configurable product page is the lowest price among all variants. When you click on the dropdown, it displays the additional cost of the variant. This can negatively affect sales, which will not happen if the customer is informed of the price difference in a timely manner."]}),"\n",(0,t.jsx)(i.p,{children:"Hiding price difference from the dropdown of the configurable product:"}),"\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",checked:!0,disabled:!0})," ","Increase conversion: an unexpected price difference can lead to abandoned purchases. Hiding price difference encourages customers to focus on other product attributes that may be more appealing."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",checked:!0,disabled:!0})," ","Increase higher-priced variant sales: with no price comparison, customers might be more inclined to choose the more expensive option that appeals to them more."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",checked:!0,disabled:!0})," ","Simplify decision-making: hiding price differences streamlines the decision-making process for customers, minimizing purchase deliberation and decision fatigue."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",checked:!0,disabled:!0})," ","Tested and verified by ",(0,t.jsx)(i.a,{href:"https://developer.adobe.com/commerce/marketplace/guides/sellers/extension-quality-program",children:"Adobe Extension Quality Program"}),"."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",checked:!0,disabled:!0})," ","Meets ",(0,t.jsx)(i.a,{href:"https://developer.adobe.com/commerce/php/coding-standards",children:"Magento Coding Standard"}),"."]}),"\n",(0,t.jsxs)(i.li,{className:"task-list-item",children:[(0,t.jsx)(i.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(i.a,{href:"https://developer.adobe.com/commerce/php/development/components/plugins",children:"Plugins (Interceptors)"})," are used to prevent conflicts among ",(0,t.jsx)(i.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module",children:"modules"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"Composer"})," to install the module or get the code for review:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://account.magento.com/customer/account/login",children:"Log in"})," to your Marketplace account that purchased the module."]}),"\n",(0,t.jsxs)(i.li,{children:["Add or update your ",(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/customer/accessKeys",children:(0,t.jsx)("kbd",{children:"Access Keys"})})," for ",(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com",children:"Adobe Commerce Marketplace"})," ",(0,t.jsx)(i.a,{href:"https://getcomposer.org/doc/05-repositories.md#repository",children:"repository"})," in ",(0,t.jsx)(i.code,{children:"auth.json"})," using the following command:"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"composer config http-basic.repo.magento.com <Public Key> <Private Key>\n# e.g. composer config http-basic.repo.magento.com 39b747b8ab1d624582bb3n1a09deb489 31b9fce4cb78f523fd34aa3abb90c89c\n"})}),"\n",(0,t.jsxs)(i.p,{children:["where ",(0,t.jsx)(i.code,{children:"<Public Key>"})," and ",(0,t.jsx)(i.code,{children:"<Private Key>"})," are your ",(0,t.jsx)(i.a,{href:"https://commercemarketplace.adobe.com/customer/accessKeys",children:(0,t.jsx)("kbd",{children:"Access Keys"})}),"."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Run the following commands:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"composer require vct/pricediff # Install the module using Composer\nbin/magento setup:upgrade --safe-mode=1 # Update the database schema and data\nbin/magento setup:static-content:deploy --force # Deploy static view files\n"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"bin/magento setup:di:compile # Recompile the code only in production mode\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/authentication-keys.html?lang=en",children:"Get your authentication keys"})," and ",(0,t.jsx)(i.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en",children:"install an extension"})," in the Adobe Commerce Documentation."]}),"\n",(0,t.jsx)(i.admonition,{title:"TIP",type:"tip",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Help for common issues is on the ",(0,t.jsx)(i.a,{href:"/faq#installation-and-update",children:"FAQ page"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["For further assistance, please contact me by email ",(0,t.jsx)(i.a,{href:"mailto:vct.vendor@gmail.com?subject=Installation%20issue&body=To%20help%20you%20faster%2C%20please%20provide%20me%20with%20the%20following%20information%3A%0A%0AMagento%20version%20and%20edition%3A%20(e.g.%20Adobe%20Commerce%202.4.6-p6)%0APHP%20version%3A%20(e.g.%20PHP%208.2.8)%0AComposer%20version%3A%20(e.g.%202.2.21)",children:"vct.vendor@gmail.com"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"update",children:"Update"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"Composer"})," to update the module or get the code for review:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"composer update vct/pricediff # Update the module using Composer\nbin/magento setup:upgrade --safe-mode=1 # Update the database schema and data\nbin/magento setup:static-content:deploy --force # Deploy static view files\n"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"bin/magento setup:di:compile # Recompile the code only in production mode\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en",children:"Upgrade an extension"})," in the Adobe Commerce Documentation."]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.admonition,{title:"IMPORTANT",type:"danger",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("kbd",{children:"Flush Magento Cache"})," in ",(0,t.jsx)("kbd",{children:"SYSTEM"})," ",(0,t.jsx)("kbd",{children:"Tools"})," ",(0,t.jsx)("kbd",{children:"Cache Management"})," after configuration change to see the changes!"]})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types",children:"Clean and flush cache types"})," in the Adobe Commerce Documentation."]}),"\n",(0,t.jsx)(i.h3,{id:"hide-price-difference",children:(0,t.jsx)("kbd",{children:"Hide price difference"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)("kbd",{children:"Stores"})," ",(0,t.jsx)("kbd",{children:"SETTINGS"})," ",(0,t.jsx)("kbd",{children:"Configuration"})," ",(0,t.jsx)("kbd",{children:"VCT"})," ",(0,t.jsx)("kbd",{children:"Price Diff"})," ",(0,t.jsx)("kbd",{children:"Config"}),":"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Config"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Default"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)("kbd",{children:"Hide price difference"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)("kbd",{children:"Yes"}),(0,t.jsx)("br",{}),(0,t.jsx)("kbd",{children:"No"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)("kbd",{children:"No"})}),(0,t.jsx)(i.td,{children:"Hide or display price difference in a configurable product options dropdown."})]})})]}),"\n",(0,t.jsx)(i.p,{children:"For example:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Hide price difference",src:n(4749).Z+"",width:"1980",height:"644"})})]})}function h(e={}){const{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2606:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Vct_PriceDiff-0f2721407f169869b25417d89a9febfb.svg"},4749:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/frontend-01cafc6bca7ce5684793ba37982a2ca6.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(7294);const c={},s=t.createContext(c);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);