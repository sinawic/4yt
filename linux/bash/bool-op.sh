#!/bin/bash

a=10
b=20

if [ $a -lt $b -o $b -gt 100 ]
then
  echo "true"
fi


if [ $a -lt $b -a $b -gt 100 ]
then
  echo "true"
fi
