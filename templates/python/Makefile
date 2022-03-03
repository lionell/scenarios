dir := $(shell basename $(shell pwd))

deploy:
	@gcloud functions deploy \
		$(dir) \
		--region us-east1 \
		--entry-point exercise \
		--runtime python39 \
		--memory 128 \
		--max-instances 1 \
		--min-instances 0 \
		--allow-unauthenticated \
		--trigger-http
.PHONY: deploy
