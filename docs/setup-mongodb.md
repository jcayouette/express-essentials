# Configure MongoDB for WSL2

1. Import public key:
```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

2. Add the repository:
```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

3. Install the latest version of Mongodb:

```
sudo zypper -n install mongodb-org

```

## Add the required db directories

1. From the system root add the required directories:

```
sudo mkdir -p data/db
```

2. Update the directory file permissions:

```
sudo chown -R `id -un` data/db
```

## Start the server

1. Type the following to start a mongodb server and serve requests to all hosts:

```
mongod --bind_ip_all
```

2. Start the server:

```
mongod
```

## Open the Mongodb cli

```
mongosh
```