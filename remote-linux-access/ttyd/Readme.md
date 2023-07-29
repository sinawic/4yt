
https://github.com/tsl0922/ttyd
https://tsl0922.github.io/ttyd/


wget https://github.com/tsl0922/ttyd/releases/download/1.7.3/ttyd.x86_64
chmod +x ttyd.x86_64


./ttyd.x86_64 -o -u 1000 -g 1000 -B -p 2525 -m 1 -c user:pass htop
./ttyd.x86_64 -W -o -u 0 -g 0 -B -p 2525 -m 1 -c user:pass -b /ttyd bash

