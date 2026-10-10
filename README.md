# Alperen Yarimbas — Portfolio & Blog

**Live site:** https://alperenyrmbs.github.io/  
**Blog:** https://alperenyrmbs.github.io/blog/

A static Jekyll site for my education, coursework, and learning notes. GitHub Pages builds and publishes it through the existing Jekyll workflow.

## Shared structure

| File or folder | Purpose |
| --- | --- |
| `_config.yml` | Site settings, URLs, publishing defaults |
| `_data/profile.yml` | Name, education, LinkedIn, and GitHub links |
| `_data/skills.json`, `_data/projects.json` | Skills and project content |
| `_layouts/default.html` | Shared page shell |
| `_layouts/post.html` | Shared article layout |
| `_includes/` | Shared navigation, footer, metadata, and post cards |
| `assets/css/style.css` | Central stylesheet |
| `assets/js/main.js` | Central navigation and blog-search behavior |
| `index.html` | Homepage content |
| `blog/index.html` | Automatically generated post listing |
| `_posts/` | Published Markdown posts; create this folder with your first post |
| `_drafts/` | Unpublished drafts; visible in this public repository |
| `templates/blog-post.md` | Copyable writing template, excluded from the live site |
| `docs/BLOG_GUIDE_TR.md` | Turkish writing and publishing guide |

## Writing a post

Create `_posts/YYYY-MM-DD-short-title.md`, copy the front matter and structure from `templates/blog-post.md`, and write in Markdown. Commit to `main` to publish. Use today's date or an earlier date; future-dated posts are not published. The blog and homepage update automatically.

Drafts are not published to the website, but all committed files in this public repository can be read on GitHub. Keep private material outside the repository.

## Local preview

A Jekyll build is needed to render templates. Opening source index.html directly does not render the complete site. Use the deployed GitHub Pages site or a compatible local Jekyll environment for preview.
