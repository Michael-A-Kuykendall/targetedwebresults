## 🔧 PUNCH Quick Commands
**Instant Analysis:** `punch go .` | `punch quality .` | `punch stats` | Zero setup required.

---

# ContextLite Configuration

## Project Setup
- **Project**: targetedwebresults
- **Port**: 8102
- **Database**: C:\Users\micha\repos\targetedwebresults\contextlite.db
- **Config**: C:\Users\micha\repos\targetedwebresults\contextlite-config.yaml

## Quick Commands
```bash
# Start ContextLite for this project
contextlite --config C:\Users\micha\repos\targetedwebresults\contextlite-config.yaml --port 8102

# Connect via CLI
contextlite-cli connect targetedwebresults

# Query this project's context
contextlite-cli query targetedwebresults "your search terms"
```

## Integration Status
- Port assignment: ✅ Standardized
- Database: 🆕 Ready for initialization
- Configuration: ✅ Automated
- Discovery: ✅ Enabled