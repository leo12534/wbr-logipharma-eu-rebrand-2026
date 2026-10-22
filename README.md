# LogiPharma 2027: Homepage Rebrand

A portfolio copy of the [LogiPharma EU 2027 homepage](https://logipharmaeu.wbresearch.com/) that I rebranded in WBR's in-house CMS (ECO Admin). For this copy I moved it onto the Bootstrap 5 ECO2 template and upgraded it to Bootstrap 5.3.8.

The page is static. Links point to `#`, and there are no forms or tracking scripts.

## What's mine and what isn't

On the live site, the CMS controls everything outside the content containers inside `#sb-page-content`: the header, nav, footer and their markup and classes. Only the content area was mine to build.

This copy shows the content area (`#eco-content`) inside the **Bootstrap 5 ECO2 template** that my colleague [Joshua Vining](https://github.com/jvining) is building for WBR event sites. That template supplies the shell (`#eco-header`, `#eco-primary-nav`, `#eco-footer`, the cross-event modal), restyled with the LogiPharma brand.

| Area | Source |
| --- | --- |
| `#eco-content` (all homepage sections) | My CMS build, converted from Bootstrap 4 to 5 |
| Header, nav, footer layout | Bootstrap 5 ECO2 template (Joshua Vining) |
| `css/style.css` | Bootstrap 5 ECO2 template (Joshua Vining), with my primary nav restructure. Combines the template's `base.css` and `logo-dual-img.css`. |
| `css/logi.css`, `css/event.css` | Mine |
| `js/scripts.js` | Bootstrap 5 ECO2 template: on-scroll nav, footer sponsor carousel |
| `js/event.js` | Mine: homepage sliders, map animation, testimonial heights |

## CSS layers

The stylesheets follow the same layers the CMS uses:

1. `css/style.css`: template base styles and nav overrides, shared by every event (the CMS's `style.css`)
2. `css/logi.css`: the LOGI brand master, shared by every LOGI event (LogiPharma EU, Asia, US, Connect, LogiMed and others). Ported from the CMS brand sheet to the template's `#eco-*` selectors. It also holds the homepage section styles, which the CMS build kept in inline `<style>` blocks.
3. `css/event.css`: variables for LogiPharma EU 2027 only (colours, gradients, matrix texture), the CMS's per-event `1006035.css`. Styling another LOGI event means swapping this file.

## Bootstrap 4 to 5 changes

- Utility classes: `ml-*`/`mr-*`/`pl-*`/`pr-*` became `ms-*`/`me-*`/`ps-*`/`pe-*`; `font-weight-*` became `fw-*`; `no-gutters` became `g-0`; `btn-block` became `w-100`; `float-right` became `float-end`
- `embed-responsive` became `ratio ratio-16x9`
- `data-toggle`/`data-target`/`data-parent`/`data-slide` became `data-bs-*`
- Carousel indicators use `<button>` elements instead of an `<ol>`
- The testimonials carousel no longer uses `data-ride` + `data-interval="false"`. In Bootstrap 5 that combination cycles slides continuously, so the attributes are omitted.
- Negative margins (`mt-n2`, `mt-n3`, `mt-md-n4`) are defined in `logi.css`, because Bootstrap 5 doesn't include them by default
- Tab triggers and carousel controls are `<button>` elements instead of anchors without an `href`
- Inline styles were moved to classes, using Bootstrap helpers where they exist (`opacity-25`, `object-fit-cover`)

## Fonts and assets

- The live site loads its fonts from a domain-locked Typekit kit, so this copy uses the same faces from Google Fonts: Space Grotesk and Roboto
- Page photography is stored in the repo. Sponsor and attendee logos and the hero poster are shared with my other portfolio sites and load from [wbr-eco2-template-bs5](https://github.com/leo12534/wbr-eco2-template-bs5) through jsDelivr, pinned to the `assets-v1` tag. The footer carousel shows 25 sponsors instead of the live site's 127.
- The hero video streams from the live site. A backup copy is in the template repo under `video/shared/`.
- Bootstrap 5.3.8, jQuery 3.7.1, Slick 1.8.1 and Font Awesome Free 7.3.1 load from cdnjs, pinned to exact versions with SRI hashes

## Running locally

Any static server works:

```sh
python3 -m http.server
```

Then open <http://localhost:8000>. Opening `index.html` straight from disk won't work for the YouTube embed: YouTube shows "Error 153" when a page has no web address.

---

LogiPharma and WBR names, logos, photography and copy belong to Worldwide Business Research. This copy is shown here as a portfolio piece.
