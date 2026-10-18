# CLAUDE.md

First version of the personal website, kept online as an archive at [v1.leicaflorianrobert.dev](https://v1.leicaflorianrobert.dev): a static Vue 3 single page application; the contact form sends emails with EmailJS from the browser. `README.md` covers how to run and build it. The current site is v2; v3 is in `lfr-v3`.

## Language

- Code, comments, `README.md`, this file and commit messages are in English.
- The documentation in the vault is in Italian.

## Documentation

The documentation lives in the Obsidian vault on Google Drive, not in this repository (apart from `README.md`, `CHANGELOG.md` if present, and this file):

`/Users/florianleica/Library/CloudStorage/GoogleDrive-florian.leica@gmail.com/Il mio Drive/MyVault/Projects/Leica Florian Robert v1`

- Start from `_index.md`. The folder follows the vault standard (`MyVault/Template/Standard dei progetti.md`): `01 - Documentazione funzionale` (what the user sees), `02 - Documentazione tecnica` (how it works), `03 - Branding/`, `ToDo/` (one folder per item).
- The infrastructure (Coolify, Droplet, shared MySQL, DNS) is documented for all projects in `MyVault/Infrastruttura`.
- Notes are in Italian. Rules (re-read the standard before writing): no `#` title at the top except in `_index` notes; at the top of the text only the `←` link back to the folder's `_index`; links to nearby notes in the properties (`funzioni`, `tecnica`), quoted, with the full path when the name repeats in the vault; a new note is added to its folder's `_index`. Edit existing notes by replacement and re-read them right before. Never put secrets in the notes. `python3 MyVault/_scripts/vault-check.py "Leica Florian Robert v1"` checks the folder.
- **ToDo items**: `brainstorming` writes `ToDo/_Opened/<Title>/Analisi.md` and `writing-plans` writes `ToDo/_Opened/<Title>/Piano.md`, from `MyVault/Template/Template - Analisi.md` and `Template - Piano d'azione.md`, in Italian; the `←` line points to `[[Projects/Leica Florian Robert v1/ToDo/_index|ToDo]]`. Do not use `docs/superpowers/`. A finished item moves to `_Done` only after the owner's check (rules in `ToDo/_index.md`).
- "Update the documentation" means the vault **and** `README.md`.
- To read the vault without prompts, add `Projects/Leica Florian Robert v1`, `Infrastruttura` and `Template` to `permissions.additionalDirectories` in `.claude/settings.local.json` (personal, not versioned).
- Vault notes are not in git and are never committed. If the vault can't be read (e.g. in a cloud session), stop and say so.
