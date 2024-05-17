---
layout: post
title: Debug bundle error with exit code 16
date: 2024-05-17 16:12:00+0800
description: Debug bundle error when deploying the website from al-forlio template.
tags: debug
giscus_comments: true
---

## Environment

OS: MAC with M2 Chip.

## Error

When running the github action `Deploy Site` by al-forlio template, the error shows:

```shell
The process '/opt/hostedtoolcache/Ruby/3.2.2/x64/bin/bundle' failed with exit code 16
```

## Solution

The cause of the problem is that on MAC with M chip, the default platform in `Gemfile.lock` is only `aarch64-linux-gnu`, which is not supported by the bundle in the github action. So we need to add the platform `x86_64-linux` to the `Gemfile.lock`. Run the following command in the docker and push the change to the repository:

```shell
bundle lock --add-platform x86_64-linux
```