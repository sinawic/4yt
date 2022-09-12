#!/bin/bash
NAME="bash"
unset NAME
echo "hello $NAME"

echo current PID: $$

echo filename: $0

echo first arg: $1

echo second arg: $2

echo totall num of args: $#

echo args passed: $*

exit 1
