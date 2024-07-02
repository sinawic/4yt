#!/bin/bash

export CONTAINER_NAME="mongo_mongo-test_1"
export BACKUP_LOCATION="/home/sinawic/4yt/scripts/mongo-backups"
export DATABASE_NAME="test"

export TIMESTAMP=$(date +'%Y%m%d%H%M%S')

docker exec -t ${CONTAINER_NAME} mongodump --authenticationDatabase admin --username root --password example --out /data/backup-${TIMESTAMP}
docker cp ${CONTAINER_NAME}:/data/backup-${TIMESTAMP} ${BACKUP_LOCATION}

cd ${BACKUP_LOCATION}
echo zipping...
zip -r backup-${TIMESTAMP}.zip backup-${TIMESTAMP}
echo scp...
scp -P 2124 `pwd`/backup-${TIMESTAMP}.zip root@3.6.9.369:/root/back
