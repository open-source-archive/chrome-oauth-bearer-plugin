PACKAGE_DIR=./bin
PACKAGE_PATH=$(PACKAGE_DIR)/chrome-oauth-bearer-plugin.crx

bin: clean
	npm i --production && mkdir -p $(PACKAGE_DIR) && ./node_modules/.bin/crx pack ./src -o $(PACKAGE_PATH)
clean:
	rm -f $(PACKAGE_PATH)

.PHONY: bin clean
