---
title: Also Bought
---

# Also Bought

![version](https://img.shields.io/badge/version-v2.x.x-blue)
![Magento](https://img.shields.io/badge/compatibility-Magento-da4c02)
![Adobe Commerce](https://img.shields.io/badge/compatibility-Adobe_Commerce-b62324)

<span class="star">☆☆☆☆☆</span> [Leave review](https://commercemarketplace.adobe.com/vct-alsobought.html#bazaarvoice.reviews.tab) to help in further development

[![VCT Also Bought Logo](/img/docs/Vct_AlsoBought.svg)](https://commercemarketplace.adobe.com/vct-alsobought.html)

- [Marketplace](https://commercemarketplace.adobe.com/vct-alsobought.html)
- [Release Notes](https://commercemarketplace.adobe.com/vct-alsobought.html#product.info.details.release_notes)
- [Quality Report](https://commercemarketplace.adobe.com/vct-alsobought.html#product.info.details.quality_report)

[//]: # (- [Reviews]&#40;https://commercemarketplace.adobe.com/vct-alsobought.html#bazaarvoice.reviews.tab&#41;)

## Overview

This [module](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module) allows adding a block of products known as _"Frequently Bought Together"_ or _"Who Bought This Also Bought"_. These _Also Bought_ products can be further displayed using a custom [widget](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget) in a location of your choice or/and in [Related](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product), [Up-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell), [Cross-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell) products.

This module will automatically create a list of products that were present in other customer orders, along with the currently viewed product. These products list is updated automatically according to the [Cron schedule](https://docs.magento.com/user-guide/system/cron.html) you configure or manually in the [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin) or using CLI command.

### Tasks performed

- [x] Collect products that were present in other customer orders along with the product being viewed in a separate table using:
    - Automatically according to the Cron schedule.
    - <kbd>Update Products</kbd> button in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin-area).
    - CLI command.
- [x] Show _Also Bought_ products in a custom [widget(s)](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget) for:
    - Specific products manually selected.
    - [All product types](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#product-types), [Bundle](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#bundle-product), [Configurable](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product), [Downloadable](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#downloadable-product), [Grouped](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#grouped-product), [Simple](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#simple-product), [Virtual](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#virtual-product) products.
- [x] Show or hide _Also Bought_ products in [Related](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product), [Up-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell), [Cross-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell) products.
- [x] Show random _Also Bought_ products instead of last purchased products in a custom [widget(s)](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget), [Related](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product), [Up-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell), [Cross-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#cross-sell) products.
- [x] Configure _Also Bought_ widget(s):
    - [x] Set title for widget(s).
    - [x] Show or hide the following product card elements in _Also Bought_ widget of your choice separately for each widget:
        - Product image, Prices.
        - Reviews summary i.e. products rating and number of reviews.
        - <kbd>Add To Cart</kbd>, <kbd>Add To Wish List</kbd>, <kbd>Add To Compare</kbd> buttons.
        - Configurable products options in case of [<kbd>Visual Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en) or [<kbd>Text Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en).
    - [x] Set _Also Bought_ widget location of your choice from the following containers:
        - <kbd>After Page Header</kbd>, <kbd>After Page Header Top</kbd>, <kbd>Alert Urls</kbd>.
        - <kbd>Before Main Columns</kbd>, <kbd>Main Content Top</kbd>, <kbd>Main Content Container</kbd>, <kbd>Main Content Area</kbd>, <kbd>Main Content Aside</kbd>, <kbd>Main Content Bottom</kbd>.
        - <kbd>Mini-Cart Promotion Block</kbd>.
        - <kbd>Page Header</kbd>, <kbd>Page Header Container</kbd>, <kbd>Page Header Panel</kbd>, <kbd>Page Top</kbd>, <kbd>Page Bottom</kbd>.
        - <kbd>Product Auxiliary Info</kbd>, <kbd>Product Info Auxiliary Container</kbd>, <kbd>Product Social Links Container</kbd>, <kbd>Product View Extra Hint</kbd>, <kbd>Review Form Fields Before</kbd>.
        - <kbd>Sidebar Main</kbd>, <kbd>Sidebar Additional</kbd>, <kbd>Compare Link Wrapper</kbd>.
        - <kbd>Before Page Footer</kbd>, <kbd>Page Footer</kbd>, <kbd>Before Page Footer Container</kbd>, <kbd>Page Footer Container</kbd>, <kbd>CMS Footer Links</kbd>.

### Features

- [x] Wide customization of the _Also Bought_ product block by implementing it with a [widget](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#widget).
- [x] [Plugins](https://developer.adobe.com/commerce/php/development/components/plugins) are used to prevent conflicts among [modules](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module).
- [x] Meets [Magento Coding Standard](https://developer.adobe.com/commerce/php/coding-standards).
- [x] Tested and verified by [Adobe Extension Quality Program](https://developer.adobe.com/commerce/marketplace/guides/sellers/extension-quality-program).

## Install

Use [Composer](https://getcomposer.org/doc/00-intro.md) to install the module or get the code for review:

- [Log in](https://account.magento.com/customer/account/login) to your Marketplace account that purchased the module.
- Add or update your [<kbd>Access Keys</kbd>](https://commercemarketplace.adobe.com/customer/accessKeys)  i.e. `<Public Key>` and `<Private Key>` for [Adobe Commerce Marketplace](https://commercemarketplace.adobe.com) [repository](https://getcomposer.org/doc/05-repositories.md#repository) in `auth.json` using the following command:

```bash
composer config --auth http-basic.repo.magento.com <Public Key> <Private Key> # Add or update Access Keys in auth.json
# e.g. composer config --auth http-basic.repo.magento.com 39b747b8ab1d624582bb3n1a09deb489 31b9fce4cb78f523fd34aa3abb90c89c
```

- Execute the following commands:

```bash
composer require vct/alsobought # Install the module using Composer
bin/magento setup:upgrade --safe-mode=1 # Update the database schema and data
bin/magento setup:static-content:deploy --force # Deploy static view files
```

- The module was installed in `vendor/vct` directory.

:::info[Info]

Optional execute in [production mode](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html?lang=en):

```bash
bin/magento setup:di:compile # Recompile the code in production mode
```

:::

:::tip[Tip]

Help for common issues is on the [FAQ page](/faq#uninstall-update-or-disenable-a-module).<br/>
For further assistance, contact me by email [vct.vendor@gmail.com](mailto:vct.vendor@gmail.com?subject=Issue&body=To%20help%20you%20faster%2C%20please%20provide%20me%20with%20the%20following%20information%3A%0A%0AMagento%20version%20and%20edition%3A%20(e.g.%20Adobe%20Commerce%202.4.6-p6)%0APHP%20version%3A%20(e.g.%20PHP%208.2.8)%0AComposer%20version%3A%20(e.g.%202.2.21)).

:::

[Get your authentication keys](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/authentication-keys.html?lang=en) and [install an extension](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en) in the Adobe Commerce Documentation.

## Update

Use [Composer](https://getcomposer.org/doc/00-intro.md) to update the module or get the code for review:

```bash
composer require --update-with-dependencies vct/alsobought # Update the module using Composer
bin/magento setup:upgrade --safe-mode=1 # Update the database schema and data
bin/magento setup:static-content:deploy --force # Deploy static view files
```

Execute only in [production mode](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html?lang=en):

```bash
bin/magento setup:di:compile # Recompile the code in production mode
```

[Upgrade an extension](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en) in the Adobe Commerce Documentation.

## Uninstall

Execute the following commands to uninstall a module:

```bash
bin/magento module:uninstall Vct_AlsoBought # Uninstall module
bin/magento setup:upgrade --safe-mode=1 # Update the database schema and data
bin/magento setup:static-content:deploy --force # Deploy static view files
```

[Uninstall modules](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/uninstall-modules.html?lang=en) in the Adobe Commerce Documentation.

## Configure

:::danger[Important]
<kbd class="danger">Flush Magento Cache</kbd> in <kbd>System</kbd> <kbd>Cache Management</kbd> after configuration change to see the changes!
:::

[Clean and flush cache types](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types) in the Adobe Commerce Documentation.

:::tip[Tip]
Use <kbd>Use System Value</kbd> / <kbd>Use Default</kbd> / <kbd>Use Website</kbd> checkbox to the right of the setting to set the default value.
:::

[Use system value](https://experienceleague.adobe.com/docs/commerce-admin/config/scope-change.html?lang=en#use-system-value) in the Adobe Commerce Documentation.

### <kbd>Add Widget</kbd>

Use a custom <kbd>VCT Also Bought</kbd> widget in <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>Add Widget</kbd> <kbd>Settings</kbd> <kbd>Type</kbd> to display _Also Bought_ products.

:::info[Info]
Each widget can be configured separately.
:::

[Creating and managing widgets](https://docs.magento.com/user-guide/cms/widget-create.html) in the Adobe Commerce Documentation.

### <kbd>Widget Options</kbd>

#### <kbd>Widget Block Title</kbd>

|             |                                                                                                           |
|-------------|-----------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Widget Block Title</kbd>                                                                             |
| Admin path  | <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>&lt;VCT Also Bought Widget&gt;</kbd> <kbd>Widget Options</kbd> |
| Type        | <kbd>String</kbd>                                                                                         |
| Default     | <kbd>None</kbd>                                                                                           |
| Description | Widget block title in the frontend. Empty by default.                                                     |

#### <kbd>Random Products</kbd>

|             |                                                                                                            |
|-------------|------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Random Products</kbd>                                                                                 |
| Admin path  | <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>&lt;VCT Also Bought Widget&gt;</kbd> <kbd>Widget Options</kbd>  |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                               |
| Default     | <kbd>No</kbd>                                                                                              |
| Description | <kbd>Yes</kbd> to display random and <kbd>No</kbd> to display newest _Also Bought_ products in the widget. |

#### <kbd>Product Number</kbd>

|             |                                                                                                           |
|-------------|-----------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Product Number</kbd>                                                                                 |
| Admin path  | <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>&lt;VCT Also Bought Widget&gt;</kbd> <kbd>Widget Options</kbd> |
| Type        | <kbd>Int</kbd>                                                                                            |
| Default     | <kbd>5</kbd>                                                                                              |
| Description | Number of displayed _Also Bought_ products in the widget.                                                 |

#### <kbd>Number Of Columns</kbd>

|             |                                                                                                           |
|-------------|-----------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Number Of Columns</kbd>                                                                              |
| Admin path  | <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>&lt;VCT Also Bought Widget&gt;</kbd> <kbd>Widget Options</kbd> |
| Type        | <kbd>Int</kbd>                                                                                            |
| Default     | <kbd>5</kbd>                                                                                              |
| Description | Number of columns displayed in the _Also Bought_ widget.                                                  |

:::tip[Tip]
To display products in a single row in the widget, set the <kbd>Number Of Columns</kbd> value equal to or greater than <kbd>Product Number</kbd>.
:::

#### <kbd>Displayed Product Elements</kbd>

|             |                                                                                                                                                                                                                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Displayed Product Elements</kbd>                                                                                                                                                                                                                                                                    |
| Admin path  | <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>&lt;VCT Also Bought Widget&gt;</kbd> <kbd>Widget Options</kbd>                                                                                                                                                                                                |
| Type        | <kbd>Product Image</kbd><br/><kbd>Reviews Summary</kbd><br/><kbd>Price</kbd><br/><kbd>[Swatches](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en)</kbd><br/><kbd>Add To Cart</kbd><br/><kbd>Add To Wish List</kbd><br/><kbd>Add To Compare</kbd> |
| Default     | <kbd>Product Image</kbd><br/><kbd>Reviews Summary</kbd><br/><kbd>Price</kbd><br/><kbd>[Swatches](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en)</kbd><br/><kbd>Add To Cart</kbd><br/><kbd>Add To Wish List</kbd><br/><kbd>Add To Compare</kbd> |
| Description | Show or hide selected product elements in the _Also Bought_ widget.                                                                                                                                                                                                                                      |

:::tip[Tip]
Use <kbd>CTRL+a</kbd> to select all elements or hold <kbd>CTRL</kbd> to unselect an element in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin).
:::

### <kbd>Update</kbd>

#### <kbd>Update Products</kbd>

:::danger[Important]
Changes to _Also Bought_ products will only be visible in the frontend after updating using:

- Cron (Scheduled Tasks) according to schedule in <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>ADVANCED</kbd> <kbd>System</kbd> <kbd>Cron (Scheduled Tasks)</kbd> <kbd>Cron configuration options for group: vct_alsobought</kbd>.
- <kbd>Update Products</kbd> button in <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Update</kbd>.
- `bin/magento vct:alsobought:update` command.

:::

##### <kbd>vct_alsobought</kbd> Cron group

Configure a schedule for _Also Bought_ products updates in <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>ADVANCED</kbd> <kbd>System</kbd> <kbd>Cron (Scheduled Tasks)</kbd> <kbd>Cron configuration options for group: vct_alsobought</kbd>.

:::info[Info]
By default, _Also Bought_ products are updated **every hour** with Cron.
:::

[Cron (scheduled tasks)](https://experienceleague.adobe.com/docs/commerce-admin/systems/tools/cron.html?lang=en#configure-cron) in the Adobe Commerce Documentation.

### <kbd>General</kbd>

#### <kbd>Show By</kbd>

|             |                                                                                         |
|-------------|-----------------------------------------------------------------------------------------|
| Config      | <kbd>Show By</kbd>                                                                      |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>General</kbd>                                |
| Type        | <kbd>None</kbd><br/><kbd>Related</kbd><br/><kbd>Up-Sell</kbd><br/><kbd>Cross-Sell</kbd> |
| Default     | <kbd>None</kbd>                                                                         |
| Description | Select where to add _Also Bought_ products.                                             |

:::tip[Tip]
Use <kbd>CTRL+a</kbd> to select all elements or hold <kbd>CTRL</kbd> to unselect an element in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin).
:::

### <kbd>Related</kbd>

#### <kbd>Show Random Products</kbd>

|             |                                                                                                                  |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Show Random Products</kbd>                                                                                  |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Related</kbd>                                                         |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                     |
| Default     | <kbd>No</kbd>                                                                                                    |
| Description | <kbd>Yes</kbd> to display random and <kbd>No</kbd> to display newest _Also Bought_ products in Related products. |

#### <kbd>Product Position</kbd>

|             |                                                                                     |
|-------------|-------------------------------------------------------------------------------------|
| Config      | <kbd>Product Position</kbd>                                                         |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Related</kbd>                            |
| Type        | <kbd>Before</kbd> <kbd>After</kbd>                                                  |
| Default     | <kbd>After</kbd>                                                                    |
| Description | Show _Also Bought_ products <kbd>Before</kbd> or <kbd>After</kbd> Related products. |

#### <kbd>Product Number</kbd>

|             |                                                          |
|-------------|----------------------------------------------------------|
| Config      | <kbd>Product Number</kbd>                                |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Related</kbd> |
| Type        | <kbd>Int</kbd>                                           |
| Default     | <kbd>2</kbd>                                             |
| Description | Number of _Also Bought_ products in Related products.    |

### <kbd>Up-Sell</kbd>

#### <kbd>Show Random Products</kbd>

|             |                                                                                                                  |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Show Random Products</kbd>                                                                                  |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Up-Sell</kbd>                                                         |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                     |
| Default     | <kbd>No</kbd>                                                                                                    |
| Description | <kbd>Yes</kbd> to display random and <kbd>No</kbd> to display newest _Also Bought_ products in Up-Sell products. |

#### <kbd>Product Position</kbd>

|             |                                                                                     |
|-------------|-------------------------------------------------------------------------------------|
| Config      | <kbd>Product Position</kbd>                                                         |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Up-Sell</kbd>                            |
| Type        | <kbd>Before</kbd> <kbd>After</kbd>                                                  |
| Default     | <kbd>After</kbd>                                                                    |
| Description | Show _Also Bought_ products <kbd>Before</kbd> or <kbd>After</kbd> Up-Sell products. |

#### <kbd>Product Number</kbd>

|             |                                                          |
|-------------|----------------------------------------------------------|
| Config      | <kbd>Product Number</kbd>                                |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Up-Sell</kbd> |
| Type        | <kbd>Int</kbd>                                           |
| Default     | <kbd>2</kbd>                                             |
| Description | Number of _Also Bought_ products in Up-Sell products.    |

### <kbd>Cross-Sell</kbd>

#### <kbd>Show Random Products</kbd>

|             |                                                                                                                     |
|-------------|---------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Show Random Products</kbd>                                                                                     |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Cross-Sell</kbd>                                                         |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                        |
| Default     | <kbd>No</kbd>                                                                                                       |
| Description | <kbd>Yes</kbd> to display random and <kbd>No</kbd> to display newest _Also Bought_ products in Cross-Sell products. |

#### <kbd>Product Position</kbd>

|             |                                                                                        |
|-------------|----------------------------------------------------------------------------------------|
| Config      | <kbd>Product Position</kbd>                                                            |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Cross-Sell</kbd>                            |
| Type        | <kbd>Before</kbd> <kbd>After</kbd>                                                     |
| Default     | <kbd>After</kbd>                                                                       |
| Description | Show _Also Bought_ products <kbd>Before</kbd> or <kbd>After</kbd> Cross-Sell products. |

#### <kbd>Product Number</kbd>

|             |                                                             |
|-------------|-------------------------------------------------------------|
| Config      | <kbd>Product Number</kbd>                                   |
| Admin path  | <kbd>VCT</kbd> <kbd>Also Bought</kbd> <kbd>Cross-Sell</kbd> |
| Type        | <kbd>Int</kbd>                                              |
| Default     | <kbd>2</kbd>                                                |
| Description | Number of _Also Bought_ products in Cross-Sell products.    |

## Known issues

::::warning[Issue]
<kbd>Add To Cart</kbd> button in products card can cause a JavaScript error in containers containing a <code>form</code> tag e.g. <kbd>Review Form Fields Before</kbd> container.<br/>
This is happening because the button itself already contains a <code>form</code> tag.

:::tip[Fix]
Set <kbd>Content</kbd> <kbd>Widgets</kbd> <kbd>&lt;VCT Also Bought Widget&gt;</kbd> <kbd>Widget Options</kbd> <kbd>Show Add To Cart</kbd> to <kbd>No</kbd> to disable <kbd>Add To Cart</kbd> button in containers with a <code>form</code> tag.
:::
::::

## Examples

###### <kbd>Sidebar Main</kbd> container

![Sidebar Main container](/img/docs/also-bought/frontend-sidebar-main-hover.png)

###### <kbd>Mini-cart Promotion</kbd> container

![Mini-cart Promotion container](/img/docs/also-bought/frontend-mini-cart.png)

###### <kbd>Before Page Footer</kbd> container

![Before Page Footer container](/img/docs/also-bought/frontend-before-page-footer.png)

###### Related products block

![Related products block](/img/docs/also-bought/frontend-related.png)

###### Up-Sell products block

![Up-Sell products block](/img/docs/also-bought/frontend-up-sell.png)

###### Cross-Sell products block

![Cross-Sell products block](/img/docs/also-bought/frontend-cross-sell.png)
