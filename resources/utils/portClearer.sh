#!/bin/bash
# Kill processes running on ports 3000 to 3015

echo "Killing processes on ports."
for port in {3000..3015}
do
    lsof -ti:$port | xargs kill -9 2>/dev/null
done
echo "Processes killed."
