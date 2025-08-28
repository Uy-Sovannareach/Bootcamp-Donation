# PowerShell script to fix remaining payment pages ESLint errors

$paymentPages = @(
    "peopleWithDisabilities",
    "preahVihearTemple", 
    "supportKanthaBopha",
    "supportPeopleAffectedByTheConflict",
    "togetherForEric"
)

foreach ($page in $paymentPages) {
    $filePath = "src/app/payment/$page/page.tsx"
    Write-Host "Fixing $filePath..."
    
    # Read file content
    $content = Get-Content $filePath -Raw
    
    # Fix imports - remove unused ones and add required ones
    $content = $content -replace 'import \{ Search, Facebook, Instagram, Twitter, ChevronRight \} from ''lucide-react'';', 'import { Facebook, Instagram, Twitter } from ''lucide-react'';'
    $content = $content -replace 'import React, \{ useState, useEffect \} from ''react'';', 'import React, { useState, useEffect } from ''react'';
import Link from ''next/link'';
import Image from ''next/image'';'
    
    # Fix unused variables
    $content = $content -replace '\{ data, error \}', '{ error }'
    $content = $content -replace '\{ err \}', '{ }'
    
    # Fix img tags to Image components
    $content = $content -replace '<img\s+src="([^"]+)"\s+alt="([^"]*)"\s+className="([^"]*)"[^>]*>', '<Image src="$1" alt="$2" width={128} height={128} className="$3" />'
    $content = $content -replace '<img\s+src="([^"]+)"\s+alt="([^"]*)"\s+className="h-20 w-20 rounded-full"[^>]*>', '<Image src="$1" alt="$2" width={80} height={80} className="rounded-full" />'
    $content = $content -replace '<img\s+src="([^"]+)"\s+alt="([^"]*)"\s+className="h-10 w-10 rounded-full text-emerald-500"[^>]*>', '<Image src="$1" alt="$2" width={40} height={40} className="rounded-full text-emerald-500" />'
    
    # Fix anchor tags to Link components
    $content = $content -replace '<a\s+href="([^"]*)"\s+className="([^"]*)"[^>]*>([^<]*)</a>', '<Link href="$1" className="$2">$3</Link>'
    
    # Write back to file
    Set-Content $filePath $content -NoNewline
    
    Write-Host "Fixed $filePath"
}

Write-Host "All payment pages fixed!"
