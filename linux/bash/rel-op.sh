#!/bin/bash

a="10"
b="20"

if [ $a -eq $b ]
then
  echo "true"
else
  echo "false"
fi

if [ $a -ne $b ]
then
  echo "true"
else
  echo "false"
fi

if [ $a -gt $b ]
then
  echo "true"
else
  echo "false"
fi

if [ $a -lt $b ]
then
  echo "true"
else
  echo "false"
fi

if [ $a -ge $b ]
then
  echo "true"
else
  echo "false"
fi

if [ $a -le $b ]
then
  echo "true"
else
  echo "false"
fi
