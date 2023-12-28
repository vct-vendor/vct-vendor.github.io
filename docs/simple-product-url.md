---
slug: /
---

# Simple Product URL

###### <kbd>Module for Magento 2</kbd>

[Leave review](https://commercemarketplace.adobe.com/vct-simpleproducturl.html#bazaarvoice.reviews.tab) to help in further development

[![VCT Simple Product URL Logo](/img/docs/Vct_SimpleProductUrl.svg)](https://commercemarketplace.adobe.com/vct-simpleproducturl.html)

- [Marketplace](https://commercemarketplace.adobe.com/vct-simpleproducturl.html)
- [Release Notes](https://commercemarketplace.adobe.com/vct-simpleproducturl.html#product.info.details.release_notes)
- [Quality Report](https://commercemarketplace.adobe.com/vct-simpleproducturl.html#product.info.details.quality_report)
- [Reviews](https://commercemarketplace.adobe.com/vct-simpleproducturl.html#bazaarvoice.reviews.tab)

## Overview

A [configurable product](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product) appears to be a single product with lists of options for each variant. However, each option represents a separate product.

Redirect a product to a parent configurable product page:

- [x] Increase conversion. Customers are more likely to purchase a product if they can see all the available options and compare them side-by-side.
- [x] Simplify decision-making. A configurable product page displays all available options, making it faster and easier to find the right product, minimizing purchase deliberation and decision fatigue.
- [x] Improve SEO. A configurable product page with many possible options will have a higher page ranking than many simple products.
- [x] Reduce customer confusion. Eliminating duplicate product pages for simple variants, ensuring a smoother and more focused customer shopping experience.

Pre-select a configurable product options when redirecting from child products:

- [x] Simplify decision-making. Streamlines the decision-making process for customers, minimizing decision fatigue.

Show selected variant URL of a configurable product in a browser address bar both when redirecting and when selecting other configurable product options:

- [x] Increase sales. Bookmark or share for later purchase selected variant URL of a configurable product.

Show original (canonical) selected variant URL to:

- [x] Reduce customer confusion. Preventing customers from seeing products with the similar or unreadable URLs.

### Features

- [x] Support <kbd>Dropdown</kbd>, [<kbd>Visual Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en), [<kbd>Text Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en) attribute input types.
- [x] Support for redirection of [<kbd>Simple</kbd>](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#simple-product) or [<kbd>Virtual</kbd>](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#virtual-product) product types.
- [x] No reloads and no AJAX requests when selecting a product.
- [x] [Plugins](https://developer.adobe.com/commerce/php/development/components/plugins) are used to prevent conflicts among [modules](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#module).
- [x] Tested and verified by [Adobe Extension Quality Program](https://developer.adobe.com/commerce/marketplace/guides/sellers/extension-quality-program).
- [x] Meets [Magento Coding Standard](https://developer.adobe.com/commerce/php/coding-standards).

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
composer require vct/simpleproducturl # Install the module using Composer
bin/magento setup:upgrade --safe-mode=1 # Update the database schema and data
bin/magento setup:static-content:deploy --force # Deploy static view files
```

- Execute only in [production mode](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html?lang=en):

```bash
bin/magento setup:di:compile # Recompile the code in production mode
```

- The module was installed in `vendor/vct` directory.

:::tip[Tip]

Help for common issues is on the [FAQ page](/faq#uninstallation-and-update).<br/>
For further assistance, contact me by email [vct.vendor@gmail.com](mailto:vct.vendor@gmail.com?subject=Installation%20issue&body=To%20help%20you%20faster%2C%20please%20provide%20me%20with%20the%20following%20information%3A%0A%0AMagento%20version%20and%20edition%3A%20(e.g.%20Adobe%20Commerce%202.4.6-p6)%0APHP%20version%3A%20(e.g.%20PHP%208.2.8)%0AComposer%20version%3A%20(e.g.%202.2.21)).

:::

[Get your authentication keys](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/authentication-keys.html?lang=en) and [install an extension](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en) in the Adobe Commerce Documentation.

## Update

Use [Composer](https://getcomposer.org/doc/00-intro.md) to update the module or get the code for review:

```bash
composer require --update-with-dependencies vct/simpleproducturl # Update the module using Composer
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
bin/magento module:uninstall Vct_SimpleProductUrl # Uninstall module
bin/magento setup:upgrade # Update the database schema and data
bin/magento setup:static-content:deploy --force # Deploy static view files
```

[Uninstall modules](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/uninstall-modules.html?lang=en) in the Adobe Commerce Documentation.

## Configure

:::danger[Important]
<kbd id="flush-magento-cache">Flush Magento Cache</kbd> in <kbd>System</kbd> <kbd>Cache Management</kbd> after configuration change to see the changes!
:::

[Clean and flush cache types](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types) in the Adobe Commerce Documentation.

### <kbd>Redirect To Parent</kbd>

:::danger[Important]
Valid only for [<kbd>Simple</kbd>](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#simple-product) or [<kbd>Virtual</kbd>](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#virtual-product) products with visibility other than <kbd>Not Visible Individually</kbd> that have available configurable parent product.
:::

For example, a product has the URL  `/mona-pullover-hoodie-s-green.html`. This product is one of the variants of the configurable product with URL `/mona-pullover-hoodie.html`.

|             |                                                                                                                                                                                                                                                                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Redirect To Parent</kbd>                                                                                                                                                                                                                                                                                                                        |
| Path        | <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>VCT</kbd> <kbd>Simple Product URL</kbd> <kbd>Config</kbd>                                                                                                                                                                                                                                            |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                                                                                                                                                                                                                                                         |
| Default     | <kbd>No</kbd>                                                                                                                                                                                                                                                                                                                                        |
| Description | Redirect or not `/mona-pullover-hoodie-s-green.html` to a configurable product page e.g. `/mona-pullover-hoodie.html` with pre-selected options `#143=167&93=53`.<br/><kbd>Yes</kbd> to redirect `/mona-pullover-hoodie-s-green.html` to `/mona-pullover-hoodie.html#143=167&93=53`.<br/><kbd>No</kbd> to not redirect `/mona-pullover-hoodie.html`. |

For example:

![Redirect To Parent](/img/docs/simple-product-url/frontend-selected-product-url-with-options.png)

### <kbd>Add Options To URL</kbd>

For example, a product has the URL  `/mona-pullover-hoodie-s-green.html`. This product is one of the variants of the configurable product with URL `/mona-pullover-hoodie.html`.

|             |                                                                                                                                                                                                                                                                                                       |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Add Options To URL</kbd>                                                                                                                                                                                                                                                                         |
| Path        | <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>VCT</kbd> <kbd>Simple Product URL</kbd> <kbd>Config</kbd>                                                                                                                                                                                             |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                                                                                                                                                                                                          |
| Default     | <kbd>Yes</kbd>                                                                                                                                                                                                                                                                                        |
| Description | Add or do not add selected variant options e.g. `#143=167&93=53`, to the configurable product URL e.g. `/mona-pullover-hoodie.html`, when selecting a configurable product option.<br/><kbd>Yes</kbd> - `/mona-pullover-hoodie.html#143=167&93=53`.<br/><kbd>No</kbd> - `/mona-pullover-hoodie.html`. |

For example, configurable product URL with selected options:

![Add Options To URL](/img/docs/simple-product-url/frontend-selected-product-url-with-options.png)

### <kbd>Show Selected Variant URL</kbd>

:::danger[Important]
Valid only for [<kbd>Simple</kbd>](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#simple-product) or [<kbd>Virtual</kbd>](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#virtual-product) products with visibility other than <kbd>Not Visible Individually</kbd> that have available configurable parent product.
:::

For example, a product has the URL  `/mona-pullover-hoodie-s-green.html`. This product is one of the variants of the configurable product with URL `/mona-pullover-hoodie.html`.

|             |                                                                                                                                                                                                                                                    |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Show Selected Variant URL</kbd>                                                                                                                                                                                                               |
| Path        | <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>VCT</kbd> <kbd>Simple Product URL</kbd> <kbd>Config</kbd>                                                                                                                                          |
| Depends on  | <kbd>[Add Options To URL](#add-options-to-url)</kbd>                                                                                                                                                                                               |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                                                                                                                                                       |
| Default     | <kbd>Yes</kbd>                                                                                                                                                                                                                                     |
| Description | <kbd>Yes</kbd> to display selected product URL Key e.g. `/mona-pullover-hoodie-s-green.html`.<br/><kbd>No</kbd> to display parent configurable product URL with a options of pre-selected variant e.g. `/mona-pullover-hoodie.html#143=167&93=53`. |

Enabling <kbd>Show Selected Variant URL</kbd> reduces confusion for customers by preventing them from seeing products with the similar or unreadable URL, e.g.:

- `/mona-pullover-hoodie-s-green.html` instead of `/mona-pullover-hoodie.html#143=167&93=53`.
- `/mona-pullover-hoodie-s-red.html` instead of `/mona-pullover-hoodie.html#143=167&93=54`.

For example, selected product URL:

![Show Selected Variant URL](/img/docs/simple-product-url/frontend-selected-simple-product-url.png)

### <kbd>Save Selected Variant URL</kbd>

|             |                                                                                                                                                                                                                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Save Selected Variant URL</kbd>                                                                                                                                                                                                                                                   |
| Path        | <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>VCT</kbd> <kbd>Simple Product URL</kbd> <kbd>Config</kbd>                                                                                                                                                                              |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                                                                                                                                                                                           |
| Default     | <kbd>No</kbd>                                                                                                                                                                                                                                                                          |
| Description | Save or do not save URL in the browser history when switching between configurable product variants.<br/>If set to <kbd>Yes</kbd> and the <kbd>Back</kbd> button is pressed in the browser, the previous selected variant will be selected instead of going back to the previous page. |

## Known issues

::::warning[Issue]
<kbd>ERR_TOO_MANY_REDIRECTS</kbd> error may appear when <kbd>Blocks HTML output</kbd> cache is disabled.

:::tip[Fix]
Enable <kbd>Blocks HTML output</kbd> cache in <kbd>System</kbd> <kbd>Cache Management</kbd>.

[Enable or disable cache types](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types) in the Adobe Commerce Documentation.
:::
::::
