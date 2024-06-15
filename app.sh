#!/bin/bash
# for unix environtment
# use git bash if you are using windows operating system
# [app.sh start] - starting new app instance cl & be
# [app.sh stop]  - stoping all app instance
# [app.sh install]  - install all required packages

COMMAND=$1

if [ "$COMMAND" = "start" ]; then
    echo "Menjalankan project PANTAS..."
    cd backend
    start "" npm run dev
    cd ../client
    start "" npm run dev
    echo "Silahkan cek pada terminal lain..."
elif [ "$COMMAND" = "stop" ]; then
    echo "Menghentikan semua instansi project PANTAS..."
    pkill -f "node"
elif [ "$COMMAND" = "install" ]; then
    echo "Menyiapan project PANTAS..."
    cd backend
    start "" npm install -y
    cd ../client
    start "" npm install -y
else
    echo "Invalid COMMAND. Please provide either 'start' or 'stop'."
fi