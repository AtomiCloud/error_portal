#!/usr/bin/env bash

pnpm i --frozen-lockfile
node sync
pnpm build
