---
id: watch
title: watch
---

The `watch` command repeated runs a command or job for you. It is used like this:

```bash
watch [options] [command]
```

The `[options]` are listed below and the `[command]` is the command you want to run repeatedly.

### `watch` options

| option flag           | Use                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------ |
| `-n`, `--interval`    | specifies the interval between runs of the passed command. The default is 2 seconds. |
| `-d`, `--differences` | Highlight any differences between updates.                                           |
| `-g`, `--chgexit`     | Exits if the output of the passed command changes                                    |
| `-t`, `--no-title`    | Removes the header with the interval, command, and current time                      |
| `-b`, `--beep`        | Play a sound if the command exits with an error                                      |
| `-p`, `--precise`     | Attempt to run exactly on the specified `--interval`                                 |
| `-e`, `--errexit`     | Stops updates on an error from the passed command and exits on the next key press    |
| `-c`, `--color`       | Pass an ANSI color and style sequence                                                |
| `-x`, `--exec`        | Passes user defined command to `exec`. Reduces the need for additional quoting       |
| `-w`, `--no-linewrap` | Truncated any long lines                                                             |
| `-h`, `--help`        | Display help text (this info)                                                        |
| `-v`, `--version`     | Display version info                                                                 |


### Helpful use cases

Continually get Pods when watching an update

```bash
watch kubectl get pods
```
