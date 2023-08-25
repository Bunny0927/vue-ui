module.exports = {
    title: 'Vue-ui组件库',
    description: '基于vue2的组件库',
    base: '/',  //部署时为 ./
    markdown: {
        lineNumbers: true
    },
    plugins: [
        'demo-container'
    ],
    themeConfig: {
        logo: '/img/logo.png',
        sidebarDepth: 1,
        lastUpdated: 'Last Updated',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '指南',
                link: '/guide/introduction'
            },
            {
                text: '组件',
                link: '/info/basic/button'
            }
        ],
        sidebar: {
            '/info/': [
                {
                    title: 'Basic基础组件',
                    collapsable: false,
                    children: [
                        'basic/button',
                        'basic/dialog',
                        'basic/message'
                    ]
                },
                {
                    title: 'Navigation导航',
                    collapsable: false,
                    children: [
                        'navigation/nav',
                        'navigation/navItem'
                    ]
                },
                {
                    title: 'Form表单组件',
                    collapsable: false,
                    children: [
                        'form/input',
                        'form/switch',
                        'form/radio',
                        'form/checkbox',
                        'form/select',
                        'form/form'
                    ]
                },
                {
                    title: 'Table表格组件',
                    collapsable: false,
                    children: [

                    ]
                }
            ],
            '/guide/': [
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                        'introduction',
                        'guide',
                    ]
                },
            ]
        },
        repo: 'https://github.com/Bunny0927/vue-ui',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
    }
}