#!/bin/bash

# Function to get current date and time in IST
get_ist_date() {
    TZ="Asia/Kolkata" date '+%Y-%m-%d %H:%M:%S %Z'
}

# Ask user for commit message
read -p "Enter commit message (or press enter to use default): " commit_message

# If commit message is empty, use default message with current IST date and time
if [ -z "$commit_message" ]; then
    commit_message="Commit on $(get_ist_date)"
else
    commit_message="$commit_message - $(get_ist_date)"
fi

# Perform git add and commit
git add .
git commit -m "$commit_message"
git push

echo "Changes committed with message: $commit_message"
