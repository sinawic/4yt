#!/bin/bash

a="abc"
b="efg"

if [ $a == $b ]
then
  echo "true"
fi

if [ $a != $b ]
then
  echo "true"
fi

if [ -z $a ]
then
  echo "zero"
fi

if [ -n $a ]
then
  echo "not zero"
fi
