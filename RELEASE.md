# Releases

To trigger a release, merge a commit to `main` that follows [Conventional
Commits][]. In short,

- `fix:` to trigger a patch release
- `feat:` to trigger a minor release
- `<type>!:` or use a `BREAKING CHANGE:` footer to trigger a major release

We don't enforce conventional commits generally (though you are free do so),
it's only required if you want to trigger release.

Pre-releases can be made by pushing to an `rc/*` branch.

For more details, see the [Semantic Release](https://illuminate.atlassian.net/wiki/spaces/PENG/pages/17952735277/Semantic+Release) documentation.

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/#summary
