echo "haha"
current=`git symbolic-ref --short -q HEAD`
mm="master"
if [ $mm = $current ]
then
    # 在dev里但是不再release
    result=`git cherry -v release dev`
    echo "length=${#result}"
    if [ -z "$result" ]
    then
        echo "pass"
        exit 0
    else
        exit 1
    fi
else
    echo "pass all"
    exit 0 
fi
exit 1

DOC_END