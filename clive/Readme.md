
https://github.com/koki-develop/clive


wget 'https://github.com/koki-develop/clive/releases/download/v0.12.7/clive_Linux_x86_64.tar.gz'
tar -zxvf clive_Linux_x86_64.tar.gz
sudo cp ./clive /usr/local/bin/clive


wget 'https://github.com/tsl0922/ttyd/releases/download/1.7.3/ttyd.x86_64'
chmod +x ./ttyd.x86_64
sudo cp ./ttyd.x86_64 /usr/local/bin/ttyd
ttyd --version

clive init -c clive.yml
clive validate -c clive.yml
clive start -c clive.yml


