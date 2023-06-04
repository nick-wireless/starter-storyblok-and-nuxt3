## Nuxt and Storyblok Starter

- Commit 2. Font Family Integration

  - Headings Main: Application in @layer, in tailwind.config.js file:
    - Applies and overwrites to the HTML tags it is applied to (in this instance headings 1 and 2), with serif fonts following
    - Holding h3 for the sub-heading semantics
    - Currently set to Półtawski Nowy (also good is Unna), while waiting for Opheus Pro
  - Headings Secondary: 'Feature' font, used as the secondary heading font noting in this way:
    - Sets up with fallbacks to sans-serif, tailwind's usual and
    - Currently set to Monseratt, while waiting for 'P22 Underground Pro'
  - General font: per section one above, however set over body & san-serif as fallback

  - Localising Fonts: public, with presets

- Commit 1. Integration on Storyblok

  - Confirm the region in options of Storyblok setup option.
  - Update the STORYBLOK_TOKEN to connect to the required project.
  - Update the API for the home page x 2 (URL and Handle).

  - Start the 'yarn dev-ssl' to access https://.
  - (Noting also, may need to run 'mkcert localhost', see: https://www.storyblok.com/faq/setting-up-https-on-localhost-in-nuxt-3 for more info).
  - Including localised font via TailwindCss - consider updating.
