VERSION="$(cat VERSION)"

echo "
,,  ,, ,,  ,, .,  ,,  ,  ,,  ,, ,,  ,, ,,  ,, .,  ,,  ,  ,,  ,, ,,  ,, ,,  ,,  
,,,  ,, ,,  ,, .,  ,,  ,  ,,  ,, ,,  ,, ,,  ,, .,  ,,  ,  ,,  ,, ,,  ,, ,,  ,   
,  ,,  ,  ,,  ,, ,,  ,, ,  ,  ,,  ,  ,,  ,, ,,  ,, ,,  ,,  ,  ,,  ,  ,,  ,, ,
,,, .,, ,,  ,, .,  .,IIIIIIIIII ,, .,, ,,  ,, .,  ,,  ,  ,,  ,, ,, .,, ,,  ,,  
,,, .,, ,,  ,, .,  IIIIIIIIIII. ,, .,,.,,  ,, .,  ,,..,. .,  ,, ,, .,, ,,  ,,  
,  ,,  ,  ,,  ,, ,IIIIII.,. ,,,.,  ,, .III,,  ,, ,,  ,III,. ,,  ,  ,,  ,  ,,,  
,,, .,, ,,  ,, .,.IIIII,  ,,  ,, ,, .,,III  ,, .,  ,,,III ,,  ,, ,, .,, ,,  ,  
,  ,,  ,  ,,  ,, IIIIII ,,. ,,  , IIIIIIIIIIIII, IIIIIIIIIIIII  ,  ,,  ,  ,,, 
,,, .,, ,,  ,, .,IIIIII,  ,,  ,, ,IIIIIIIIIIIII.,IIIIIIIIIIIII,, ,, .,, ,,  ,  
,  ,,  ,  ,,  ,, IIIIII ,,. ,,  , IIIIIIIIIIIII, IIIIIIIIIIIII  ,  ,,  ,  ,,, 
,,, .,, ,,  ,, .,.IIIII,  ,,  ,, ,, .,,III  ,, .,  ,,,III ,,  ,, ,, .,, ,,  ,  
, .,, ., .,, .,, ,IIIIII,, ., ,.,  ,, .III,, . , ,,. ,III, ., ..  ., .. . , .
,,, .,, ,,  ,, .,  IIIIIIIIIIII, ,, .,, ,.  ,, .,  ,, ., ,,  ,  ,, . , , , ,,
,,,  ,, ,,  ,, .,  , IIIIIIIIII, ,,  ,, ,,  ,, ., , , , version $VERSION
,  ,,  ,  ,,  ,, ,,  ,, ,,. ,,  ,  ,,  ,  ,,  ,, ,,  ,, ,,. ,,  ,  ,,  ,  ,,, 
,,, .,, ,,  ,, .,  ,,  ,  ,,  ,, ,, .,, ,,  ,, .,  ,,  ,  ,,  ,, ,, .,, ,,  ,
,,, .,, ,,  ,, .,  ,, .,  ,,  ,, ,, .,, ,,  ,, .,  ,, .,  ,,  ,, ,, .,, ,,  ,"

printf "\n\t\t\e[1m Welcome to \e[95mNYU\e[97m’s \e[34mC++\e[97m coding environment\n\n\e[1;3;2m"
echo "- Run './run_sample.sh' to run hello world C++ sample."
echo "- Run 'make help' for help"
printf "\e[0m\n"
echo "You've the following editors installed:"
echo "- nano"
echo "- vim"
echo "- emacs"
echo
echo "Use '<editor> <filename>' to open a file in an editor."
echo