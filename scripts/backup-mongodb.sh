#!/bin/bash

export CONTAINER_NAME="mongo_mongo-test_1"
export BACKUP_LOCATION="/home/sinawic/scripts/mongo-backups"
export DATABASE_NAME="test"

export TIMESTAMP=$(date +'%Y%m%d%H%M%S')

docker exec -t ${CONTAINER_NAME} mongodump --authenticationDatabase admin --username root --password example --out /data/backup-${TIMESTAMP}
docker cp ${CONTAINER_NAME}:/data/backup-${TIMESTAMP} ${BACKUP_LOCATION}
