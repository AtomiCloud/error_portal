{ nixpkgs ? import <nixpkgs> { }, args ? { } }:
let pkgs = import ./packages.nix { inherit nixpkgs args; }; in
with pkgs;
{
  system = [
    coreutils
    gnugrep
    findutils
    gnused
    jq
    yq-go
  ];

  tools = [
    pnpm
  ];

  main = [
    pls
    nodejs
  ];

  dev = [
    webstorm
  ];

  lint = [
    pre-commit
    nixpkgs-fmt
    prettier
    shfmt
    shellcheck
    gitlint
    sg
  ];

  ci = [
    git
  ];

  releaser = [
    sg
  ];
}