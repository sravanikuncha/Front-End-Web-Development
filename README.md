<<<<<<< Updated upstream
# Front-End-Web-Development
Front End Web Developmenr Projects
=======
git config --list shores teh username,email and origin
git status
git add
git commit
git push
git pull
git diff
git log
git fetch

rm -rf //remove recursively

local repository setting

1)create a folder where that could be your repopsitory name in rmeote
2)git init , converts the folder into repository i.e., basically repository creation in local and also the same in git we need to creaete repository and give name
3)git config user.name 'sravani' in further to know who made commit because git is a central repositories many people use it  
4)git config user.email 'emailname'
5)git remote add origin url.git // here url is same as url which comes after repository gets created in rmeote .
local containing link to rmeote repository
it can be https (where verification done by url), ssh (shh-agent)
through ssh agent
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

SSH (secure shell protocol)
-to connect to git we can do via SSH and update files or access git repositories
we use the key to connect , which we generate called SSH keys where public and private keys gets generated and public key we need to keep in GT HUB

- we can concept of passphrase extra layer on ssh key for protection
  so whenever we use key we have to enter passphrase , if we dont want to use passphrase everytime we add it to ssh agent
  find existing keys present or not
  $ ls -al ~/.ssh
  or else genrate using above

  -adding to ssh-agent
  first ssh-agent should be runnign done manually or wriet code in .bashrc or .profile so whenever bash opens these files run automatically
  eval `ssh-agent` and then add after starting so whenever we do any changes and push no nee dto add passphrase again

  6)git push -u origin branchname we are pushing here u is username origin means remote is origin and branchname self explanatory
  7)now go and check in Remote repository that local branch/newly added code is pushed and clearly visible or not

TEAM MEMBER
1)Other repository
for suppose mine , i will just simply clone at some folder path, so now that repository comes and sits in my the system
and we add and push but we get 403 error forbidden which means ,
some random team member cannot push code to our repsoitory /owners repository

2. so for this we will give permissions taht they can push , which cna be done under collaborators

forking
PR
rebasing

Merge pull request :
merge by saving teh comit
squash and merge -merges simply without adding commits data
rebase and merge
>>>>>>> Stashed changes
