const { override, fixBabelImports,addLessLoader} = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#54a9df' ,
        '@link-color':'#1890ff',
        '@success-color':'#52c41a',
        '@warning-color':'#faad14',
        '@error-color':'#f5222d',
        '@font-size-base':'14px',
        '@heading-color':'rgba(0,0,0,0.85)',
        '@text-color':'rgba(0,0,0,0.65)',
        '@text-color-secondary':'rgba(0,0,0,0.45)',
        '@border-radius-base':'4px',
        '@border-color-base':'#d9d9d9',
        '@border-light':'#dee1e7'

      },
  }),
);