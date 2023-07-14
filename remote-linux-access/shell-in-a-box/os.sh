
sudo apt install shellinabox
sudo nano /etc/default/shellinabox

# Should shellinaboxd start automatically
SHELLINABOX_DAEMON_START=1

# TCP port that shellinboxd's webserver listens on
SHELLINABOX_PORT=6175

# Parameters that are managed by the system and usually should not need
# changing:
# SHELLINABOX_DATADIR=/var/lib/shellinabox
# SHELLINABOX_USER=shellinabox
# SHELLINABOX_GROUP=shellinabox


# if you want to restrict access to shellinaboxd from localhost only
OPTS="-s /:SSH:1.1.1.9 --localhost-only"

sudo systemctl restart shellinabox
sudo systemctl status shellinabox

sudo netstat -nap | grep shellinabox