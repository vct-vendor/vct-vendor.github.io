"use strict";(self.webpackChunkvct_vendor_github_io=self.webpackChunkvct_vendor_github_io||[]).push([[5],{2758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var s=n(5893),i=n(1151);const c={sidebar_class_name:"sidebar-change-sku-dynamically",title:"Change SKU Dynamically"},a="Change SKU Dynamically",l={id:"change-sku-dynamically",title:"Change SKU Dynamically",description:"packagist",source:"@site/docs/change-sku-dynamically.md",sourceDirName:".",slug:"/change-sku-dynamically",permalink:"/change-sku-dynamically",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"sidebar-change-sku-dynamically",title:"Change SKU Dynamically"},sidebar:"docsSidebar",previous:{title:"Also Bought",permalink:"/also-bought"},next:{title:"FAQ",permalink:"/faq"}},o={},r=[{value:"Product Info Switcher",id:"product-info-switcher",level:2},{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Install",id:"install",level:2},{value:"Update",id:"update",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Configure",id:"configure",level:2},{value:'<kbd class="required">Switch SKU</kbd>',id:"switch-sku",level:3},{value:"<kbd>SKU Selector</kbd>",id:"sku-selector",level:3},{value:"Selector validation in Admin",id:"selector-validation-in-admin",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",input:"input",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"change-sku-dynamically",children:"Change SKU Dynamically"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://packagist.org/packages/vct/changeskudynamically",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/packagist/v/vct/changeskudynamically",alt:"packagist"})}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/packagist/l/vct/changeskudynamically",alt:"license"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/price-free-29903b",alt:"free"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/compatibility-Magento-da4c02",alt:"Magento"}),"\n",(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/compatibility-Adobe_Commerce-b62324",alt:"Adobe Commerce"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("span",{class:"star",children:"\u2606\u2606\u2606\u2606\u2606"})," ",(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/vct-changeskudynamically.html#bazaarvoice.reviews.tab",children:"Leave review"})," or ",(0,s.jsx)(t.a,{href:"https://www.paypal.com/donate/?hosted_button_id=GB7ZCJ3D37CNE",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/donate-PayPal-blue",alt:"Donate"})})," to help in further development"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/vct-changeskudynamically.html",children:(0,s.jsx)(t.img,{alt:"VCT Change SKU Dynamically Logo",src:n(1508).Z+"",width:"481",height:"483"})})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/vct-changeskudynamically.html",children:"Marketplace"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://packagist.org/packages/vct/changeskudynamically",children:"Packagist"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/vct-changeskudynamically.html#product.info.details.release_notes",children:"Release Notes"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/vct-changeskudynamically.html#product.info.details.quality_report",children:"Quality Report"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/vct-changeskudynamically.html#bazaarvoice.reviews.tab",children:"Reviews"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"product-info-switcher",children:"Product Info Switcher"}),"\n",(0,s.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.a,{href:"/product-info-switcher",children:"Product Info Switcher"})," module to switch ",(0,s.jsx)(t.a,{href:"/product-info-switcher#switchable-elements",children:"other elements"})," on a configurable product page."]})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product",children:"configurable product"})," appears to be a single product with lists of options for each variant. However, each option represents a separate product. When selecting a configurable product variant, a customer will see the ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#sku",children:"SKU"})," of selected variant instead of the configurable product one."]}),"\n",(0,s.jsx)(t.p,{children:"Show the SKU of selected variant instead of the configurable product one to improve customer experience:"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Communicate with the customer support by identifying the product by its SKU."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Find a product among similar ones by name."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","When using printed catalogs, it is easier for the customer to find the product he needs by simply comparing the item SKU in the catalog and on the website."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Support ",(0,s.jsx)("kbd",{children:"Dropdown"}),", ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en",children:(0,s.jsx)("kbd",{children:"Visual Swatch"})}),", ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en",children:(0,s.jsx)("kbd",{children:"Text Swatch"})})," attribute input types."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Compatibility with most themes due to the flexibility of configuration."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","No reloads and no AJAX requests when selecting a product."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Validation of jQuery selector in ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin",children:"Admin"}),"."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,s.jsx)(t.a,{href:"https://developer.adobe.com/commerce/php/development/components/plugins",children:"Plugins"})," are used to prevent conflicts among ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module",children:"modules"}),"."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Meets ",(0,s.jsx)(t.a,{href:"https://developer.adobe.com/commerce/php/coding-standards",children:"Magento Coding Standard"}),"."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Tested and verified by ",(0,s.jsx)(t.a,{href:"https://developer.adobe.com/commerce/marketplace/guides/sellers/extension-quality-program",children:"Adobe Extension Quality Program"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"Composer"})," to install the module or get the code for review:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://account.magento.com/customer/account/login",children:"Log in"})," to your Marketplace account that purchased the module."]}),"\n",(0,s.jsxs)(t.li,{children:["Add or update your ",(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com/customer/accessKeys",children:(0,s.jsx)("kbd",{children:"Access Keys"})}),"  i.e. ",(0,s.jsx)(t.code,{children:"<Public Key>"})," and ",(0,s.jsx)(t.code,{children:"<Private Key>"})," for ",(0,s.jsx)(t.a,{href:"https://commercemarketplace.adobe.com",children:"Adobe Commerce Marketplace"})," ",(0,s.jsx)(t.a,{href:"https://getcomposer.org/doc/05-repositories.md#repository",children:"repository"})," in ",(0,s.jsx)(t.code,{children:"auth.json"})," using the following command:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"composer config --auth http-basic.repo.magento.com <Public Key> <Private Key> # Add or update Access Keys in auth.json\n# e.g. composer config --auth http-basic.repo.magento.com 39b747b8ab1d624582bb3n1a09deb489 31b9fce4cb78f523fd34aa3abb90c89c\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Execute the following commands:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"composer require vct/changeskudynamically # Install the module using Composer\nbin/magento setup:upgrade --safe-mode=1 # Update the database schema and data\nbin/magento setup:static-content:deploy --force # Deploy static view files\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The module was installed in ",(0,s.jsx)(t.code,{children:"vendor/vct"})," directory."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Info",type:"info",children:[(0,s.jsxs)(t.p,{children:["Optional execute in ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html?lang=en",children:"production mode"}),":"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bin/magento setup:di:compile # Recompile the code in production mode\n"})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,s.jsxs)(t.p,{children:["Help for common issues is on the ",(0,s.jsx)(t.a,{href:"/faq#uninstall-update-or-disenable-a-module",children:"FAQ page"}),".",(0,s.jsx)("br",{}),"\nFor further assistance, contact me by email ",(0,s.jsx)(t.a,{href:"mailto:vct.vendor@gmail.com?subject=Issue&body=To%20help%20you%20faster%2C%20please%20provide%20me%20with%20the%20following%20information%3A%0A%0AMagento%20version%20and%20edition%3A%20(e.g.%20Adobe%20Commerce%202.4.6-p6)%0APHP%20version%3A%20(e.g.%20PHP%208.2.8)%0AComposer%20version%3A%20(e.g.%202.2.21)",children:"vct.vendor@gmail.com"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/authentication-keys.html?lang=en",children:"Get your authentication keys"})," and ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en",children:"install an extension"})," in the Adobe Commerce Documentation."]}),"\n",(0,s.jsx)(t.h2,{id:"update",children:"Update"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"Composer"})," to update the module or get the code for review:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"composer require --update-with-dependencies vct/changeskudynamically # Update the module using Composer\nbin/magento setup:upgrade --safe-mode=1 # Update the database schema and data\nbin/magento setup:static-content:deploy --force # Deploy static view files\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Execute only in ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html?lang=en",children:"production mode"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bin/magento setup:di:compile # Recompile the code in production mode\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en",children:"Upgrade an extension"})," in the Adobe Commerce Documentation."]}),"\n",(0,s.jsx)(t.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,s.jsx)(t.p,{children:"Execute the following commands to uninstall a module:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bin/magento module:uninstall Vct_ChangeSkuDynamically # Uninstall module\nbin/magento setup:upgrade --safe-mode=1 # Update the database schema and data\nbin/magento setup:static-content:deploy --force # Deploy static view files\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/uninstall-modules.html?lang=en",children:"Uninstall modules"})," in the Adobe Commerce Documentation."]}),"\n",(0,s.jsx)(t.h2,{id:"configure",children:"Configure"}),"\n",(0,s.jsx)(t.admonition,{title:"Important",type:"danger",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)("kbd",{class:"danger",children:"Flush Magento Cache"})," in ",(0,s.jsx)("kbd",{children:"System"})," ",(0,s.jsx)("kbd",{children:"Cache Management"})," after configuration change to see the changes!"]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types",children:"Clean and flush cache types"})," in the Adobe Commerce Documentation."]}),"\n",(0,s.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)("kbd",{children:"Use System Value"})," / ",(0,s.jsx)("kbd",{children:"Use Default"})," / ",(0,s.jsx)("kbd",{children:"Use Website"})," checkbox to the right of the setting to set the default value."]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-admin/config/scope-change.html?lang=en#use-system-value",children:"Use system value"})," in the Adobe Commerce Documentation."]}),"\n",(0,s.jsx)(t.h3,{id:"switch-sku",children:(0,s.jsx)("kbd",{class:"required",children:"Switch SKU"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Config"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{class:"required",children:"Switch SKU"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Admin path"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("kbd",{children:"VCT"})," ",(0,s.jsx)("kbd",{children:"Change SKU Dynamically"})," ",(0,s.jsx)("kbd",{children:"General"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("kbd",{children:"Yes"})," ",(0,s.jsx)("kbd",{children:"No"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:"No"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("kbd",{children:"Yes"})," to enable or ",(0,s.jsx)("kbd",{children:"No"})," to disable SKU switching when selecting options of a configurable product."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)("iframe",{width:"688",height:"502",src:"https://www.youtube.com/embed/6YqKE2E2F2E?rel=0&playsinline=1",frameBorder:"0",allowFullScreen:!0}),"\n",(0,s.jsx)(t.h3,{id:"sku-selector",children:(0,s.jsx)("kbd",{children:"SKU Selector"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Config"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:"SKU Selector"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Admin path"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("kbd",{children:"VCT"})," ",(0,s.jsx)("kbd",{children:"Change SKU Dynamically"})," ",(0,s.jsx)("kbd",{children:"General"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Depends on"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:(0,s.jsx)(t.a,{href:"#switch-sku",children:"Switch SKU"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:(0,s.jsx)(t.a,{href:"https://api.jquery.com/category/selectors",children:"jQuery Selector"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:".product.attribute.sku .value"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["SKU element selector.",(0,s.jsx)("br",{}),"The module allows you to change ",(0,s.jsx)(t.a,{href:"https://api.jquery.com/category/selectors",children:"jQuery Selector"})," of SKU element for compatibility with different themes. It is necessary to specify the correct selector for your frontend theme to display selected product SKU instead of the configurable product SKU on the configurable product page, when an option is selected."]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For example, element selector for the product SKU in Luma theme is ",(0,s.jsx)("kbd",{children:".product.attribute.sku .value"}),":"]}),"\n",(0,s.jsx)("iframe",{width:"1130",height:"547",src:"https://www.youtube.com/embed/zdeIoD_UdFY?rel=0&playsinline=1",frameBorder:"0",allowFullScreen:!0}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Frontend selector devtools",src:n(5049).Z+"",width:"1539",height:"323"})}),"\n",(0,s.jsx)(t.admonition,{title:"Warning",type:"warning",children:(0,s.jsxs)(t.p,{children:["By default, SKU selector is specified for the default ",(0,s.jsx)(t.a,{href:"https://developer.adobe.com/commerce/frontend-core/guide/css/quickstart/#why-do-you-need-to-create-a-custom-theme",children:"Luma theme"}),".",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/faq#module-compatibility-with-third-party-themes",children:"Module compatibility with third-party themes"})," on the FAQ page."]})}),"\n",(0,s.jsx)(t.h4,{id:"selector-validation-in-admin",children:"Selector validation in Admin"}),"\n",(0,s.jsxs)(t.p,{children:["The module has jQuery selector validation in ",(0,s.jsx)(t.a,{href:"https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin",children:"Admin"})," for selector input fields when ",(0,s.jsx)("kbd",{children:"Save Config"}),".",(0,s.jsx)("br",{}),"\nFor example, element selector for the product SKU:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Selector validation in Admin",src:n(2176).Z+"",width:"1464",height:"277"})}),"\n",(0,s.jsxs)(t.p,{children:["where ",(0,s.jsx)("kbd",{children:"..value"})," is an invalid jQuery selector. Use ",(0,s.jsx)("kbd",{children:".value"})," instead of  ",(0,s.jsx)("kbd",{children:"..value"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,s.jsxs)(t.p,{children:["Ensure that the correct ",(0,s.jsx)(t.a,{href:"https://api.jquery.com/category/selectors",children:"jQuery Selector"})," is specified, if after configuring the module and ",(0,s.jsx)(t.a,{href:"#configuration",children:"clearing the cache"}),", element switching still does not work."]})}),"\n",(0,s.jsx)("iframe",{width:"951",height:"502",src:"https://www.youtube.com/embed/DSVYYDHXtus?rel=0&playsinline=1",frameBorder:"0",allowFullScreen:!0})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1508:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Vct_ChangeSkuDynamically-7db24334b9683ef57a30eb175ac41937.svg"},2176:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/adminhtml-selector-validation-b8a761c76cc80d8303716a4b4088396d.png"},5049:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/frontend-selector-devtools-2f51316b2525aa66be267f78bda7d10f.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(7294);const i={},c=s.createContext(i);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);