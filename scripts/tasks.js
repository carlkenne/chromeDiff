require('shelljs/global');

exports.replaceWebpack = () => {
  const replaceTasks = [{
    from: 'webpack/replace/JsonpMainTemplate.runtime.js',
    to: 'node_modules/webpack/lib/JsonpMainTemplate.runtime.js'
  }, {
    from: 'webpack/replace/log-apply-result.js',
    to: 'node_modules/webpack/hot/log-apply-result.js'
  }];

  replaceTasks.forEach(task => cp(task.from, task.to));
};

exports.copyAssets = type => {
  const env = type === 'build' ? 'prod' : type;
  rm('-rf', type);
  mkdir(`${type}`);
  mkdir(`${type}/static`);
  cp(`chrome/manifest.${env}.json`, `${type}/manifest.json`);
  cp('-R', 'chrome/assets/*', type);
  cp('-R', 'chrome/static/*', `${type}/static`);
  exec(`jade -O "{ env: '${env}' }" -o ${type} chrome/views/`);
};
