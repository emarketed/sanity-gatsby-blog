export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf151432a8d6dd1c54f0e9c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z1j6dus7',
                  apiId: '2487650e-9ef3-4243-afa4-c531f10d7d94'
                },
                {
                  buildHookId: '5cf1514447fdd23a6ac34836',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qznuj3xi',
                  apiId: 'd1cde7e5-3afc-4d2b-893a-9662549c1ec0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emarketed/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qznuj3xi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
