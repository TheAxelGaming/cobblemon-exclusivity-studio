$lines = Get-Content index.html -Encoding UTF8
$startIdx = -1
$endIdx = -1

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '<!-- CDN: JSZip y Lucide Icons -->') {
        $startIdx = $i
        break
    }
}

for ($i = $lines.Length - 1; $i -ge 0; $i--) {
    if ($lines[$i].Trim() -eq '</body>') {
        $endIdx = $i
        break
    }
}

if ($startIdx -ne -1 -and $endIdx -ne -1) {
    $newLines = @()
    if ($startIdx -gt 0) {
        $newLines += $lines[0..($startIdx-1)]
    }
    $newLines += '  <!-- Scripts Locales -->'
    $newLines += '  <script src="js/config.js"></script>'
    $newLines += '  <script src="js/data.js"></script>'
    $newLines += '  <script src="js/generator.js"></script>'
    $newLines += '  <script src="js/ui.js"></script>'
    $newLines += '  <script src="js/app.js"></script>'
    $newLines += $lines[$endIdx..($lines.Length-1)]
    
    [IO.File]::WriteAllLines("index.html", $newLines, [System.Text.Encoding]::UTF8)
    Write-Host "Replaced successfully! $startIdx to $endIdx"
} else {
    Write-Host "Failed to find indices: start=$startIdx end=$endIdx"
}
