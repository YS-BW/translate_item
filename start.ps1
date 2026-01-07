$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$venv = Join-Path $root ".venv"

if (!(Test-Path $venv)) {
  python -m venv $venv
}

& "$venv\Scripts\python.exe" -m pip install -r "$root\backend\requirements.txt"

$pm = if (Get-Command pnpm -ErrorAction SilentlyContinue) { "pnpm" } elseif (Get-Command yarn -ErrorAction SilentlyContinue) { "yarn" } else { "npm" }

Push-Location "$root\front"
if ($pm -eq "pnpm") {
  & pnpm install
  Start-Process -WorkingDirectory "$root\front" -FilePath "pnpm" -ArgumentList "run","dev"
} elseif ($pm -eq "yarn") {
  & yarn install
  Start-Process -WorkingDirectory "$root\front" -FilePath "yarn" -ArgumentList "dev"
} else {
  & npm install
  Start-Process -WorkingDirectory "$root\front" -FilePath "npm" -ArgumentList "run","dev"
}
Pop-Location

Start-Process -WorkingDirectory "$root\backend" -FilePath "$venv\Scripts\python.exe" -ArgumentList "-m","uvicorn","app.main:app","--reload"

