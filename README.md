# Error Portal

Standardized Error portal for AtomiCloud suing JSON Schema, follow LPSM + Version Format to catalog Errors

### Pre-requiste

All dependencies are managed by `nix` in conjuction with `direnv`

- [Nix](https://nixos.org/) > 2.11
- [direnv](https://direnv.net/)

### Installation

```
pls setup
```

### Local Development

```
pls start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
pls build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Add APIs to Catalog

1. Edit `sources.json`
2. Build with `pls build` 
