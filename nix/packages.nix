{ nixpkgs ? import <nixpkgs> { }, args ? { } }:
let
  pkgs = rec {
    atomi_classic = (
      with import (fetchTarball "https://github.com/kirinnee/test-nix-repo/archive/refs/tags/v8.1.0.tar.gz");
      {
        inherit sg;
      }
    );
    atomi = (
      with import (fetchTarball "https://github.com/kirinnee/test-nix-repo/archive/refs/tags/v17.2.0.tar.gz") { inherit args; };
      {
        inherit pls;
      }
    );
    "Unstable 6th Mar 2023" = (
      with import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/f5ffd5787786dde3a8bf648c7a1b5f78c4e01abb.tar.gz") args;
      {
        inherit
          yq-go
          coreutils
          gnugrep
          pre-commit
          gitlint
          jq
          nixpkgs-fmt
          shfmt
          findutils
          gnused
          git
          nodejs
          shellcheck;
        webstorm = jetbrains.webstorm;
        prettier = nodePackages.prettier;
        pnpm = nodePackages.pnpm;
      }
    );
  };
in
with pkgs;
atomi //
atomi_classic //
pkgs."Unstable 6th Mar 2023"
