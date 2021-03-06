current=`git symbolic-ref --short -q HEAD`
master="master"
if [ $master = $current ]
then
    echo "push前检查commits是否已经在dev分支中"
    # 在master里但是不在dev
    result=`git cherry -v dev master`
    commits=`git cherry -v`
    for line in "${commits[@]}"
    do
        notInPreLine=`echo $result | grep "$line" | wc -c`
        if [[ 0 -lt $notInPreLine ]]
            then 
            notInPre=$notInPre$line
        fi
    done
    if [ -z "$notInPre" ]
    then
        echo "pass dev"
    else
        echo >&2 "${notInPre}"
        echo >&2 "以上commit请先提交到dev分支，验证通过后再合并到master分支"
        exit 1
    fi

    echo "push前检查commits是否已经在release分支中"
    # 在master里但是不在release
    result=`git cherry -v release master`
    commits=`git cherry -v`
    for line in "${commits[@]}"
    do
        notInPreLine=`echo $result | grep "$line" | wc -c`
        if [[ 0 -lt $notInPreLine ]]
            then 
            notInPre=$notInPre$line
        fi
    done
    if [ -z "$notInPre" ]
    then
        echo "pass release"
    else
        echo >&2 "${notInPre}"
        echo >&2 "以上commit请先提交到release分支，验证通过后再合并到master分支"
        exit 1
    fi

    echo "push前检查commits是否已经在stage分支中"
    # 在master里但是不在stage
    result=`git cherry -v stage master`
    commits=`git cherry -v`
    for line in "${commits[@]}"
    do
        notInPreLine=`echo $result | grep "$line" | wc -c`
        if [[ 0 -lt $notInPreLine ]]
            then 
            notInPre=$notInPre$line
        fi
    done
    if [ -z "$notInPre" ]
    then
        echo "pass stage"
    else
        echo >&2 "${notInPre}"
        echo >&2 "以上commit请先提交到stage分支，验证通过后再合并到master分支"
        exit 1
    fi
fi
exit 0