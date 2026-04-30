let systemConfig = {
    systemName: "NIDS v1.0",
    version: 1.0,
    isActive: true,
    maxAttempts: 3,
    blockedIPs: [],
    alertlog: []
}

const threatDatabase = {
    PortScan : {
        severity: "HIGH",
        port: 0,
        description: "Port telah dilakukan scanning",
        autoBlock: false
    },
    BruteForce: {
        severity: "CRITICAL",
        port: 22,
        description: "Terdapat penyerangan secara brutal",
        autoBlock: true
    },
    SQLInjection: {
        severity: "CRITICAL",
        port: 3306,
        description: "Terdapat script injeksi SQL",
        autoBlock: true
    },
    DDoS: {
        severity: "HIGH",
        port: 80,
        description: "Penyerangan DDoS",
        autoBlock: false
    }
}

function displayBanner() {
    console.log(`
╔════════════════════════════════════════╗
║   "NETWORK INTRUSION DETECTION SYSTEM" ║
║   ${systemConfig.systemName} | Version ${systemConfig.version}                ║
║   Status: ACTIVE                       ║
╚════════════════════════════════════════╝
`)
}

displayBanner()