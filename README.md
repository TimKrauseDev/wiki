# Personal Wiki

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Package.json

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ npm deploy
```
This command will build the website, then deploy build assets to firebase hosting.

## Tools

### Cropping Photos

- Add images to the `static/crop_helper` folder.
- Convert files to jpg with one of the following CLI commands:
  - `heic2jpg`
  - `png2jpg`
  - `webp2jpg`
- Run shell script to crop and resize images: `bash crop.sh`.
- Cropped images will be created in the `cropped` folder.
- Once complete, move cropped files and delete clean up directory.
