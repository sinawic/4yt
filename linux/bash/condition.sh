#!/bin/bash

a=10
b=20

if [ $a == $b ]
then
  echo "a is eq to b"
fi

if [ $a != $b ]
then
  echo "a is not eq to b"
fi


if [ $a == $b ]
then
  echo "a is eq to b"
else
  echo "a is not eq to b"
fi


if [ $a -gt $b ]
then
  echo "a is gt b"
elif [ $a == $b ]
then
  echo "a is eq to b"
else
  echo "a is lt b"
fi
