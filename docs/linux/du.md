---
id: du
title: du
---

The `du` command helps get information on the disk usage.  Typically you will want to use the `-h` flag to make the response human readable.  You can also use the `-d` flag and a number to specify the depth.  For example:

```bash
$  du -h -d 1
```

on the root of this repo, for example, gets 

```sh
235M    ./node_modules
40K     ./src
328K    ./.docusaurus
2.9M    ./.git
908K    ./docs
72K     ./iac
12K     ./.github
208K    ./static
239M    .
```

If you include the `-a` flag you will get output for all files, not just directories.  You can also specify a path after a command to get the disk usage from that directory.  The `-c` flag will give you a grand totalat the end.

```bash
du -hac -d 1 /<path to>/cka-prep
```

will get the output

```sh
235M    /<path to>/cka-prep/node_modules
396K    /<path to>/cka-prep/package-lock.json
4.0K    /<path to>/cka-prep/sidebars.js
40K     /<path to>/cka-prep/src
4.0K    /<path to>/cka-prep/babel.config.js
4.0K    /<path to>/cka-prep/.gitignore
4.0K    /<path to>/cka-prep/package.json
4.0K    /<path to>/cka-prep/README.md
328K    /<path to>/cka-prep/.docusaurus
2.9M    /<path to>/cka-prep/.git
908K    /<path to>/cka-prep/docs
72K     /<path to>/cka-prep/iac
12K     /<path to>/cka-prep/.github
208K    /<path to>/cka-prep/static
4.0K    /<path to>/cka-prep/docusaurus.config.js
239M    /<path to>/cka-prep
239M    total
```