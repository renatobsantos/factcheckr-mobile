module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@redux/provider': './src/redux/provider.tsx',
            '@redux/user': './src/redux/user/userSlice.ts',
            '@routes': './src/routes/index.tsx',
            '@store': './src/store',
            '@theme': './src/global/styles/index.tsx',
            '@types': './src/types/index.ts',
            '@utils': './src/utils/index.tsx',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
}
