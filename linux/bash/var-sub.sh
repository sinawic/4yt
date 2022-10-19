#!/bin/bash

VAR=test

echo -e "value for VAR is: ${VAR:+random} \t -substituted"

echo -e "value for VAR is: ${VAR:-random} \t\t -original"

echo -e "value for VAR is: ${TEST:=random} \t -substituted"

echo -e "value for TEST is: $TEST \t -substituted"