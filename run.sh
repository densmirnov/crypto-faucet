#!/bin/bash

# export NODE_ENV=production

redis-server > /dev/null 2>&1 &
cd ~/ark-faucet;
forever start -u ark -a -l /home/ark/ark-faucet/app.log --pidFile /home/ark/ark-faucet/app.pid -m 1 app.js &> /dev/null

