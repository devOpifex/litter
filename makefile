check: document
	Rscript -e "devtools::check()"

document: bundle
	Rscript -e "devtools::document()"

install: document
	Rscript -e "devtools::install()"

bundle:
	Rscript -e "packer::bundle()"

bundle_dev:
	Rscript -e "packer::bundle_dev()"

run: document bundle_dev
	Rscript test.R

