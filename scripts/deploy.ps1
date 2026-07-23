#!/usr/bin/env pwsh
# Build and push to GitHub
$ErrorActionPreference = "Stop"

Write-Host "Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host "`nCommitting changes..." -ForegroundColor Cyan
git add -A
$changed = git status --porcelain
if ($changed) {
    git commit -m "update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed. Try again later." -ForegroundColor Red
    exit 1
}

Write-Host "`nDone! CloudBase will deploy automatically." -ForegroundColor Green
