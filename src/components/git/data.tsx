let data = [
  {
    name: `git init`,
    comment: `//Initialize and existing directory as a GIT one.`,
  },
  {
    name: `git clone https://github.com/repourl`,
    comment: `//Clone (donwload) a repository that already exists on GitHub, including al the files, branches and commits.`,
  },
  {
    name: `git remote add origin https://github.com/repourl`,
    comment: `//After usin git init, link the local repository to an empty GitHub one.`,
  },
  {
    name: `git config --global user.name "myName"`,
    comment: `//Set username.`,
  },
  {
    name: `git config --global user.email "email@mail.com"`,
    comment: `//Set email.`,
  },
  {
    name: `git branch`,
    comment: `//List all of the branches in your repository.`,
  },
  {
    name: `git branch branchName`,
    comment: `//Make a new branch named branchName.`,
  },
  {
    name: `git checkout -b branchName`,
    comment: `//Make a new branch named branchName and/or switch to it.`,
  },
  {
    name: `git branch -d branchName`,
    comment: `//Deletes the specified branch.`,
  },
  {
    name: `git status`,
    comment: `//Show modified files in current directory.`,
  },
  {
    name: `git add file/location/name`,
    comment: `//Add the current state of the file to the commit stage.`,
  },
  {
    name: `git add *`,
    comment: `//Add all modified files to the commit stage.`,
  },
  {
    name: `git commit -m "commit comment" `,
    comment: `//Commit your staged content with a commit comment message attached.`,
  },
  {
    name: `git pull origin branchName `,
    comment: `//Update the current local branch with new commits from the corresponding remote branch on GitHub. Same as git fetch, then git merge.`,
  },
  {
    name: `git push origin branchName `,
    comment: `//Upload all local branch commits to GitHub.`,
  },
  {
    name: `git fetch`,
    comment: `//Synchronise your local repo with the remote one on GitHub.`,
  },
  {
    name: `git merge branchName`,
    comment: `//Merges branchName into the current branch.`,
  },
  {
    name: `git reset`,
    comment: `//Reset the staging area.`,
  },
  {
    name: `git reset --hard`,
    comment: `//Reset both staging area and overwrites content of files to what they were in the previous commit`,
  },
  {
    name: `git rever commitCode`,
    comment: `//Makes a new commit undoing all changes to the state before the commitCode commit`,
  },
  {
    name: `git stash`,
    comment: `//All current changer are moved to into stash for further use and files are reverted to the last commit.`,
  },
];

export default data;
