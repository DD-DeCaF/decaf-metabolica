# Versioning

decaf-metabolica integrates its [metabolica components as npm packages](https://github.com/DD-DeCaF/decaf-metabolica/blob/master/package.json) from github.

* On `master`, references in `package.json` must always be a specific version or `#semver:` reference ([see docs](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies)).
* On `devel`, the `#devel` branch of the corresponding package may be used.

## Metabolica UI component versioning

* Choose version number according to [SemVer ^2.0.0](https://semver.org/)
* Specify the version in `package.json` and as git tags
    * Prefix `v` in the git tag, e.g. `v1.0.2`
    * The version in `package.json` should always match the nearest version tag in the git child tree
* Increase the version only as part of a release on the `master` branch. Development branches should not be versioned.

## Deploying to staging

1. Work on `metabolica-ui-foo` and merge or push your commits to `devel`.
2. Checkout `devel` on `decaf-metabolica` and update the `package.json` dependency: `.../metabolica-ui-foo#devel`.
3. Trigger a CI rebuild and then redeploy the `decaf-metabolica` staging service.

## Deploying to production 

1. Go to `metabolica-ui-foo`, merge `devel` into `master`.
2. Bump the package version according to [SemVer](https://semver.org/):
    * Set the new version in `package.json` and commit.
    * Tag the commit with `vX.Y.Z` and push the tag.
3. Go to `decaf-metabolica` `devel` and update `package.json`: `.../metabolica-ui-foo#vX.Y.Z`.
4. Merge `devel` into `master`.
    * You **must not** do this if `package.json` contains any dependencies to `#devel` branches. Either merge the branch in the remote package or roll back to the previous version.
4. Redeploy `decaf-metabolica` production service.
