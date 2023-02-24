import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'VanSite',
    themeConfig: {
        logo: '/avatar.png',
        siteTitle: 'VanSite',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vancats/van-website' },
        ],
        footer: {
            message: '哈喽',
            copyright: '2023 vancats',
        },
    },
})
