// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
    baseUrl: '/',
    favicon: 'img/logo.svg',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'vct-vendor',
    projectName: 'vct-vendor.github.io',
    tagline: 'VCT',
    title: 'VCT',
    trailingSlash: false,
    url: 'https://vct-vendor.github.io',
    staticDirectories: [
        'public',
        'static'
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.js'
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),

                        require.resolve('./src/css/blog.css'),
                        require.resolve('./src/css/faq.css'),
                        require.resolve('./src/css/footer.css'),
                        require.resolve('./src/css/navbar.css'),
                        require.resolve('./src/css/pagination.css'),
                        require.resolve('./src/css/print.css'),
                        require.resolve('./src/css/scroll.css'),
                        require.resolve('./src/css/sidebar.css'),
                        require.resolve('./src/css/table.css'),
                        require.resolve('./src/css/toc.css'),

                        require.resolve('./src/css/home.css'),
                        require.resolve('./src/css/modules/also-bought.css'),
                        require.resolve('./src/css/modules/change-sku-dynamically.css'),
                        require.resolve('./src/css/modules/place-order-sidebar.css'),
                        require.resolve('./src/css/modules/price-diff.css'),
                        require.resolve('./src/css/modules/product-info-switcher.css'),
                        require.resolve('./src/css/modules/simple-product-url.css'),

                        require.resolve('./src/css/plugins/docusaurus-search-local.css')
                    ]
                },
                googleTagManager: {
                    containerId: 'GTM-W65NLPHF'
                },
                gtag: {
                    trackingID: 'G-Y2X91ZZSTX',
                    anonymizeIP: true
                },
                sitemap: {
                    changefreq: 'daily',
                    priority: 0.5,
                    ignorePatterns: [
                        '/tags/**',
                        '/pdf/**'
                    ],
                    filename: 'sitemap.xml'
                }
            }
        ]
    ],
    themeConfig: {
        image: 'img/logo.svg',
        metadata: [
            {
                name: 'robots',
                content: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            // { name: 'application-name', content: '', },
            // { name: 'msapplication-tooltip', content: '', },
            {
                name: 'keywords',
                content: 'VCT,Magento 2,Adobe Commerce,Module,Extension'
            },
            // { name: 'title', content: '', },
            // { name: 'description', content: '', },
            {
                name: 'theme-color',
                content: '#cb2434'
            },
            {
                name: 'application-TileImage',
                content: 'img/logo.svg'
            },
            {
                name: 'msapplication-TileColor',
                content: '#cb2434'
            },
            {
                property: 'og:site_name',
                content: 'VCT'
            },
            {
                property: 'og:url',
                content: 'https://vct-vendor.github.io'
            },
            {
                property: 'og:locale',
                content: 'en_US'
            },
            // { property: 'og:title', content: '', },
            // { property: 'og:type', content: 'website', },
            // { property: 'og:description', content: '', },
            // { property: 'og:image', content: '', },
            // { property: 'og:image:secure_url', content: '', },
            // { property: 'og:image:alt', content: '', },
            {
                name: 'twitter:site',
                content: '@VCT'
            },
            {
                name: 'twitter:creator',
                content: '@VCT'
            },
            // { name: 'twitter:title', content: 'TITLE OF POST OR PAGE' },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            }
            // { name: 'twitter:image', content: 'LINK TO IMAGE' },
            // { name: 'twitter:description', content: 'DESCRIPTION OF PAGE CONTENT' },
        ],
        headTags: [
            {
                tagName: 'link',
                attributes: {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                }
            },
            {
                tagName: 'link',
                attributes: {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                }
            },
            {
                tagName: 'script',
                attributes: {
                    type: 'application/ld+json'
                },
                innerHTML: JSON.stringify({
                    '@context': 'https://schema.org/',
                    '@type': 'Organization',
                    name: 'VCT',
                    url: 'https://vct-vendor.github.io',
                    logo: 'img/logo.svg'
                })
            }
        ],
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['bash']
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
                hideable: true
            }
        },
        navbar: {
            title: 'VCT',
            logo: {
                alt: 'VCT',
                src: 'img/logo.svg'
            },
            items: [
                {
                    label: 'Docs',
                    to: '/',
                    position: 'left'
                },
                {
                    label: 'FAQ',
                    to: '/faq',
                    position: 'left'
                },
                // {
                //     label: 'Blog',
                //     to: '/blog',
                //     position: 'left',
                // },
                {
                    label: 'Feature Request',
                    to: '/feature',
                    position: 'left'
                },
                {
                    label: 'Support',
                    href: 'mailto:vct.vendor@gmail.com?subject=Support',
                    position: 'left'
                },
                {
                    label: 'Contact',
                    href: 'mailto:vct.vendor@gmail.com?subject=Contact',
                    position: 'left'
                },
                {
                    label: 'VCT on Marketplace',
                    href: 'https://commercemarketplace.adobe.com/partner/VCT#partner.products.info',
                    position: 'left'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    items: [
                        {
                            label: 'Docs',
                            to: '/'
                        },
                        {
                            label: 'FAQ',
                            to: '/faq'
                        },
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'Feature Request',
                            to: '/feature'
                        },
                        {
                            label: 'Support',
                            href: 'mailto:vct.vendor@gmail.com?subject=Support',
                            position: 'left'
                        },
                        {
                            label: 'Contact',
                            href: 'mailto:vct.vendor@gmail.com?subject=Contact'
                        }
                    ]
                },
                {
                    items: [
                        {
                            label: 'VCT on Marketplace',
                            href: 'https://commercemarketplace.adobe.com/partner/VCT#partner.products.info'
                        },
                        {
                            label: 'Marketplace Help Center',
                            href: 'https://marketplacesupport.magento.com'
                        },
                        {
                            label: 'Adobe Commerce Documentation',
                            href: 'https://experienceleague.adobe.com/docs/commerce.html?lang=en'
                        },
                        {
                            label: 'Adobe Commerce Developer Documentation',
                            href: 'https://developer.adobe.com/commerce/docs'
                        }
                    ]
                }
            ],
            copyright: `© ${new Date().getFullYear()} VCT. All rights reserved. <a href="/privacy-policy">Privacy policy</a>`
        }
    },
    themes: [
        [
            '@easyops-cn/docusaurus-search-local',
            {
                docsRouteBasePath: '/',
                explicitSearchResultPath: true,
                hashed: true,
                highlightSearchTermsOnTargetPage: true,
                ignoreCssSelectors: ['[class*=\'admonitionHeading_\']'],
                indexPages: true,
                searchResultContextMaxLength: 70
            }
        ]
    ]
};
export default config;
