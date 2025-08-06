export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
    versionCode: 1
  },
});

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';
const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.brel.noteApp.dev';
  }

  if (IS_PREVIEW) {
    return 'com.brel.noteApp.preview';
  }

  return 'com.brel.noteApp';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'noteApp (Dev)';
  }

  if (IS_PREVIEW) {
    return 'noteApp (Preview)';
  }

  return 'noteApp: Emoji Stickers';
};
