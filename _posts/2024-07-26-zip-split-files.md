---
layout: post
title: Split smaller zip files when compressing
date: 2024-07-26 20:12:00+0800
description: split zip files when compressing to avoid the size limit of uploading.
tags: notes
giscus_comments: true
---

## Split

```shell
zip -s 10g new_zip_name -r folder1_to_zip/ folder2_to_zip/
```

the parameter `-s 10g` means split the zip file into 10GB each. The `new_zip_name` is the name of the new zip file, and the `folder1_to_zip/ folder2_to_zip/` are the folders to be zipped.

Can change the size to `10m` for 10MB, `10k` for 10KB, etc.

## Merge & unzip

```shell
zip --fix new_zip_name --out merged_zip_name
```

The `new_zip_name` is the name of the zip file, and the `merged_zip_name` is the name of the merged zip file.

```shell
unzip merged_zip_name
```