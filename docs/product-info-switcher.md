---
title: Product Info Switcher
---

# Product Info Switcher

![version](https://img.shields.io/badge/version-v2.x.x-blue)
![Magento](https://img.shields.io/badge/compatibility-Magento-da4c02)
![Adobe Commerce](https://img.shields.io/badge/compatibility-Adobe_Commerce-b62324)

<span class="star">☆☆☆☆☆</span> [Leave review](https://commercemarketplace.adobe.com/vct-productinfoswitcher.html#bazaarvoice.reviews.tab) to help in further development

[![VCT Product Info Switcher Logo](/img/docs/Vct_ProductInfoSwitcher.svg)](https://commercemarketplace.adobe.com/vct-productinfoswitcher.html)

- [Marketplace](https://commercemarketplace.adobe.com/vct-productinfoswitcher.html)
- [Release Notes](https://commercemarketplace.adobe.com/vct-productinfoswitcher.html#product.info.details.release_notes)
- [Quality Report](https://commercemarketplace.adobe.com/vct-productinfoswitcher.html#product.info.details.quality_report)
- [Reviews](https://commercemarketplace.adobe.com/vct-productinfoswitcher.html#bazaarvoice.reviews.tab)

## Overview

A [configurable product](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product) appears to be a single product with lists of options for each variant. However, each option represents a separate product.

By default, when selecting a configurable product option, you see almost the same information as for a configurable product. With this module, when selecting a configurable product option, your customer will see exactly the information about the selected product. You can decide which information you want to take from the configurable product and which information from its option.

You have a new store and [related](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product) products have not been added for all variants of configurable products. It doesn't matter, display the related products of the configurable product for such products. Now the customer will always have recommendations, and they will be the most relevant.

Configurable products will become more useful and convenient. Instead of dozens of products in a category or search that differ only size e.g. <kbd>S</kbd>, <kbd>M</kbd> or volume e.g. <kbd>500ml</kbd>, <kbd>1L</kbd> that only complicate the search and choice, make one configurable.

### Tasks performed

- [x] Show the following selected product data instead of the configurable product data, when an option is selected:
    - Page Title, Name, SKU, Availability.
    - Description, Short Description.
    - Additional Attributes.
    - Add To Wishlist, Add To Compare button.
    - Review Summary, Reviews, Submit Review Form.
    - [Related](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product), [Up-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell) products.
- [x] Show the relevant data of a configurable product when a selected variant has no data for:
    - Description, Short Description.
    - Reviews.
    - [Related](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#related-product), [Up-Sell](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#upsell) products.
- [x] Allow writing reviews for products that are <kbd>Not Visible Individually</kbd>.
- [x] Show switchable product data in the browser console for debugging.

### Features

- [x] Compatibility with most themes due to the flexibility of module configuration.
- [x] Support <kbd>Dropdown</kbd>, [<kbd>Visual Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en), [<kbd>Text Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en) attribute input types.
- [x] No reloads or AJAX requests to display selected product data.
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
composer require vct/productinfoswitcher # Install the module using Composer
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
composer require --update-with-dependencies vct/productinfoswitcher # Update the module using Composer
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
bin/magento module:uninstall Vct_ProductInfoSwitcher # Uninstall module
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

### <kbd class="required">Switchable Elements</kbd>

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd class="required">Switchable Elements</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Type        | <kbd>None</kbd><br/><kbd>Page title</kbd><br/><kbd>Name</kbd><br/><kbd>Review Summary</kbd><br/><kbd>Availability</kbd><br/><kbd>SKU</kbd><br/><kbd>Add To Wishlist Button</kbd><br/><kbd>Add To Compare Button</kbd><br/><kbd>Short Description</kbd><br/><kbd>Description</kbd><br/><kbd>Additional Attributes</kbd><br/><kbd>Reviews</kbd><br/><kbd>Review Form</kbd><br/><kbd>[Related](https://experienceleague.adobe.com/docs/commerce-admin/catalog/products/settings/related-products-up-sells-cross-sells.html?lang=en)</kbd><br/><kbd>[Up-Sell](https://experienceleague.adobe.com/docs/commerce-admin/catalog/products/settings/related-products-up-sells-cross-sells.html?lang=en)</kbd> |
| Default     | <kbd>None</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Description | Show the selected child product (variant) data instead of the parent product data, when an option is selected on the configurable product page.<br/>No items are selected by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

:::tip[Tip]
Use <kbd>CTRL+a</kbd> to select all elements or hold <kbd>CTRL</kbd> to unselect an element in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin).
:::

### <kbd>Element Fallbacks</kbd>

:::info[Info]
Element fallbacks are optional and can be selected for each element separately.
:::

|             |                                                                                                                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Element Fallbacks</kbd>                                                                                                                                                                             |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>                                                                                                                                       |
| Type        | <kbd>None</kbd><br/><kbd>Review Summary</kbd><br/><kbd>Short Description</kbd><br/><kbd>Description</kbd><br/><kbd>Related</kbd><br/><kbd>Up-Sell</kbd>                                                  |
| Default     | <kbd>None</kbd>                                                                                                                                                                                          |
| Description | <kbd>Yes</kbd> to display relevant product data of a configurable product when a selected variant has no data.<br/><kbd>No</kbd> to display relevant product data of a selected variant even if no data. |

:::tip[Tip]
Use <kbd>CTRL+a</kbd> to select all elements or hold <kbd>CTRL</kbd> to unselect an element in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin).
:::

### Element selectors

The module allows you to change [jQuery Selector](https://api.jquery.com/category/selectors) of elements for compatibility with different themes. It is necessary to specify the correct element selector for your frontend theme to display selected product data instead of the configurable product data on the configurable product page, when an option is selected.

For example, element selector for the product SKU in Luma theme is <kbd>.product.attribute.sku .value</kbd>:

<iframe width="1130" height="547" src="https://www.youtube.com/embed/zdeIoD_UdFY?rel=0&playsinline=1" frameBorder="0" allowFullScreen></iframe>

![Frontend selector devtools](/img/docs/change-sku-dynamically/frontend-selector-devtools.png)

:::warning[Warning]
By default, SKU selector is specified for the default [Luma theme](https://developer.adobe.com/commerce/frontend-core/guide/css/quickstart/#why-do-you-need-to-create-a-custom-theme).<br/>
:::

:::tip[Tip]
[Module compatibility with third-party themes](/faq#module-compatibility-with-third-party-themes) on the FAQ page.
:::

#### Selector validation in Admin

The module has jQuery selector validation in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin) for selector input fields when <kbd>Save Config</kbd>.<br/>
For example, element selector for the product SKU:

![Selector validation in Admin](/img/docs/product-info-switcher/adminhtml-selector-validation.png)

where <kbd>..value</kbd> is an invalid jQuery selector. Use <kbd>.value</kbd> instead of  <kbd>..value</kbd>.

:::tip[Tip]
Ensure that the correct [jQuery Selector](https://api.jquery.com/category/selectors) is specified, if after configuring the module and [clearing the cache](#configuration), element switching still does not work.
:::

<iframe width="951" height="502" src="https://www.youtube.com/embed/DSVYYDHXtus?rel=0&playsinline=1" frameBorder="0" allowFullScreen></iframe>

#### <kbd>Name Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Name Selector</kbd>                                                |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.page-title .base</kbd>                                            |
| Description | Product _Name_ element selector.                                        |

#### <kbd>Review Summary Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Review Summary Selector</kbd>                                      |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.product-reviews-summary</kbd>                                     |
| Description | Product _Review summary_ element selector.                              |

#### <kbd>SKU Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>SKU Selector</kbd>                                                 |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.product.attribute.sku .value</kbd>                                |
| Description | Product _SKU_ element selector.                                         |

#### <kbd>Availability Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Availability Selector</kbd>                                        |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.product-info-main .stock.available span</kbd>                     |
| Description | Product _Availability_ element selector.                                |

#### <kbd>Short Description Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Short Description Selector</kbd>                                   |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.product.attribute.overview .value</kbd>                           |
| Description | Product _Short description_ element selector.                           |

#### <kbd>Add To Wishlist Selector</kbd>

:::info[Info]
Only products with visibility other than <kbd>Not visible individually</kbd> can be added to a wishlist.
:::

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Add To Wishlist Selector</kbd>                                     |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.towishlist</kbd>                                                  |
| Description | _Add to wishlist_ button element selector.                              |

#### <kbd>Add To Compare Selector</kbd>

:::info[Info]
Only products with visibility other than <kbd>Not visible individually</kbd> can be added to a comparison.
:::

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Add To Compare Selector</kbd>                                      |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.tocompare</kbd>                                                   |
| Description | _Add to compare_ button element selector.                               |

#### <kbd>Description Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Description Selector</kbd>                                         |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>#description .description .value</kbd>                             |
| Description | Product _Description_ element selector (_Details_ tab or block).        |

#### <kbd>Additional Attributes Selector</kbd>

|             |                                                                                     |
|-------------|-------------------------------------------------------------------------------------|
| Config      | <kbd>Additional Attributes Selector</kbd>                                           |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>                  |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd>             |
| Default     | <kbd>#additional</kbd>                                                              |
| Description | Product _Additional attributes_ element selector (_More Information_ tab or block). |

#### <kbd>Reviews Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Reviews Selector</kbd>                                             |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.review-list</kbd>                                                 |
| Description | Product _Reviews_ element selector (_Reviews_ tab or block).            |

#### <kbd>Review Form Selector</kbd>

:::info[Info]
Reviews are allowed for all child products, even if they are <kbd>Not Visible Individually</kbd>.
:::

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Review Form Selector</kbd>                                         |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.review-add</kbd>                                                  |
| Description | Product _Submit review_ form element selector (_Reviews_ tab or block). |

:::warning[Warning]
[Update status for reviews](https://experienceleague.adobe.com/docs/commerce-admin/marketing/merchandising/product-reviews/product-reviews-moderate.html?lang=en#update-status-for-reviews) to see reviews in the frontend.<br/>
:::

#### <kbd>Related Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Related Selector</kbd>                                             |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.related</kbd>                                                     |
| Description | _Related_ products element selector.                                    |

#### <kbd>Up-Sell Selector</kbd>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Config      | <kbd>Up-Sell Selector</kbd>                                             |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>General</kbd>      |
| Type        | <kbd>[jQuery Selector](https://api.jquery.com/category/selectors)</kbd> |
| Default     | <kbd>.upsell</kbd>                                                      |
| Description | _Up-Sell_ products element selector.                                    |

### <kbd>Debug</kbd>

#### <kbd>Enable</kbd>

|             |                                                                                                                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Enable</kbd>                                                                                                                                                                           |
| Admin path  | <kbd>VCT</kbd> <kbd>Product Info Switcher</kbd> <kbd>Debug</kbd>                                                                                                                            |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                                                                                                |
| Default     | <kbd>No</kbd>                                                                                                                                                                               |
| Description | <kbd>Yes</kbd> to show or <kbd>No</kbd> to hide the module configuration and data of product variants in the browser console, and highlight elements with selectors from the configuration. |

For example:

![Log](/img/docs/product-info-switcher/frontend-devtools.png)

:::warning[Warning]
<kbd>Debug</kbd> <kbd>Enable</kbd> config should be set to <kbd>No</kbd> in production and used only for debugging!
:::

### Configure product layout

Choose the design that you want to use for product pages.

:::info[Info]
Depending on the product layout, tab or block will be empty or not be displayed if the product has no data for: _Description_, _Additional Attributes_, _Reviews_, _Related_, _Up-Sell_ products.
:::

#### <kbd>Default Product Layout</kbd>

<kbd>Default Product Layout</kbd> config in <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>GENERAL</kbd> <kbd>Web</kbd> <kbd>Default Layouts</kbd> determines the layout used by default for product pages.

[Configure default product layout](https://experienceleague.adobe.com/docs/commerce-admin/content-design/design/layout/page-layout.html?lang=en#configure-default-layouts) in the Adobe Commerce Documentation.

#### <kbd>Product</kbd> <kbd>Design</kbd>

<kbd>Design</kbd> section in <kbd>Catalog</kbd> <kbd>Products</kbd> <kbd>&lt;Product&gt;</kbd> allows you to apply a different layout to the product page.

[Product settings - Design](https://experienceleague.adobe.com/docs/commerce-admin/catalog/products/settings/settings-advanced-design.html?lang=en) in the Adobe Commerce Documentation.

## Examples

###### <kbd>Page Title</kbd>

![Page Title](/img/docs/product-info-switcher/frontend-page-title.png)

###### <kbd>Name</kbd>, <kbd>SKU</kbd>, <kbd>Availability</kbd> etc.

![Name, SKU, Availability etc](/img/docs/product-info-switcher/frontend-product-main.png)

###### <kbd>Description</kbd>

![Description](/img/docs/product-info-switcher/frontend-description.png)

###### <kbd>Additional Attributes</kbd>

![Additional Attributes](/img/docs/product-info-switcher/frontend-additional-attributes.png)

###### <kbd>Reviews</kbd>, <kbd>Review Form</kbd>

![Reviews, Review Form](/img/docs/product-info-switcher/frontend-reviews.png)

###### <kbd>Related</kbd>

![Related](/img/docs/product-info-switcher/frontend-related.png)

###### <kbd>Up-Sell</kbd>

![Up-Sell](/img/docs/product-info-switcher/frontend-upsell.png)
