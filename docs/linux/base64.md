---
id: base64
title: base64
---

The `base64` command will let you encode and decode base64 strings.

It is used with

```bash
base64 [OPTIONS] [INPUT] [OUTPUT]
```

The two most important option flags are `-d`/`--decode` for decoding and `-e`/`--encode` for encoding.

Some other use flags are:

- `-n`, `--noerrcheck` to skip the usual error checking at the time of decoding.
- `-u`, `--help` for info on the usage of the command
- `-i`, `--ignore-garbage` to ignore any non-alphabet characters when encoding
