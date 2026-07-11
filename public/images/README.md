# Images

Placeholder images ship with the project so it builds and runs immediately.
**Replace every file here with real photos of your own work before launch.**

## Files to replace

| File | Used on | What to shoot |
|---|---|---|
| `hero-handyman-work.jpg` | Home hero | Your best photo: a clean, finished result in a modern interior, or hands-on detail work. No staged stock people or hard hats. |
| `home-repair-detail.jpg` | Gallery | Close-up of a neat repair (caulk line, patched wall, trim joint). |
| `drywall-repair-before.jpg` | Gallery (before/after) | Damaged wall **before** the patch — same angle as the "after". |
| `drywall-repair-after.jpg` | Gallery (before/after) | Same wall **after** patching and paint — same angle, same lighting. |
| `door-installation.jpg` | Gallery | Installed/adjusted door with new hardware. |
| `laminate-flooring.jpg` | Gallery | Finished floor with clean transitions and baseboards. |
| `furniture-assembly.jpg` | Gallery | Assembled furniture, styled and tidy. |
| `property-maintenance.jpg` | Home + Property Maintenance | Refreshed rental unit after a turnover. |
| `owner-photo.jpg` | Home + About | A natural, friendly photo of the owner (4:5 portrait). |

## Recommendations

- **Format:** export as WebP or AVIF where possible (Next.js also optimizes JPG/PNG automatically, so JPG is fine to start).
- **Sizes:** hero ~1600×1200px; gallery ~1200×900px (4:3); owner portrait ~800×1000px (4:5). Keep files under ~400 KB.
- **Before/after:** shoot both from the same position, height and lighting. Take the "before" photo the moment you arrive — you can't recreate it later.
- **Privacy:** never show clients' names, mail, documents, family photos, addresses or anything identifying. Crop or reshoot rather than blur.
- **Permission:** ask the client (in writing — a text message is fine) before publishing photos of their property. For rentals, ask the owner/manager, not only the tenant.
- Keep the filenames the same and you won't need to touch any code. To add more gallery photos, drop files here and add entries in `src/config/gallery.ts`.
