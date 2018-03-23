# decaf-metabolica

## Development

### Developing subcomponents

First, make sure dependencies are correctly resolved according to the npm algorithm.

    # in decaf-metabolica
    npm install

Use the dependencies that were installed for the component in the actual components repo. Note that shared components will not reside here, like if you simply did `npm install` in the component repo.

    # in decaf-metabolica
    mv node_modules/metabolica-ui-foo/node_modules ../path/to/metabolica-ui-foo

Use `npm link` to symlink the subcomponents to your local directory.

    # in metabolica-ui-foo
    npm link

    # in decaf-metabolica
    npm link metabolica-ui-foo

Now run `npm start` in `decaf-metabolica`, and it will use your local component.
