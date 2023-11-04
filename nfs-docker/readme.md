
### commands list

#### client:

```
sudo apt install nfs-common
sudo mkdir /mnt/nfs
sudo chmod -R 777 /mnt/nfs
sudo mount.nfs4 -v 1.2.3.4:/ /mnt/nfs

1.2.3.4:/   /mnt/nfs nfs     rw,auto,auto,nolock,intr,tcp,actimeo=1800       0       0

sudo umount /mnt/nfs
```
