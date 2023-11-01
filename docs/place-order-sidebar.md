---
title: Place Order Sidebar
---

# Place Order Sidebar

![version](https://img.shields.io/badge/version-v2.x.x-blue)
![Magento](https://img.shields.io/badge/compatibility-Magento-da4c02)
![Adobe Commerce](https://img.shields.io/badge/compatibility-Adobe_Commerce-b62324)

<span class="star">☆☆☆☆☆</span> [Leave review](https://commercemarketplace.adobe.com/vct-placeordersidebar.html#bazaarvoice.reviews.tab) to help in further development

[![VCT Place Order Sidebar Logo](/img/docs/Vct_PlaceOrderSidebar.svg)](https://commercemarketplace.adobe.com/vct-placeordersidebar.html)

- [Marketplace](https://commercemarketplace.adobe.com/vct-placeordersidebar.html)
- [Release Notes](https://commercemarketplace.adobe.com/vct-placeordersidebar.html#product.info.details.release_notes)
- [Quality Report](https://commercemarketplace.adobe.com/vct-placeordersidebar.html#product.info.details.quality_report)

[//]: # (- [Reviews]&#40;https://commercemarketplace.adobe.com/vct-placeordersidebar.html#bazaarvoice.reviews.tab&#41;)

## Overview

If your shop is represented in the markets of D-A-CH region i.e. Austria, Germany, Switzerland, this module may be interesting for you.

<br/>

> (1) On the websites used for electronic commerce with consumers, the trader is to indicate clearly and unequivocally at the latest at the beginning of the ordering process..., whether any delivery restrictions apply and which means of payment are accepted.
>
> (2) In the case of a consumer contract concluded in electronic commerce that has as its subject-matter a for-a-fee service provided by the trader, the trader must provide to the consumer the information..., and must do so in a clear and comprehensible manner, displaying it prominently, immediately before the consumer places the order.
>
> (3) In case of a contract in accordance with subsection (2), the trader is to arrange the ordering situation such that the consumer explicitly confirms by their order that they enter into obligation to effect a payment. If the order is placed using a button, the obligation of the trader under sentence 1 is deemed to have been met only if this button is marked in an easy-to-read manner with nothing but the words "Order and Pay", or with equally unambiguous wording.
>
> – [German Civil Code (BGB) Section 312j Special obligations vis-à-vis consumers in electronic commerce](https://www.gesetze-im-internet.de/englisch_bgb/englisch_bgb.html#p1168)

<br/>

Original:

> (1) Auf Webseiten für den elektronischen Geschäftsverkehr mit Verbrauchern hat der Unternehmer zusätzlich zu den Angaben nach § 312i Absatz 1 spätestens bei Beginn des Bestellvorgangs klar und deutlich anzugeben, ob Lieferbeschränkungen bestehen und welche Zahlungsmittel akzeptiert werden.
>
> (2) Bei einem Verbrauchervertrag im elektronischen Geschäftsverkehr, der den Verbraucher zur Zahlung verpflichtet, muss der Unternehmer dem Verbraucher die Informationen gemäß Artikel 246a § 1 Absatz 1 Satz 1 Nummer 1, 5 bis 7, 8, 14 und 15 des Einführungsgesetzes zum Bürgerlichen Gesetzbuche, unmittelbar bevor der Verbraucher seine Bestellung abgibt, klar und verständlich in hervorgehobener Weise zur Verfügung stellen.
>
> (3) Der Unternehmer hat die Bestellsituation bei einem Vertrag nach Absatz 2 so zu gestalten, dass der Verbraucher mit seiner Bestellung ausdrücklich bestätigt, dass er sich zu einer Zahlung verpflichtet. Erfolgt die Bestellung über eine Schaltfläche, ist die Pflicht des Unternehmers aus Satz 1 nur erfüllt, wenn diese Schaltfläche gut lesbar mit nichts anderem als den Wörtern "zahlungspflichtig bestellen" oder mit einer entsprechenden eindeutigen Formulierung beschriftet ist.
>
> – [Bürgerliches Gesetzbuch (BGB) § 312j Besondere Pflichten im elektronischen Geschäftsverkehr gegenüber Verbrauchern](https://www.gesetze-im-internet.de/bgb/__312j.html)

### Tasks performed

- [x] Move an <kbd>Order Summary</kbd> block at the end of the checkout sidebar.
- [x] Move the <kbd>Place Order</kbd> button after the <kbd>Order Summary</kbd> block.
- [x] Show the [checkout](https://experienceleague.adobe.com/docs/commerce-operations/operational-playbook/glossary.html?lang=en#checkout) sidebar with <kbd>Order Summary</kbd> in mobile view, which is not displayed in the default [Luma theme](https://developer.adobe.com/commerce/frontend-core/guide/css/quickstart/#why-do-you-need-to-create-a-custom-theme).
- [x] Translate <kbd>Place Order</kbd> button label as <kbd>Zahlungspflichtig bestellen</kbd> for stores of D-A-CH region i.e. Austria, Germany, Switzerland.

### Features

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
composer require vct/placeordersidebar # Install the module using Composer
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
composer require --update-with-dependencies vct/placeordersidebar # Update the module using Composer
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
bin/magento module:uninstall Vct_PlaceOrderSidebar # Uninstall module
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

### <kbd class="required">Enable</kbd> a module

|             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Config      | <kbd class="required">Enable</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Admin path  | <kbd>VCT</kbd> <kbd>Place Order Sidebar</kbd> <kbd>General</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Type        | <kbd>Yes</kbd> <kbd>No</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Default     | <kbd>No</kbd>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Description | <kbd>Yes</kbd> to:<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled checked/> Move an <kbd>Order Summary</kbd> block at the end of a checkout sidebar.</li><li class="task-list-item"><input type="checkbox" disabled checked/> Move a <kbd>Place Order</kbd> button after a <kbd>Order Summary</kbd> block.</li><li class="task-list-item"><input type="checkbox" disabled checked/> Display a checkout sidebar in mobile view.</li><li class="task-list-item"><input type="checkbox" disabled checked/> Translate <kbd>Place Order</kbd> button label as <kbd>Zahlungspflichtig bestellen</kbd> for stores of D-A-CH region i.e. Austria, Germany, Switzerland.</li></ul><kbd>No</kbd> to make no changes or undo all changes. |

#### Desktop view before

![Desktop view before](/img/docs/place-order-sidebar/frontend-desktop-before.png)

#### Desktop view after

![Desktop view after](/img/docs/place-order-sidebar/frontend-desktop-after.png)

#### Mobile view before

![Mobile view before](/img/docs/place-order-sidebar/frontend-mobile-before.png)

#### Mobile view after

![Mobile view after](/img/docs/place-order-sidebar/frontend-mobile-after.png)
