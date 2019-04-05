module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
       'eol-last': ['error', 'always'],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['route'],
            aspects: ['noHref', 'invalidHref', 'preferButton'],
        }],
        'import/no-extraneous-dependencies' : [ 'error' , { 'devDependencies' : true }],
        'import/order': 'off',
        'no-param-reassign': 'off',
        'react/no-unescaped-entities' : 'off',
        'import/prefer-default-export': 'off',
    },
    env: {
        jest: true,
    },
    parser: 'babel-eslint',
    globals: {
        window: true,
        document: true,
        require: true,
        fetch: true,
        __dirname: true
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};
