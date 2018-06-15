# 在dev里但是不再release
result=`git cherry -v release dev`
echo "length=${#result}"