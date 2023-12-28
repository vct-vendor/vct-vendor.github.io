# Change SKU Dynamically

###### <kbd>Module for Magento 2</kbd>

[Leave review](https://commercemarketplace.adobe.com/vct-changeskudynamically.html#bazaarvoice.reviews.tab) to help in further development

[![VCT Change SKU Dynamically Logo](/img/docs/Vct_ChangeSkuDynamically.svg)](https://commercemarketplace.adobe.com/vct-changeskudynamically.html)

- [Marketplace](https://commercemarketplace.adobe.com/vct-changeskudynamically.html)
- [Release Notes](https://commercemarketplace.adobe.com/vct-changeskudynamically.html#product.info.details.release_notes)
- [Quality Report](https://commercemarketplace.adobe.com/vct-changeskudynamically.html#product.info.details.quality_report)
- [Reviews](https://commercemarketplace.adobe.com/vct-changeskudynamically.html#bazaarvoice.reviews.tab)

#### Product Info Switcher

:::tip[Tip]
Use <kbd>[Product Info Switcher](/product-info-switcher)</kbd> module to switch other elements on a configurable product page.
:::

## Overview

A [configurable product](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product) appears to be a single product with lists of options for each variant. However, each option represents a separate product.

When selecting a configurable product variant, a customer will see the [SKU](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#sku) of selected variant instead of the configurable product one.

Show the SKU of selected variant instead of the configurable product one to improve customer experience:

- [x] Communicate with the customer support by identifying the product by its SKU.
- [x] Find a product among similar ones by name.
- [x] When using printed catalogs, it is easier for the customer to find the product he needs by simply comparing the item SKU in the catalog and on the website.

### Features

- [x] Support <kbd>Dropdown</kbd>, [<kbd>Visual Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en), [<kbd>Text Swatch</kbd>](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en) attribute input types.
- [x] Compatibility with most themes due to the flexibility of configuration.
- [x] No reloads and no AJAX requests when selecting a product.
- [x] Validation of jQuery selector in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin).
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
composer require vct/changeskudynamically # Install the module using Composer
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
composer require --update-with-dependencies vct/changeskudynamically # Update the module using Composer
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
bin/magento module:uninstall Vct_ChangeSkuDynamically # Uninstall module
bin/magento setup:upgrade # Update the database schema and data
bin/magento setup:static-content:deploy --force # Deploy static view files
```

[Uninstall modules](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/uninstall-modules.html?lang=en) in the Adobe Commerce Documentation.

## Configure

:::danger[Important]
<kbd id="flush-magento-cache">Flush Magento Cache</kbd> in <kbd>System</kbd> <kbd>Cache Management</kbd> after configuration change to see the changes!
:::

[Clean and flush cache types](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/manage-cache.html?lang=en#clean-and-flush-cache-types) in the Adobe Commerce Documentation.

### <kbd>Switch SKU</kbd>

|             |                                                                                                               |
|-------------|---------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>Switch SKU</kbd>                                                                                         |
| Path        | <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>VCT</kbd> <kbd>Change SKU Dynamically</kbd> <kbd>Config</kbd> |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                  |
| Default     | <kbd>No</kbd>                                                                                                 |
| Description | Enable or disable SKU switching when selecting options of a configurable product.                             |

For example:

![Switch SKU](/img/docs/change-sku-dynamically/frontend-sku.png)

### <kbd>SKU Selector</kbd>

|             |                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd>SKU Selector</kbd>                                                                                                                                                                                                                                                                                                                                                                       |
| Path        | <kbd>Stores</kbd> <kbd>Configuration</kbd> <kbd>VCT</kbd> <kbd>Change SKU Dynamically</kbd> <kbd>Config</kbd>                                                                                                                                                                                                                                                                                 |
| Depends on  | <kbd>[Switch SKU](#switch-sku)</kbd>                                                                                                                                                                                                                                                                                                                                                          |
| Type        | <kbd>[jQuery selector](https://api.jquery.com/Types/#Selector)</kbd>                                                                                                                                                                                                                                                                                                                          |
| Default     | `.product.attribute.sku .value`                                                                                                                                                                                                                                                                                                                                                               |
| Description | SKU element selector.<br/>The module allows you to change [jQuery selector](https://api.jquery.com/Types/#Selector) of SKU element for compatibility with different themes.<br/>It is necessary to specify the correct selector for your frontend theme to display selected product SKU instead of the configurable product SKU on the configurable product page, when an option is selected. |

For example, element selector for the product SKU in Luma theme is `.product.attribute.sku .value`:
![Frontend selector devtools](/img/docs/change-sku-dynamically/frontend-selector-devtools.png)

:::warning[Warning]

By default, SKU selector is specified for the default [Luma theme](https://developer.adobe.com/commerce/frontend-core/guide/css/quickstart/#why-do-you-need-to-create-a-custom-theme).<br/>
[Module compatibility with third-party themes](/faq#module-compatibility-with-third-party-themes) on the FAQ page.

:::

:::tip[Tip]
Ensure that the correct [jQuery selector](https://api.jquery.com/Types/#Selector) is specified, if after configuring the module and [clearing the cache](#configuration), element switching still does not work.
:::

#### Selector validation in Admin

The module has jQuery selector validation in [Admin](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#admin) for selector input fields when <kbd>Save Config</kbd>.<br/>
For example, element selector for the product SKU:
![Selector validation in Admin](/img/docs/change-sku-dynamically/adminhtml-selector-validation.png)
where `..value` is an invalid jQuery selector. Use `.value` instead of  `..value`.
