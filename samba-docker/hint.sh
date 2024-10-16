
# required in windows to mount smb share
sudo apt install cifs-utils

# mount smb using cli
sudo mount -t cifs -o username=alice //server_addr/AliceShare $PWD/mounted/

# unmount using cli
sudo umount $PWD/mounted/
