# otherwise Jekyll doesn't re-load users.json
rm -fr _site

bundle exec jekyll serve --future --incremental --safe --strict_front_matter \
  --host=0.0.0.0 --port=4002 \
  --livereload --livereload-port=40002 \
  --watch \
  --limit_posts 150000 \
  --open-url