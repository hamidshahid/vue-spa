call npm install
call npm run build

call cd %DEPLOYMENT_TARGET%
for /F "delimts=" %%i in ('dir /b') do (rmdir "%%i" /s /q || del "%%i" /s /q)

xcopy /d %DEPLOYMENT_SOURCE%\dist\* %DEPLOYMENT_TARGET%\dist /s /i
xcopy /d %DEPLOYMENT_SOURCE%\index.html %DEPLOYMENT_TARGET%\index.html* /s /i
xcopy /d %DEPLOYMENT_SOURCE%\server.js %DEPLOYMENT_TARGET%\server.js* /s /i
xcopy /d %DEPLOYMENT_SOURCE%\package.json %DEPLOYMENT_TARGET%\package.json* /s /i
xcopy /d %DEPLOYMENT_SOURCE%\build\web.config %DEPLOYMENT_TARGET%\web.config* /s /i

call npm install --only=production
echo Deployed.