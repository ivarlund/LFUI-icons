function defaultTemplate (
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx }
) {
  const lfuiIcon = `${componentName.name.replace('Svg', '')}`
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`${imports}
  ${interfaces}
  function ${lfuiIcon}(${props}) {
    return ${jsx};
  }
  export default ${lfuiIcon}
    `
}
module.exports = defaultTemplate
