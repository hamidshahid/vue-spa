call npm install
call npm run build

call cd %DEPLOYMENT_TARGET%
for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)

xcopy /d %DEPLOYMENT_SOURCE%\dist\* %DEPLOYMENT_TARGET%\dist /s /y
xcopy /d %DEPLOYMENT_SOURCE%\index.html %DEPLOYMENT_TARGET%\index.html* /y
xcopy /d %DEPLOYMENT_SOURCE%\server.js %DEPLOYMENT_TARGET%\server.js* /y
xcopy /d %DEPLOYMENT_SOURCE%\package.json %DEPLOYMENT_TARGET%\package.json*  /y
xcopy /d %DEPLOYMENT_SOURCE%\build\web.config %DEPLOYMENT_TARGET%\web.config* /y

call npm install --only=production
echo "Deployed."