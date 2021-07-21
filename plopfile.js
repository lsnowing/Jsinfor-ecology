module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    prompts: [
      {
        type: 'list',
        choices: ['vue', 'react'],
        name: 'frame',
        message: '创建哪种框架的组件库?'
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入需要创建的组件名称',
        default: ''
      },
      {
        type: 'list',
        choices: ['jsinfor-fun', 'jsinfor-visc'],
        name: 'module',
        message: '创建哪种类型的组件库?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-template/component/src/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/__tests__/{{name}}.test.js',
        templateFile: 'plop-template/component/__tests__/component.test.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-template/component/stories/component.stories.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/index.js',
        templateFile: 'plop-template/component/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/LICENSE',
        templateFile: 'plop-template/component/LICENSE'
      },
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/package.json',
        templateFile: 'plop-template/component/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{frame}}/{{module}}/{{name}}/README.md',
        templateFile: 'plop-template/component/README.hbs'
      }
    ]
  })
}