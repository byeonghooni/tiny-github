module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: ['error', 'single'], // 싱글 쿼터 사용
    // "@typescript-eslint/quotes": ["error", "double"], /// 더블 쿼터 사용
    // "no-unused-vars": "off", // 사용 안 한 변수 경고 중복
    // "spaced-comment": "off", // 주석을 뒤에 쓰지 말라는 경고
    // "@typescript-eslint/no-unused-vars": "warn", // 사용 안 한 변수는 경고
    'react/react-in-jsx-scope': 'off', // jsx를 사용하여도 React를 꼭 임포트 하지 않아도 된다.
    'react/no-unescaped-entities': 'off', // 문자열 내에서 " ' > } 허용
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js', '.jsx', '.tsx',
        ],
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off', // nextjs 에서는 a에 href없이 사용
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': 'off',

  },
};
