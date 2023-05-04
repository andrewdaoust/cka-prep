---
id: ssh
title: ssh
---

### SSH onto another machine

```
ssh -i <path to SSH key> <username>@<remote IP>
```

Example: `ssh -i ~/.ssh/my_key.ssh ubuntu@172.31.20.31`

### Remove IP from known_hosts

```
ssh-keygen -f "<path to known_hosts>" -R "<host IP>"
```
