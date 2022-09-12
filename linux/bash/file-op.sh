#!/bin/bash

f=rel-op.shh

if [ -f $f ]
then
  echo "$f is a file"
fi

if [ -d $f ]
then
  echo "$f is a dir"
fi

if [ -r $f ]
then
  echo "$f is readable"
fi

if [ -w $f ]
then
  echo "$f is writable"
fi

if [ -x $f ]
then
  echo "$f is executable"
fi

if [ -s $f ]
then
  echo "$f size is gt 0"
fi

if [ -e $f ]
then
  echo "$f exists"
fi
