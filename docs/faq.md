---
title: FAQ
sidebar_class_name: sidebar-faq
keywords:
    - VCT modules / extensions
    - Magento Open Source
    - Adobe Commerce
    - Docs
image: ../static/img/logo.svg
---

# FAQ

## Support

:::tip[TIP]

If you have not found the answer to your question:

- Contact me by email [vct.vendor@gmail.com](mailto:vct.vendor@gmail.com?subject=FAQ).
- Search for the answer to your question on [Adobe Commerce Marketplace Help Center](https://marketplacesupport.magento.com).
- [Submit a ticket](https://marketplacesupport.magento.com/hc/en-us/requests/new) on [Adobe Commerce Marketplace Help Center](https://marketplacesupport.magento.com).

:::

## Purchasing

### Refund policy

:::warning[WARNING]

- You can request a refund only directly from the Adobe Commerce Marketplace.
- The refund period is **25 days** from the date of purchase, per the [Adobe Commerce refund policy](https://www.adobe.com/content/dam/dx/us/en/products/magento/pdfs/Magento_Marketplace_Customer_Agreement_2021_11_01.pdf).

:::

See also [Customer Agreement of Marketplace](https://www.adobe.com/legal/terms/enterprise-licensing/magento-legacy-terms.html).

You can request a refund by following these steps:

- [Log in](https://account.magento.com/customer/account/login) to your Marketplace account that purchased this module.
- Go to <kbd>My Profile</kbd> <kbd>[Purchase History](https://commercemarketplace.adobe.com/sales/order/history)</kbd>.
- Select the correct order from your order history.
- <kbd>Request a Refund</kbd>.
- Then fill out and send the refund order form.

Marketplace Support will request information once the refund request is generated.

[Requesting a Refund from Marketplace purchase](https://marketplacesupport.magento.com/hc/en-us/articles/360015771892-Requesting-a-Refund-from-Marketplace-purchase) in Commerce Marketplace Help Center.

### Purchase to different accounts

:::warning[WARNING]

- The Adobe Commerce Marketplace team does not have the ability to transfer extension purchases to a different account.
- It is required to purchase all extensions under the primary entitled account to avoid installation and/or deployment issues.
- The only resolution available is to initiate a refund request from the Adobe Commerce Marketplace purchasing account if allowed by [refund policy](https://www.adobe.com/content/dam/dx/us/en/products/magento/pdfs/Magento_Marketplace_Customer_Agreement_2021_11_01.pdf).

:::

[Transferring purchases to different accounts](https://marketplacesupport.magento.com/hc/en-us/articles/360034703471-Transferring-Purchases-to-Different-Accounts-) in Commerce Marketplace Help Center.

### Demo or module test before purchase

Currently, there is no demo site for the modules and there is no way to test the module before purchasing.

However:

- [x] [Adobe Commerce Marketplace](https://commercemarketplace.adobe.com) has a [refund policy](/faq#refund-policy).
- [x] Modules are tested and verified by [Adobe Extension Quality Program](https://developer.adobe.com/commerce/marketplace/guides/sellers/extension-quality-program).
- [x] There is detailed documentation for each module. Please read the module [documentation](/) and [FAQ](/faq) before purchasing the module.
- [x] For questions about the module, please contact me by email [vct.vendor@gmail.com](mailto:vct.vendor@gmail.com?subject=Demo%20or%20module%20test%20before%20purchase).

### Marketplace order invoice

The invoice for the order can be downloaded from <kbd>My Profile</kbd> <kbd>[Purchase History](https://commercemarketplace.adobe.com/sales/order/history)</kbd> in your Marketplace account.

:::warning[WARNING]
The invoice does not supply the VAT or address of the seller as this is not required by the Marketplace at the current time.
:::

[Marketplace order invoice](https://marketplacesupport.magento.com/hc/en-us/articles/360015772772) in Commerce Marketplace Help Center.

## Compatibility

### Marketplace compatibility and maintenance policy

[Adobe Commerce Marketplace compatibility and maintenance policy](https://marketplacesupport.magento.com/hc/en-us/articles/4413722432653-Adobe-Commerce-Marketplace-compatibility-and-maintenance-policy) in Commerce Marketplace Help Center.

### Magento edition and version compatibility

Information about a module compatibility with an edition or version of Magento or Adobe Commerce can be found on the module Marketplace page in <kbd>Technical Specifications</kbd> <kbd>Adobe Commerce platform compatibility</kbd> section.

### Module compatibility with third-party themes

The modules are compatible with themes based on [Blank and Luma](https://developer.adobe.com/commerce/frontend-core/guide/css/quickstart/#why-do-you-need-to-create-a-custom-theme) [default themes](https://experienceleague.adobe.com/docs/commerce-admin/content-design/design/themes/themes.html?lang=en#the-default-theme).

#### Hyvä themes compatibility

Modules are currently not compatible with [Hyvä themes](https://www.hyva.io/hyva-themes-license.html).

#### Breeze themes compatibility

Modules are currently not compatible with [Breeze themes](https://breezefront.com/themes).

## Installation and update

### System requirements

:::danger[IMPORTANT]
Please ensure that your test environment meets the [system requirements](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/system-requirements.html?lang=en) of your Magento Open Source or Adobe Commerce version.
:::

### Deprecated 1.x.x versions of modules

:::danger[IMPORTANT]
Versions <kbd>1.x.x</kbd> of modules are deprecated and no longer supported. Please use version <kbd>2.x.x</kbd>.
:::

### Install a specific module version

Use [Composer](https://getcomposer.org/doc/00-intro.md) to install the module or download the code for review:

- [Log in](https://account.magento.com/customer/account/login) to your Marketplace account that purchased this module.
- Available module versions are listed in the selector on <kbd>My Profile</kbd> <kbd>[My Purchases](https://commercemarketplace.adobe.com/downloadable/customer/products)</kbd> page.
- Add your [<kbd>Access Keys</kbd>](https://commercemarketplace.adobe.com/customer/accessKeys) for [Adobe Commerce Marketplace](https://commercemarketplace.adobe.com) [repository](https://getcomposer.org/doc/05-repositories.md#repository) using the following command:

```bash
composer config http-basic.repo.magento.com <Public Key> <Private Key>
```

where `<Public Key>` and `<Private Key>` are your [<kbd>Access Keys</kbd>](https://commercemarketplace.adobe.com/customer/accessKeys).

For example:

```bash
composer config http-basic.repo.magento.com 39b747b8ab1d624582bb3n1a09deb489 31b9fce4cb78f523fd34aa3abb90c89c
```

- Run the following commands specifying the desired package name and version:

```bash
composer require <vct/packagename>:<version> # Install module with Composer
bin/magento setup:upgrade # Update the database schema and data

bin/magento setup:static-content:deploy --force # Deploy static view files
bin/magento setup:di:compile # Compile the code
```

[Get your authentication keys](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/authentication-keys.html?lang=en) and [install an extension](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/extensions.html?lang=en) in the Magento documentation.

### Update all VCT vendor modules

Composer allows updating all modules of one vendor:

```bash
composer update vct/* # Update all VCT vendor modules
```

### Getting a module as ZIP archive

:::warning[WARNING]
The only recommended way to install modules is using [Composer](https://getcomposer.org/doc/00-intro.md).
:::

If you require the source code in ZIP archive for any reason, please let me know via email [vct.vendor@gmail.com](mailto:vct.vendor@gmail.com?subject=Getting%20a%20module%20as%20ZIP%20archive).

### Issues

#### Could not find a matching version of package

:::warning[ISSUE]

```
Could not find a matching version of package <vct/packagename>. Check the package spelling, your version constraint and that the package is available in a stability which matches your minimum-stability (stable).
```

:::

:::tip[POSSIBLE FIX 1]

- [Log in](https://account.magento.com/customer/account/login) to your Marketplace account that purchased this module.
- Ensure that <kbd>[Access Keys](https://commercemarketplace.adobe.com/customer/accessKeys)</kbd> are enabled on <kbd>My Profile</kbd> <kbd>Access Keys</kbd> page.
- Install again.

:::

:::tip[POSSIBLE FIX 2]

- Get a Composer version with command:

```bash
composer --version
```

- Check [system requirements](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/system-requirements.html?lang=en) in the Magento documentation.

- Migrate Composer version 1 to version 2 if needed with command:

```bash
composer self-update --2
```

- Install again.

:::

:::tip[POSSIBLE FIX 3]

- Check that `composer.json` file of your project contains the Marketplace repository `https://repo.magento.com/`:

```txt title="composer.json" {4-5}
...
    "repositories": [
        {
            "type": "composer",
            "url": "https://repo.magento.com/"
        }
    ],
...
```

- Add <kbd>repo.magento.com</kbd> repository if it is missing.
- Install again.

:::

#### Support for Composer 1 is deprecated

:::warning[ISSUE]

```
<warning>Warning from https://repo.packagist.org: Support for Composer 1 is deprecated and some packages will not be available. You should upgrade to Composer 2. See https://blog.packagist.com/deprecating-composer-1-support/</warning>
```

[Deprecating Packagist.org support for Composer 1.x](https://blog.packagist.com/deprecating-composer-1-support) in Packagist.org blog.
:::

:::tip[FIX]

- Migrate Composer version 1 to version 2 with command:

```bash
composer self-update --2
```

- Install again.

:::

Check [system requirements](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/system-requirements.html?lang=en) in the Magento documentation.

## Configuration

### Configurable products configuration

- A configurable product allows the customer to choose options from <kbd>Dropdown</kbd>, <kbd>Multiple Select</kbd>, <kbd>Visual Swatch</kbd> and <kbd>Text Swatch</kbd> input types.
- Configurable child products can be <kbd>Simple</kbd> or <kbd>Virtual</kbd> products without [custom options](https://experienceleague.adobe.com/docs/commerce-admin/catalog/products/settings/settings-advanced-custom-options.html?lang=en).
- The thumbnail image in the shopping cart can be set to display the image from the configurable product record or from the product variant.
- [Swatch attributes](https://experienceleague.adobe.com/docs/commerce-admin/catalog/product-attributes/swatches.html?lang=en) can be configured to not display corresponding simple product images when the swatch is selected by setting the <kbd>Update Product Preview Image</kbd> option value to <kbd>No</kbd> in <kbd>Stores</kbd> <kbd>ATTRIBUTES</kbd> <kbd>Product</kbd> <kbd>[Attribute]</kbd> <kbd>Attribute Properties</kbd>.
- The theme controls how the <kbd>Image Gallery</kbd> behaves when a customer switches between product variants:
    - By default, <kbd>Blank theme</kbd> replaces the main product image with the image of the selected variant.
    - By default, the <kbd>Luma theme</kbd> prepend the selected variant images to the configurable product images.

[Things to remember](https://experienceleague.adobe.com/docs/commerce-admin/catalog/products/types/product-create-configurable.html?lang=en#things-to-remember) about configurable products in the Magento documentation.
