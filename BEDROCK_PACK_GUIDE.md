# Bedrock Pack Structure and Troubleshooting Guide

## Overview
This repository contains two separate Minecraft Bedrock Edition addons:
- **T62_B**: Original T62 Tank addon by bmheades
- **WCA1.1.5**: World Conflict addon by 4uXoH featuring various weapons and vehicles

## Pack Structure

### T62_B Addon Structure
```
T62_B/
├── manifest.json          # Pack metadata and dependencies
├── pack_icon.png          # Pack icon
├── entities/             # Entity behavior definitions
│   ├── t62_behavior.json         # Main T62 tank entity (bm:t62)
│   ├── machine_gun_bullet_behavior.json # Machine gun projectile (bm:machine_gun_bullet)
│   ├── tank_shell_behavior.json  # Tank shell projectile (bm:tank_shell)
│   └── player.json              # Player entity modifications
├── animation_controllers/  # Animation controllers
├── functions/             # mcfunction files
└── recipes/              # Crafting recipes
```

### WCA1.1.5 Addon Structure
```
WCA1.1.5/
├── manifest.json          # Pack metadata and dependencies
├── pack_icon.png          # Pack icon
├── scripts/              # JavaScript behavior scripts
│   ├── main.js            # Main script entry point
│   ├── ammo_*.js          # Ammunition reload systems
│   ├── bulletDamage.js    # Bullet damage handling
│   └── eventBlocks.js     # Custom block behaviors
├── entities/             # Entity behavior definitions
│   ├── player.json        # Extensive player modifications
│   ├── t64bv.json         # T-64BV tank (ussr:t64bv)
│   ├── vehicle/           # Vehicle entities
│   └── bullet/            # Projectile entities
├── items/                # Item definitions
│   ├── guns/              # Weapon definitions
│   ├── ammo/              # Ammunition items
│   └── vehicle/           # Vehicle-related items
├── animations/           # Animation files
├── animation_controllers/ # Animation controllers
├── blocks/               # Custom block definitions
├── dialogue/             # NPC dialogue
└── functions/            # mcfunction files
```

## Namespace Usage and Conflict Prevention

### T62_B Namespaces
- **Entities**: `bm:` prefix (e.g., `bm:t62`, `bm:machine_gun_bullet`, `bm:tank_shell`)
- **Sounds**: Standard minecraft sounds

### WCA1.1.5 Namespaces
- **Primary**: `addon:` prefix (most common namespace)
- **USSR items**: `ussr:` prefix (e.g., `ussr:t64bv`, `ussr:t64bv_shell`)
- **Sounds**: `addon.patron` and other custom sounds

### Conflict Resolution
The addons use different namespace prefixes, which prevents most conflicts:
- T62_B uses `bm:` prefix exclusively
- WCA1.1.5 uses `addon:` and `ussr:` prefixes
- Both modify the `minecraft:player` entity, but this is handled by Minecraft's overlay system

## Format Version Standardization

All files have been updated to use format version `1.16.0` for compatibility:
- **Manifest files**: Updated to `"format_version": "1.16.0"`
- **Entity files**: Updated to `"format_version": "1.16.0"`
- **Item files**: Updated to `"format_version": "1.16.0"`

## Common Troubleshooting Issues

### 1. Content Log Errors
**Problem**: "Unknown identifier" errors in content log
**Solution**: Check namespace prefixes and ensure identifiers match between behavior and resource packs

### 2. Player Entity Conflicts
**Problem**: Multiple addons modifying the player entity
**Solution**: 
- Both addons can modify the player entity simultaneously
- Minecraft overlays the modifications
- Ensure property names don't conflict between addons

### 3. Missing Dependencies
**Problem**: Scripts not working due to missing dependencies
**Solution**: Verify manifest.json includes required modules:
```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.15.0"
    },
    {
        "module_name": "@minecraft/server-ui",
        "version": "1.3.0"
    }
]
```

### 4. Format Version Incompatibility
**Problem**: Content not loading due to format version mismatch
**Solution**: Ensure all JSON files use compatible format versions (standardized to 1.16.0)

### 5. Script Import Errors
**Problem**: JavaScript modules not found
**Solution**: Check main.js imports match actual file names:
```javascript
import "./ammo_ak74.js";
import "./ammo_m16.js";
// etc.
```

### 6. Sound Event Conflicts
**Problem**: Custom sounds not playing or conflicting
**Solution**: 
- Use unique sound identifiers per addon
- WCA uses `addon.patron` for reload sounds
- T62 uses standard minecraft sounds

## Best Practices

### 1. Namespace Convention
- Use consistent prefixes for all identifiers within an addon
- Choose unique prefixes that won't conflict with other addons
- Document your namespace usage

### 2. File Organization
- Keep related files grouped in appropriate folders
- Use descriptive file names
- Maintain consistent naming conventions

### 3. Version Management
- Keep format_version consistent across all files in a pack
- Update version numbers when making significant changes
- Test compatibility with target Minecraft versions

### 4. Error Handling
- Check content logs regularly during development
- Validate JSON syntax before deploying
- Test addons individually and together

## Compatibility Notes

- **T62_B**: Designed for older Minecraft versions, updated for modern compatibility
- **WCA1.1.5**: Requires script API support (Minecraft 1.19.70+)
- **Combined Usage**: Both addons can run simultaneously without conflicts due to namespace separation

## Resources

- [Minecraft Bedrock Documentation](https://docs.microsoft.com/en-us/minecraft/creator/)
- [Script API Reference](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/)
- [Behavior Pack Format](https://docs.microsoft.com/en-us/minecraft/creator/reference/content/behaviorpackreference/)