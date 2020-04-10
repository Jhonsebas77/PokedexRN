kill -9 $(lsof -i:8081) &> /dev/null
adb reconnect &> /dev/null
react-native start --reset-cache