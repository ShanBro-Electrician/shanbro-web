@echo off
cd /d %~dp0
echo Running Git automation...

git add .
git commit -m "Auto commit: updating new content"
git push

pause