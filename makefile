check: document
	Rscript -e "devtools::check()"

document: bundle
	Rscript -e "devtools::document()"

bundle:
	Rscript -e "packer::bundle()"

bundle_dev:
	Rscript -e "packer::bundle_dev()"

run: document bundle_dev
	Rscript test.R

