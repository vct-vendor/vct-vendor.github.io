---
title: Price Diff
---

# Price Diff

![version](https://img.shields.io/badge/version-v2.x.x-blue)
![Magento](https://img.shields.io/badge/compatibility-Magento-da4c02)
![Adobe Commerce](https://img.shields.io/badge/compatibility-Adobe_Commerce-b62324)

<span class="star">☆☆☆☆☆</span> [Leave review](https://commercemarketplace.adobe.com/vct-pricediff.html#bazaarvoice.reviews.tab) to help in further development

[![VCT Price Diff Logo](/img/docs/Vct_PriceDiff.svg)](https://commercemarketplace.adobe.com/vct-pricediff.html)

- [Marketplace](https://commercemarketplace.adobe.com/vct-pricediff.html)
- [Release Notes](https://commercemarketplace.adobe.com/vct-pricediff.html#product.info.details.release_notes)
- [Quality Report](https://commercemarketplace.adobe.com/vct-pricediff.html#product.info.details.quality_report)

[//]: # (- [Reviews]&#40;https://commercemarketplace.adobe.com/vct-pricediff.html#bazaarvoice.reviews.tab&#41;)

## Overview

A [configurable product](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#configurable-product) appears to be a single product with lists of options for each variant. However, each option represents a separate product. The price displayed on the configurable product page is the lowest price among all variants. When you click on the dropdown, it displays the additional cost of the variant. This can negatively affect sales, which will not happen if the customer is informed of the price difference in a timely manner.

Hiding price difference from the dropdown of the configurable product:

- [x] Increase conversion. An unexpected price difference can lead to abandoned purchases. Hiding price difference encourages customers to focus on other product attributes that may be more appealing.
- [x] Increase higher-priced variant sales. With no price comparison, customers might be more inclined to choose the more expensive option that appeals to them more.
- [x] Simplify decision-making. Hiding price differences streamlines the decision-making process for customers, minimizing purchase deliberation and decision fatigue.

### Features

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
composer require vct/pricediff # Install the module using Composer
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
composer require --update-with-dependencies vct/pricediff # Update the module using Composer
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
bin/magento module:uninstall Vct_PriceDiff # Uninstall module
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

### <kbd class="required">Hide Price Difference</kbd>

|             |                                                                                                                 |
|-------------|-----------------------------------------------------------------------------------------------------------------|
| Config      | <kbd class="required">Hide Price Difference</kbd>                                                               |
| Admin path  | <kbd>VCT</kbd> <kbd>Price Diff</kbd> <kbd>General</kbd>                                                         |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                    |
| Default     | <kbd>No</kbd>                                                                                                   |
| Description | <kbd>Yes</kbd> to hide or <kbd>No</kbd> to display price difference in a configurable product options dropdown. |

For example, before and after:

![Before](/img/docs/price-diff/frontend-before.png)
![After](/img/docs/price-diff/frontend-after.png)
