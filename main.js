require('update-electron-app')({
    repo: 'github-user/repo',
    updateInterval: '1 hour',
    logger: require('electron-log')
  })